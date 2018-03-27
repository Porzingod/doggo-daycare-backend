class Dog {
  constructor(id, name, happiness, hunger, thirst, poopy, pipi, user_id){
    this.id = id
    this.name = name
    this.happiness = happiness
    this.hunger = hunger
    this.thirst = thirst
    this.poopy = poopy
    this.pipi = pipi
    this.user_id = user_id
  }


  static createDog(userId, dogName) {
    let dogObject = {name: dogName, user_id: userId}
    fetch(`${base_url}/users/${userId}/dogs`, {
      method: 'POST',
      body: JSON.stringify(dogObject),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      let dog = new Dog(json.id, json.name, json.happiness, json.hunger, json.thirst, json.poopy, json.pipi, json.user_id)
      dog.renderOneDog()
    })
  }


  renderOneDog() {
    document.body.innerHTML = `<div id="doggo">
      <p class="only-dog-name" style="position: absolute; top: 50%; right: 50%; text-align: center; font-family: 'Press Start 2P', cursive;">${this.name}</p>
        <img class="annoying-dog only-dog" style="position: absolute; top: 65%; right: 50%;" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
    </div>`
    document.getElementById('doggo1')
    this.renderDogStats()
  }

  renderDogStats() {
    this.renderDogHappiness()
    this.renderDogHunger()
    this.renderDogThirst()
    this.renderDogPoopy()
    this.renderDogPipi()
    setInterval(this.dogMovingAround, 250)
    setInterval(this.makeLessHappy.bind(this), 1000)
    setInterval(this.makeMoreHungry.bind(this), 1000)
    setInterval(this.makeMoreThirsty.bind(this), 1000)

  }

  renderDogHappiness() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="happiness">Happy</p>
      <div class="heart heart-1"></div>
      <div class="heart heart-2"></div>
      <div class="heart heart-3"></div>
      <div class="heart heart-4"></div>
      <div class="heart heart-5"></div>
      <div class="heart heart-6"></div>
      <div class="heart heart-7"></div>
      <div class="heart heart-8"></div>
      <div class="heart heart-9"></div>
      <div class="heart heart-10"></div>
    </div>`

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
  }

  renderDogHunger() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="hunger">Hungry</p>
      <div class="hunger-bar-1"></div>
      <div class="hunger-bar-2"></div>
      <div class="hunger-bar-3"></div>
      <div class="hunger-bar-4"></div>
      <div class="hunger-bar-5"></div>
      <div class="hunger-bar-6"></div>
      <div class="hunger-bar-7"></div>
      <div class="hunger-bar-8"></div>
      <div class="hunger-bar-9"></div>
      <div class="hunger-bar-10"></div>
    </div>`

    this.renderDogHungerBars()
  }

  renderDogHungerBars() {
    let hungerDivs = document.getElementsByClassName('dog-1-stats')[1]

    for(let i = 1; i <= this.hunger; i ++) {
      hungerDivs.children[i].style.height = "20px"
    }
  }

  renderDogThirst() {

    document.body.innerHTML += `<div class="dog-1-stats"> <p class="thirst">Thirsty</p>
      <div class="thirst-bar-1"></div>
      <div class="thirst-bar-2"></div>
      <div class="thirst-bar-3"></div>
      <div class="thirst-bar-4"></div>
      <div class="thirst-bar-5"></div>
      <div class="thirst-bar-6"></div>
      <div class="thirst-bar-7"></div>
      <div class="thirst-bar-8"></div>
      <div class="thirst-bar-9"></div>
      <div class="thirst-bar-10"></div>
    </div>`

    this.renderDogThirstBars()
  }

  renderDogThirstBars() {
    let thirstDivs = document.getElementsByClassName('dog-1-stats')[2]

    for(let i = 1; i <= this.thirst; i ++) {
      thirstDivs.children[i].style.height = "20px"
    }
  }

  renderDogPoopy() {

    document.body.innerHTML += `<div class="dog-1-stats"> <p class="poopy">Poopy</p>
      <div class="poopy-bar-1"></div>
      <div class="poopy-bar-2"></div>
      <div class="poopy-bar-3"></div>
      <div class="poopy-bar-4"></div>
      <div class="poopy-bar-5"></div>
      <div class="poopy-bar-6"></div>
      <div class="poopy-bar-7"></div>
      <div class="poopy-bar-8"></div>
      <div class="poopy-bar-9"></div>
      <div class="poopy-bar-10"></div>
    </div>`
    this.renderDogPoopyBars()
  }

  renderDogPoopyBars() {
    let poopyDivs = document.getElementsByClassName('dog-1-stats')[3]

    for(let i = 1; i <= this.poopy; i ++) {
      poopyDivs.children[i].style.height = "20px"
    }
  }

  renderDogPipi() {
    document.body.innerHTML += `<div class="dog-1-stats"> <p class="pipi">Peepy</p>
      <div class="pipi-bar-1"></div>
      <div class="pipi-bar-2"></div>
      <div class="pipi-bar-3"></div>
      <div class="pipi-bar-4"></div>
      <div class="pipi-bar-5"></div>
      <div class="pipi-bar-6"></div>
      <div class="pipi-bar-7"></div>
      <div class="pipi-bar-8"></div>
      <div class="pipi-bar-9"></div>
      <div class="pipi-bar-10"></div>
    </div>`

    this.renderDogPipiBars()
  }

  renderDogPipiBars() {
    let pipiDivs = document.getElementsByClassName('dog-1-stats')[4]

    for(let i = 1; i <= this.pipi; i ++) {
      pipiDivs.children[i].style.height = "20px"
    }
  }

  dogMovingAround() {
    let dogName = document.getElementsByClassName('only-dog-name')[0]
    let dogImg = document.getElementsByClassName('only-dog')[0]

    let dogNameTop
    if (dogName.style.top.length === 3) {
      dogNameTop = parseInt(dogName.style.top.slice(0, 2))
    } else if (dogName.style.top.length === 2) {
      dogNameTop = parseInt(dogName.style.top.slice(0, 1))
    } else if (dogName.style.top.length === 4) {
      dogNameTop = parseInt(dogName.style.top.slice(0, 3))
    }

    let dogNameRight
    if (dogName.style.right.length === 3) {
      dogNameRight = parseInt(dogName.style.right.slice(0, 2))
    } else if (dogName.style.right.length === 2) {
      dogNameRight = parseInt(dogName.style.right.slice(0, 1))
    } else if (dogName.style.right.length === 4) {
      dogNameRight = parseInt(dogName.style.right.slice(0, 3))
    }

    let dogImgTop
    if (dogImg.style.top.length === 3) {
      dogImgTop = parseInt(dogImg.style.top.slice(0, 2))
    } else if (dogImg.style.top.length === 2) {
      dogImgTop = parseInt(dogImg.style.top.slice(0, 1))
    } else if (dogImg.style.top.length === 4) {
      dogImgTop = parseInt(dogImg.style.top.slice(0, 3))
    }

    let dogImgRight
    if (dogImg.style.right.length === 3) {
      dogImgRight = parseInt(dogImg.style.right.slice(0, 2))
    } else if (dogImg.style.right.length === 2) {
      dogImgRight = parseInt(dogImg.style.right.slice(0, 1))
    } else if (dogImg.style.right.length === 4) {
      dogImgRight = parseInt(dogImg.style.right.slice(0, 3))
    }

    if (dogNameTop <= 10) {
      // move down if dog reaches top
      dogName.style.top = `${dogNameTop + 2}%`
      dogImg.style.top = `${dogImgTop + 2}%`
    } else if (dogNameTop >= 70) {
      // move up if dog reaches bottom
      dogName.style.top = `${dogNameTop - 2}%`
      dogImg.style.top = `${dogImgTop - 2}%`
    } else {
      if (Math.random() >= .5) {
        // move up
        dogName.style.top = `${dogNameTop + 2}%`
        dogImg.style.top = `${dogImgTop + 2}%`
      } else {
        // move down
        dogName.style.top = `${dogNameTop - 2}%`
        dogImg.style.top = `${dogImgTop - 2}%`
      }
    }

    if (dogNameRight <= 14) {
      // move left if dog reaches right
      dogName.style.right = `${dogNameRight + 2}%`
      dogImg.style.right = `${dogImgRight + 2}%`
    } else if (dogNameRight >= 94) {
      // move right if dog reaches left
      dogName.style.right = `${dogNameRight - 2}%`
      dogImg.style.right = `${dogImgRight - 2}%`
    } else {
      if (Math.random() >= .5) {
        // move left
        dogName.style.right = `${dogNameRight + 2}%`
        dogImg.style.right = `${dogImgRight + 2}%`
      } else {
        // move right
        dogName.style.right = `${dogNameRight - 2}%`
        dogImg.style.right = `${dogImgRight - 2}%`
      }
    }
  }

  ///// set interval update dog's status. AUTOMATIC
  makeLessHappy() {
    console.log(this.happiness)
    if (this.happiness > 1) {
      this.happiness -= 1
      this.renderDogHappinessBars()
    }
  }

  makeMoreHungry() {
    if (this.hunger < 10) {
      this.hunger += 1
      this.renderDogHungerBars()
    }
  }

  makeMoreThirsty() {
    if (this.thirst < 10) {
      this.thirst += 1
      this.renderDogThirstBars()
    }
  }
  ///// Automatic but conditional
  goPoopy() {}
  goPipi() {}
  ///// interactive actions
  makeMoreHappy() {}
  makeLessHungry() {}
  makeLessThirsty() {}
  makeMorePoopy() {}
  makeMorePipi() {}

}
