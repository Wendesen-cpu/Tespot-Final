function createUrl() {
  const newcenter = document.querySelector("#testName").value;
  const newaddress = document.querySelector("#testAddress").value;
  const link = `contribute-summary.html?newcenter=${newcenter}&newaddress=${newaddress}`;
  location.replace(link);
}
document.getElementById("contribute-btn").addEventListener("click", createUrl);
