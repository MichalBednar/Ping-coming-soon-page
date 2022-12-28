const form = document.getElementById("form")
const email = document.getElementById("email")
const errorMessage = document.querySelector(".error-msg")

form.addEventListener('submit', (e) => {
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (!email.value.match(regex)) {
        e.preventDefault()
        email.classList.add("invalid")
        errorMessage.style.display = "block"
    } else {
        email.classList.remove("invalid")
        errorMessage.style.display = "none"
    }
    })