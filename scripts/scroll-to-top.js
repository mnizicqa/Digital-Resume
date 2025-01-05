const scrollBtn = document.getElementById("scroll-to-top");

const refreshButtonVisibility = () => {
  const offsetTop = document.getElementById("education--wrapper").offsetTop;
  if (document.documentElement.scrollTop <= offsetTop) {
    scrollBtn.style.display = "none";
    localStorage.setItem("scrollBtn", null);
  } else {
    scrollBtn.style.display = "block";
    localStorage.setItem("scrollBtn", "active");
  }
};

refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  refreshButtonVisibility();
});
