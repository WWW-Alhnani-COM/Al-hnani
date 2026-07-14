(function () {
  "use strict";

  // 1. انتظر تحميل الـ DOM
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 2. التحكم في الفيديو (الخلفية)
    const video = document.getElementById("my-scroll-video");
    if (video) {
        video.pause();
        video.currentTime = 0;
        
        function setupVideo() {
            gsap.to(video, {
                currentTime: video.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                    pin: false // الفيديو مثبت بـ CSS
                }
            });
        }
        video.readyState >= 1 ? setupVideo() : video.addEventListener("loadedmetadata", setupVideo);
    }

    // 3. كود الـ Galaxy (الذي أرسلته أنت)
    // ضع منطق الـ Galaxy هنا...
    
    // 4. كود الـ FadeUp (الذي أرسلته أنت)
    // ضع منطق الـ FadeUp هنا...
  });

})();
