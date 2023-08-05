// xoa  cart

var remove_cart = document.getElementsByClassName("remove__icon") ;
for(var i = 0 ; i < remove_cart.length ; i++) {
    var button = remove_cart[i]
    button.addEventListener("click" , function(event){
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        
        updatecart()
    })
    
}

// Tài khoản
const username = document.getElementById('username');
const password = document.getElementById('password');
const email  = document.getElementById('email');
const phone = document.getElementById('phone');
const form1  = document.getElementById('form-1');
const form2  = document.getElementById('form-2');



function showError (input , message) {
    const parent  = input.parentElement.parentElement ;
    const small   = parent.querySelector('small') ;
    parent.classList.add('error');
    small.innerText = message ;
}

function showSuccess (input , message) {
    const parent  = input.parentElement.parentElement ;
    const small   = parent.querySelector('small') ;
    parent.classList.remove('error');
    small.innerText = ''
}

function isEmail(email)  {
    return  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ .test(email);

}

// Đăng nhập

form1.addEventListener('submit' , e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs () {
    // nhận value  từ  input

    // const  usernameValue = username.value.trim();
    // const  phoneValue = phone.value.trim();
    const  emailValue = email.value.trim();
    const  passwdValue = password.value.trim();

    // email

    if (emailValue === '') {
        showError (email, 'Email không được  bỏ  trống')
    } else if (!isEmail(emailValue)) {
        showError (email , 'Email không  hợp  lệ')
    } else {
        showSuccess(email)
    }

    // password 

    if  (passwdValue === '') {
        showError(password, 'Password không được  bỏ  trống')
    }else if (passwdValue.length < 8 ){
        showError(password, 'Password không đúng')
    }else {
        showSuccess (password)
    }

}


// update cart

function updatecart() {
    var cart_item = document.getElementsByClassName("table__product")[0];
    var cart_rows = cart_item.getElementsByClassName("table-heading");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i]
      var price_item = cart_row.getElementsByClassName("table-linePrice ")[0]
      var quantity_item = cart_row.getElementsByClassName("item-quantity")[0]
      var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value // lấy giá trị trong thẻ input
      total = total + (price * quantity)
    }
    document.getElementsByClassName("category-total")[0].innerText = total + '₫'

}

// thêm sản  phẩm



// Giỏ hàng
function addshop() {
    alert("Đã thêm vào giỏ hàng");
}

// Amount

let amountElement = document.getElementById('amount');
    let amount = amountElement.value;

    let render = (amount) => {
        amountElement.value = amount;
    }

    // Handle Plus

    let handlePlus = () => {
        amount++
        render(amount);
    }

    //Handl Minuss

    let handleMinus = () => {
        if (amount > 1)
            amount--
        render(amount);
    }

    amountElement.addEventListener('input',() => {
        amount = amountElement.value;
        amount = parseInt(amount); //chuyển đổi  một  chuỗi  thành  số  nguyên
        amount = (isNaN(amount) || amount == 0 )? 1 : amount;
        render(amount);
    });

 













