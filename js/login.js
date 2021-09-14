document.getElementById('your-button').addEventListener('click', function(){
    const emailFile = document.getElementById('your-email');
    const getEmail = emailFile.value;
    

    const passwordFile = document.getElementById('your-password');
    const getpassword = passwordFile.value;

    if(getEmail == 'top.com' && getpassword == '123'){
        window.location.href ='banking.html';

    }
    
});



