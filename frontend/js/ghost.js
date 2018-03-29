const ghostification = (obj) => {
  document.querySelector('img').src = "images/dog-ghost.png"
  fetch(`${base_url}/users/${obj.user_id}/dogs/${obj.id}`, {
    method: "PUT",
    body: JSON.stringify({color: "ghost"}),
    headers: {
      'Content-Type': 'application/json'
    }
  })//.then(User.addKonamiCode())
}
