
function requirmentSearch(destination) {
  const ul = document.createElement("ul");
  const header = document.createElement("li");
  const para0 = document.createElement("li");
  const para1 = document.createElement("li");
  const para2 = document.createElement("li");
  const para3 = document.createElement("li");
  const para4 = document.createElement("li");
  const para5 = document.createElement("li");
  const para6 = document.createElement("li");
  const traveler = document.createElement("h2");
  const introDiv = document.getElementById("intro-1");


  if (destination === "Spain") {
    traveler.innerHTML = "Travel requirement on entry to Spain  ";
    header.innerHTML = "SPAIN-COVID-19 New Updates:";
    para0.innerHTML = "All travelers must complete a Health Control Form (HCF), which can be completed ";
    para1.innerHTML = "via the Spain Travel Health website or app. It will generate a QR code which must ";
    para2.innerHTML = "be shown on arrival in the country. Travelers arriving from 'risk' countries, based ";
    para3.innerHTML = "on guidelines from the European Center for Disease Control (ECDC) for essential reasons";
    para4.innerHTML = "must also undertake a PCR test within 72 hours of departure and show proof of a negative result on entry.";
    para5.innerHTML = "and remember that The use of mask is mandatory in all public outdoor and closed spaces if it is not possible to maintain the safety distance";
    para6.innerHTML = "Click the button below to find the nearest TestCenter";
  } else if (destination === "Germany") {
    traveler.innerHTML = "Travel requirement on entry to Germany ";
    header.innerHTML = "Germany-COVID-19 New Updates:";
    para0.innerHTML = "All persons wishing to enter the Federal Republic of Germany, as of 0:00 a.m. on 30 March, are required to be tested before boarding";
    para1.innerHTML = "The tests must be done at the relevant test centres abroad no more than 48 hours before entering Germany (time of the swab).";
    para2.innerHTML = "The test result must be kept for at least ten days after entry and presented to the relevant authorities upon request.";
    para3.innerHTML = "Persons under the age of six years are exempt from the testing obligation.";
    para6.innerHTML = "The test result must be available before departure so that it can be presented to the carrier.";
    para4.innerHTML = "Travellers pay for the test themselves."
    para5.innerHTML = "If you want to do Covid-19 test we can provide you with informations regarding to the nearest Test Centers";
    para6.innerHTML = "Click the button below to find the nearest TestCenter";
  } else if (destination === "") {
    const p = document.createElement("p");
    p.innerHTML = "Please provide the departure and destination of your trip and then we will let you know the trip requirement";
    introDiv.appendChild(p);
    document.getElementById("findTestCenter").style.display = 'none';
  } else if (destination !== "") {
    const p = document.createElement("p");
    p.innerHTML = "We're really Sorry! We don't have information regarding this trip for now.";
    introDiv.appendChild(p);
    document.getElementById("findTestCenter").style.display = 'none';
  } else {
    const p = document.createElement("p");
    p.innerHTML = "Please provide the departure and destination of your trip and then we will let you know the trip requirement";
    introDiv.appendChild(p);
    document.getElementById("findTestCenter").style.display = 'none';
  }

  ul.style.marginLeft = "40px";
  ul.style.marginTop = "25px";
  if (destination === "Germany" || destination === "Spain") {
    introDiv.appendChild(traveler);
    ul.appendChild(header);
    introDiv.appendChild(ul);
    setTimeout(() => {
      ul.appendChild(para1);
      ul.appendChild(para2);
      introDiv.appendChild(ul);
    }, 1000);
    setTimeout(() => {
      ul.appendChild(para3);
      ul.appendChild(para4);
      introDiv.appendChild(ul);
    }, 2000);
    setTimeout(() => {
      ul.appendChild(para5);
      ul.appendChild(para6);
      introDiv.appendChild(ul);
    }, 3000);
    setTimeout(() => {
      if (destination === "Germany") {
        introDiv.style.backgroundColor = "red";
        introDiv.style.color = "white";
      } else if (destination === "Spain") {
        introDiv.style.backgroundColor = "yellow";
      }
    }, 4000); 
  }
}
window.onload = function () {
  document.querySelector("select").style.display = "none";
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get("destination");
  requirmentSearch(destination);
}
function receiveDetails() {
  const p = document.createElement("p");
  p.innerHTML = "Give Us some Details: ";
  const region = document.createElement("input");
  const city = document.createElement("input");
  const submitButton = document.createElement("input");
  const distance = document.createElement("input");
  region.setAttribute("id", "region");
  region.setAttribute("value", "");
  region.setAttribute("placeholder", "from which region are you travelling?");
  region.setAttribute("style", "height:20px");
  region.setAttribute("style", "width:270px; height:25px");
  city.setAttribute("id", "city");
  city.setAttribute("value", "");
  city.setAttribute("placeholder", "and from which city?");
  city.setAttribute("style", "height:20px");
  city.setAttribute("style", "width:200px; height:25px");
  distance.setAttribute("style", "width:100px; height:25px");
  distance.setAttribute("placeholder", "max-distance in KM");
  distance.setAttribute("type", "number");
  distance.setAttribute("id", "distance");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("style", "width:150px; height:25px");
  submitButton.setAttribute("id", "submitButton");
  document.getElementById("yesNo").style.display = "block";
  const yesNo = document.getElementById("yesNo");
  yesNo.setAttribute("style", "width:100px; height:25px");
  yesNo.setAttribute("placeholder", "Please choose:");
  document.getElementById("receiveDetails0").appendChild(p);
  document.getElementById("receiveDetails1").appendChild(region);
  document.getElementById("receiveDetails1").appendChild(city);
  document.getElementById("receiveDetails2").appendChild(yesNo);
  document.getElementById("receiveDetails2").appendChild(distance);
  document.getElementById("receiveDetails3").appendChild(submitButton);
  document.getElementById('findTestCenter').style.display = "none";
  function setUrl() {
    let state;
    const regions = document.getElementById("region").value;
    const citys = document.getElementById("city").value;
    const states = document.getElementById("yesNo").value;
    const maxDistances = document.getElementById("distance").value;
    if (states === "Yes") {
      state = 1;
    } else if (states === "No") {
      state = 0;
    }
    if (state === 1) {
      const newUrl = `testCenterResultItaly.html?region=${regions}&city=${citys}&state=${state}&maxDistance=${maxDistances}`;
      location.replace(newUrl);
    } else {
      const newUrl = `testCenterResultItaly.html?region=${regions}&city=${citys}&state= 0`;
      location.replace(newUrl);
    }
    console.log(newUrl);
  }

  document.getElementById("submitButton").addEventListener("click", setUrl);
}


document.getElementById("findTestCenter").addEventListener("click", receiveDetails);
