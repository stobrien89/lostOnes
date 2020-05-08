

$(document).foundation()

$(() => {
    
    //Returns a login error message after redirect if user types incorrect password:
    $("#login-status").text() !== '' ? $("#login-status").toggleClass("invisible") : null;

    //Returns account creation message after redirect if email already exists
    $('#registration-status').text() !== '' ? $('#registration-status').toggleClass("invisible") : null;



    $.ajax({
        url: 'http://localhost:3000/',
        type: 'GET',
        global: false,
        success: (session) => {
            session.username ? console.log(session.username) : console.log('error')
        }
    })
})