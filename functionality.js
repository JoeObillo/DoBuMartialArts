function toggleText(policyname) {
        var text = document.getElementById(policyname);
        if (text.style.display === "none") {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      }

function validateForm(){

    var name = document.forms.form.name.value;
    var email = document.forms.form.email.value;
    var password = document.forms.form.pwd.value;

    var formEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    var formName = /\d+$/g;                          
 
    if (name == "" || formName.test(name)) {
        window.alert("Please enter your name properly.");
        return false;
    } 

    if (email == "" || !formEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password");
        return false;
    }
 
    if(password.length <6){
        alert("Password should be atleast 6 character long");
        return false;
    }

    return alert ("Success");
}