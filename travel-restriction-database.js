

  fetch('http://localhost:3000/travelDocs')
  .then(response => response.json())
  .then(data => console.log(data));

 var name1 = {"name":"Fithawi"};
var name2 = JSON.stringify(name1)
 fetch('http://localhost:3000/travelDocs', {
    method: 'POST',
   headers: {
        "content-type":"Application/json"
    },
    body: name2
    
   })