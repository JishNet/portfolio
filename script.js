let body = document.querySelector("body");
let para = document.querySelector("p")
let links = document.querySelectorAll("a")
let logo = document.querySelector(".logo")
let live = document.querySelectorAll(".demo_btn a ")
let hed = document.querySelector(".idea_heading1")
let email = document.querySelector("#email")

let hello = document.querySelector(".p1")


let mod = document.querySelector(".switch .input")
function mode() {


    if (mod.checked) {
        body.style.background = "#212121";
        body.style.color = "#e8e8e8"
        hello.style.color = "white"

        logo.style.color = "#e8e8e8"
        hed.style.color = "white";
        for (let i = 0; i < 5; i++) {
            links[i].style.color = "#e8e8e8";
        }

        hed.style.color = "white";
        email.style.color = "#212121";
        para.style.color = "#e8e8e8"


    }
    else {
        body.style.background = "white";
        body.style.color = "#212121";
        hello.style.color = "#212121"
        logo.style.color = "#212121"
        hed.style.color = "#212121";
        for (let i = 0; i < 5; i++) {
            links[i].style.color = "#212121";

        }
        para.style.color = "#212121"
        email.style.color = "#212121";


    }


}


let xmark = document.querySelector("#xmark")
let bar = document.querySelector("#bar")
let content = document.querySelector(".humbermenu_content")
xmark.addEventListener("click", () => {
    content.style.display = "none";
    xmark.style.display = "none"
    bar.style.display = "block"
}
)
bar.addEventListener("click", () => {
    content.style.display = "block";

    xmark.style.display = "block"
    bar.style.display = "none"


})


window.addEventListener("load", function () {
    let load = document.querySelector("#load")
    let body = document.body

    load.style.display = "none";
    body.style.display = "block";
});
