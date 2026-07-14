gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("my-scroll-video");

if (video) {
    // التأكد من أن الفيديو جاهز قبل تطبيق التأثير
    video.addEventListener("loadedmetadata", () => {
        
        // إيقاف التشغيل التلقائي الافتراضي
        video.pause();
        video.currentTime = 0;

        // ربط الفيديو بالسكرول
        gsap.to(video, {
            // نستخدم currentTime الموجود في الفيديو مباشرة بدلاً من رقم ثابت
            currentTime: video.duration, 
            ease: "none",
            scrollTrigger: {
                trigger: "#video-section",
                start: "top top",
                end: "+=" + (video.duration * 100), // طول القسم يعتمد على مدة الفيديو (سلاسة أكبر)
                scrub: 0.5, // تقليل القيمة لزيادة سرعة الاستجابة للسكرول
                pin: true,  // تثبيت الفيديو في مكانه أثناء التمرير
                invalidateOnRefresh: true // لضمان دقة الحسابات عند تغيير حجم الشاشة
            }
        });
    });

    // حل مشكلة المتصفحات التي لا تشغل الفيديو في الـ "Metadata" تلقائياً
    video.load();
}
