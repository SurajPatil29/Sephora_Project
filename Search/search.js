let productDiv = document.getElementById("product")

let mainData = []


let data1 = []

// filter product according to search
function searchProduct(data) {
    let value = JSON.parse(localStorage.getItem("searchValue"))
    console.log(value)
    console.log(data)

    data1 = data.filter((obj) => {
        if (value.toLowerCase() === obj.company.toLowerCase()) {
            return obj
        }

    });
    console.log(data1)


    displayProduct(data1) //pass filted arr for display
}

// filter product according to search




// function for display the product 
function displayProduct(data) {
    console.log(data)

    data.forEach((obj) => {
        console.log(data)

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = obj.Image;
        img.style.width = "100%"

        let comName = document.createElement("h4");
        comName.innerText = obj.company;

        let prodName = document.createElement("p");
        prodName.innerText = obj.Product;

        let rate = document.createElement("p");
        rate.innerText = `⭐ ${obj.Rating}   Rating : ${obj.Rating_count}`;

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


// featch data
fetch("/Sephora_Project/dataBase.json")
    .then((res) => res.json())
    .then((data) => {
        mainData = data
        console.log(mainData)
        searchProduct(mainData) //pass data for filter
    })
    .catch((err) => console.log(err))




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

//sort male
function sortMale(data) {
    productDiv.innerHTML = null
    data.filter((obj) => {

        if (obj.Gender == "Male") {

            return displayProduct([obj])

        }
    })
}

// sort female
function sortFemale(data) {

    productDiv.innerHTML = null
    data.filter((obj) => {

        if (obj.Gender == "Female") {

            return displayProduct([obj])

        }
    })
}
// Function Gender  Filter end

// function order filter

function sortOrder(){
    
    let sortBy = document.getElementById("chooseOrder").value
    let a = sortBy.toString()

    if (a == 1) {

        sortAtoZ()

    } else if (a == 2) {

        sortZtoA()
    }
}


function sortAtoZ(){
    // sorting data according to Rating
    data1.sort(function (a, b) {
        return a.company - b.company
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)
}


function sortZtoA(){
    // sorting data according to Rating
    data1.sort(function (a, b) {
        return b.company - a.company
    })
    // privius data will null
    productDiv.innerHTML = null
    displayProduct(data1)
}


// function add to cart start
function addToCart(obj) {

    let cartDetails = JSON.parse(localStorage.getItem("cartDetails")) || []
    cartDetails.push(obj)
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails))

}
// function add to cart end



// // search functinality

// let searchValue = document.getElementById("searchValue")
// function searchProduct() {

//     let value1 = searchValue.value
//     console.log(value1)

//     //localStorage.removeItem("searchValue")

//     localStorage.setItem("searchValue", JSON.stringify(value1))

//     window.location.href = "/Sephora_Project/Search/search.html"
// }

// // search functinality