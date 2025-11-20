// Participants Data
const participantsData = [
    { name: "یاسین احمد عبدالرحیم فرج", city: "هه‌ڵه‌بجه‌", job: "چالاکوان", phone: "751 058 4574" },
    { name: "محمد عماد عثمان علي", city: "الانبار", job: "چالاکوان", phone: "780 475 1634" },
    { name: "سوما ماجد محمد حسن يونس", city: "هةولير", job: "قوتابي", phone: "750 803 6363" },
    { name: "محمد انور جبار محمد", city: "کەرکوک", job: "کارمەندی KSC", phone: "770 193 8512" },
    { name: "محمد قادر داود حسین", city: "رانیە - سلێمانی", job: "چالاکوانی بواری گەنجان و لاوان", phone: "770 471 7328" },
    { name: "شهد صالح علي محمد", city: "ديالى", job: "طب اسنان/ ناشطة مدنية", phone: "772 138 3826" },
    { name: "جمال حسين رحيم رحيم", city: "هةولير", job: "بەڕێوەبەری گشتی لە وزارەتی ڕۆشنبیری و لاوان", phone: "770 158 0421" },
    { name: "خانزاد احمد عبد احمد", city: "هةولير", job: "ئەنجومەنی کاروباری خانمان", phone: "750 211 3621" },
    { name: "دانەر رێبەر خورشید", city: "دهۆک", job: "رۆژنامەوان لە لەز میدیا/ چالاکوانی کۆمەڵگای مەدەنی", phone: "751 145 1649" },
    { name: "قتيبه حسين علي فتاح", city: "نينوى", job: "NGO", phone: "773 120 3669" },
    { name: "نمير اياد عبد الامير", city: "بابل", job: "اعلام / ناشط مدني", phone: "780 334 8103" },
    { name: "نيار سلام حسن برو", city: "نينوى", job: "ناشطة مدنية", phone: "751 208 0779" },
    { name: "دانا رحمان خضر مصطفی", city: "هەولێر", job: "مامۆستا لە بەشی کۆمەڵناسی کۆلێژئ ئاداب", phone: "750 836 9454" },
    { name: "احمد عبد الحي عزاوي", city: "ديالى", job: "استاذ جامعي / ناشط", phone: "773 195 0581" },
    { name: "شهد غالب علي صبار", city: "بغداد", job: "استاذة جامعي", phone: "772 138 3826" },
    { name: "محمود عزو حمدو", city: "نينوى/ مدينة الموصل", job: "مركز بناء السلام/ جامعة الموصل", phone: "751 032 5575" },
    { name: "شاهین قادر محمد شيخ", city: "سۆران - اربیل", job: "شرکة جوهرة اربیل", phone: "751 880 0575" },
    { name: "نور الزهراء حسين ناجي", city: "ديالى", job: "ناشطة مدنية", phone: "772 905 4037" },
    { name: "هانا سوهام بکر محمود", city: "اربیل", job: "مامۆستای زانکۆی سەلاحەدین – بەشی یاسا", phone: "750 461 6050" },
    { name: "زينب فلاح حسن محمود", city: "هةولير", job: "سەرپەرشتیاری سەرچاوە مرۆییەکان/ کۆمپانیای گێتی تەکنۆلۆجیا", phone: "751 235 4310" },
    { name: "بەهرە احمد عبدللە و عبداللە", city: "هةولير", job: "طالبة جامعة كوردستان", phone: "751 517 2198" },
    { name: "رێدار عمر عزیز عزیز", city: "هةولير", job: "موظف عمل ضمان", phone: "750 738 1523" },
    { name: "عوف عبدالرحمن نجم عبدالله", city: "بغداد", job: "ناشط مدني", phone: "781 583 4318" },
    { name: "كاويان سلمان مراد الکاکی", city: "هةولير", job: "المسؤول الإعلامي لشبكة تحالف الأقليات العراقية / AIM", phone: "771 700 9255" },
    { name: "احمد غالب ماهي الشلاه", city: "بغداد", job: "استاذ جامعي", phone: "790 235 6040" },
    { name: "حسن مجید عبدلحسین سعدی", city: "بغداد", job: "ناشط مدني", phone: "770 012 3452" },
    { name: "أنسام سلمان خضير رشيد", city: "بغداد", job: "رئيسة منظمة Isen", phone: "7724530561" },
    { name: "مهند حاتم صالح", city: "كركوك داقوق", job: "مدير مكتب قائممقام قضاء داقوق", phone: "7722606263" },
    { name: "جاسم محمد روبتيان روراو", city: "كركوك داقوق", job: "مدير منتدى الشباب والرياضة", phone: "7701245072" },
    { name: "اسیا خیری نرمو الحیدر", city: "نينوى", job: "مدرسة/ناشطة مدنية", phone: "751 026 2573" },
    { name: "براء نجيب حمادي حمادي", city: "بغداد", job: "رئيس مؤسسة شفق لحقوق الإنسان والتنمية المستدامة", phone: "771 364 8236" },
    { name: "نور سعد إبراهيم الجبوري", city: "ديالى", job: "ناشطة مدنية", phone: "771 695 5354" },
    { name: "بان هشام عبد الرزاق البدي", city: "بغداد", job: "ناشطة مدنية", phone: "772 536 8101" },
    { name: "هدير جبار كرم ذهباوي", city: "بغداد", job: "إعلامية", phone: "771 433 5958" },
    { name: "ئەردەلان محی الدین محمد محمد", city: "هةولير", job: "وەزارەتی کاری کوردستان", phone: "750 766 9911" },
    { name: "مونا یاقۆ", city: "هةولير", job: "دەستەی سەربەخۆی مافەکانی مرۆف", phone: "750 772 5958" },
    { name: "یوسف", city: "هەولێر", job: "سەندیکای کرێکاران", phone: "+964 750 468 0656" },
    { name: "کۆجەر", city: "هەولێر", job: "وەزارەتی خوێندنی بالا", phone: "964 750 468 6074" },
    { name: "زەکیە", city: "هەولێر", job: "جێگیری وەزیر لە هەرێمی کوردستان", phone: "+964 750 445 5661" }
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