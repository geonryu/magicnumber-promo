AOS.init();

gsap.to(".left", {
  yPercent: -50,
  alpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom 60%",
    scrub: true,
  },
});

gsap.to(".right", {
  yPercent: -80,
  alpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom 60%",
    scrub: true,
  },
});

gsap.to("h2", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
  },
});

const hd = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  const scr = this.scrollY;
  const h = this.innerHeight;
  scr > h ? hd.classList.add("ex") : hd.classList.remove("ex");
});
