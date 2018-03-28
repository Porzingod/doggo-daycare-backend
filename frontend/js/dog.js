class Dog {
  constructor(id, name, happiness, hunger, thirst, poopy, pipi, user_id, color){
    this.id = id
    this.name = name
    this.happiness = happiness
    this.hunger = hunger
    this.thirst = thirst
    this.poopy = poopy
    this.pipi = pipi
    this.user_id = user_id
    this.color = color
  }

  static reviveDog(userId, dogId) {
    fetch(`${base_url}/users/${userId}/dogs/${dogId}`)
    .then(res => res.json())
    .then(json => {
      debugger
      let colorObject = {color: colorsArray()[Math.floor(Math.random() * 100) + 0]}
      document.querySelector('.annoying-dog.only-dog').src = `images/dog-${colorObject["color"]}.jpg`
      let object = {
        happiness: 10,
        hunger: 10,
        thirst: 10,
        color: colorObject["color"]
      }
      json.updateDog(object)
    })
  }

  static createDog(userId, dogName) {
    let dogObject = {name: dogName, user_id: userId, color: colorsArray()[Math.floor(Math.random() * 100) + 0]}
    fetch(`${base_url}/users/${userId}/dogs`, {
      method: 'POST',
      body: JSON.stringify(dogObject),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      let dog = new Dog(json.id, json.name, json.happiness, json.hunger, json.thirst, json.poopy, json.pipi, json.user_id, json.color)
      dog.renderOneDog()
    })
  }

  renderOneDog() {
    document.body.innerHTML = `<div class="hidden" dog_id="${this.id}" user_id='${this.user_id}' id="doggo" style="position: absolute; top: 50%; left: 50%; width: 300px; height: 220px; margin-top: -100px; margin-left: -150px">
      <p class="only-dog-name" style="position: absolute; left: 50%; margin-top: 0px; margin-bottom: 0px; margin-left: 0px; text-align: center; font-size: 30px;">${this.name.substring(0,10)}</p>
      <img class="annoying-dog only-dog" style="position: absolute; top: 50%; left: 50%; margin-top: -60px; margin-left: -100px;" src="images/dog-${this.color}.jpg" alt="Annoying Dog">
      <button id="pet-dog" style="visibility: hidden; position: absolute; top: 100%; left: 50%; margin-left: -24px; margin-top: -30px; font-size:20px; color:black; font-weight: bold;">Pet</button>
      <button id="feed-dog" style="visibility: hidden; position: absolute; color:black; top: 50%; margin-top: -5px; font-size:20px; font-weight: bold;">Feed</button>
      <button id="hydrate-dog" style="visibility: hidden; position: absolute; color:black; top: 50%; left: 100%; margin-top: -5px; margin-left: -65px; font-size:20px; font-weight: bold;">Hydrate</button>
    </div>
    <audio loop><source src="./audio/Gabe_the_dog_Do_the_hustle.mp3"></audio>`
    let dogName = document.getElementsByClassName('only-dog-name')[0]
    dogName.style.marginLeft = `-${dogName.offsetWidth/2}px`
    this.renderDogStats()
    this.statIntervals()
    let annoyingDog = document.querySelector('.annoying-dog.only-dog')
    annoyingDog.addEventListener('mouseover', event => document.querySelector('audio').play())
    annoyingDog.addEventListener('mouseout', event => document.querySelector('audio').pause())
    if(this.color === 'ghost'){
      User.addKonamiCode()
    }
  }

  renderDogStats() {
    this.renderDogHappiness()
    this.renderDogHunger()
    this.renderDogThirst()
    this.renderDogPoopy()
    this.renderDogPipi()
    let annoyingDog = document.querySelector('.annoying-dog.only-dog')

    annoyingDog.addEventListener('click', function(event) {
      if(document.getElementsByClassName('hidden').length === 1) {
        let userId = event.target.parentElement.getAttribute('user_id')
        let buttons = document.querySelectorAll('button')
        buttons.forEach(button => button.style.visibility = 'visible')
        buttons[0].addEventListener('click', makeMoreHappy)
        buttons[1].addEventListener('click', makeLessHungry)
        buttons[2].addEventListener('click', makeLessThirsty)
        document.getElementsByClassName('hidden')[0].setAttribute('class', 'visible')
      } else {
        document.getElementsByClassName('visible')[0].setAttribute('class', 'hidden')
        let buttons = document.querySelectorAll('button')
        buttons.forEach(button => button.style.visibility = 'hidden')
      }
    })

    const makeMoreHappy = (event) => {
      let userId = event.target.getAttribute('user_id')
      if (this.happiness < 10) {
        this.happiness += 1
        this.renderDogHappinessBars()
        setTimeout(function(){ document.body.append(heart(event, 1.5, 0, 5, 8)) }, 50);
        setTimeout(function(){ document.body.append(heart(event, 2, -22.5, 9, 10)) }, 200);
        setTimeout(function(){ document.body.append(heart(event, 3, -40, 16, 11)) }, 500);
        setTimeout(function(){
          let temps = document.getElementsByClassName('temp')
          for(let i = 0; i < temps.length; i) {
            temps[i].remove() }
        }, 1000)
      }
    }

    const heart = (event, scale, rotate, x, y) => {
      let div = document.createElement('div')
      div.setAttribute('class', 'heart temp')
      div.style.transform = `scale(${scale}) rotate(${rotate}deg)`
      div.style.position = "absolute"
      div.style.top = `${parseInt(event.target.parentNode.style.top) - x}%`
      div.style.left = `${parseInt(event.target.parentNode.style.left) + y}%`
      return div
    }

    const makeLessHungry = (event) => {
      let userId = event.target.getAttribute('user_id')
      if (this.hunger < 10) {
        this.hunger += 1
        this.renderStatBars('hunger', 1)
        this.makeMorePoopy()
      }
    }

    const makeLessThirsty = (event) => {
      let userId = event.target.getAttribute('user_id')
      if(this.thirst < 10) {
        this.thirst += 1
        this.renderStatBars('thirst', 2)
        this.makeMorePipi()
      }
    }
  }

  statIntervals() {
    setInterval(this.dogMovingAround, 3000)
    setInterval(this.makeLessHappy.bind(this), Math.floor(Math.random() * 8000) + 5000)
    setInterval(this.makeMoreHungry.bind(this), Math.floor(Math.random() * 8000) + 5000)
    setInterval(this.makeMoreThirsty.bind(this), Math.floor(Math.random() * 8000) + 5000)
    setInterval(this.makeMorePoopy.bind(this), Math.floor(Math.random() * 8000) + 5000)
    setInterval(this.makeMorePipi.bind(this), Math.floor(Math.random() * 8000) + 5000)
    setInterval(this.updateDog.bind(this), 10000)
  }

  renderDogHappiness() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="happiness">Happy</p>
    </div>`
    let tenDivs = document.getElementsByClassName('dog-1-stats')[0]
    for(let i=1; i <= 10; i++){
      tenDivs.innerHTML += ` <div class="heart heart-${i}"></div>`
    }
    this.renderDogHappinessBars()
  }

  renderDogHappinessBars() {
    let happinessDivs = document.getElementsByClassName('dog-1-stats')[0]

    for(let i = 1; i <= 10; i ++) {
      if (i <= this.happiness) {
        happinessDivs.children[i].style.transform = "rotate(-45deg)"
      } else {
        happinessDivs.children[i].style.transform = "rotate(-45deg) scale(.4)"
      }
    }
    if (this.happiness === 1 && this.hunger === 1 && this.thirst === 1) {
      // ghostification(this)
      renderMessage("YOUR DOG WILL DIE IF YOU DON'T TAKE CARE OF HIM", 'PLEASE CARE FOR YOUR DOG')
      $('.ui.modal').modal('show');
      setTimeout(this.checkStats.bind(this), 10000)
    }
  }

  checkStats() {
    if (this.happiness === 1 && this.hunger === 1 && this.thirst === 1) {
      ghostification(this)
    }
  }

  renderTenDivs(name, num) {
    let tenDivs = document.getElementsByClassName('dog-1-stats')[num]
    for(let i=1; i <= 10; i++){
      tenDivs.innerHTML += ` <div class="${name}-bar-${i}"></div>`
    }
  }

  renderStatBars(name, num) {
    let statDivs = document.getElementsByClassName('dog-1-stats')[num]
    for(let i = 1; i <= 10; i ++) {
      if (i <= this[name]) {
        statDivs.children[i].style.height = "20px"
      } else {
        statDivs.children[i].style.height = "5px"
      }
    }
    if (this.happiness === 1 && this.hunger === 1 && this.thirst === 1) {
      // ghostification(this)
      renderMessage("YOUR DOG WILL DIE IF YOU DON'T TAKE CARE OF HIM", 'PLEASE CARE FOR YOUR DOG')
      $('.ui.modal').modal('show');
      setTimeout(this.checkStats.bind(this), 10000)
    }
  }

  renderDogHunger() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="hunger">Food</p>
    </div>`
    this.renderTenDivs('hunger', 1)
    this.renderStatBars('hunger', 1)
  }

  renderDogThirst() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="thirst">Water</p>
    </div>`
    this.renderTenDivs('thirst', 2)
    this.renderStatBars('thirst', 2)
  }

  renderDogPoopy() {
    document.body.innerHTML += `<div class="dog-1-stats">
    <p class="poopy">Poop</p>
    </div>`
    this.renderTenDivs('poopy', 3)
    this.renderStatBars('poopy', 3)
  }

  renderDogPipi() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="pipi">Pee</p>
    </div>`
    this.renderTenDivs('pipi', 4)
    this.renderStatBars('pipi', 4)
  }

  dogMovingAround() {
    let doggo = document.getElementById('doggo')
    let doggoTop = parseInt(doggo.style.top)
    let doggoLeft = parseInt(doggo.style.left)

    if (doggoTop <= 15) {
      // move down if dog reaches top
      doggo.style.top = `${doggoTop + 4}%`
    } else if (doggoTop >= 82) {
      // move up if dog reaches bottom
      doggo.style.top = `${doggoTop - 4}%`
    } else {
      if (Math.random() >= .5) {
        // move up
        doggo.style.top = `${doggoTop + 4}%`
      } else {
        // move down
        doggo.style.top = `${doggoTop - 4}%`
      }
    }

    if (doggoLeft >= 74) {
      // move left if dog reaches right
      doggo.style.left = `${doggoLeft - 4}%`
    } else if (doggoLeft <= 22) {
      // move right if dog reaches left
      doggo.style.left = `${doggoLeft + 4}%`
    } else {
      if (Math.random() >= .5) {
        // move left
        doggo.style.left = `${doggoLeft - 4}%`
      } else {
        // move right
        doggo.style.left = `${doggoLeft + 4}%`
      }
    }
  }

  ///// set interval update dog's status. AUTOMATIC
  makeLessHappy() {
    if (this.happiness > 1) {
      this.happiness -= 1
      this.renderDogHappinessBars()
    }
  }

  makeMoreHungry() {
    if (this.hunger > 1) {
      this.hunger -= 1
      this.renderStatBars('hunger', 1)
    }
  }

  makeMoreThirsty() {
    if(this.thirst > 1) {
      this.thirst -= 1
      this.renderStatBars('thirst', 2)
    }
  }

  makeMorePoopy() {
    if (this.poopy < 10) {
      this.poopy += 1
      this.renderStatBars('poopy', 3)
    } else if (this.poopy >= 10) {
      this.goPoopy()
      this.poopy = 1
      this.renderStatBars('poopy', 3)
    }
  }

  makeMorePipi() {
    if (this.pipi < 10) {
      this.pipi += 1
      this.renderStatBars('pipi', 4)
    } else if (this.pipi >= 10) {
      this.goPipi()
      this.pipi = 1
      this.renderStatBars('pipi', 4)
    }
  }

  updateDog() {
    let object = {
      happiness: this.happiness,
      hunger: this.hunger,
      thirst: this.thirst,
      poopy: this.poopy,
      pipi: this.pipi
    }
    fetch(`${base_url}/users/${this.user_id}/dogs/${this.id}`, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  goPoopy() {
    let div = document.createElement('img')
    div.setAttribute('id', 'poop')
    // NOTES -- replace image with local image once serena sends
    div.src = "images/cute-poop.png"
    div.style.top = `${Math.floor(Math.random() * 79) + (-12)}%`
    div.style.left = `${Math.floor(Math.random() * 88) + (-9)}%`
    div.addEventListener('click', function(event) {
      event.target.remove()
    })
    document.body.append(div)
  }

  goPipi() {
    let div = document.createElement('div')
    div.setAttribute('id', 'pee')
    // NOTES
    // div.src = "pee image that serena sends me"
    div.style.top = `${Math.floor(Math.random() * 95) + 1}%`
    div.style.left = `${Math.floor(Math.random() * 95) + 1}%`
    div.addEventListener('click', function(event) {
      event.target.remove()
    })
    document.body.append(div)
  }
}
