// fetch('http://localhost:3000/testcenters', {
//   method: 'DELETE',
// })
//   .then(response => console.log(response));

fetch('http://localhost:3000/users/TestCenterABCD')
  .then(response => (response.json()))
  .then(data => console.log(data))
document.getElementById("contribute-btn").addEventListener("click", () => {
  var testCenterName = document.getElementById("testName").value;
  var testCenterEmail = document.getElementById("testEmail").value;
  var testCenterAddress = document.getElementById("testAddress").value;
  var testCenterPhoneNumber = document.getElementById("testPhone").value;
  var testCenterDescriptions = document.getElementById("descriptions").value;
  console.log(testCenterDescriptions);
  console.log(testCenterName);
  const testCenter = {
    "name": testCenterName,
    "Email": testCenterEmail,
    "Address": testCenterAddress,
    "Phone": testCenterPhoneNumber,
    "Description": testCenterDescriptions,
  };

  const json = JSON.stringify(testCenter);

  fetch('http://localhost:3000/testcenters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
    .then(response => console.log(response));
});
fetch('http://localhost:3000/testcenters/TestCenterABCD')
  .then(response => response.json())
  .then(data => console.log(data));
fetch('http://localhost:3000/testcenters/')
  .then(response => response.json())
  .then(data => console.log(data));
