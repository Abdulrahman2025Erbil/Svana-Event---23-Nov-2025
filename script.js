// Participants Data
const participantsData = [
    { name: "یاسین احمد عبدالرحیم فرج", city: "هه‌ڵه‌بجه‌", job: "چالاکوان" },
    { name: "محمد عماد عثمان علي", city: "الانبار", job: "چالاکوان" },
    { name: "سوما ماجد محمد حسن يونس", city: "هةولير", job: "قوتابي" },
    { name: "محمد انور جبار محمد", city: "کەرکوک", job: "کارمەندی KSC" },
    { name: "محمد قادر داود حسین", city: "رانیە - سلێمانی", job: "چالاکوانی بواری گەنجان و لاوان" },
    { name: "شهد صالح علي محمد", city: "ديالى", job: "طب اسنان/ ناشطة مدنية" },
    { name: "جمال حسين رحيم رحيم", city: "هةولير", job: "بەڕێوەبەری گشتی لە وزارەتی ڕۆشنبیری و لاوان" },
    { name: "خانزاد احمد عبد احمد", city: "هةولير", job: "ئەنجومەنی کاروباری خانمان" },
    { name: "دانەر رێبەر خورشید", city: "دهۆک", job: "رۆژنامەوان لە لەز میدیا/ چالاکوانی کۆمەڵگای مەدەنی" },
    { name: "قتيبه حسين علي فتاح", city: "نينوى", job: "NGO" },
    { name: "نمير اياد عبد الامير", city: "بابل", job: "اعلام / ناشط مدني" },
    { name: "نيار سلام حسن برو", city: "نينوى", job: "ناشطة مدنية" },
    { name: "دانا رحمان خضر مصطفی", city: "هەولێر", job: "مامۆستا لە بەشی کۆمەڵناسی کۆلێژئ ئاداب" },
    { name: "احمد عبد الحي عزاوي", city: "ديالى", job: "استاذ جامعي / ناشط" },
    { name: "شهد غالب علي صبار", city: "بغداد", job: "استاذة جامعي" },
    { name: "محمود عزو حمدو", city: "نينوى/ مدينة الموصل", job: "مركز بناء السلام/ جامعة الموصل" },
    { name: "شاهین قادر محمد شيخ", city: "سۆران - اربیل", job: "شرکة جوهرة اربیل" },
    { name: "نور الزهراء حسين ناجي", city: "ديالى", job: "ناشطة مدنية" },
    { name: "هانا سوهام بکر محمود", city: "اربیل", job: "مامۆستای زانکۆی سەلاحەدین – بەشی یاسا" },
    { name: "زينب فلاح حسن محمود", city: "هةولير", job: "سەرپەرشتیاری سەرچاوە مرۆییەکان/ کۆمپانیای گێتی تەکنۆلۆجیا" },
    { name: "بەهرە احمد عبدللە و عبداللە", city: "هةولير", job: "طالبة جامعة كوردستان" },
    { name: "رێدار عمر عزیز عزیز", city: "هةولير", job: "موظف عمل ضمان" },
    { name: "عوف عبدالرحمن نجم عبدالله", city: "بغداد", job: "ناشط مدني" },
    { name: "كاويان سلمان مراد الکاکی", city: "هةولير", job: "المسؤول الإعلامي لشبكة تحالف الأقليات العراقية / AIM" },
    { name: "احمد غالب ماهي الشلاه", city: "بغداد", job: "استاذ جامعي" },
    { name: "حسن مجید عبدلحسین سعدی", city: "بغداد", job: "ناشط مدني" },
    { name: "أنسام سلمان خضير رشيد", city: "بغداد", job: "رئيسة منظمة Isen" },
    { name: "مهند حاتم صالح", city: "كركوك داقوق", job: "مدير مكتب قائممقام قضاء داقوق" },
    { name: "جاسم محمد روبتيان روراو", city: "كركوك داقوق", job: "مدير منتدى الشباب والرياضة" },
    { name: "اسیا خیری نرمو الحیدر", city: "نينوى", job: "مدرسة/ناشطة مدنية" },
    { name: "براء نجيب حمادي حمادي", city: "بغداد", job: "رئيس مؤسسة شفق لحقوق الإنسان والتنمية المستدامة" },
    { name: "نور سعد إبراهيم الجبوري", city: "ديالى", job: "ناشطة مدنية" },
    { name: "بان هشام عبد الرزاق البدي", city: "بغداد", job: "ناشطة مدنية" },
    { name: "هدير جبار كرم ذهباوي", city: "بغداد", job: "إعلامية" },
    { name: "ئەردەلان محی الدین محمد محمد", city: "هةولير", job: "وەزارەتی کاری کوردستان" },
    { name: "مونا یاقۆ", city: "هةولير", job: "دەستەی سەربەخۆی مافەکانی مرۆف" },
    { name: "یوسف", city: "هەولێر", job: "سەندیکای کرێکاران" },
    { name: "کۆجەر", city: "هەولێر", job: "وەزارەتی خوێندنی بالا" },
    { name: "زەکیە", city: "هەولێر", job: "جێگیری وەزیر لە هەرێمی کوردستان" }
];

// Language translations
const translations = {
    ar: {
        mainTitle: "حوار الشباب والجهات المعنية: نحو شراكة فاعلة لمستقبل أفضل",
        subtitle: "منظمة السلام والحرية | 23 نوفمبر 2025",
        langButton: "KU",
        searchPlaceholder: "البحث عن مشارك...",
        footer: "منظمة السلام والحرية - 2025 | جميع الحقوق محفوظة"
    },
    ku: {
        mainTitle: "گفتوگۆی لاوان و لایەنە پەیوەندیدارەکان: بەرەو هاوبەشییەکی کاریگەر بۆ داهاتوویەکی باشتر",
        subtitle: "رێکخراوی ئاشتی و ئازادی | 23ی تشرینی دووەمی 2025",
        langButton: "AR",
        searchPlaceholder: "گەڕان بۆ بەشداربوو...",
        footer: "رێکخراوی ئاشتی و ئازادی - 2025 | هەموو مافێک پارێزراوە"
    }
};

// Current language state
let currentLang = 'ar';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateParticipantsTable();
    setupSearch();
    setupLanguageToggle();
});

// Populate participants table
function populateParticipantsTable() {
    const tbody = document.getElementById('participantsBody');
    tbody.innerHTML = '';
    
    participantsData.forEach(participant => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${participant.name}</td>
            <td>${participant.city}</td>
            <td>${participant.job}</td>
            <td dir="ltr">${participant.phone}</td>
        `;
        tbody.appendChild(row);
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#participantsBody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Setup language toggle
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    langToggle.addEventListener('click', function() {
        // Toggle language
        currentLang = currentLang === 'ar' ? 'ku' : 'ar';
        
        // Update button text
        langText.textContent = translations[currentLang].langButton;
        
        // Update document direction
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', currentLang);
        
        // Update all translatable elements
        updateTranslations();
    });
}

// Update all translations
function updateTranslations() {
    // Update main title
    const mainTitle = document.getElementById('mainTitle');
    if (mainTitle) {
        mainTitle.textContent = translations[currentLang].mainTitle;
    }
    
    // Update subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = translations[currentLang].subtitle;
    }
    
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[currentLang].searchPlaceholder;
    }
    
    // Update footer
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.textContent = translations[currentLang].footer;
    }
    
    // Update all elements with data-ar and data-ku attributes
    const translatableElements = document.querySelectorAll('[data-ar][data-ku]');
    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${currentLang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholder attributes
    const searchInputPlaceholder = document.getElementById('searchInput');
    if (searchInputPlaceholder) {
        const placeholder = searchInputPlaceholder.getAttribute(`data-${currentLang}-placeholder`);
        if (placeholder) {
            searchInputPlaceholder.placeholder = placeholder;
        }
    }
}

// Smooth scroll for internal links (if any added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Print functionality
function printDashboard() {
    window.print();
}

// Export to PDF (basic implementation)
function exportToPDF() {
    // This is a placeholder for PDF export functionality
    // In a real implementation, you would use a library like jsPDF or html2pdf
    alert('PDF Export functionality would be implemented here with a library like jsPDF or html2pdf.js');
}

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key to close any modals (if added later)
    if (e.key === 'Escape') {
        // Close modal logic here
    }
    
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printDashboard();
    }
});

// Track statistics animation on page load
window.addEventListener('load', function() {
    animateStats();
});

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const duration = 1000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, stepTime);
    });
}

// Mobile menu toggle (if needed later)
function toggleMobileMenu() {
    // Mobile menu logic here
}

// Add event listeners for responsive behavior
window.addEventListener('resize', function() {
    // Handle responsive adjustments if needed
    adjustForScreenSize();
});

function adjustForScreenSize() {
    const width = window.innerWidth;
    
    if (width < 768) {
        // Mobile adjustments
        console.log('Mobile view');
    } else if (width < 1024) {
        // Tablet adjustments
        console.log('Tablet view');
    } else {
        // Desktop adjustments
        console.log('Desktop view');
    }
}

// Initial screen size adjustment
adjustForScreenSize();
