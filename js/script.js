$(function() {
    $(".nav-icon").click(function() {
        $("header .left-container").slideToggle();
    })

    AOS.init({
        duration: 1000,
        delay: 500,
    });
})

function border() {
    document.getElementById("nav-icon").style.border = "2px solid #f9ca24"
}

//start form validation
var user_name = document.getElementById("userName");
var user_email = document.getElementById("userEmail");
var user_phone = document.getElementById("userPhone");
var return_val = 1;

function Validation() {
    if (user_name.value == "") {
        document.getElementById('usererror').innerHTML = "* Please Enter Your Name";
        return_val = 0;

    } else {
        document.getElementById('usererror').innerHTML = "";
        return_val = 1;
    }
    if (user_email.value == "") {
        document.getElementById('emailerror').innerHTML = "* Please Enter Your Email";
        return_val = 0;
    } else {
        document.getElementById('emailerror').innerHTML = "";
        return_val = 1;
    }
    if (user_phone.value == "") {
        document.getElementById('phoneerror').innerHTML = "* Please Enter Your Phone";
        return_val = 0;
    } else {
        document.getElementById('phoneerror').innerHTML = "";
        return_val = 1;
    }
    if (return_val) {
        return true;

    } else {
        return false;
    }

}