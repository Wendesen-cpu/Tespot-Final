function requirment_search(destination){
    

   if(destination === "Spain"){
       header.innerHTML="<b>SPAIN-COVID-19 Updates:<b>"
       pra1.innerHTML ="<li>A negative <b> PCR test certificate must be presented on departure</li>"
       para2.innerHTML ="<li>The test must be taken no more than <b> 72 hours </b> before the intended travel date.</li>"
       para3.innerHTML ="<li>There is also the option to be tested on arrival, either at the airport or at a facility.</li>"
       para6.innerHTML="A completed 'self-declaration form' must be presented prior to boarding."
       para4.innerHTML ="You need to get tested to travel to this place."
       para5.innerHTML ="Click the button below to find the nearest TestCenter"
       var introDiv = document.getElementById("intro-1")
    
       introDiv.appendChild(header)
       introDiv.appendChild(pra1)
       introDiv.appendChild(para2)
       introDiv.appendChild(para3)
       introDiv.appendChild(para6)
       introDiv.appendChild(para4)
       introDiv.appendChild(para5)
        //second div  
        
       header1.innerHTML="<b>SPAIN-COVID-19 Updates:<b>"
       pra11.innerHTML ="<li>A negative <b> PCR test certificate must be presented on departure</li>"
       para21.innerHTML ="<li>The test must be taken no more than <b> 72 hours </b> before the intended travel date.</li>"
       para31.innerHTML ="<li>There is also the option to be tested on arrival, either at the airport or at a facility.</li>"
       para61.innerHTML="A completed 'self-declaration form' must be presented prior to boarding."
       para41.innerHTML ="You need to get tested to travel to this place."
       para51.innerHTML ="Click the button below to find the nearest TestCenter"
       var introDiv1 = document.getElementById("intro-2")
    
       introDiv1.appendChild(header1)
       introDiv1.appendChild(pra11)
       introDiv1.appendChild(para21)
       introDiv1.appendChild(para31)
       introDiv1.appendChild(para61)
       introDiv1.appendChild(para41)
       introDiv1.appendChild(para51)






   }else if(destination ==="Germany"){
       p.innerHTML = "Germany detail"
   }else if(destination ===""){
       p.innerHTML ="Not Found";
   }
   document.getElementById("cat-1").appendChild(p);
}
window.onload=function(){
const urlParams = new URLSearchParams(window.location.search); 
const destination = urlParams.get("destination");
requirment_search(destination);
}

















