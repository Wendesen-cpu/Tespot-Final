var state = 0;
function createUrl() {
  var link;
  const regionsInItaly = ["Abruzzo", "Valle d'Aosta", "Basilicata", "Calabria", "Campania", "Emilia Romagna", "Friuli-Venezia Giulia", "Latium", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Toscana", "Trentino", "Umbria","Veneto"]
  const region = document.querySelector("#state").value; 
  const city = document.querySelector("#city").value; 
  console.log(region);
  if (regionsInItaly.includes(region, 0)) {
    console.log(regionsInItaly.includes(region, 0));
    console.log("Yes");
    link = `testCenterResultItaly.html?region=${region}&city=${city}&state=${state}`;    
  } else {
    link = `testCenterResult.html?region=${region}&city=${city}&state=${state}`;  
  }
  location.replace(link);

}
function changeState() {
  if (state === 0) {
    state += 1;
  } else if (state !== 0) {
    state = 0;
  }
  console.log(state);
}
document.getElementById("important2").addEventListener("click", changeState);
document.getElementById("important").addEventListener("click", createUrl);
