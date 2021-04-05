function requirment_search(destination){
    var ul = document.createElement("ul");
    var header = document.createElement("li")
    var para0 = document.createElement("li")
    var para1 = document.createElement("li")
    var para2= document.createElement("li")
    var para3 = document.createElement("li")
    var para4 = document.createElement("li")
    var para5 = document.createElement("li")
    var para6 = document.createElement("li")
    var traveler = document.createElement("h2")
    var introDiv = document.getElementById("intro-1")


   if(destination === "Spain"){
      traveler.innerHTML="Test requirement on entry to Spain  "
       header.innerHTML="SPAIN-COVID-19 New Updates:" 
       para0.innerHTML="All travelers must complete a Health Control Form (HCF), which can be completed " 
       para1.innerHTML="via the Spain Travel Health website or app. It will generate a QR code which must "
       para2.innerHTML="be shown on arrival in the country. Travelers arriving from 'risk' countries, based "
       para3.innerHTML="on guidelines from the European Center for Disease Control (ECDC) for essential reasons"   
       para4.innerHTML="must also undertake a PCR test within 72 hours of departure and show proof of a negative result on entry."
       para5.innerHTML="and remember that The use of mask is mandatory in all public outdoor and closed spaces if it is not possible to maintain the safety distance"
       para6.innerHTML="Click the button below to find the nearest TestCenter"

   

   }else if(destination ==="Germany"){
    traveler.innerHTML="Test requirement on entry to Germany "
    header.innerHTML="Germany-COVID-19 New Updates:"
    para0.innerHTML="All persons wishing to enter the Federal Republic of Germany, as of 0:00 a.m. on 30 March, are required to be tested before boarding"
    para1.innerHTML="The tests must be done at the relevant test centres abroad no more than 48 hours before entering Germany (time of the swab)."
    para2.innerHTML="The test result must be kept for at least ten days after entry and presented to the relevant authorities upon request."
    para3.innerHTML="Persons under the age of six years are exempt from the testing obligation."
    para6.innerHTML="The test result must be available before departure so that it can be presented to the carrier."
    para4.innerHTML="Travellers pay for the test themselves."
    para5.innerHTML="Don't worry we can lead you to the nearest Test Center"

    para6.innerHTML= "Click the button below to find the nearest TestCenter"

   }else if(destination ===""){
       var p = document.createElement("p")
       p.innerHTML ="Please provide us the origin and destination of your countries we will let you know the covid current situation";
       introDiv.appendChild(p)
   }



   ul.style.marginLeft ="40px"
   ul.style.marginTop="25px"
   introDiv.appendChild(traveler)
   ul.appendChild(header)
   introDiv.appendChild(ul)
   setTimeout(()=>{
       ul.appendChild(para1);
       ul.appendChild(para2)
        introDiv.appendChild(ul)
    
    }, 1000);
   setTimeout(()=>{
       ul.appendChild(para3)
       ul.appendChild(para4)
       introDiv.appendChild(ul)

    }, 2000);
   setTimeout(()=>{ 
       ul.appendChild(para5)
       ul.appendChild(para6)
       introDiv.appendChild(ul)

    
    }, 3000);

    setTimeout(()=>{ 
        if(destination==="Germany"){
            introDiv.style.backgroundColor = "red"
        }else if(destination ==="Spain"){
            introDiv.style.backgroundColor = "yellow"
        
        }
        
        
     
     }, 4000);



   
}
window.onload=function(){
const urlParams = new URLSearchParams(window.location.search); 
const destination = urlParams.get("destination");
requirment_search(destination);
}

















