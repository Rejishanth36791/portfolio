console.log("Portfolio Loaded Successfully 🚀");

const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(sec => observer.observe(sec));

