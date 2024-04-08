var mainData = []
document.addEventListener("DOMContentLoaded", function () {

    fetch("indexDB.json")
        .then((res) => res.json())
        .then((data) => {
            mainData = data
            // console.log(data)
            // console.log(mainData)
            topSlider(mainData) //callfor topslider when dom loded
            topSlider1(mainData) //callfor topslider1 when dom loded
            topSlider2(mainData) //callfor topslider2 when dom loded
            productSlider1(mainData) //callfor productSlider1 when dom loded
            productSlider2(mainData) //callfor productSlider2 when dom loded
            productSlider3(mainData) //callfor productSlider3 when dom loded
            productOffers(mainData) //callfor productOffers when dom loded
            productReward(mainData) //callfor productreward when dom loded

        })
        .catch((err) => console.log(err))
    //console.log(mainData)

})

// function for display product class topslider- topslider1- topslider2
function displayProduct(data, productDiv) {

    data.forEach((obj) => {

        let div = document.createElement("div")
        div.style.width= "40%"

        // let div1 = document.createElement("div")


        let img = document.createElement("img")
        img.src = obj.image
        img.style.display="block"

        let div2 = document.createElement("div")
        div2.style.display="block"
        div2.style.whiteSpace="wrap"
        div2.style.boxSizing = "border-box";


        let h3 = document.createElement("h3")
        h3.innerText = obj.heading

        let p = document.createElement("p")
        p.innerText = obj.discription

        let h4 = document.createElement("h4")
        h4.innerText = obj.link

        div2.append(h3, p, h4)
        // div1.append()
        div.append(img, div2)

        productDiv.append(div)

    });
}
// function for display product class topslider- topslider1- topslider2


// topslider

function topSlider(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "topSlider") {
            return obj
        }
    })

    let topSlider = document.querySelector(".topSlider")
    displayProduct(data1, topSlider)
}
// topslider



function topSlider1(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "Beauty Offers2") {
            return obj
        }
    })
    let topSlider = document.querySelector(".topSlider1")
    displayProduct(data1, topSlider)
}
// topslider1


// topslider2

function topSlider2(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "Beauty Offers3") {
            return obj
        }
    })

    let topSlider = document.querySelector(".topSlider2")
    displayProduct(data1, topSlider)
}
// topslider2 buttons


// slider prev and next button
function prevButton(className){
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

// productdisplay1 function display class productSlider1, productSlider2, productslider3

function displayProduct1(data, productDiv) {

    data.forEach((obj) => {

        let div = document.createElement("div")
        div.style.width= "calc(100% / 6)"

        // let div1 = document.createElement("div")


        let img = document.createElement("img")
        img.src = obj.image
        img.style.display="block"

        let div2 = document.createElement("div")
        div2.style.display="block"
        div2.style.whiteSpace="wrap"
        div2.style.boxSizing = "border-box";


        let h3 = document.createElement("h5")
        h3.innerText = obj.heading

        let p = document.createElement("p")
        p.innerText = obj.discription

        let h4 = document.createElement("h4")
        h4.innerText = obj.price

        div2.append(h3, p, h4)
        // div1.append()
        div.append(img, div2)

        productDiv.append(div)

    });
}

// productdisplay1 function display class productslider1, productslider2, productslider3


// productslider1

function productSlider1(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "Chosen For You") {
            return obj
        }
    })

    let productSlider1 = document.querySelector(".productSlider1")
    displayProduct1(data1, productSlider1)
}
// productSlider1


// productSlider2

function productSlider2(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "New Arrivals") {
            return obj
        }
    })

    let productSlider2 = document.querySelector(".productSlider2")
    displayProduct1(data1, productSlider2)
}
// productSlider2


// productSlider3

function productSlider3(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "Selling Fast") {
            return obj
        }
    })

    let productSlider3 = document.querySelector(".productSlider3")
    displayProduct1(data1, productSlider3)
}
// productSlider3


// productdisplay2 function display class productOffers

function displayProduct2(data, productDiv) {
    console.log(data)

    data.forEach((obj) => {

        let div = document.createElement("div")
        div.style.width= "calc(100% / 5)"

        // let div1 = document.createElement("div")

        let img = document.createElement("img")
        img.src = obj.image
        img.style.display="block"

        let div2 = document.createElement("div")
        div2.style.display="block"
        div2.style.whiteSpace="wrap"
        div2.style.boxSizing = "border-box";

        let h4 = document.createElement("h4")
        h4.innerText = obj.heading

        let p = document.createElement("p")
        p.innerText = obj.discription

        let p1 = document.createElement("p")
        p1.innerText = obj.discriptions

        let p2 = document.createElement("p")
        p2.innerText = obj.discription2

        let button=document.createElement("button")
        button.innerText="Shop Now"

        div2.append(h4, p, p1, p2, button)
        // div1.append()
        div.append(img, div2)

        productDiv.append(div)

    });
}

// productdisplay2 function display class productOffers


// productOffers

function productOffers(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "Beauty Offers") {
            return obj
        }
    })

    let productOffers = document.querySelector(".productOffers")
    displayProduct2(data1, productOffers)
}
// productOffers


// productdisplay function display class productReward

function displayProduct3(data, productDiv) {
    console.log(data)

    data.forEach((obj) => {

        let div = document.createElement("div")
        div.style.width= "calc(100% / 6)"

        // let div1 = document.createElement("div")

        let img = document.createElement("img")
        img.src = obj.image
        img.style.display="block"

        let div2 = document.createElement("div")
        div2.style.display="block"
        div2.style.whiteSpace="wrap"
        div2.style.boxSizing = "border-box";

        let h5 = document.createElement("h5")
        h5.innerText = obj.heading

        let p = document.createElement("p")
        p.innerText = obj.discription

        let h3 = document.createElement("h4")
        h3.innerText = obj.points

        let button=document.createElement("button")
        button.innerText="Sign In to Access"

        div2.append(h5, p, h3, button)
        // div1.append()
        div.append(img, div2)

        productDiv.append(div)

    });
}

// productdisplay3 function display class productReward


// productReward

function productReward(data) {

    let data1 = data.filter((obj) => {
        if (obj.catagory == "BeautyInside") {
            return obj
        }
    })

    let productReward = document.querySelector(".productReward")
    displayProduct3(data1, productReward)
}
// productReward