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
    } //else {
    //}
  }

  function displayDogs(user_id) {
    document.body.innerHTML = ""
    fetch(`${base_url}/users/${user_id}/dogs`)
    .then(res => res.json())
    .then(json => {
      if(json.length === 1) {
        renderOneDog(json[0])
      } else {
        renderTwoDogs(json)
      }
    })
  }

  function renderOneDog(dog) {
    debugger
  }

  function renderTwoDogs(dogs) {
    debugger
  }







})
