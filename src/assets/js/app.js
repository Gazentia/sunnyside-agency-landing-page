const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const state = mobileNav.classList;
  if (!state.contains("fade-in")) {
    state.add("fade-in");
    state.remove("fade-out");
  } else {
    state.add("fade-out");
    state.remove("fade-in");
  }
});
