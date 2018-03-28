const base_url = 'http://localhost:3000/api/v1'

// Dog.confirmation()


document.addEventListener("DOMContentLoaded", function(event) {

  let annoyingDog = document.querySelector('.annoying-dog.only-dog')

  const signUp = document.getElementById('sign-up-btn')

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
      let foundUser = json.find(function(user) {
        return user.username === input
      })
      if (foundUser === undefined) {
        $('.ui.modal').modal('show');
      } else {
        let user = new User(foundUser.id, foundUser.username)
        user.displayDogs()
      }
    })
    // debugger
  }

  signUp.addEventListener('click', function(event) {
    document.body.innerHTML = ""
    let form = document.createElement('form')
    form.innerHTML = `<input type="text" placeholder="username" style="color:black;">
    <input type="text" placeholder="dog name" style="color:black;">
    <input type="submit" value="Create User" style="color:black;">`
    form.setAttribute('id', 'newUser')
    document.body.append(form)
    form.addEventListener('submit', User.createUser)
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
