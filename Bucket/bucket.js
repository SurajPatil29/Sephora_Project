
let cartTotal=document.getElementById("cartTotal")
    let cartProduct = document.getElementById("cartProduct")
    let cartDetails=JSON.parse(localStorage.getItem("cartDetails")) || []

    displayProduct(cartDetails)

    cartTotalPrice(cartDetails)

    function cartTotalPrice(data){
        let total=data.reduce(function(accu, ele){
            return accu + ele.Price
        },0)
        cartTotal.innerText=`Total Amount : $${total}`
    }

function displayProduct(data){
    data.forEach((obj, index) => {
        let div=document.createElement("div");
        
        let img=document.createElement("img");
        img.src=obj.Image;
        img.style.height="200px"

        let comName=document.createElement("h5");
        comName.innerText=obj.company;

        let prodName=document.createElement("p");
        prodName.innerText=obj.Product;

        let rate=document.createElement("p");
        rate.innerText=`✬ ${obj.Rating}   ${obj.Rating_count}`;

        let price=document.createElement("p");
        price.innerText=`$ ${obj.Price}`

        let button=document.createElement("button")
        button.innerText = "Remove From Bucket";
        button.onclick = function() {
                removeFromCart(index)
        }

        let style =`
            margin: 5px;
        `
        let bucketDiv =document.createElement("div")
        bucketDiv.style=style

        let button1=document.createElement("button")
        button1.innerText = "Check Out";
        button1.onclick = function (){
            localStorage.setItem("product", JSON.stringify(obj))
            window.location.href="checkOut.html"
        }
        


        bucketDiv.append(button1)
        div.append(img,comName,prodName,rate,price,bucketDiv, button)
        cartProduct.append(div)
    })

}
function removeFromCart(index) {

        cartDetails.splice(index, 1);


        localStorage.setItem("cartDetails", JSON.stringify(cartDetails));

        cartProduct.innerHTML = "";

        displayProduct(cartDetails);

        cartTotalPrice(cartDetails)
}




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