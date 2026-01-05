document.addEventListener("DOMContentLoaded" , function(){
    const EmailAdd = document.getElementById("emailAdd");
    const pass = document.getElementById("password");
    const loginbutton = document.getElementById("loginButton");
    const createNewAc = document.getElementById("createnewAc");
     const signupbutton = document.getElementById("signbtn");
     const lastmsg = document.getElementById("last");
      const msge = document.getElementById("message");
      const msge1 = document.getElementById("messages");





    



loginbutton.addEventListener("click", function(){
    const emailAdd  = EmailAdd.value;
    if(emailAdd)
    {
        localStorage.setItem("emailAdd", emailAdd);
         message.textContent = "";
       
    }else{
        message.textContent ="Please enter your email Or Phone Number";
    }
    });


    loginbutton.addEventListener("click", function(){
    const password  = pass.value;
    if(password)
    {
        localStorage.setItem("password", password);
        message1.textContent = "";
         
      
    }else{
        message1.textContent ="Please enter your password";
        
    }
});
/*
    loginbutton.addEventListener("click", function(){
 const emailAdd  = EmailAdd.value;
  const password  = pass.value;
        if(password && emailAdd)
        {
            messagelast.textContent = "Log in Sucessfull"

        }
        else{
            messagelast.textContent = ""
        }

});
*/



loginbutton.addEventListener("click",function(){
      const emAddress = localStorage.getItem("emAddress");
    const passwd = localStorage.getItem("passwd");

    const emailAdd = localStorage.getItem("emailAdd");
    const password = localStorage.getItem("password");

    if(emailAdd !== emAddress)
    {
       
       message.textContent ="";
         messages.textContent = "invalid user name";
         messagelast.textContent = "";
           
    }else if(passwd !== password){
         message1.textContent = "";
         messages1.textContent="invalid password";
       
           messages.textContent = "";
             messagelast.textContent = "";
           message1.textContent = "";
    }else if(emailAdd === emAddress)

        {
            
          messages1.textContent="";
           messages.textContent = "";
        }
        else if( passwd === password){
        messagelast.textContent = "Log in Sucessfull";
          messages1.textContent="";
           messages.textContent = "";

    }else{
         messagelast.textContent = "Log in Sucessfull";
          messages1.textContent="";
           messages.textContent = "";
    }
});


/*

loginbutton.addEventListener("click", function(){
   
   if(EmailAdd.value)
   {
    localStorage.setItem("emailaddress", EmailAdd);
    message.textContent = "";
   }
   else{
    message.textContent ="Please enter your email Or Phone Number"
   }
});


loginbutton.addEventListener("click", function(){
   

   if(pass.value)
   {
    localStorage.setItem("passwords", pass);
    message1.textContent = "";
   }
   else{
    message1.textContent ="Please enter your password"
   }
});





    loginbutton.addEventListener("click", function(){
        if( password.value && EmailAdd.value)
        {
            
            messagelast.textContent = "Log in Sucessfull";
        }
        else{
           
        }
   
});

*/

createNewAc.addEventListener("click", function(){
     window.location.href = "newaccount.html";

});



     
});