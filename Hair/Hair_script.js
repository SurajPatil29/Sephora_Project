


let productDiv = document.getElementById("product")

let mainData = []

let data1 = []
// filter product accoding to product page

function filterProduct(data) {
    data1 = data.filter((obj) => {
        if (obj.Type === "Hair") {
            return obj
        }
    })

    displayProduct(data1)
}


// filter product accoding to product page

// function for display the product 
function displayProduct(data) {
    data.forEach((obj) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = obj.Image;
        img.style.height = "200px"

        let comName = document.createElement("h5");
        comName.innerText = obj.company;

        let prodName = document.createElement("p");
        prodName.innerText = obj.Product;

        let rate = document.createElement("p");
        rate.innerText = `✬ ${obj.Rating}   ${obj.Rating_count}`;

        let price = document.createElement("p");
        price.innerText = `$ ${obj.Price}`

        let button = document.createElement("button")
        button.innerText = "Add to Bucket";

        button.onclick = function () {
            addToCart(obj)
        }


        div.append(img, comName, prodName, rate, price, button)
        productDiv.append(div)
    });
}

// function for display the product 


//featch data from db
fetch("../dataBase.json")
    .then((res) => res.json())
    .then((data) => {
        mainData = data
        filterProduct(data)
    })
    .catch((err) => console.log(err))
//featch data from db



// slider prev and next button
function prevButton(className) {
    document.querySelector(className).scrollBy({
        left: -document.querySelector(className).offsetWidth * 0.4, // Scrolls left
        behavior: 'smooth'
    });
}

function nextButton(className) {
    document.querySelector(className).scrollBy({
        left: document.querySelector(className).offsetWidth * 0.4, // Scrolls right
        behavior: 'smooth'
    });
}
// slider prev and next button


// Function Price Filter Start
function sortPrice() {

    let sortBy = document.getElementById("choosePrice").value
    let a = sortBy.toString()

    if (a == 1) {

        sortPriceLowToHigh()

    } else if (a == 2) {

        sortPriceHighToLow()
    }
}



// sort low to high
function sortPriceLowToHigh() {

    // sorting data according to price
    data1.sort(function (a, b) {
        return a.Price - b.Price
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)

}

// sort high to low
function sortPriceHighToLow() {

    // sorting data according to price
    data1.sort(function (a, b) {
        return b.Price - a.Price
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)

}
// Function Price Filter end




// Function Rating  Filter Start
function sortRating() {

    let sortBy = document.getElementById("chooseRating").value
    let a = sortBy.toString()

    if (a == 1) {

        sortRatingLowToHigh()

    } else if (a == 2) {

        sortRatingHighToLow()
    }
}

// sort low to high
function sortRatingLowToHigh() {

    // sorting data according to Rating
    data1.sort(function (a, b) {
        return a.Rating - b.Rating
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)

}

// sort high to low
function sortRatingHighToLow() {

    // sorting data according to Rating
    data1.sort(function (a, b) {
        return b.Rating - a.Rating
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)

}
// Function Rating  Filter end



// Function Gender  Filter Start
function sortGender() {

    let sortBy = document.getElementById("chooseGender").value
    let a = sortBy.toString()

    if (a == 1) {

        sortMale(data1)

    } else if (a == 2) {

        sortFemale(data1)
    }
}

// sort low to high
function sortMale(data) {
    productDiv.innerHTML = null
    data.filter((obj) => {

        if (obj.Gender == "Male") {

            return displayProduct([obj])

        }
    })
}

// sort high to low
function sortFemale(data) {

    productDiv.innerHTML = null
    data.filter((obj) => {

        if (obj.Gender == "Female") {

            return displayProduct([obj])

        }
    })
}
// Function Gender  Filter end

// sort according to New Start
function newSort() {
    productDiv.innerHTML = null
    data1.filter((obj) => {

        if (obj.Category == "New") {
            return displayProduct([obj])
        }
    })
}
// sort according to New end

// sort according to shampoo start

function shampoo() {
    productDiv.innerHTML = null
    data1.filter((obj) => {

        if (obj.Product_Type == "Shampoo") {
            return displayProduct([obj])
        }
    })
}

// sort according to shampoo end



// function order filter

function sortOrder() {

    let sortBy = document.getElementById("chooseOrder").value
    let a = sortBy.toString()

    if (a == 1) {

        sortAtoZ()

    } else if (a == 2) {

        sortZtoA()
    }
}


function sortAtoZ() {
    console.log("atoz")

    // sorting data according to Rating
    data1.sort(function (a, b) {
        return a.company.localeCompare(b.company)
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)
    console.log(data1)

}

function sortZtoA(){
    console.log("ztoa")

    // sorting data according to Rating
    data1.sort(function (a, b) {
        return b.company.localeCompare(a.company)
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)
    console.log(data1)

}

// function order filter



// function add to cart start
function addToCart(obj) {

    let cartDetails = JSON.parse(localStorage.getItem("cartDetails")) || []
    cartDetails.push(obj)
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails))

}
// function add to cart end




// search functinality

let searchValue = document.getElementById("searchValue")
function searchProduct() {

    let value1 = searchValue.value
    console.log(value1)

    //localStorage.removeItem("searchValue")

    localStorage.setItem("searchValue", JSON.stringify(value1))

    window.location.href = "../Search/search.html"
}

// search functinality