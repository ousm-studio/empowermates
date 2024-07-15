const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // spaceBetween: 0,
    breakpoints: {
      1135: {
        slidesPerView: 2,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.querySelectorAll(".video-overlay").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src = vid.getAttribute("src");
  };
});

document.querySelector(".popup-video span").onclick = () => {
  let video = document.querySelector(".popup-video video");
  video.src = "";
  document.querySelector(".popup-video").style.display = "none";
};
