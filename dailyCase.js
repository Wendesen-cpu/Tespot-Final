// The part about Daily Covid19 cases
var currentDates = "3-31-2021";
var yesterday = "3-30-2021";

var d = new Date();
var x = 0;
var dd = parseFloat(d.getMonth());
//   var currentDates = `${d.getMonth()+1}-${d.getDate()-1}-${d.getFullYear()}`;
var url1 = `https://covid19.mathdro.id/api/daily/${currentDates}`;
var url2 = `https://covid19.mathdro.id/api/daily/${yesterday}`;
console.log(url1);
console.log(url2);
function covidUpdate(country, region) {
  fetch(url1)
    .then(response => response.json())
    .then(json => json.forEach((element) => {
      if (element.countryRegion === country && element.provinceState === region) {
        console.log(element.countryRegion);
        console.log(element.provinceState);
        const confirmed = parseFloat(element.confirmed);
        const deaths = parseFloat(element.deaths);
        const recovered = parseFloat(element.recovered);
        console.log(`${confirmed} ${deaths}`);
        fetch(url2)
          .then(response => response.json())
          .then(datas => datas.forEach((elementb) => {
            if (elementb.countryRegion === country && elementb.provinceState === region) {
              const confirmedb = parseFloat(elementb.confirmed);
              console.log(confirmedb);
              const deathsb = parseFloat(elementb.deaths);
              const recoveredb = parseFloat(elementb.recovered);
              // var conf = document.createElement("p");
              // var deth =document.createElement("p");
              // var reco = document.createElement("p");
              
              const dailyConfirmed = confirmed - confirmedb;
              console.log(dailyConfirmed);
              const dailyDeath = deaths - deathsb;
              console.log(dailyDeath);
              const dailyRecovered = recovered - recoveredb;
              console.log(dailyRecovered);

              document.getElementById("tempo").innerHTML = "";
              if (x === 0) {
                const title = document.createElement("h3");
                title.innerHTML = `Today's Covid-19 Status for the region of ${region}`;
                document.getElementById("tempo").appendChild(title);
              }
              const holder = document.createElement("ul");
              const element1 = document.createElement("li");
              const element2 = document.createElement("li");
              const element3 = document.createElement("li");
              element1.innerHTML = `The number of confirmed case for the day: ${dailyConfirmed}`;
              element2.innerHTML = `The number of deaths for the day: ${dailyDeath};`
              element3.innerHTML = `The number of  recovery for the day: ${dailyRecovered};`
              holder.appendChild(element1);
              holder.appendChild(element2);
              holder.appendChild(element3);
              const note = document.createElement("p");
              note.innerHTML = "If the number of cases are a lot bigger than a thousand and deaths more than 50 for a single day, We recommand a serious care and take every possible precaution to avoid to be infected. Have a good-day and stay Safe!";
              
              document.getElementById("tempo").appendChild(holder);
              document.getElementById("tempo").appendChild(note);
            }
          }));
      }
    }));
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search); 
  const newCountry = urlParams.get("newCountry");
  const newRegion = urlParams.get("newRegion");
  covidUpdate(newCountry, newRegion)
};








