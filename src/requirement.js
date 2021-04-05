function requirment_search(origin,destination) {
    var ul = document.createElement("ul");
    var header = document.createElement("p")
    var li0 = document.createElement("li")
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    var li3 = document.createElement("li")
    var li4 = document.createElement("li")
    var li5 = document.createElement("li")
    var para6 = document.createElement("p")
    var para7 = document.createElement("p")
    var para8 = document.createElement("p")

    var traveler = document.createElement("h2")
    var introDiv = document.getElementById("intro-1")

    if (origin=="Italy" && destination === "Spain") {
        traveler.innerHTML = "Travel requirement on entry to Spain  "
        header.innerHTML = "SPAIN-COVID-19 New Updates:"
        li0.innerHTML = "All travelers must complete a Health Control Form (HCF), which can be completed via the Spain Travel Health website or app."
        li1.innerHTML = "It will generate a QR code which must be shown on arrival in the country."
        li2.innerHTML = "Travelers arriving from 'risk' countries, must undertake a PCR test within 72 hours of departure and show proof of a negative result on entry "
        li3.innerHTML = ""
        li4.innerHTML = ""
        li5.innerHTML = "And remember that The use of mask is mandatory in all public outdoor and closed spaces if it is not possible to maintain the safety distance"
        para6.innerHTML = "If you want to do the Covid-19 test we can provide you the Information available of nearest Test Center"
        para7.innerHTML = "Click the button below to find the nearest TestCenter"
  
    } else if (origin=="Italy" && destination === "Germany") {
        traveler.innerHTML = "Travel requirement on entry to Germany "
        header.innerHTML = "Germany-COVID-19 New Updates:"
        li0.innerHTML = "All persons wishing to enter the Federal Republic of Germany, as of 0:00 a.m. on 30 March, are required to be tested before boarding"
        li1.innerHTML = "The tests must be done at the relevant test centres abroad no more than 48 hours before entering Germany (time of the swab)."
        li2.innerHTML = "The test result must be kept for at least ten days after entry and presented to the relevant authorities upon request."
        li3.innerHTML = "Persons under the age of six years are exempt from the testing obligation."
        li4.innerHTML = "The test result must be available before departure so that it can be presented to the carrier."
        li5.innerHTML = "Travellers pay for the test themselves."
        para6.innerHTML = "If you want to do the Covid-19 test we can provide you the Information available of nearest Test Center"
        para7.innerHTML = "Click the button below to find the nearest TestCenter"
    } else if (origin ==="" || destination === ""||destination===""||origin===""||destination==="Spain"|| destination==="Germany") {
    
        header.innerHTML = "Please provide us the origin and destination of your countries we will let you know the covid current situation";
        introDiv.appendChild(header)
    }
    ul.style.marginLeft = "40px"
    ul.style.marginTop = "25px"
    introDiv.appendChild(traveler)
    ul.appendChild(header)
    introDiv.appendChild(ul)

    if(origin!==""&&destination!==""){

        setTimeout(() => {
            ul.appendChild(li0);
            ul.appendChild(li1)
            introDiv.appendChild(ul)
        }, 1000);
        setTimeout(() => {
            ul.appendChild(li2)
            ul.appendChild(li3)
            introDiv.appendChild(ul)
        }, 2000);

        setTimeout(() => {
            ul.appendChild(li4)
            ul.appendChild(li5)
            introDiv.appendChild(ul)
        }, 3000);

        setTimeout(() => {
            ul.appendChild(para6)
            ul.appendChild(para7)
            introDiv.appendChild(ul)
        }, 4000);




        setTimeout(() => {
            if (destination === "Germany"||destination==="Spain") {
                introDiv.style.backgroundColor = "red"
               introDiv.style.color= "#FFFFFF"
           
            }
        }, 5000);

    }

       

    }
    


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const origin =urlParams.get("origin")
    const destination = urlParams.get("destination");
    
    requirment_search(origin,destination);
}













