/* Scroll to Top */
const btn = document.getElementById("scroll-to-top-btn");

// Näytä nappi kun skrollataan 200px alas
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scrollaa ylös napista
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

