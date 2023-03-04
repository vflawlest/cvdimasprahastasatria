// Toggle sidebar
const navbarNav = document.querySelector(".navbar-nav");

// Mengambil elemen hamburger menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};

// Toggle penghilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("aktif");
  }
});
