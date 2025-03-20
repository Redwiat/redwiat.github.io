document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.querySelector(".profile-pic");

    // Profile Picture Hover Effect
    profilePic.addEventListener("mouseenter", () => {
        profilePic.style.transform = "scale(1.1)";
        profilePic.style.transition = "transform 0.3s ease-in-out";
    });

    profilePic.addEventListener("mouseleave", () => {
        profilePic.style.transform = "scale(1)";
    });
});
