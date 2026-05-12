fetch("components/menu.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("menu-container").innerHTML = data;
        
        const script = document.createElement("script");
        script.src = "js/menu.js";

        document.body.appendChild(script);

    });