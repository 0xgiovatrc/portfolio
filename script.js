function sendEmail(){
    if (document.getElementById("formID").checkValidity()){
        let params = {
            firstname: document.getElementById("firstname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };
        emailjs.send("service_k4cpndp", "template_qxe81i8", params)
        .then(alert("Message Sent Succesfully!"));
    };
}