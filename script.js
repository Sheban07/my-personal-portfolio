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

