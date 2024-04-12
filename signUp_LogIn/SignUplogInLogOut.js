let sigUp = localStorage.getItem("userDetail")

let logIn = localStorage.getItem("isAutho")

if (!sigUp) {
    let navbar = document.querySelector("#signIn")
    let button = document.createElement("button")
    button.className = "logoutButton";

    let a = document.createElement("a")
    a.innerText = "SignUp"
    a.href = "signUp_LogIn/SignUp.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: #fff;
        font-size: 16px;
    }
    .logoutButton:hover {
        background-color: #fff;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    navbar.appendChild(button);

} else if (logIn === "Not Authenticated") {
    let navbar = document.querySelector("#signIn")


    let button = document.createElement("button")
    button.className = "logoutButton";

    let a = document.createElement("a")
    a.innerText = "LogIn"
    a.href = "signUp_LogIn/LogIn.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: #fff;
        font-size: 16px;
    }
    .logoutButton:hover {
        background-color: #fff;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    navbar.appendChild(button);





} else {
    let isAuth = localStorage.getItem("isAutho") || "Not Authenticated"

    if (isAuth === "Authenticated") {
        let navbar = document.querySelector("#signIn")
        let button = document.createElement("button")
        button.innerText = "LogOut"
        button.className = "logoutButton";

        let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        color: 3000000;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton:hover {
        background-color: #fff;
        color: #000;
    }`;

        let styleElement = document.createElement("style");
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);

        button.onclick = function () {
            localStorage.setItem("isAutho", "Not Authenticated")
            window.location.reload()
        }
        navbar.append(button)


        // display user name
        let userName = document.querySelector("#userName")
        let name1 = document.createElement("h3")
        let saveDetails = JSON.parse(localStorage.getItem("userDetail")) || {}
        console.log(1)
        name1.innerText = saveDetails.name
        userName.appendChild(name1)
        // display user name
    }


}


