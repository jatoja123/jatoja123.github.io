function postuj() {
    return fetch('/Game/start',{
      method: 'post'
    }).then(data => console.log(data.status));
  }