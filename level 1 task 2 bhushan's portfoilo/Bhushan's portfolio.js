var typed = new Typed('#element', {
    strings: ['// Web Developer.', '// Programer.', '// Designer.', '// Student.'],
    typeSpeed: 50,
});

let currentIndex = 0;
        
function showSlide(index) {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tawabhushan25@gmail.com",
        Password : "Bstar@123",
        To : 'tawadebhushan25@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enwuiry",
        Body : "Name:" + document.getElementById("name").value 
        + "<br> Email:" + document.getElementById("email").value
        + "<br> Phone no.:" + document.getElementById("phone").value
        + "<br> Massage:" + document.getElementById("massage").value
    }).then(
      message => alert("Message Sent Success")
    );
}