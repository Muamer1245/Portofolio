document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('DOMContentLoaded', function () {
        var projectsContainer = document.querySelector('.projects');
        var counters = document.querySelectorAll('.projects h3');
    
        var hasCounted = false; 
    
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !hasCounted) { 
                    startCounting();
                    hasCounted = true; 
                    observer.unobserve(projectsContainer); 
                }
            });
        });
    
        observer.observe(projectsContainer);
    
        function startCounting() {
            counters.forEach(function (counter) {
                var targetValue = parseInt(counter.textContent);
                var currentValue = 0;
                var increment = Math.ceil(targetValue / 100);
    
                var counterAnimation = setInterval(function () {
                    currentValue += increment;
                    counter.textContent = Math.round(currentValue);
    
                    if (currentValue >= targetValue) {
                        clearInterval(counterAnimation);
                        counter.textContent = targetValue;
                    }
                }, 50);
            });
        }
    });
    
});

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function showSlide(index) {
    projects.forEach((project, i) => {
        project.style.opacity = (i === index || i === index + 1) ? 1 : 0;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 2) % projects.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 2 + projects.length) % projects.length;
    showSlide(currentIndex);
}

function scrollToSection(className) {
    var element = document.querySelector(className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener("load", () => {
    const progressBar = document.getElementById("myProgressBar");

    // Function to update the progress bar
    function updateProgressBar() {
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + "%";
    }

    // Event listener for scroll events
    window.addEventListener("scroll", updateProgressBar);
    // Call the function initially to set the progress on page load
    updateProgressBar();
});