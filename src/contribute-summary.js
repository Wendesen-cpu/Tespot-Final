
function thank(a) {
  fetch(`http://localhost:3000/testcenters/${a}`)
        .then(response => response.json())
        .then((data) => {
            // console.log(a);
            const name = data[0].name;
            // console.log(name);
            const address = data[0].Address;
            const phone = data[0].Phone;
            const email = data[0].Email;
            const test = document.createElement("p");
            test.innerHTML = name;
            const description = data[0].Description;
            const title = document.createElement("p");
            const holder = document.createElement("ul");
            const element1 = document.createElement("li");
            const element2 = document.createElement("li");
            const element3 = document.createElement("li");
            const element4 = document.createElement("li");
            const element5 = document.createElement("li");
            element2.innerHTML = "Hello";

            // element1.innerHTML = `${phone}`
            element1.innerHTML = `Name:    ${name}`;
            element2.innerHTML = `Email Address:    ${email}`;
            element3.innerHTML = `Address:    ${address}`;
            element4.innerHTML = `Phone Number:    ${phone}`;
            element5.innerHTML = `Descrition:    ${description}`;
            holder.appendChild(element1);
            holder.appendChild(element2);
            holder.appendChild(element3);
            holder.appendChild(element4);
            holder.appendChild(element5);
            title.innerHTML = `The test center with the following details has been registered successfully. We are very grateful for your cooperation!`
            document.getElementById('result-main').appendChild(title);
            document.getElementById('result').appendChild(holder);
            const im = document.createElement("img");
            im.setAttribute("src", "/images/imogi.jpg");
            document.getElementById("image").appendChild(im);

        });
};




window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const newcenter = urlParams.get("newcenter");
    const newaddress = urlParams.get("newaddress");
    if (newcenter !== "" && newaddress !== "") {
        setTimeout(thank(newcenter), 5000);
    }
    else {
        const err = document.createElement("p");
        err.innerHTML = "No center is registered. It is required to provide the name and address of the test center you are going to get registered!"
        document.getElementById("result-main").appendChild(err);
    }
    
};