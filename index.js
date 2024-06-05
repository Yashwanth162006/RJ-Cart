/* Adding js to menu-bar buttons */
const icons = document.querySelector(".menu-bar").getElementsByClassName("fa-solid");
for(let i=0;i<icons.length-1;i++){
    icons[i].addEventListener("click",function(){
        for(let j=0;j<icons.length-1;j++){
            if(j!== i) {
                icons[j].classList.remove("click");
            }
        }
        icons[i].classList.toggle("click");
    })
}

/* Adding js to filter panel to update no of filters selected */
const checkboxes = document.querySelectorAll(".cat input");
let count = 0;
for(let i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener("click",function(){
        if(checkboxes[i].checked){
            count++;
        }else{
            count--;
        }
        document.querySelector(".catCounter").innerHTML = count+' applied';
        if(count === checkboxes.length){
            document.querySelector(".catCounter").innerHTML = 'All applied('+count+')';
        }
    })
}

/* Adding js to filter panel to update no of filters selected */
const checkboxes1 = document.querySelectorAll(".brand input");
let count1 = 0;
for(let i=0;i<checkboxes1.length;i++){
    checkboxes1[i].addEventListener("click",function(){
        if(checkboxes1[i].checked){
            count1++;
        }else{
            count1--;
        }
        document.querySelector(".brandCounter").innerHTML = count1+' applied';
        if(count1 === checkboxes1.length){
            document.querySelector(".brandCounter").innerHTML = 'All applied('+count1+')';
        }
    })
}

/*  Adding js to side-bars */
const menuIcon = document.querySelector(".fa-bars");
menuIcon.addEventListener("click",function(){
    menuIcon.classList.toggle("click");
    document.querySelector(".side-bar").classList.toggle("make-visible");
})
document.addEventListener("click",function(event){
    if(event.target !== menuIcon && !document.querySelector(".side-bar").contains(event.target)){
        document.querySelector(".side-bar").classList.remove("make-visible");
        menuIcon.classList.remove("click")
    }
})

/* Addding js to like-buttons */
const likeButtons = document.querySelectorAll(".products .fa-heart");
for(let i=0;i<likeButtons.length;i++){
    likeButtons[i].addEventListener("click",function(){
        likeButtons[i].classList.toggle("fa-regular");
        likeButtons[i].classList.toggle("fa-solid");
    })
}

/* Adding js to stars for rating */
for(let m=0;m<7;m++){
    const starButtons = document.querySelectorAll(".product-card")[m].getElementsByClassName("fa-star");
    for(let i=0;i<starButtons.length;i++){
        starButtons[i].addEventListener("click",function(){
            for(let j=0;j<=i;j++){
                starButtons[j].classList.add("pink");
            }
            for(let j=i+1;j<starButtons.length;j++){
                starButtons[j].classList.remove("pink");
            }
        })
        starButtons[i].addEventListener("dblclick",function(){
            starButtons[i].classList.remove("pink");
        })
    }
}

/* Adding a product to cart */
let cartItems = [];
let cartButtons = document.querySelectorAll(".products .fa-cart-shopping")
for(let i=0;i<cartButtons.length;i++){
    cartButtons[i].addEventListener("click",function(){
        cartButtons[i].classList.toggle("click");
        let productName = document.querySelectorAll(".info h3")[i].innerHTML;
        let isThere = false;
        let index = -1
        for(let j=0;j<cartItems.length;j++){
            if(productName === cartItems[j]){
                isThere = true;
                index = j;
                break;
            }
        }
        if(isThere === false){
            cartItems.push(productName);
        }else{
            cartItems.splice(index,1);
        }
        updateCart();
        let no_of_items = document.querySelector(".cart-tail").querySelector("#no-of-items");
        let button = document.querySelector(".cart-tail").querySelector("button");
        if(cartItems.length === 0){
            no_of_items.innerHTML = " ";
            button.innerHTML = "Add Items";
        }else{
            no_of_items.innerHTML = "Total "+cartItems.length+" items";
            button.innerHTML = "Check Out";
        }
    })
}

function updateCart(){
    let cartBody = document.querySelector(".cart-body");
    cartBody.innerHTML = '';
    if(cartItems.length === 0){
        cartBody.innerHTML = "<h3>Empty Cart</h3>"
    }else{
        for(let i=0;i<cartItems.length;i++){
            let h4 = document.createElement('h4');
            h4.textContent = cartItems[i];
            cartBody.appendChild(h4);
        }
    }
}

let main_cart_button = document.querySelector(".menu-bar").querySelector(".fa-cart-shopping");
main_cart_button.addEventListener("click",function(){
    document.querySelector(".cart-popout").classList.toggle("make-visible");
})

let Add_items_button = document.querySelector(".cart-tail").querySelector("button");
Add_items_button.addEventListener("click",function(){
    if(Add_items_button.innerHTML === "Add Items"){
        document.querySelector(".cart-popout").classList.remove("make-visible");
        main_cart_button.classList.remove("click");
    }
})