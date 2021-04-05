

  fetch('http://localhost:3000/travelDocs')
  .then(response => response.json())
  .then(data => console.log(data));

