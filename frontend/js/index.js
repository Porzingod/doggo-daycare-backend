document.addEventListener("DOMContentLoaded", function(event) {

  const base_url = 'http://localhost:3000/api/v1'
  const form = document.getElementById('log-in-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    findUser()
  })

  function getUsers() {
    return fetch(`${base_url}/users`)
    .then(res => res.json())
  }

  function findUser() {
    getUsers()
    .then(json => {
      let input = document.getElementById('log-in-form').children[0].value
      let user = json.find(function(user) {
        return user.username === input
      })
      findUserId(user)
    })
  }

  function findUserId(user) {
    if(user) {
      displayDogs(user.id)
    }
  }

  function displayDogs(user_id) {
    document.body.innerHTML = ""
    fetch(`${base_url}/users/${user_id}/dogs`)
    .then(res => res.json())
    .then(json => {
      if(json.length === 1) {
        renderOneDog(json[0])
      }
      // else {
      //   renderTwoDogs(json)
      // }
    })
  }

  function renderOneDog(dog) {
    document.body.innerHTML = `<div id="doggo">
      <p class="only-dog-name" style="position: absolute; top: 50%; right: 50%; text-align: center; font-family: 'Press Start 2P', cursive;">${dog.name}</p>
        <img class="annoying-dog only-dog" style="position: absolute; top: 65%; right: 50%;" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
    </div>`
    document.getElementById('doggo1')
    renderDogStats(dog)
  }

  // function renderTwoDogs(dogs) {
  //   debugger
  //   document.body.innerHTML = `<div id="doggo1">
  //     <p class="dog-1-name">${dogs[0].name}</p>
  //       <img class="annoying-dog dog-1" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
  //   </div>
  //   <div id="doggo2">
  //     <p class="dog-2-name">${dogs[1].name}</p>
  //       <img class="annoying-dog dog-2" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
  //   </div>`
  //
  //   renderDogStats(dogs[0])
  //   renderDogStats(dogs[1])
  // }

  function renderDogStats(dog) {
    renderDogHappiness(dog)
    renderDogHunger(dog)
    renderDogThirst(dog)
    renderDogPoopy(dog)
    renderDogPipi(dog)
    setInterval(dogMovingAround, 250)
  }

  function renderDogHappiness(dog) {
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

    //// move into separate function
    let happinessDivs = document.getElementsByClassName('dog-1-stats')[0]

    for(let i = 1; i <= dog.happiness; i ++) {
      happinessDivs.children[i].style.transform = "rotate(-45deg)"
    }
    //// and for the others
  }

  function renderDogHunger(dog) {
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

    let hungerDivs = document.getElementsByClassName('dog-1-stats')[1]

    for(let i = 1; i <= dog.hunger; i ++) {
      hungerDivs.children[i].style.height = "20px"
    }
  }

  function renderDogThirst(dog) {

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

    let thirstDivs = document.getElementsByClassName('dog-1-stats')[2]

    for(let i = 1; i <= dog.thirst; i ++) {
      thirstDivs.children[i].style.height = "20px"
    }
  }

  function renderDogPoopy(dog) {

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

    let poopyDivs = document.getElementsByClassName('dog-1-stats')[3]

    for(let i = 1; i <= dog.poopy; i ++) {
      poopyDivs.children[i].style.height = "20px"
    }
  }

  function renderDogPipi(dog) {

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

    let pipiDivs = document.getElementsByClassName('dog-1-stats')[4]

    for(let i = 1; i <= dog.pipi; i ++) {
      pipiDivs.children[i].style.height = "20px"
    }
  }

  document.getElementById('sign-up-btn')

  function dogMovingAround() {
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

    console.log("moved")
  }
  /////
})
