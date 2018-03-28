const base_url = 'http://localhost:3000/api/v1'

// Dog.confirmation()

function getUsers() {
  return fetch(`${base_url}/users`)
  .then(res => res.json())
}

function renderMessage(msg1, msg2) {
  let div = document.createElement('div')
  div.setAttribute('class', 'ui modal')
  div.innerHTML = `<i class="close icon"></i>
  <div class="header">
  ERRRRORR
  </div>
  <div class="image content">
  <div class="ui medium image">
  <img src="https://static1.squarespace.com/static/51fbb364e4b0d35aeaac238d/t/51fc41c3e4b0c31f218cf18a/1375486404863/404-page-error.jpg">
  </div>
  <div class="description">
  <div class="ui header" style="color:black;">${msg1}</div>
  <p style="color:black;">${msg2}</p>
  </div>
  </div>`
  document.body.prepend(div)
}

document.addEventListener("DOMContentLoaded", function(event) {

  let annoyingDog = document.querySelector('.annoying-dog.only-dog')

  const signUp = document.getElementById('sign-up-btn')

  const form = document.getElementById('log-in-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    findUser()
  })


  function findUser() {
    getUsers()
    .then(json => {
      let input = document.getElementById('log-in-input').value
      let foundUser = json.find(function(user) {
        return user.username === input
      })
      if (foundUser === undefined) {
        renderMessage('THATS NOT A REAL NAME', 'PLEASE NEW NAME')
        $('.ui.modal').modal('show');
      } else {
        let user = new User(foundUser.id, foundUser.username)
        user.displayDogs()
      }
    })
  }



  signUp.addEventListener('click', function(event) {
    let main = document.createElement('main')
    main.setAttribute('id', 'doggo-camp')
    main.innerHTML = '<h1 id="welcome">Doggo Daycare</h1>'
    document.body.innerHTML = ''
    let form = document.createElement('form')
    form.innerHTML = `<input id="sign-up-username" type="text" placeholder="username" style="color:black;">
    <div>
      <input id="sign-up-dogname" type="text" placeholder="dog name" style="color:black;">
    </div>
    <div>
      <input id="sign-up-submit" type="submit" value="Adopt Doggo!" style="color:black;">
    </div>`
    form.addEventListener('submit', User.createUser)
    main.append(form)
    document.body.append(main)
  })



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

  /////
})
