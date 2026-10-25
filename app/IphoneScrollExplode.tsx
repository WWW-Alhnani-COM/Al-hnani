"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import NotchedProjectCard from "@/components/ui/notched-project-card";
import AnimatedJobCard from "@/components/ui/animated-card";
import LogoLoop from '../components/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiFlutter,
  SiLaravel,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import CountUp from "@/components/CountUp";
import PixelTransition from "@/components/PixelTransition";
import ElectricBorder from '@/components/ElectricBorder';
import '@/components/ElectricBorder.css';

// ===== بيانات مشاريعك =====
const projects = [
  {
    id: 1,
    name: 'عطر أوسما',
    title: 'Osma Perfume',
    handle: 'osma-perfume',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a12.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a12.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a12.jpg',
    link: 'https://osma-perfume.vercel.app',
    description: 'عطر فاخر بتصميم عصري وتجربة تسوق أنيقة.'
  },
  {
    id: 2,
    name: 'ACCMA للحسابات السحابية',
    title: 'ACCMA Cloud Accounting',
    handle: 'accmah',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a.jpg',
    link: 'https://accmah.com',
    description: 'منصة محاسبة سحابية متكاملة للشركات والمؤسسات.'
  },
  {
    id: 3,
    name: 'نظام إدارة الشحن',
    title: 'Shipping Management System',
    handle: 'shipping-system',
    status: 'قيد التطوير',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a2.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a2.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a2.jpg',
    link: '#',
    description: 'نظام متقدم لإدارة عمليات الشحن والتوصيل.'
  },
  {
    id: 4,
    name: 'أكاديمية ZealEra',
    title: 'ZealEra Academy',
    handle: 'zealera',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    link: 'https://esraazealera.com',
    description: 'تعليم مبتكر للطلاب والمعلمين بمناهج تفاعلية.'
  },
  {
    id: 5,
    name: 'مفتاحك',
    title: 'Moftaahk',
    handle: 'moftaahk',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a11.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a11.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a11.jpg',
    link: 'https://moftaahk.com',
    description: 'حلول رقمية ذكية لإدارة المفاتيح والوصول.'
  },
  {
    id: 7,
    name: 'موقع Shuhnaty',
    title: 'Shuhnaty',
    handle: 'shuhnaty',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a10.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a10.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a10.jpg',
    link: 'https://shuhnaty.vercel.app',
    description: 'منصة شحن متكاملة لتتبع الطرود والخدمات اللوجستية.'
  },
  {
    id: 8,
    name: 'إسلامي — التطبيق الإسلامي',
    title: 'Islamy App',
    handle: 'islamy-web',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a5.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a5.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a5.jpg',
    link: 'https://islamy-web.vercel.app',
    description: 'تطبيق إسلامي شامل: أذكار، قرآن، مواقيت الصلاة.'
  },
  {
    id: 9,
    name: 'منصة Lernerra',
    title: 'Lernerra Platform',
    handle: 'lernerra',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a7.jpg',
    link: 'https://lernerra-platform.vercel.app',
    description: 'منصة التعلم والتطوير المهني للمدربين والمتعلمين.'
  },
  {
    id: 10,
    name: 'شركة مداد العقارية',
    title: 'Midad Real Estate',
    handle: 'midad2',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a1.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a1.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a1.jpg',
    link: 'https://midad2-pi.vercel.app',
    description: 'بوابة عقارية متكاملة للبيع والإيجار والاستشارات.'
  },
  {
    id: 11,
    name: 'Lahnui',
    title: 'Lahnui',
    handle: 'lahnui',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a6.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a6.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a6.jpg',
    link: 'https://lahnui.vercel.app',
    description: 'عالم من الإلهام والأفكار الجديدة في قالب عصري.'
  },
  {
    id: 12,
    name: 'Mohamed Saad',
    title: 'Mohamed Saad',
    handle: 'mohamed-saad',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a9.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a9.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a9.jpg',
    link: 'https://mohamed-saad.com',
    description: 'شغف يتجسّد — موقع شخصي للمبدع محمد سعد.'
  },
  {
    id: 13,
    name: 'منصة Etrain',
    title: 'Etrain Education',
    handle: 'etrain',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a4.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a4.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a4.jpg',
    link: 'https://etrain-nine.vercel.app',
    description: 'منصة تعليمية متكاملة للتعليم التفاعلي عن بُعد.'
  },
  {
    id: 14,
    name: 'GroFit Wear',
    title: 'GroFit Wear',
    handle: 'grofit-wear',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a8.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a8.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a8.jpg',
    link: 'https://grofit-wear.com',
    description: 'ارتدِ النشاط، عِش اللياقة — ملابس رياضية عصرية.'
  },
  {
    id: 15,
    name: 'نظام إدارة المطاعم Episys',
    title: 'Episys Restaurant',
    handle: 'episys',
    status: 'مكتمل',
    contactText: 'عرض المشروع',
    avatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a3.jpg',
    iconUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a3.jpg',
    miniAvatarUrl: 'https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/a3.jpg',
    link: 'https://episys.vercel.app',
    description: 'نظام إدارة المطاعم والطلب الذكي (Episys).'
  }
];

// ===== بيانات التقنيات والمهارات =====
const techLogos = [
  { 
    node: <SiReact className="text-[#61DAFB]" />, 
    title: "React", 
    href: "https://react.dev",
    ariaLabel: "React JS"
  },
  { 
    node: <SiNextdotjs className="text-white dark:text-white" />, 
    title: "Next.js", 
    href: "https://nextjs.org",
    ariaLabel: "Next.js"
  },
  { 
    node: <SiTypescript className="text-[#3178C6]" />, 
    title: "TypeScript", 
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript"
  },
  { 
    node: <SiTailwindcss className="text-[#06B6D4]" />, 
    title: "Tailwind CSS", 
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS"
  },
  { 
    node: <SiFlutter className="text-[#02569B]" />, 
    title: "Flutter", 
    href: "https://flutter.dev",
    ariaLabel: "Flutter"
  },
  { 
    node: <SiLaravel className="text-[#FF2D20]" />, 
    title: "Laravel", 
    href: "https://laravel.com",
    ariaLabel: "Laravel"
  },
  { 
    node: <SiFirebase className="text-[#FFCA28]" />, 
    title: "Firebase", 
    href: "https://firebase.google.com",
    ariaLabel: "Firebase"
  },
  { 
    node: <SiMysql className="text-[#4479A1]" />, 
    title: "MySQL", 
    href: "https://mysql.com",
    ariaLabel: "MySQL"
  },
  { 
    node: <SiGit className="text-[#F05032]" />, 
    title: "Git", 
    href: "https://git-scm.com",
    ariaLabel: "Git"
  },
  { 
    node: <SiGithub className="text-white dark:text-white" />, 
    title: "GitHub", 
    href: "https://github.com",
    ariaLabel: "GitHub"
  },
  { 
    node: <SiVercel className="text-white dark:text-white" />, 
    title: "Vercel", 
    href: "https://vercel.com",
    ariaLabel: "Vercel"
  },
  { 
    node: <SiDocker className="text-[#2496ED]" />, 
    title: "Docker", 
    href: "https://docker.com",
    ariaLabel: "Docker"
  },
  { 
    node: <FaAws className="text-[#FF9900]" />, 
    title: "AWS", 
    href: "https://aws.amazon.com",
    ariaLabel: "AWS"
  },
];

// ===== عدد الإطارات للصور =====
const FRAME_COUNT = 64;

// ===== بيانات النصوص في الهيرو =====
const textBlocks = [
  {
    id: 0,
    title: "Mohammed Al-Hanani",
    subtitle: "Full-Stack Web Developer | مهندس برمجيات",
    align: "center" as const,
    start: 0,
    end: 0.20,
  },
  {
    id: 1,
    title: "التميز والخبرة",
    subtitle: "تطوير تطبيقات وتصميم حلول برمجية بمعايير عالمية",
    align: "left" as const,
    start: 0.18,
    end: 0.5,
  },
  {
    id: 2,
    title: "الخدمات والمهارات",
    subtitle: "Flutter, Laravel, Firebase & Modern Web Tech",
    align: "right" as const,
    start: 0.48,
    end: 0.75,
  },
  {
    id: 3,
    title: "تواصل معي",
    subtitle: "جاهز لتحويل أفكارك إلى حلول برمجية احترافية",
    align: "center" as const,
    start: 0.73,
    end: 0.80,
  },
];

// ===== دالة مسار الصور =====
function getFramePath(index: number) {
  return `https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/me/ffout${String(index + 1).padStart(3, "0")}.gif`;
}

export default function PortfolioMain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [aboutGradientProgress, setAboutGradientProgress] = useState(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState(false);

  // ===== نصوص ثابتة لتأثير الكتابة =====
  const FULL_NAME = "Mohammed Al-Hanani";
  const FULL_TITLE = "Full-Stack Web Developer | مهندس برمجيات";

  const [showTyping, setShowTyping] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // مؤشرات الكتابة باستخدام useRef لتجنب مشاكل الإغلاق
  const nameIndexRef = useRef(0);
  const titleIndexRef = useRef(0);

  // مرجع لتخزين النصوص النهائية لمنع undefined
  const finalNameRef = useRef("");
  const finalTitleRef = useRef("");

  // إحداثيات مؤشر الفأرة لتتبع البقعة الكاشفة
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isInsideHero, setIsInsideHero] = useState(false);

  // حالة نموذج الاتصال
const [formStatus, setFormStatus] = useState(false);
const [formSending, setFormSending] = useState(false);
const [formError, setFormError] = useState("");  
  // حالة القائمة المنبثقة للجوال (Mobile Menu)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // حالة عرض المشاريع (للجوال)
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ===== الثيم الداكن ثابت بعد إزالة زر تبديل الثيم =====
  const isDark = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const framePaths = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, index) => getFramePath(index)),
    []
  );

  // كشف حجم الشاشة
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ===== تحسين معالجة السكرول =====
  useEffect(() => {
    const updateScrollProgress = () => {
      const heroScrollDistance = window.innerHeight * 3;
      const nextProgress = Math.min(1, Math.max(0, window.scrollY / heroScrollDistance));
      progressRef.current = nextProgress;
      setScrollProgress(nextProgress);

      // يبدأ التدرّج عند الوصول إلى موضع قسم About Me، ثم يكتمل تدريجيًا خلال ارتفاع شاشة.
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutStart = aboutSection.getBoundingClientRect().top + window.scrollY;
        const gradientProgress = Math.min(
          1,
          Math.max(0, (window.scrollY - aboutStart) / Math.max(1, window.innerHeight))
        );
        setAboutGradientProgress(gradientProgress);
      }
    };

    // تحديث فوري
    updateScrollProgress();

    let frameId = 0;
    const handleScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    // استخدام passive: true لتحسين الأداء
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  
  // ===== تحميل الإطارات تدريجياً بعدد طلبات محدود =====
  useEffect(() => {
    let cancelled = false;
    let nextIndex = 0;
    let completed = 0;
    let updateScheduled = false;
    let updateRaf = 0;

    const loadedFrames: HTMLImageElement[] =
      new Array(framePaths.length);

    // جمع تحديثات الصور لتقليل إعادة التصيير
    const scheduleFramesUpdate = () => {
      if (updateScheduled || cancelled) return;

      updateScheduled = true;

      updateRaf = window.requestAnimationFrame(() => {
        updateScheduled = false;

        if (!cancelled) {
          setFrames([...loadedFrames]);
        }
      });
    };

    const loadImage = (path: string, index: number) =>
      new Promise<void>((resolve) => {
        const image = new window.Image();
        image.decoding = "async";

        image.onload = () => {
          if (!cancelled) {
            loadedFrames[index] = image;
            completed += 1;

            scheduleFramesUpdate();

            if (index === 0) {
              setIsFirstFrameReady(true);
              setIsLoaded(true);
            }

            if (completed === framePaths.length) {
              setIsLoaded(true);
            }
          }

          resolve();
        };

        image.onerror = () => {
          if (!cancelled) {
            completed += 1;

            if (completed === framePaths.length) {
              setIsLoaded(true);
            }
          }

          resolve();
        };

        image.src = path;
      });

    // ستة طلبات متزامنة بدلاً من تحميل جميع الصور دفعة واحدة
    const worker = async () => {
      while (!cancelled && nextIndex < framePaths.length) {
        const index = nextIndex++;
        await loadImage(framePaths[index], index);
      }
    };

    const workerCount = Math.min(6, framePaths.length);

    void Promise.all(
      Array.from({ length: workerCount }, () => worker())
    );

    const timer = window.setTimeout(() => {
      if (!cancelled) {
        setIsLoaded(true);
      }
    }, 1500);

    return () => {
      cancelled = true;
      clearTimeout(timer);

      if (updateRaf) {
        window.cancelAnimationFrame(updateRaf);
      }
    };
  }, [framePaths]);

  // ===== تأثير الكتابة =====
  useEffect(() => {
    if (isLoaded && scrollProgress === 0) {
      setShowTyping(true);
    } else {
      setShowTyping(false);
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    }
  }, [isLoaded, scrollProgress]);

  useEffect(() => {
    if (!showTyping) {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      return;
    }

    if (nameIndexRef.current === 0 && titleIndexRef.current === 0) {
      setTypedName("");
      setTypedTitle("");
      finalNameRef.current = "";
      finalTitleRef.current = "";
    }

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = setInterval(() => {
      const nameDone = nameIndexRef.current >= FULL_NAME.length;
      const titleDone = titleIndexRef.current >= FULL_TITLE.length;

      if (nameDone && titleDone) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        return;
      }

      if (!nameDone) {
        const char = FULL_NAME[nameIndexRef.current] || "";
        setTypedName((prev) => prev + char);
        finalNameRef.current += char;
        nameIndexRef.current += 1;
      } else if (!titleDone) {
        const char = FULL_TITLE[titleIndexRef.current] || "";
        setTypedTitle((prev) => prev + char);
        finalTitleRef.current += char;
        titleIndexRef.current += 1;
      }
    }, 80);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [showTyping]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  }, []);

// ===== Canvas لرسم الإطارات مع عرض الإطار الأول افتراضياً =====
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const draw = () => {
    // التأكد من وجود إطارات
    if (!frames.length) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // اختيار الإطار وفق حركة التمرير؛ يستمر التسلسل حتى آخر إطار.
    let frameIndex = 0;
    if (scrollProgress > 0) {
      frameIndex = Math.min(frames.length - 1, Math.max(0, Math.round(scrollProgress * (frames.length - 1))));
    }
    
    const image = frames[frameIndex];
    
    let finalImage = image;
    let finalIndex = frameIndex;
    let attempts = 0;
    while (!finalImage && attempts < frames.length) {
      finalIndex = (finalIndex + 1) % frames.length;
      finalImage = frames[finalIndex];
      attempts++;
    }
    
    if (!finalImage) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);
    context.imageSmoothingEnabled = true;

    const naturalAspect = finalImage.naturalWidth / finalImage.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (naturalAspect > canvasAspect) {
      drawHeight = rect.height;
      drawWidth = drawHeight * naturalAspect;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / naturalAspect;
      offsetX = 0;
      offsetY = (rect.height - drawHeight) / 2;
    }

    context.drawImage(finalImage, offsetX, offsetY, drawWidth, drawHeight);
  };

  draw();

  const handleResize = () => draw();
  window.addEventListener('resize', handleResize);

  let rafId: number | null = null;
  const drawSmooth = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(draw);
  };

  const timeoutId = setTimeout(drawSmooth, 0);

  return () => {
    window.removeEventListener('resize', handleResize);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    clearTimeout(timeoutId);
  };
}, [frames, scrollProgress]); 


  const isHeroFinished = scrollProgress >= 1;

  const handleProjectClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      console.log('Internal route:', link);
    }
  };

  const displayedProjects = isMobile && !showAllProjects 
    ? projects.slice(0, 6) 
    : projects;

  // عرض النصوص النهائية أو النص المكتوب، مع منع undefined
  const displayName = typedName || finalNameRef.current || FULL_NAME;
  const displayTitle = typedTitle || finalTitleRef.current || FULL_TITLE;

  return (
    <main className="relative bg-white dark:bg-[#020202] text-black dark:text-white selection:bg-amber-400/20 selection:text-white font-sans transition-colors duration-300">
      
      {/* ===== الهيدر ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 px-4 sm:px-6 py-2 sm:py-3 shadow-2xl transition-colors duration-300">
          
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold text-base sm:text-lg shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="font-bold tracking-tight text-black dark:text-white group-hover:text-amber-400 transition-colors text-xs sm:text-sm md:text-base">
              <span className="hidden xs:inline">Mohammed Al-Hanani</span>
              <span className="xs:hidden">M. Hanani</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-black/80 dark:text-white/80">
            <a href="#about" className="hover:text-amber-400 transition-colors">عني</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">الخدمات</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">الأعمال</a>
            <a href="#technologies" className="hover:text-amber-400 transition-colors">التقنيات</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 lg:px-5 py-1.5 lg:py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs lg:text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              اتصل بي
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-6xl mx-auto mt-2 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-black/10 dark:border-white/10 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 md:hidden shadow-2xl text-center"
          >
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-black/80 dark:text-white/80 hover:text-amber-400 transition-colors py-2 border-b border-black/10 dark:border-white/10 text-sm"
            >
              عني
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-black/80 dark:text-white/80 hover:text-amber-400 transition-colors py-2 border-b border-black/10 dark:border-white/10 text-sm"
            >
              الخدمات
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-black/80 dark:text-white/80 hover:text-amber-400 transition-colors py-2 border-b border-black/10 dark:border-white/10 text-sm"
            >
              الأعمال
            </a>
            <a 
              href="#technologies" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-black/80 dark:text-white/80 hover:text-amber-400 transition-colors py-2 border-b border-black/10 dark:border-white/10 text-sm"
            >
              التقنيات
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/25 mt-2"
            >
              اتصل بي
            </a>
          </motion.div>
        )}
      </header>

      
      {/* ===== الخلفية الثابتة ===== */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black transition-colors duration-300">
        {isHeroFinished && (
          <img
            src="https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/me/Glowing_digital_HUD_interface.gif"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}
        <canvas
          ref={canvasRef}
          className={`relative h-full w-full transition-opacity duration-500 ${isHeroFinished ? "opacity-0" : "opacity-90"}`}
        />

        {/* تأثير الزجاج الأسود */}
        <div className="pointer-events-none absolute inset-0 bg-black/[0.12] backdrop-blur-[3px] transition-all duration-700" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0.08)_22%,transparent_45%,rgba(255,255,255,0.02)_70%,rgba(0,0,0,0.22)_100%)] transition-opacity duration-700" />
        <div className="pointer-events-none absolute inset-0 border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.18)]" />

        {/* طبقة زجاجية ضبابية واضحة تمتد من منتصف الشاشة إلى الأسفل */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[68vh]"
          style={{
            opacity: aboutGradientProgress,
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.16) 24%, rgba(5,5,5,0.48) 58%, rgba(0,0,0,0.88) 100%)",
            backdropFilter: `blur(${20 * aboutGradientProgress}px) saturate(125%)`,
            WebkitBackdropFilter: `blur(${20 * aboutGradientProgress}px) saturate(125%)`,
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 12%, #000 38%, #000 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.35) 12%, #000 38%, #000 100%)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
          aria-hidden="true"
        />

        {/* تدرّج أسود مستقل وأوضح لضمان ظهور الانتقال حتى الأسود الكامل */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[68vh]"
          style={{
            opacity: aboutGradientProgress,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.10) 12%, rgba(0,0,0,0.30) 34%, rgba(0,0,0,0.68) 58%, rgba(0,0,0,0.92) 78%, #000 100%)",
          }}
          aria-hidden="true"
        />

        {/* أبقِ شرط عرض شاشة التحميل الأصلي هنا */}
               {!isLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-white dark:bg-[#020202] backdrop-blur-md transition-colors duration-300">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-black/10 dark:border-white/10 border-t-amber-400" />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-black/50 dark:text-white/50">جاري تحميل المعرض</p>
                <p className="mt-2 text-base font-medium text-black/90 dark:text-white/90">استعد لاكتشاف أعمال Mohammed Al-Hanani</p>
              </div>
            </div>
          </div>
        )}


        

        {/* ===== تأثير الكتابة (يظهر بعد التحميل وقبل التمرير) ===== */}
        {showTyping && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-white/80 dark:bg-[#020202]/80 backdrop-blur-sm transition-colors duration-300 pointer-events-none">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug tracking-tight text-amber-400 drop-shadow-md mb-4 min-h-[6rem] font-serif">
                {displayName}
                {displayName.length < FULL_NAME.length && <span className="animate-pulse text-amber-400">|</span>}
              </h1>
              <p className="text-base sm:text-xl md:text-3xl font-light leading-snug tracking-wide text-black dark:text-white drop-shadow-lg min-h-[4rem]">
                {displayTitle}
                {displayTitle.length < FULL_TITLE.length && displayName.length >= FULL_NAME.length && <span className="animate-pulse text-amber-400">|</span>}
              </p>
              
            </div>
          </div>
        )}
      </div>

      {/* ===== قسم الهيرو ===== */}
      <div 
        className="h-[300vh] relative z-10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          setIsInsideHero(true);
        }}
        onMouseEnter={() => setIsInsideHero(true)}
        onMouseLeave={() => setIsInsideHero(false)}
      >
        <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="absolute inset-x-0 top-16 sm:top-24 flex justify-center px-4 sm:px-6 text-center">
            <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-black/60 dark:text-white/60 drop-shadow transition-colors duration-300">
              {isHeroFinished ? "✨ مرحباً بك في موقعي الرسمي" : "اسحب للأسفل لاستكشاف الإبداع"}
            </p>
          </div>

          {textBlocks.map((block) => {
            const start = block.start;
            const end = block.end;
            const inRange = scrollProgress >= start && scrollProgress <= end;
            const progress = inRange
              ? (scrollProgress - start) / (end - start)
              : scrollProgress < start
                ? 0
                : 1;
            
            const opacity = inRange
              ? progress < 0.15
                ? progress / 0.15
                : progress > 0.85
                  ? (1 - progress) / 0.15
                  : 1
              : 0;
            
            const offsetY = inRange ? 0 : 30;
            const translateX = block.align === "left" ? -30 : block.align === "right" ? 30 : 0;
            const scale = inRange ? 1 : 0.95;

            return (
              <motion.div
                key={block.id}
                className={`absolute max-w-[22rem] sm:max-w-[30rem] md:max-w-[38rem] px-3 sm:px-5 ${
                  block.align === "left"
                    ? "left-4 sm:left-6 md:left-16 top-1/2 -translate-y-1/2 text-left"
                    : block.align === "right"
                      ? "right-4 sm:right-6 md:right-16 top-1/2 -translate-y-1/2 text-right"
                      : "top-1/2 -translate-y-1/2 text-center"
                }`}
                initial={false}
                animate={{
                  opacity: isHeroFinished ? 0 : opacity,
                  y: isHeroFinished ? 30 : offsetY,
                  x: inRange ? 0 : translateX,
                  scale: isHeroFinished ? 0.9 : scale,
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.3 }
                }}
              >
                <div className="w-full">
                  <motion.p 
                    className={`mb-2 sm:mb-3 whitespace-nowrap text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight text-amber-300 drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)] font-bold ${block.id === 0 || block.id === 2 ? "hero-display-font" : "hero-arabic-font"}`}
                    animate={{ letterSpacing: inRange ? "-0.02em" : "0em" }}
                    transition={{ duration: 0.3 }}
                  >
                    {block.title}
                  </motion.p>
                  <motion.h2 
                    className={`text-base sm:text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-normal text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] transition-colors duration-300 ${block.id === 2 ? "hero-display-font" : "hero-arabic-font"}`}
                    animate={{ scale: inRange ? 1 : 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {block.subtitle}
                  </motion.h2>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-black/40 dark:text-white/40 text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors duration-300"
          >
            {isHeroFinished ? "✓ تم" : "مرر للأسفل"}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-black/20 dark:border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-black/40 dark:bg-white/40 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* ===== المحتوى الرئيسي ===== */}
      <div className="relative z-10 bg-transparent pt-16 sm:pt-20 pb-12 sm:pb-16 space-y-24 sm:space-y-32">
        
        {/* ===== قسم عني ===== */}
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              
              <span className="w-8 sm:w-10 h-0.5 bg-amber-400"></span>
              <span className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">About Me</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6 text-center text-black dark:text-white transition-colors duration-300">
              مطور برمجيات <span className="text-amber-400">شغوف</span> بحل المشكلات
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
              
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-amber-400/10 to-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-sm p-2 transition-colors duration-300">
                    <PixelTransition
                      firstContent={
                        <img
                          src="https://raw.githubusercontent.com/WWW-Alhnani-COM/proto/master/public/img/profile-img.jpg"
                          alt="Mohammed Al-Hanani"
                          loading="lazy"
                          decoding="async"
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover",
                            display: "block"
                          }}
                          onError={(e) => {
                            e.currentTarget.src = 'https://ui-avatars.com/api/?name=Mohammed+Al-Hanani&size=400&background=F59E0B&color=fff&bold=true';
                          }}
                        />
                      }
                      secondContent={
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#0a0a0a",
                            backgroundImage: "radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)",
                            padding: "20px"
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <p style={{ 
                              fontWeight: 700, 
                              fontSize: "1.5rem", 
                              color: "#F59E0B",
                              marginBottom: "8px"
                            }}>
                              مرحباً!
                            </p>
                            <p style={{ 
                              fontSize: "0.8rem", 
                              color: "#ffffff",
                              opacity: 0.8,
                              maxWidth: "200px"
                            }}>
                              محمد الحناني
                            </p>
                            <div style={{
                              width: "40px",
                              height: "2px",
                              backgroundColor: "#F59E0B",
                              margin: "12px auto",
                              borderRadius: "2px"
                            }} />
                            <p style={{ 
                              fontSize: "0.7rem", 
                              color: "#ffffff",
                              opacity: 0.5
                            }}>
                              Full-Stack Developer
                            </p>
                          </div>
                        </div>
                      }
                      gridSize={12}
                      pixelColor="#F59E0B"
                      animationStepDuration={0.5}
                      once={false}
                      aspectRatio="75%"
                      className="w-full"
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        border: "none",
                        backgroundColor: "transparent"
                      }}
                    />
                    
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-amber-400/30 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-xl z-10 transition-colors duration-300">
                      <span className="block text-xl sm:text-2xl font-bold text-amber-400">4+</span>
                      <span className="text-[8px] sm:text-[10px] text-black/60 dark:text-white/60 uppercase tracking-wider">سنوات خبرة</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 flex h-full flex-col items-center text-center">
                <div className="w-full">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="h-px w-7 bg-amber-400/70" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">نبذة تعريفية</span>
                    <span className="h-px w-7 bg-amber-400/70" />
                  </div>
                  <h3 className="hero-display-font text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-300">
                    Mohammed <span className="text-amber-400">Al-Hanani</span>
                  </h3>
                  <div className="mt-3 flex justify-center">
                    <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-3.5 py-2 text-xs sm:text-sm font-semibold text-amber-500 dark:text-amber-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.7)]" />
                      Full-Stack Developer
                      <span className="text-black/25 dark:text-white/30">|</span>
                      <span>مهندس برمجيات</span>
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 lg:mt-auto w-full rounded-2xl border border-black/[0.07] dark:border-white/[0.09] bg-gradient-to-br from-white/70 to-white/30 dark:from-white/[0.055] dark:to-white/[0.015] px-4 py-4 sm:px-6 sm:py-5 shadow-sm text-center">
                  <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
                  <p className="text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-black/70 dark:text-white/75 transition-colors duration-300">
                    مطور برمجيات شغوف بتطوير حلول تقنية مبتكرة وفعالة. أمتلك خبرة في بناء
                    تطبيقات الويب والموبايل باستخدام أحدث التقنيات، مع التركيز على جودة الكود
                    وتجربة المستخدم. أسعى دائماً لتقديم قيمة مضافة لعملائي من خلال حلول برمجية
                    احترافية تلبي احتياجاتهم وتتجاوز توقعاتهم.
                  </p>
                </div>

                {/* <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-400/5 to-transparent border border-amber-400/10">
                  <p className="text-black/60 dark:text-white/70 text-xs sm:text-sm leading-relaxed italic transition-colors duration-300">
                    "أؤمن بأن التكنولوجيا الجيدة يجب أن تكون بسيطة وسهلة الاستخدام، 
                    ولذلك أركز على تقديم حلول برمجية تجمع بين القوة والجمال."
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== قسم الخبرات والخدمات ===== */}
        <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
              <span className="h-0.5 w-8 bg-amber-400 sm:w-10" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400 sm:text-xs sm:tracking-[0.3em]">My Expertise</span>
            </div>

            <h2 className="mt-2 mb-2 text-center text-2xl font-bold text-black transition-colors duration-300 dark:text-white sm:mb-4 sm:text-3xl md:text-4xl">
              الخدمات التقنية المتكاملة
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-black/70 transition-colors duration-300 dark:text-white/80 sm:mb-12 sm:text-base">
              حلول برمجية متكاملة تجمع بين التصميم الحديث، قوة الأنظمة الخلفية، وتطبيقات الموبايل والبنية السحابية.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" style={{ perspective: "1000px" }}>
              <AnimatedJobCard
                companyLogo={<SiReact className="h-6 w-6" />}
                companyName="WEB DEVELOPMENT"
                jobTitle="تطوير واجهات الويب"
                salary="واجهات سريعة ومتجاوبة وتجارب استخدام عصرية تناسب مختلف الأجهزة."
                tags={["React", "Next.js", "Angular", "TypeScript"]}
                postedDate="تصميم وتجربة مستخدم"
                variant="yellow"
              />
              <AnimatedJobCard
                companyLogo={<SiLaravel className="h-6 w-6" />}
                companyName="BACKEND & API"
                jobTitle="الأنظمة الخلفية وواجهات API"
                salary="بناء أنظمة آمنة وقابلة للتوسع، وربط الخدمات وقواعد البيانات."
                tags={[".NET Core", "Laravel", "Node.js", "REST API"]}
                postedDate="هندسة الأنظمة"
                variant="yellow"
              />
              <AnimatedJobCard
                companyLogo={<SiFlutter className="h-6 w-6" />}
                companyName="MOBILE APPLICATIONS"
                jobTitle="تطبيقات الموبايل"
                salary="تطوير تطبيقات متعددة المنصات مع تجربة استخدام سلسة وعملية."
                tags={["Flutter", "Android", "Firebase"]}
                postedDate="تطبيقات متعددة المنصات"
                variant="yellow"
              />
              <AnimatedJobCard
                companyLogo={<FaAws className="h-6 w-6" />}
                companyName="CLOUD & DATABASES"
                jobTitle="قواعد البيانات والنشر السحابي"
                salary="تصميم قواعد البيانات ونشر التطبيقات وتحسين الاستقرار والأداء."
                tags={["SQL", "MySQL", "Docker", "AWS", "Azure"]}
                postedDate="النشر والتشغيل"
                variant="yellow"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-black/5 bg-white/30 p-4 backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-black/30 sm:mt-12 sm:grid-cols-4 sm:gap-4 sm:p-8"
            >
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400 sm:text-3xl"><CountUp from={0} to={4} duration={2} separator="" className="count-up-text" />+</span>
                <span className="mt-1 block text-[8px] text-black/40 dark:text-white/40 sm:text-[10px]">سنوات خبرة</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400 sm:text-3xl"><CountUp from={0} to={95} duration={2.5} separator="" className="count-up-text" />+</span>
                <span className="mt-1 block text-[8px] text-black/40 dark:text-white/40 sm:text-[10px]">مشروع برمجي</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400 sm:text-3xl"><CountUp from={0} to={13} duration={2.5} separator="" className="count-up-text" />+</span>
                <span className="mt-1 block text-[8px] text-black/40 dark:text-white/40 sm:text-[10px]">نظام مؤسسي</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-400 sm:text-3xl">24/7</span>
                <span className="mt-1 block text-[8px] text-black/40 dark:text-white/40 sm:text-[10px]">دعم للمشاريع</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== قسم المشاريع (Portfolio) ===== */}
        <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
  <span className="w-8 sm:w-10 h-0.5 bg-amber-400"></span>
              <span className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">My Work</span>
            </div>
            
            <div className="flex flex-col items-center text-center gap-2 sm:gap-4 mb-6 sm:mb-8">
<div className="w-full text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-black dark:text-white transition-colors duration-300">
                  <span className="block sm:inline">Portfolio</span>
                  <span className="block sm:inline text-amber-400"> — مشاريعي</span>
                </h2>
              </div>
              <p className="text-black/70 dark:text-white/80 text-sm sm:text-base drop-shadow max-w-2xl mx-auto text-center transition-colors duration-300">
                {isMobile ? 'أحدث المشاريع' : 'استكشف مجموعة من مشاريعي المتميزة'}
              </p>
            </div>

            {/* شبكة البطاقات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex w-full"
                >
                  <NotchedProjectCard
                    href={project.link}
                    title={project.name}
                    description={project.description}
                    image={project.avatarUrl}
                    imageAlt={project.name}
                    badge={project.status}
                    tags={[project.title]}
                    monochrome
                    surface={isDark ? "#020202" : "#ffffff"}
                    accent="#FBBF24"
                    accentForeground="#111111"
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* زر عرض المزيد للجوال */}
            {isMobile && projects.length > 6 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex justify-center"
              >
                <button 
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-6 py-3 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 hover:bg-amber-400/20 transition-colors text-sm font-medium"
                >
                  {showAllProjects ? 'عرض أقل' : 'عرض جميع المشاريع'}
                </button>
              </motion.div>
            )}

            {/* دعوة لزيارة لينكد إن */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-amber-400/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl transition-colors duration-300"
            >
              <div>
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-black dark:text-white transition-colors duration-300">المزيد من المشاريع والإنجازات</h3>
                <p className="text-black/70 dark:text-white/80 text-xs sm:text-sm max-w-xl transition-colors duration-300">
                  لديّ المزيد من المشاريع الاحترافية. أدعوك لزيارة ملفي الشخصي على LinkedIn.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/muhammad-al-hanani-5a5a50373" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors whitespace-nowrap shadow-lg shadow-amber-400/20 text-sm sm:text-base"
              >
                تصفح المشاريع
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== قسم التقنيات ===== */}
        <section id="technologies" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
  <span className="w-8 sm:w-10 h-0.5 bg-amber-400"></span>
              <span className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">Technologies</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-2 sm:mb-4 text-center text-black dark:text-white transition-colors duration-300">التقنيات التي أستخدمها</h2>
            <p className="text-black/70 dark:text-white/80 mb-8 sm:mb-10 text-sm sm:text-base drop-shadow text-center transition-colors duration-300">
              مجموعة من أحدث التقنيات والأدوات التي أعمل بها لتطوير حلول برمجية متكاملة
            </p>

            <div className="relative w-full bg-white/20 dark:bg-black/20 rounded-2xl p-4 sm:p-8 backdrop-blur-sm border border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-300">
              <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={40}
                  direction="left"
                  logoHeight={isMobile ? 35 : 50}
                  gap={isMobile ? 30 : 50}
                  hoverSpeed={20}
                  scaleOnHover
                  fadeOut={false}
                  pauseOnHover={false}
                  fadeOutColor={isDark ? "#020202" : "#ffffff"}
                  ariaLabel="التقنيات والمهارات"
                />
              </div>
            </div>
          </motion.div>
        </section>

      
{/* ===== قسم اتصل بي ===== */}
<section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-28">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
      <span className="w-8 sm:w-10 h-0.5 bg-amber-400"></span>
      <span className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
        Contact
      </span>
    </div>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-2 sm:mb-4 text-center text-black dark:text-white transition-colors duration-300">
      تواصل معي لبدء مشروعك القادم
    </h2>

    <p className="text-black/70 dark:text-white/80 mb-8 sm:mb-12 drop-shadow text-sm sm:text-base text-center transition-colors duration-300">
      سواء كنت بحاجة إلى تطبيق موبايل أو موقع إلكتروني، تواصل معي الآن وسنبدأ العمل مباشرة.
    </p>

    <div className="max-w-2xl mx-auto">
      {/* نموذج إرسال الرسائل */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (formSending) return;

          const form = e.currentTarget;
          const formData = new FormData(form);

          setFormSending(true);
          setFormError("");
          setFormStatus(false);

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("subject"),
                message: formData.get("message"),
              }),
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
              throw new Error(
                result.error || "تعذر إرسال الرسالة. حاول مرة أخرى."
              );
            }

            form.reset();
            setFormStatus(true);
          } catch (error) {
            setFormError(
              error instanceof Error
                ? error.message
                : "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى."
            );
          } finally {
            setFormSending(false);
          }
        }}
        className="space-y-4 sm:space-y-5 p-5 sm:p-7 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg transition-colors duration-300"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

          <div className="relative">
            <label
              htmlFor="contact-name"
              className="block text-[10px] sm:text-xs text-black/40 dark:text-white/40 mb-1.5"
            >
              اسمك
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="أدخل اسمك"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="contact-email"
              className="block text-[10px] sm:text-xs text-black/40 dark:text-white/40 mb-1.5"
            >
              بريدك الإلكتروني
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              maxLength={254}
              required
              className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

        </div>

        <div className="relative">
          <label
            htmlFor="contact-subject"
            className="block text-[10px] sm:text-xs text-black/40 dark:text-white/40 mb-1.5"
          >
            الموضوع
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="ما هو موضوع رسالتك؟"
            minLength={3}
            maxLength={150}
            required
            className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="contact-message"
            className="block text-[10px] sm:text-xs text-black/40 dark:text-white/40 mb-1.5"
          >
            رسالتك
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="اكتب رسالتك هنا..."
            minLength={10}
            maxLength={5000}
            required
            className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={formSending}
          className="w-full py-3 sm:py-4 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-amber-400/20 text-sm sm:text-base"
        >
          {formSending ? "جارٍ إرسال الرسالة..." : "إرسال الرسالة"}
        </button>

        {formStatus && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="text-emerald-500 text-xs sm:text-sm text-center mt-2"
          >
            تم إرسال رسالتك بنجاح، شكرًا لتواصلك!
          </motion.p>
        )}

        {formError && (
          <p
            role="alert"
            className="text-red-500 text-xs sm:text-sm text-center mt-2"
          >
            {formError}
          </p>
        )}
      </form>
    </div>
  </motion.div>
</section>


        {/* ===== التذييل ===== */}
        <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 text-center bg-transparent">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white transition-colors duration-300">
              Mohammed Al-Hanani
            </h2>
            <p className="text-black/70 dark:text-white/80 text-xs sm:text-sm italic transition-colors duration-300">
              Full-Stack Web Developer | Building digital solutions that matter
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/967774218060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/30"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/MohammedAlHanani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#181717] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#181717]/30"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#1877F2]/30"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.582 9 4.75V8z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/muhammad-al-hanani-5a5a50373" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#0A66C2]/40"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <p className="text-[10px] sm:text-xs text-black/40 dark:text-white/40 pt-4 border-t border-black/10 dark:border-white/10 w-full transition-colors duration-300">
              © {new Date().getFullYear()} Mohammed Al-Hanani. All rights reserved.
            </p>

          </div>
        </footer>

      </div>
      
{/* ===== أيقونة واتساب العائمة ===== */}
<a
  href="https://wa.me/967774218060?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="تواصل معي عبر واتساب"
  title="تواصل معي عبر واتساب"
  className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[9999] flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/25 transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] focus:outline-none focus:ring-4 focus:ring-green-400/40"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-8 w-8 sm:h-9 sm:w-9"
    aria-hidden="true"
  >
    <path d="M16.01 3.2A12.65 12.65 0 0 0 5.19 22.42L3.5 28.6l6.33-1.66A12.7 12.7 0 1 0 16.01 3.2Zm0 23.1c-1.96 0-3.88-.52-5.56-1.51l-.4-.24-3.76.99 1-3.66-.26-.42a10.35 10.35 0 1 1 8.98 4.84Zm5.68-7.76c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.06-.39-.03-.54-.08-.16-.71-1.7-.97-2.32-.26-.61-.52-.52-.71-.53h-.61c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.61s1.12 3.02 1.28 3.23c.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.77.65.74.23 1.42.2 1.95.12.59-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36Z" />
  </svg>
</a>

    </main>
  );
      }
