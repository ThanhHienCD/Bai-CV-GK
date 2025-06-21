var typed = new Typed(".text", {
  strings: ["Gamer +.+", "Newbie T_T", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
