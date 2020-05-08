

$(document).foundation();


$(() => {
    
    //Returns a login error message after redirect if user types incorrect password:
    $("#login-status").text() !== '' ? $("#login-status").toggleClass("invisible") : null;

    //Returns account creation message after redirect if email already exists
    $('#registration-status').text() !== '' ? $('#registration-status').toggleClass("invisible") : null;



    
})