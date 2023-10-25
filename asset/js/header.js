
const header = `<div class="container">
<div class="d-flex align-items-center justify-content-between">
    <div class="logo py-3"><a href="index.html">
        <img src="asset/image/logo.png" alt="logo" class="logo-img">
        </a>
    </div>
    <div class="search">
        <button class="btn location-button border py-2 px-3" data-bs-toggle="modal" data-bs-target="#locationModal">
            <span class="back me-2">
                <i class="fa-solid fa-location-dot"></i>
            </span>
            <span class="locat-name fs-6">Your Location</span>
            <i class="fa-solid fa-angle-down fs-12"></i>
        </button>
    </div>
    <ul class="menu d-flex gap-3 mb-0 fs-6">
        <li><a href="index.html" class="bk-clr">Home<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="bk-clr">Shop<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="product.html" class="bk-clr">Product<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="bk-clr">Mega Menu<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="bk-clr">Blog<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="bk-clr">pages<i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="bk-clr">Saler<i class="fa-solid fa-chevron-down"></i></a></li>
    </ul>
    <ul class="icons d-flex mb-0 gap-3 align-items-center">
        <li class="lgt-gray-clr"><i class="fa-regular fa-bookmark"></i></li>
        <div class="vr"></div>
        <li class="lgt-gray-clr position-relative">
        <a href="cart.html">
            <i class="fa-solid fa-cart-shopping lgt-gray-clr"></i>
            <span id="count" class="position-absolute top-0 start-100 translate-middle badge bg-danger fs-8">
                0   
            </span>
        </a>
        </li>
        <div class="vr"></div>
        <li class="lgt-gray-clr d-flex align-items-center"><i class="fa-regular fa-user me-3"></i>
            <div>
                <h6 class="m-0 fs-12">Hello,</h6>
                <h5 class="m-0 fs-14">My Account</h5>
            </div>
        </li>
    </ul>
</div>
</div>`
document.getElementById('header').innerHTML = header

// counting
function count() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    document.querySelector('#count').innerText = cart.length
}
count()

function deleteData(id) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart.splice(id, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    count()
    cartInfo()
}

function increase(id){
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart[id].qty++
    localStorage.setItem('cart', JSON.stringify(cart))
    cartInfo()
}
function decrease(id){
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart[id].qty--
    if(cart[id].qty == 0){
        cart.splice(id, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    cartInfo()
    count()
}
