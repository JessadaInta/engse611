let img = document.getElementById("zoom");

img.onclick = function () {
    img.classList.toggle("azoom");
}

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll("table.table-show button");


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // เปลี่ยนเส้นทางไปยังหน้าเว็บที่ต้องการ (เช่น challenge1.html, challenge2.html, ...)
            window.location.href = `../challengeFile/challenge${index + 1}.html`;
        });
    });
});


