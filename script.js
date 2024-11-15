//your JS code here. If required.
let inputName = document.getElementById("name")
let output = document.getElementById("output")
inputName.addEventListener("blur", (e) => {
    output.innerHTML = e.target.value.toUpperCase()
})



