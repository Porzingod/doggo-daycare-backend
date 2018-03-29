class User {
  constructor(id, username) {
    this.id = id
    this.username = username
  }

  displayDogs() {
    document.body.innerHTML = ""
    fetch(`${base_url}/users/${this.id}/dogs`)
    .then(res => res.json())
    .then(json => {
      let dog = new Dog(json[0].id, json[0].name, json[0].happiness, json[0].hunger, json[0].thirst, json[0].poopy, json[0].pipi, json[0].user_id, json[0].color)
      if(json.length === 1) {
        dog.renderOneDog()
      }
    })
  }

  static addKonamiCode() {
    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    let index = 0
    document.addEventListener('keydown', function(event) {
      if (konami[index] === event.keyCode) {
        index++;
        if (index === konami.length) {
          // let userId = document.getElementById('doggo').getAttribute('user_id')
          // let dogId = document.getElementById('doggo').getAttribute('dog_id')
          // debugger
          //Dog.reviveDog(userId, dogId)
          dogsBackground(10)
          let movingBgDogs = setInterval(bgDogsMovingAround, 500)
          index = 0;
        }
      } else {
        index = 0;
      }
    })
  }


  static createUser(event) {
    event.preventDefault()
    let user = document.getElementById('sign-up-username').value
    let dog = document.getElementById('sign-up-dogname').value
    if(user === '' || dog === '') {
      renderMessage('ALL FIELDS NEED TO BE FILLED IN', 'PLEASE FILL IN')
      $('.ui.modal').modal('show');
    } else {
      getUsers()
      .then(json => {
        let input = document.getElementById('sign-up-username').value
        let foundUser = json.find(function(user) {
          return user.username === input
        })
        if (foundUser !== undefined) {
          renderMessage('THAT USER NAME IS ALREADY TAKEN', 'CHOOSE A NEW USERNAME')
          $('.ui.modal').modal('show');
        } else {
          let userObject = {'username': user}
          fetch(`${base_url}/users`, {
            method: 'POST',
            body: JSON.stringify(userObject),
            headers: {
              "Content-Type": 'application/json'
            }
          })
          .then(res => res.json())
          .then(json => {
            let dogName = document.querySelector('form')[1].value
            Dog.createDog(json.id, dogName)
          })
        }
      })
    }
  }

}
