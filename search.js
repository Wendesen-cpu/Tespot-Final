function createUrl(){
    var origin = document.querySelector("#origin").value;
    var destination = document.querySelector("#destination").value;
    var link = `requirement.html?origin=${origin}&destination=${destination}`;    
    location.replace(link)
}
    document.getElementById("search_btn").addEventListener("click", createUrl)