ملف README كامل لموقع Mohammed AL-Hnani - Portfolio Website

```markdown
# Mohammed AL-Hnani - Portfolio Website

![Portfolio Screenshot](./assets/img/portfolio-screenshot.png)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://al-hnani.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/WWW-Alhnani-COM/portfolio)

> موقع شخصي احترافي لعرض المهارات، المشاريع والخبرات كمطور Full-Stack

## ✨ المميزات الرئيسية

- **تصميم عصري** بتدرجات داكنة مع لمسات ذهبية
- **سيرة ذاتية تفاعلية** مع قسم للخبرات والتعليم
- **معرض المشاريع** مع تصنيف حسب التقنيات المستخدمة
- **صفحة خدمات** توضح التخصصات التقنية
- **نموذج تواصل** يعمل بكفاءة
- **كامل التجاوب** لجميع أحجام الشاشات
- **تحسين لمحركات البحث** (SEO)
- **سرعة تحميل عالية**

## 🛠 التقنيات المستخدمة

### Frontend الأساسية
- **HTML5** - بناء الهيكل الأساسي
- **CSS3** - التصميم والتنسيق
- **JavaScript** - التفاعلية والوظائف

### أطر العمل والمكتبات
- **Bootstrap 5** - الإطار الأمامي للتصميم المتجاوب
- **AOS (Animate On Scroll)** - الرسوم المتحركة عند التمرير
- **Swiper.js** - للعروض التقديمية والشرائح
- **Isotope.js** - لتصفية وعرض المشاريع
- **GLightbox** - لمعرض الصور المدمج
- **Boxicons** - مجموعة الأيقونات

### الأدوات المساعدة
- **Font Awesome** - الأيقونات الإضافية
- **Google Fonts** - الخطوط (Poppins, Tajawal)
- **Vercel** - الاستضافة والنشر

## 📁 هيكل المشروع

```

portfolio/
├──index.html              # الصفحة الرئيسية
├──assets/
│├── css/
││   ├── style.css       # الأنماط الرئيسية
││   ├── responsive.css  # التصميم المتجاوب
││   └── colors.css      # الألوان والمتغيرات
│├── js/
││   ├── main.js         # الوظائف الرئيسية
││   ├── filter.js       # تصفية المشاريع
││   └── contact.js      # نموذج التواصل
│├── img/
││   ├── projects/       # صور المشاريع
││   ├── screenshots/    # لقطات الشاشة
││   └── icons/          # الأيقونات
│└── fonts/              # الخطوط المخصصة
├──pages/
│├── about.html          # صفحة عني
│├── projects.html       # صفحة المشاريع
│├── services.html       # صفحة الخدمات
│└── contact.html        # صفحة التواصل
└──README.md               # ملف التوثيق

```

## 🚀 كيفية تشغيل المشروع محلياً

### المتطلبات الأساسية
- متصفح ويب حديث (Chrome, Firefox, Safari, Edge)
- محرر نصوص (VS Code, Sublime Text, etc.)
- اتصال بالإنترنت (لتحميل المكتبات الخارجية)

### خطوات التشغيل

1. **استنساخ المستودع**:
   ```bash
   git clone https://github.com/WWW-Alhnani-COM/portfolio.git
```

1. الدخول إلى المجلد:
   ```bash
   cd portfolio
   ```
2. فتح المشروع:
   · افتح ملف index.html مباشرة في المتصفح
   · أو استخدم خادم محلي:
   ```bash
   # باستخدام Python
   python -m http.server 8000
   
   # باستخدام Node.js (إذا كان لديك http-server)
   npx http-server
   ```
3. التصفح:
   · افتح المتصفح واذهب إلى http://localhost:8000

🎯 الصفحات الرئيسية

الصفحة الرئيسية (Home)

· مقدمة شخصية مع صورة المطور
· إحصائيات سريعة (المشاريع، الخبرة، العملاء)
· نبذة عن المهارات والخدمات
· أحدث المشاريع

صفحة عني (About)

· السيرة الذاتية التفصيلية
· الخبرات العملية
· المؤهلات التعليمية
· المهارات التقنية

صفحة المشاريع (Projects)

· معرض المشاريع مع إمكانية التصفية
· تفاصيل كل مشروع (التقنيات، الروابط)
· تصنيف حسب نوع المشروع

صفحة الخدمات (Services)

· قائمة بالخدمات المقدمة
· وصف لكل خدمة
· أسعار الخدمات (اختياري)

صفحة التواصل (Contact)

· نموذج تواصل مباشر
· معلومات الاتصال
· خرائط الموقع

🔧 التخصيص والإعدادات

تغيير المعلومات الشخصية

1. افتح ملف index.html
2. عدل المعلومات في الأقسام التالية:
   · <header>: الاسم والوصف
   · <section id="about">: المعلومات الشخصية
   · <section id="contact">: معلومات التواصل

إضافة مشاريع جديدة

1. أضف صور المشروع في assets/img/projects/
2. عدل ملف assets/js/filter.js:
   ```javascript
   const projects = [
       {
           id: 1,
           title: "اسم المشروع",
           category: "web", // web, mobile, design
           image: "assets/img/projects/project1.jpg",
           link: "#",
           technologies: ["HTML", "CSS", "JavaScript"]
       }
   ];
   ```

تغيير الألوان

1. عدل ملف assets/css/colors.css:
   ```css
   :root {
       --primary-color: #your-color;
       --secondary-color: #your-color;
       --accent-color: #your-color;
   }
   ```

🌐 النشر على Vercel

1. إنشاء حساب على Vercel:
   · سجل في vercel.com
2. ربط مستودع GitHub:
   · اربط حساب GitHub مع Vercel
   · استورد مشروع Portfolio
3. الإعدادات التلقائية:
   · Vercel سيتعرف تلقائياً على الإعدادات
   · سيتم النشر فوراً
4. النطاق المخصص:
   · يمكنك إضافة نطاق مخصص في إعدادات Vercel

📱 التصميم المتجاوب

الموقع مدعوم بالكامل لجميع الأجهزة:

· أجهزة الكمبيوتر: 1200px فما فوق
· الأجهزة اللوحية: 768px - 1199px
· الهواتف المحمولة: 320px - 767px

🔍 تحسين محركات البحث (SEO)

تم تطبيق أفضل ممارسات SEO:

· وصف Meta وعلامات Open Graph
· هيكل HTML سليم
· صور مع نصوص بديلة
· خريطة موقع XML

🐛 الإبلاغ عن المشاكل

إذا وجدت أي مشاكل أو أخطاء:

1. اذهب إلى صفحة Issues
2. أنشئ issue جديد
3. صف المشكلة بالتفصيل

🤝 المساهمة في المشروع

نرحب بالمساهمات! لمساعدة في تطوير المشروع:

1. Fork المشروع
2. أنشئ فرعاً للميزة الجديدة (git checkout -b feature/AmazingFeature)
3. احفظ التغييرات (git commit -m 'Add some AmazingFeature')
4. ادفع إلى الفرع (git push origin feature/AmazingFeature)
5. افتح طلب سحب (Pull Request)

📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف LICENSE للتفاصيل.

📞 التواصل

· الموقع الرسمي: https://al-hnani.vercel.app/
· البريد الإلكتروني: contact@al-hnani.com
· LinkedIn: Mohammed AL-Hnani
· GitHub: WWW-Alhnani-COM

---

تم التطوير بـ ❤️ بواسطة Mohammed AL-Hnani

```

هذا الملف README شامل ويغطي جميع الجوانب المهمة للمشروع. يمكنك تعديله وإضافة أي معلومات إضافية تريدها.
