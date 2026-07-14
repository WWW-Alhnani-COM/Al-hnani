document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const video = document.getElementById("my-scroll-video");

    // وظيفة لتحريك الفيديو بناءً على السكرول
    function setupVideoScroll() {
        // التأكد من أن الفيديو جاهز
        video.pause();
        video.currentTime = 0;

        gsap.to(video, {
            currentTime: video.duration,
            ease: "none",
            scrollTrigger: {
                trigger: "#video-section",
                start: "top top",
                end: "bottom bottom", // سينتهي الفيديو عند وصول نهاية القسم لأسفل الشاشة
                scrub: 0.5,           // يضيف نعومة (Smoothness) لحركة الكاميرا
                pin: true,            // تثبيت الفيديو في الشاشة
                pinSpacing: true
            }
        });
    }

    // الانتظار حتى يتم تحميل بيانات الفيديو (Duration)
    if (video.readyState >= 1) {
        setupVideoScroll();
    } else {
        video.addEventListener("loadedmetadata", setupVideoScroll);
    }
});
