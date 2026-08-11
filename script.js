document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next-btn");
    const backButtons = document.querySelectorAll(".back-btn");

    let currentPage = 0;

    // NEXT BUTTONS
    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (currentPage < pages.length - 1) {

                pages[currentPage].classList.remove("active");

                currentPage++;

                pages[currentPage].classList.add("active");
            }

        });

    });


    // BACK BUTTONS
    backButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (currentPage > 0) {

                pages[currentPage].classList.remove("active");

                currentPage--;

                pages[currentPage].classList.add("active");
            }

        });

    });

});