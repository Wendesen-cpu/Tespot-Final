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

  const coords = await getCoords();
  var currentLat = coords.lat;
  var CurrentLng = coords.long;
  // console.log(`Latitude: ${currentLat}   Longitude: ${CurrentLng}`)
  const urlParams = new URLSearchParams(window.location.search);
  var citty = urlParams.get("city");
  var state1 = urlParams.get("region");
  var status = urlParams.get("state");
  var maxDistance = urlParams.get("maxDistance");
  var mydistances = [];
  var allDistances = [];
  var check = 0;
  var mynames = [];
  var numberOfcenters = mynames.length;
  var count;


  // if (status == 1) {
    // console.log(`Latitude: ${currentLat}   Longitude: ${CurrentLng}`)
    // var state1 = document.getElementById('state').value;
    // var citty = document.getElementById('city').value;  
    console.log(`type of status: ${typeof status}`)

      

    fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
      .then(response => response.json())
      .then((data) => {
        data.forEach((element) => {
          // console.log(element);
          var addr;
          var newCity;

          if (element.physical_address[0].city === citty) {
            count += 1;
            addr = element.physical_address[0].address_1;
            newCity = element.physical_address[0].city;
            // console.log(element);
            const sucesfulLokup = () => {
              // const {latitude,longitude} = position.coords;
              var url = `https://api.opencagedata.com/geocode/v1/json?q=${addr},${newCity}&key=484ef2b687f046d99c7d66cd1ef48892`;
              fetch(url)
                .then(res => res.json())
                .then((data1) => {
                  check += 1;
                  console.log(data1);
                  // console.log(data)
                  // console.log(data.results[0].annotations.DMS.lat)
                  // console.log(data.results[0].annotations.DMS.lng)
                  // console.log(formatter(data.results[0].annotations.DMS.lat))
                  // console.log(formatter(data.results[0].annotations.DMS.lng))
                  const testLat = formatter(data1.results[0].annotations.DMS.lat);
                  const testLng = formatter(data1.results[0].annotations.DMS.lng);
                  const distance = distanceCalc(currentLat, CurrentLng, testLat, testLng);
                  // mydistances.push(distance);
                  // console.log(mynames);
                  // console.log(mydistances);
                  // console.log(mydistances.sort()
                  allDistances.push(distance);

                  if (distance < maxDistance) {
                    console.log(distance);
                    mydistances.push(distance);

                    mynames.push(element.name);
                    console.log(mynames);
                    console.log(mynames.length);
                    console.log(mydistances);
                  }
                });
            };
            navigator.geolocation.getCurrentPosition(sucesfulLokup)
          }
        });
      });
  

  console.log(`Status: ${status}`);
  function MSC() {
    if (status == 0) {
      centerSelector1();
      console.log("All Centers")
      // console.log(`check is: ${check}`);
      console.log(`status is : ${status}`);
    }
    else if (status != 0 && mynames.length == 0) {
      console.log(mynames.length)
      console.log("NO Test centers nearby you");
      const err = document.createElement("p");
      err.innerHTML = "We're really sorry!";
      const errorr = document.createElement("p");
      errorr.innerHTML = `We couldn't find a test center within this distance!:`;
      document.getElementById("result").appendChild(err);
      document.getElementById("result").appendChild(errorr);
      
    }
    else {
      centerSelector2(mynames, mynames.length);
      console.log("Neaby centers only")
    }

  }

  setTimeout(MSC, 2000);


  function centerSelector2(a, b) {
    var i = 0;
    let y = 0;
    // console.log(i)
    a.forEach((centeri) => {
      
      // var arr = [];
      // var count = b;
      const urlParams = new URLSearchParams(window.location.search);
      var citty = urlParams.get("city");
      var state1 = urlParams.get("region");
      console.log(i)

      document.getElementById('result').innerHTML = "";

      // var state1 = document.getElementById('state').value;
      // var citty = document.getElementById('city').value;
      console.log(i);
      var dist = mydistances[i];
      fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
        .then(response => response.json())
        .then((data) => {
          console.log(i);
          
          data.forEach((element) => {
            if (element.physical_address[0].city === citty) {
              if (element.name === centeri) {
               
                // var tt = mynames.findIndex(findIn())
                // // function findIn(x) {
                // //   return x = centeri;
                // // }
                console.log(i);
                console.log(`Distance:  ${dist}`);
                // console.log(mydistances);
                // console.log(mydistances.findIndex(xx));
                if (y == 0) {
                  const title = document.createElement("p");
                  title.innerHTML = `The following Covid-19 test centers are near to you in the city of ${citty}:`;
                  document.getElementById("result").appendChild(title);
                  
                  y += 1;
                }
                var nameOfCenter = element.name;
                var phoneNumber = element.phones[0].number;
                var descriptions = element.description;
                // var dist = mydistances[i];
                var address = `${element.physical_address[0].address_1}, postal code: ${element.physical_address[0].postal_code}`
                var holder = document.createElement("ul");
                var holder2 = document.createElement("ul");
                var name = document.createElement('h4');
                var doc1 = document.createElement('li');
                var doc2 = document.createElement('li');
                var doc3 = document.createElement('li');
                var doc4 = document.createElement('li');
                name.innerHTML = nameOfCenter;
                doc1.innerHTML = `It is located at:   ${address}`;
                doc2.innerHTML = `Phone number:  ${phoneNumber}`;
                doc3.innerHTML = `Descriptions:  ${descriptions}`;
                doc4.innerHTML = `Distance:  ${dist.toPrecision(5)} Km`;
                console.log(mydistances);
                console.log(`distance arrays: ${mydistances}`);
                console.log(`distance arrays2: ${dist}`);
                holder.appendChild(name);
                holder2.appendChild(doc1);
                holder2.appendChild(doc2);
                holder2.appendChild(doc3);
                holder2.appendChild(doc4);
                holder.appendChild(holder2);
                holder.setAttribute("style", "margin-top:20px");
                holder2.setAttribute("style", "margin-left:20px");
                document.getElementById("result").appendChild(holder);
                // document.getElementById('res').appendChild(name);
                
              }
              // arr.push(element);
            }
          })
          // console.log(arr);
          // for (var i = 0; i < count; i++) {


          // }
        });

        i += 1;
    });

  
  }

  function centerSelector1() {
    let x = 0;
    // var arr = [];
    document.getElementById('result').innerHTML = "";
    var count = 0;
    // var state1 = document.getElementById('state').value;
    // var citty = document.getElementById('city').value;
    const urlParams = new URLSearchParams(window.location.search);
    var citty = urlParams.get("city");
    var state1 = urlParams.get("region");
    var i = 0;
     console.log(`Distance: ${allDistances}`)

     fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
     .then(response => response.json())
     .then((data) => {
        console.log(`dtaa: ${data}`);
        data.forEach((element) => {
          if (element.physical_address[0].city === citty) {
            
            console.log(element)
            count += 1;
            var dist = allDistances[i];
            console.log(i);
            if (x === 0) {
              const title = document.createElement("p");
              title.innerHTML = `The following Covid-19 test centers are available in the city of ${citty}:`;
              document.getElementById("result").appendChild(title);
              
              x += 1;
            }
            var nameOfCenter = element.name;
            var phoneNumber = element.phones[0].number;
            var descriptions = element.description;
            var address = `${element.physical_address[0].address_1}, postal code: ${element.physical_address[0].postal_code}`
            var holder = document.createElement("ul");
            var holder2 = document.createElement("ul");
            var name = document.createElement('h4');
            var doc1 = document.createElement('li');
            var doc2 = document.createElement('li');
            var doc3 = document.createElement('li');
            var doc4 = document.createElement('li');
            name.innerHTML = nameOfCenter;
            doc1.innerHTML = `It is located at:   ${address}`;
            doc2.innerHTML = `Phone number:  ${phoneNumber}`;
            doc3.innerHTML = `Descriptions:  ${descriptions}`;
            doc4.innerHTML = `Distance:  ${dist.toPrecision(5)} Km`
            holder.appendChild(name);
            holder2.appendChild(doc1);
            holder2.appendChild(doc2);
            holder2.appendChild(doc3);
            holder2.appendChild(doc4);
            // holder.appendChild(doc4);
            holder.appendChild(holder2);
            holder.setAttribute("style", "margin-top:20px");
            holder2.setAttribute("style", "margin-left:20px");
            document.getElementById("result").appendChild(holder);
            // document.getElementById('res').appendChild(name);
            i += 1;
          
          }

          
        })
        
        
      });
    // var doc5 = document.createElement('h3');
    // doc5.innerHTML = `There are totally ${count} test centers in this city`;
    // document.getElementById('res').appendChild(doc5);
  }
  console.log(mynames);
  console.log(numberOfcenters);
  console.log(check);
  function distanceCalc(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return Value * Math.PI / 180;
  }

  function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction == "S" || direction == "W") {
      dd *= -1;
    } // Don't do anything for N or E
    return dd;
  }

  function formatter(a) {
    var splitted = a.split(/[^\d\w]+/)
    var formatted = parseFloat(`${splitted[2]}.${splitted[3]}`);
    var newLatLong = ConvertDMSToDD(parseFloat(splitted[0]), parseFloat(splitted[1]), formatted, splitted[4])
    return newLatLong;
  }
  // console.log(formatter("33° 27' 53.64144 ))
};
