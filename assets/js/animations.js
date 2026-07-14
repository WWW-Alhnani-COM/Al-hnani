(function () {
  "use strict";

  // 1. انتظر تحميل الصفحة بالكامل
  document.addEventListener("DOMContentLoaded", () => {
    // التأكد من وجود GSAP
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // --- التحكم في الفيديو (Scroll-driven Video) ---
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
              scrub: 0.5
            }
          });
        }
        video.readyState >= 1 ? setupVideo() : video.addEventListener("loadedmetadata", setupVideo);
      }
    }

    // --- تأثير الـ Glow و Galaxy ---
    const glowBall = document.getElementById('glowBall');
    const canvas = document.getElementById('galaxyCanvas');

    if (glowBall) {
      let mouseX = 0, mouseY = 0, ballX = 0, ballY = 0;

      function updateGlowPosition(e) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        mouseX = clientX; mouseY = clientY;
      }

      function animateGlow() {
        ballX += (mouseX - ballX) * 0.15;
        ballY += (mouseY - ballY) * 0.15;
        glowBall.style.transform = `translate(${ballX}px, ${ballY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateGlow);
      }

      window.addEventListener('mousemove', updateGlowPosition);
      window.addEventListener('touchmove', updateGlowPosition, { passive: true });
      animateGlow();
    }

    if (canvas && glowBall) {
      const ctx = canvas.getContext('2d');
      const SIZE = glowBall.offsetWidth;
      canvas.width = SIZE; canvas.height = SIZE;
      const centerX = SIZE / 2, centerY = SIZE / 2;
      const stars = [];
      const colors = ["#ffffff", "#dbe9ff", "#9fd4ff", "#fff4c7", "#ffe6aa"];

      for (let i = 0; i < 250; i++) {
        stars.push({
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 420,
          size: Math.random() * 2.5 + 0.4,
          speed: 0.0002 + Math.random() * 0.0008,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkle: Math.random() * 1000
        });
      }

      function animateGalaxy() {
        ctx.clearRect(0, 0, SIZE, SIZE);
        stars.forEach(star => {
          star.angle += star.speed;
          const x = centerX + Math.cos(star.angle) * star.distance;
          const y = centerY + Math.sin(star.angle) * star.distance;
          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.arc(x, y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animateGalaxy);
      }
      animateGalaxy();
    }

    // --- Fade Up Animation ---
    const fadeEls = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    fadeEls.forEach(el => fadeObserver.observe(el));

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';

    // --- Scroll Top ---
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) {
      scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      window.addEventListener('scroll', () => {
        scrollTop.style.display = window.scrollY > 200 ? 'flex' : 'none';
      });
    }
  });
})();
