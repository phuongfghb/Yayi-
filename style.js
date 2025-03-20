const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

window.scrollTo({
    top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
    behavior: 'smooth'
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn trình duyệt cuộn ngay lập tức
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Trừ 50px để không bị che khuất
                behavior: 'smooth' // Hiệu ứng cuộn mượt
            });
        }
    });
});