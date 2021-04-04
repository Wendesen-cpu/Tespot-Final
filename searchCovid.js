function createUrl() {
  const newCountry = document.querySelector("#state1").value;
  const newRegion = document.querySelector("#city1").value;
  const link = `covidDisplay.html?newCountry=${newCountry}&newRegion=${newRegion}`;
  location.replace(link)
}
document.getElementById("import").addEventListener("click", createUrl);
