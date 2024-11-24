/*The following block checks the width of the scree if its on desktop, Tablet or mobile devices
- if its on Desktop devices retain its default
- if its on mobile devices the menulinks disappears and shows the menuicon.
*/
let menuLinks = document.getElementById("menuLinks")
let manuIcon = document.getElementById("menuIcon")

menuLinks.style.maxHeight = "0px"
menuIcon.addEventListener("click", () => {
    if(menuLinks.style.maxHeight === "0px")
    {
        menuLinks.style.maxHeight = "350px"
    }
    else{
        menuLinks.style.maxHeight = "0px"
    }
})

const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("messages");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shebankaingu@gmail.com",
        Password : "2A9E8EA50617077C72AAA0F753AFB54D85EE",
        To : 'shebankaingu@gmail.com',
        From : "shebankaingu@gmail.com",
        Subject : "From Your Personal Portfolio",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
        if (message == "OK") {
            form.reset();
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
    if (message == "OK") {
        
    }
});
