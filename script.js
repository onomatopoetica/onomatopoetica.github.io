// reCaptcha prompt for user to check before submitting form
// $("form").submit(function (event) {

//     var recaptcha = $("#g-recaptcha-response").val();
//     if (recaptcha === "") {
//         event.preventDefault();
//         alert("Please confirm you're not a robot.");
//     }
// });

function recaptcha_callback() {
    $('#submit').removeAttr('disabled');
    $('#submit.btn').hover(function () {
        $(this).css("background-color", "#4fa4dd");
        $(this).css("color", "#FFFFFF");
    });
};

// Back To Top animation
var link = document.getElementById("back-to-top");
var amountScrolled = 250;

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > amountScrolled) {
        link.classList.add('show');
    } else {
        link.className = 'back-to-top';
    }
});

// Scrolls to Top
link.addEventListener('click', function (e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance / (500 / 16);
    function animateScroll() {
        window.scrollBy(0, increments);
        if (window.pageYOffset <= document.body.offsetTop) {
            clearInterval(runAnimation);
        }
    };
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
});

// Accordion animation
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}