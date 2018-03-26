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
    document.body.innerHTML = `<div id="doggo1">
      <p class="only-dog-name">${dog.name}</p>
        <img class="annoying-dog only-dog" src="https://i.ytimg.com/vi/oUYPdBp4-zg/maxresdefault.jpg" alt="Annoying Dog">
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
  /////
})
