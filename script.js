let modal = document.getElementsByClassName("modal");
let btn = document.getElementsByClassName("myBtn");
let span =document.getElementsByClassName("close");


for (let i = 0; i < btn.length; i++) {
    let thisBtn = btn[i];
    thisBtn.addEventListener("click", function () {
        modal[i].style.display = "block";
    }, false);
}

for (let i = 0; i < span.length; i++) {
    let thisSpan = span[i];
    thisSpan.addEventListener("click", function () {
        modal[i].style.display = "none";
    }, false);
}

