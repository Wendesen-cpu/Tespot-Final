window.onload = () => {
  var state = 0;
  function createUrl() {
    var link;
    const regionsInItaly = ["Abruzzo", "Valle d'Aosta", "Basilicata", "Calabria", "Campania", "Emilia Romagna", "Friuli-Venezia Giulia", "Latium", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Toscana", "Trentino", "Umbria", "Veneto"]
    const region = document.querySelector("#state").value;
    const city = document.querySelector("#city").value;

    console.log(region);
    if (regionsInItaly.includes(region, 0)) {
      if (state == 1) {

        console.log('state1')
        const maxDistance = document.querySelector("#customPreference").value;
        link = `testCenterResultItaly.html?region=${region}&city=${city}&state=${state}&maxDistance=${maxDistance}`;
        console.log(maxDistance);
        console.log(`link ${link}`)
      } else {
        console.log(state)
        link = `testCenterResultItaly.html?region=${region}&city=${city}&state=${state}`;
      }
      console.log(regionsInItaly.includes(region, 0));
      console.log("Yes");

    }
    else {
      if (state == 1) {
        console.log("Nop")
        const maxDistance = document.querySelector("#customPreference").value;
        link = `testCenterResult.html?region=${region}&city=${city}&state=${state}&maxDistance=${maxDistance}`;
        }
      else {
        link = `testCenterResult.html?region=${region}&city=${city}&state=${state}`;
        }
    }

    location.replace(link);

  }
 

  
  function changeState() {
    if (state == 0) {
  
      state += 1;
      const message = document.createElement("p");
      message.innerHTML = `What maximum distance would be near to you? (in KM): `;
      document.getElementById("preference").appendChild(message);
      const pre = document.createElement("input");
      pre.setAttribute("type", "number");
      pre.setAttribute("id", "customPreference");
      document.getElementById("preference").appendChild(pre);

    } else if (state !== 0) {
      state = 0;
    }
    console.log((state === 1));



  }
  document.getElementById("important2").addEventListener("click", changeState);
  document.getElementById("important").addEventListener("click", createUrl);
}