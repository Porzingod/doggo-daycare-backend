const ghostification = (obj) => {
  // clearTimeout()
  // debugger
  setTimeout(function() {
    document.querySelector('img').src = "images/dog-ghost.jpg"
    fetch(`${base_url}/users/${obj.user_id}/dogs/${obj.id}`, {
      method: "PUT",
      body: JSON.stringify({color: "ghost"}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // document.querySelector('img').src = "images/dog-ghost.jpg"
  }, 3000)
  // setTimeout(function() {
  //   document.querySelector('img').src = "images/dead/dog-ghost.jpg"
  // }, 120000)
}
