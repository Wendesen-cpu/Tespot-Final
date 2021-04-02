function createUrl() {
    var newCountry = document.querySelector("#country").value; 
    var newRegion = document.querySelector("#region").value; 
    var link = `covidDisplay.html?newCountry=${newCountry}&newRegion=${newRegion}`;    
    location.replace(link)
  }
      document.getElementById("import").addEventListener("click", createUrl)
  