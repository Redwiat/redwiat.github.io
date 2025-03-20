document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.querySelector(".profile-container");

    // 3D Effect on Mouse Move
    profileContainer.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        profileContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset Animation
    profileContainer.addEventListener("mouseleave", () => {
        profileContainer.style.transition = "transform 0.5s ease";
        profileContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    profileContainer.addEventListener("mouseenter", () => {
        profileContainer.style.transition = "none";
    });
});
