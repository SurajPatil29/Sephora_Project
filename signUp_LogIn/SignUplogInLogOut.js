let sigUp = localStorage.getItem("userDetail")

let logIn = localStorage.getItem("isAutho")

if (!sigUp) {
    let navbar = document.querySelector("#signIn")
    // let navbar1 = document.querySelector("#signIn1")

    let button = document.createElement("button")
    button.className = "logoutButton";

    let a = document.createElement("a")
    a.innerText = "SignUp"
    a.href = "signUp_LogIn/SignUp.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: white;
        padding: 7px 15px;
        margin: 3px;
        border: 2px solid black;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: black;
        font-size: 16px;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    navbar.appendChild(button);

    //navbar1.appendChild(button.cloneNode(true));


} else if (logIn === "Not Authenticated") {
    let navbar = document.querySelector("#signIn")
    // let navbar1 = document.querySelector("#signIn1")


    let button = document.createElement("button")
    button.className = "logoutButton";

    let button1 = document.createElement("button")
    button1.innerText = "Reset"
    button1.className = "logoutButton";

    button1.onclick = function () {
        localStorage.removeItem('userDetail');
        localStorage.removeItem('isAutho');
        localStorage.removeItem('searchValue');
        localStorage.removeItem('product');
        localStorage.removeItem('price');
        localStorage.removeItem('cartDetails');


        window.location.reload()


    }


    let a = document.createElement("a")
    a.innerText = "LogIn"
    a.href = "signUp_LogIn/LogIn.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: white;
        padding: 7px 15px;
        margin: 3px;
        border: 2px solid black;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: black;
        font-size: 16px;
    }
    .logoutButton {
        font-size: 16px;

    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    navbar.append(button, button1);

    //navbar1.append(button.cloneNode(true), button1.cloneNode(true))








} else {
    let isAuth = localStorage.getItem("isAutho") || "Not Authenticated"

    if (isAuth === "Authenticated") {
        let navbar = document.querySelector("#signIn")
        //let navbar1 = document.querySelector("#signIn1")

        let button = document.createElement("button")
        button.innerText = "LogOut"
        button.className = "logoutButton";

        let styles = `
        .logoutButton {
        background-color: white;
        padding: 7px 15px;
        margin: 3px;
        color: black;
        font-size: 16px;
        border: 2px solid black;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }`;

        let styleElement = document.createElement("style");
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);

        button.onclick = function () {
            localStorage.setItem("isAutho", "Not Authenticated")
            console.log(1)

            window.location.reload()
        }
        navbar.append(button)
        //navbar1.append(button.cloneNode(true))


        // display user name
        let userName = document.querySelector("#userName")
        let name1 = document.createElement("h3")
        let saveDetails = JSON.parse(localStorage.getItem("userDetail")) || {}
        console.log(1)
        name1.innerText = saveDetails.name
        userName.appendChild(name1)
        // display user name

        // let styleH3 = `
        //     border : 2px solid white;
        //     padding : 5px;
        //     border-radius : 10px;
        
        // `;
        // // display user name in bottom navbar
        // let userName1 = document.querySelector("#userName1")
        // let name11 = document.createElement("h3")
        // name11.innerText = saveDetails.name
        // name11.style = styleH3
        // userName1.appendChild(name11)
        // // display user name
    }


}


