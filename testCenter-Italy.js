window.onload = async () => {
    const getCoords = async () => {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
      };
    };
  
    var dist;
    const coords = await getCoords();
    var currentLat = coords.lat;
    var currentLng = coords.long;
    function ConvertDMSToDD(degrees, minutes, seconds, direction) {
      var dd = degrees + minutes / 60 + seconds / (60 * 60);
  
      if (direction === "S" || direction === "W") {
        dd *= -1;
      } // Don't do anything for N or E
      return dd;
    }
  
    const urlParams = new URLSearchParams(window.location.search);
    const citty = urlParams.get("city");
    const newRegion = urlParams.get("region");
    console.log(`region: ${newRegion}`);
    const status = urlParams.get("state");
    console.log(urlParams.get('state'));
    console.log(`Status: ${status}`);
  
    console.log(citty);
  
    function formatter(a) {
      var splitted = a.split(/[^\d\w]+/)
      var formatted = parseFloat(`${splitted[2]}.${splitted[3]}`);
      var newLtLng = ConvertDMSToDD(parseFloat(splitted[0]), parseFloat(splitted[1]), formatted, splitted[4])
      return newLtLng;
    }
    // Converts numeric degrees to radians
    function toRad(Value) {
      return Value * Math.PI / 180;
    }
    function distanceCalc(lat1, lon1, lat2, lon2) {
      var a;
      var c;
      var d;
      var R = 6371; // km
      var dLat = toRad(lat2 - lat1);
      var dLon = toRad(lon2 - lon1);
      lat1 = toRad(lat1);
      lat2 = toRad(lat2);
  
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      d = R * c;
      return d;
    }
    /* eslint-disable no-var */
    // const city = "brescia";
    const listOfAddress = [];
    var centers = [];
    var x = 0;
    fetch('http://localhost:3000/testcenters')
      .then(response => response.json())
      .then((data) => {
        data.forEach((element) => {
          const tempo = element.Address;
          const city = tempo.split(",")[1];
          const addr = tempo.split(",")[0];
          if (city === citty) {
            document.getElementById("result").innerHTML = "";
            // centers.push(element.name);
            // listOfAddress.push(addr);
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${addr},${citty}&key=484ef2b687f046d99c7d66cd1ef48892`;
            fetch(url)
              .then(res => res.json())
              .then((response) => {
  
                var latt = response.results[0].annotations.DMS.lat;
                var lngg = response.results[0].annotations.DMS.lng;
                dist = distanceCalc(formatter(latt), formatter(lngg), currentLat, currentLng);
  
                var holder = document.createElement("ul");
                var element1 = document.createElement("li");
                var element2 = document.createElement("li");
                var element3 = document.createElement("li");
                var element4 = document.createElement("li");
                console.log(typeof status);
                if (status == 1) {
                  if (dist < 90) {
                    if (x === 0) {
                      var title = document.createElement("p");
                      title.innerHTML = `you have the following Covid test centers near to you in the city of ${citty}:`;
                      document.getElementById("result").appendChild(title);
                      x += 1;
                    }
                    console.log('yes');
                    var name = document.createElement("h2");
                    name.innerHTML = element.name;
                    element1.innerHTML = `It is located at : ${element.Address} `;
                    console.log('you are at location:');
                    console.log(currentLat);
                    console.log(currentLng);
                    console.log("the center name is:");
                    element2.innerHTML = `Description: ${element.Description}`;
                    console.log(element.name);
                    console.log("the center is located at:");
                    console.log(latt);
                    console.log(lngg);
                    element3.innerHTML = `The center is at location of: ${latt} lat and ${lngg} long `;
                    console.log("The distance between you and the center is :");
                    console.log(`${dist} km`);
                    element4.innerHTML = `The distance between you and the center is : ${dist.toPrecision(5)} km`;
                    holder.appendChild(name);
                    holder.appendChild(element1);
                    holder.appendChild(element4);
                    holder.appendChild(element2);
                    document.getElementById("result").appendChild(holder);
                    // console.log(formatter(latt));
                    // console.log(formatter(lngg));
                  } else {
                    console.log("No nearbt Test Centers");
                  }
                } else {
                  if (x === 0) {
                    var title = document.createElement("p");
                    title.innerHTML = `you have the following Covid test centers in the city of ${citty}:`;
                    document.getElementById("result").appendChild(title);
                    x += 1;
                  }
                  var name = document.createElement("h2");
                  name.innerHTML = element.name;
                  element1.innerHTML = `It is located at : ${element.Address} `;
                  console.log('you are at location:');
                  console.log(currentLat);
                  console.log(currentLng);
                  console.log("the center name is:");
                  element2.innerHTML = `Description: ${element.Description}`;
                  console.log(element.name);
                  console.log("the center is located at:");
                  console.log(latt);
                  console.log(lngg);
                  element3.innerHTML = `The center is at location of: ${latt} lat and ${lngg} long `;
                  console.log("The distance between you and the center is :");
                  console.log(`${dist} km`);
                  element4.innerHTML = `The distance between you and the center is : ${dist.toPrecision(5)} km`;
                  holder.appendChild(name);
                  holder.appendChild(element1);
                  holder.appendChild(element4);
                  holder.appendChild(element2);
                  document.getElementById("result").appendChild(holder);
                  // console.log(formatter(latt));
                  // console.log(formatter(lngg));
                  // console.log(formatter(latt));
                  // console.log(formatter(lngg))
  
                }
  
              });
          }
        });
      });
  };
  