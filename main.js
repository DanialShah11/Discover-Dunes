// Header Image Indicators
const headerImage = document.querySelector('.header-image');
const headerImageIndicators = document.querySelectorAll('.header-image-indicator a');
let activeImage = 0;

headerImageIndicators.forEach((indicator, idx) => {
    indicator.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all images and indicators
        headerImage.querySelectorAll('img').forEach(img => img.classList.remove('active'));
        headerImageIndicators.forEach(indicator => indicator.classList.remove('active'));

        // Add 'active' class to the clicked image and indicator
        headerImage.children[idx].classList.add('active');
        this.classList.add('active');

        // Update the activeImage variable
        activeImage = idx;
    });
});

function carousel() {
    // Remove 'active' class from all images and indicators
    headerImage.querySelectorAll('img').forEach(img => img.classList.remove('active'));
    headerImageIndicators.forEach(indicator => indicator.classList.remove('active'));

    // Add 'active' class to the next image and indicator
    headerImage.children[activeImage].classList.add('active');
    headerImageIndicators[activeImage].classList.add('active');

    // Update the activeImage variable
    activeImage = (activeImage < headerImage.children.length - 1) ? activeImage + 1 : 0;

    // Schedule the next iteration
    setTimeout(function () {
        carousel();
    }, 5000);
}

carousel();

// Scroll-top effect
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

