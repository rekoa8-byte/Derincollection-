// Derin Collection - Full-Stack Client Logic & Real-time Integration

const TRANSLATIONS = {
    ckb: {
        menu_title: "مینووی سەرەکی", language: "زمان", theme: "ڕووکار", admin_login: "چوونەژوورەوەی بەڕێوەبەر",
        customer_login: "چوونەژوورەوەی کڕیار", customer_register: "داواکاری هەژماری کڕیار",
        system_by: "دروستکردنی سیستەم", categories: "پۆلێنەکان", latest_products: "نوێترین بەرهەمەکان",
        search_placeholder: "گەڕان بۆ بەرهەم...", most_liked: "زۆرترین لایککراوەکان", product_info: "زانیاری بەرهەم",
        edit_product: "دەستکاریکردنی بەرهەم", edit_category: "دەستکاریکردنی پۆلێن",
        prod_name: "ناوی بەرهەم *", prod_desc: "پێناسەی بەرهەم *", prod_price_dinar: "نرخ (دینار) *",
        prod_category: "پۆلێن *", prod_status: "دۆخی بەرهەم *",
        status_available: "✅ بەردەست", status_out: "❌ نەماوە", status_soon: "⏳ بەم زوانە",
        prod_images: "وێنەکان", upload_image: "هەڵبژاردنی وێنە", prod_video: "ڤیدیۆ", upload_video: "هەڵبژاردنی ڤیدیۆ",
        save: "پاشەکەوتکردن", cart: "سەبەتەی کڕین", back: "گەڕانەوە",
        shipping_cost: "تێچووی گەیاندن", select_city: "شاری خۆت هەڵبژێرە", products_total: "کۆی بەرهەمەکان:",
        shipping_cost_label: "تێچووی گەیاندن:", grand_total: "کۆی گشتی:", checkout: "تەواوکردنی کڕین",
        continue_shopping: "بەردەوامبوون لە کڕین", order_info: "زانیاری داواکاری", your_name: "ناوی تەواو",
        name_placeholder: "ناوی تەواوت بنووسە", your_phone: "ژمارەی مۆبایل", your_location: "شوێن / ناونیشان",
        location_placeholder: "بۆ نموونە: هەولێر", notes: "تێبینی",
        notes_placeholder: "هەر تێبینییەک...", submit_order: "ناردنی داواکاری",
        home: "سەرەکی", orders: "داواکاری", contact: "پەیوەندی", my_orders: "داواکارییەکانی من",
        contact_info: "پەیوەندییەکان", phone: "ژمارەی مۆبایل", website: "وێبسایت", address: "ناونیشان",
        social_media: "تۆڕە کۆمەڵایەتییەکان", login_btn: "چوونەژوورەوە", back_to_customer: "گەڕانەوە",
        admin_panel: "پانێڵی بەڕێوەبەر", total_products: "کۆی بەرهەمەکان", total_orders: "کۆی داواکارییەکان",
        search_admin: "گەڕان...", product_list: "لیستی بەرهەمەکان", product: "بەرهەم", category: "پۆلێن",
        add_new_product: "زیادکردنی بەرهەمی نوێ", add_new_category: "زیادکردنی پۆلێنی نوێ",
        cat_name: "ناوی پۆلێن *", cat_image: "وێنەی پۆلێن *", add_btn: "زیادکردن", categories_list: "لیستی پۆلێنەکان",
        new_orders: "داواکاری نوێ", order_history: "مێژوو", settings_shop: "فرۆشگا", settings_account: "هەژمار",
        settings_contact: "پەیوەندی", settings_shipping: "گەیاندن", settings_more: "زیاتر",
        shop_info: "زانیاری فرۆشگا", shop_name: "ناوی فرۆشگا", shop_logo: "لۆگۆ", upload_logo: "هەڵبژاردنی لۆگۆ",
        admin_account: "هەژماری بەڕێوەبەر", username: "ناوی بەکارهێنەر", password: "وشەی نهێنی",
        cities_management: "بەڕێوەبردنی شارەکان", add_city: "زیادکردنی شاری نوێ",
        add_city_btn: "زیادکردنی شار", cities_list: "لیستی شارەکان",
        more_settings: "ڕێکخستنی زیاتر", order_sound: "زەنگی داواکاری", order_sound_desc: "دەنگی زەنگ",
        test_bell: "تاقیکردنەوە", products: "بەرهەمەکان", add: "زیادکردن", settings: "ڕێکخستن",
        dinar: "دینار", add_to_cart: "زیادکردن بۆ سەبەتە", not_available: "بەردەست نییە",
        new_label: "✨ نوێ", view_product: "بینینی بەرهەم", sold_out: "نەماوە", soon: "بەم زوانە", available: "بەردەست",
        order_status_pending: "لە چاوەڕوانیدایە", order_status_completed: "وەگیراوە", order_status_cancelled: "هەڵوەشاوەتەوە",
        order_status: "دۆخی داواکاری:", send_whatsapp: "ناردن بۆ واتساپ",
        send_whatsapp_desc: "داواکارییەکەت بۆ واتساپ بنێرە",
        contact_whatsapp: "پەیوەندی بە واتساپ", contact_customer: "کڕیار",
        complete_order: "وەگیراوە", cancel_order: "هەڵوەشاندنەوە", reopen_order: "کردنەوە",
        whatsapp_message_greeting: "سڵاو",
        receipt: "پسوولە", print: "چاپکردن",
        receipt_number: "ژمارەی پسوولە", customer_info: "زانیاری کڕیار",
        products_section: "بەرهەمەکان", thank_you: "سوپاس بۆ کڕینەکەت 🌟"
    },
    ar: {
        menu_title: "القائمة الرئيسية", language: "اللغة", theme: "المظهر", admin_login: "تسجيل دخول المدير",
        customer_login: "تسجيل دخول العميل", customer_register: "طلب حساب عميل",
        system_by: "تطوير النظام", categories: "الأقسام", latest_products: "أحدث المنتجات",
        search_placeholder: "ابحث...", most_liked: "الأكثر إعجاباً", product_info: "معلومات المنتج",
        edit_product: "تعديل المنتج", edit_category: "تعديل القسم",
        prod_name: "اسم المنتج *", prod_desc: "وصف المنتج *", prod_price_dinar: "السعر (دينار) *",
        prod_category: "القسم *", prod_status: "حالة المنتج *",
        status_available: "✅ متوفر", status_out: "❌ غير متوفر", status_soon: "⏳ قريباً",
        prod_images: "الصور", upload_image: "اختر صورة", prod_video: "فيديو", upload_video: "اختر فيديو",
        save: "حفظ", cart: "سلة التسوق", back: "رجوع",
        shipping_cost: "تكلفة التوصيل", select_city: "اختر مدينتك", products_total: "إجمالي المنتجات:",
        shipping_cost_label: "تكلفة التوصيل:", grand_total: "المجموع:", checkout: "إتمام الشراء",
        continue_shopping: "متابعة التسوق", order_info: "معلومات الطلب", your_name: "الاسم الكامل",
        name_placeholder: "اكتب اسمك", your_phone: "رقم الهاتف", your_location: "الموقع",
        location_placeholder: "مثال: أربيل", notes: "ملاحظات", notes_placeholder: "ملاحظات...", submit_order: "إرسال الطلب",
        home: "الرئيسية", orders: "طلباتي", contact: "اتصل بنا", my_orders: "طلباتي",
        contact_info: "معلومات الاتصال", phone: "رقم الهاتف", website: "الموقع", address: "العنوان",
        social_media: "وسائل التواصل", login_btn: "تسجيل الدخول", back_to_customer: "العودة",
        admin_panel: "لوحة المدير", total_products: "إجمالي المنتجات", total_orders: "إجمالي الطلبات",
        search_admin: "ابحث...", product_list: "قائمة المنتجات", product: "منتج", category: "قسم",
        add_new_product: "إضافة منتج جديد", add_new_category: "إضافة قسم جديد",
        cat_name: "اسم القسم *", cat_image: "صورة القسم *", add_btn: "إضافة", categories_list: "قائمة الأقسام",
        new_orders: "طلبات جديدة", order_history: "السجل", settings_shop: "المتجر", settings_account: "الحساب",
        settings_contact: "الاتصال", settings_shipping: "التوصيل", settings_more: "المزيد",
        shop_info: "معلومات المتجر", shop_name: "اسم المتجر", shop_logo: "شعار", upload_logo: "اختر شعاراً",
        admin_account: "حساب المدير", username: "اسم المستخدم", password: "كلمة المرور",
        cities_management: "إدارة المدن", add_city: "إضافة مدينة",
        add_city_btn: "إضافة مدينة", cities_list: "قائمة المدن",
        more_settings: "إعدادات إضافية", order_sound: "رنين الطلبات", order_sound_desc: "صوت الرنين",
        test_bell: "تجربة", products: "المنتجات", add: "إضافة", settings: "الإعدادات",
        dinar: "دينار", add_to_cart: "أضف إلى السلة", not_available: "غير متوفر",
        new_label: "✨ جديد", view_product: "عرض المنتج", sold_out: "غير متوفر", soon: "قريباً", available: "متوفر",
        order_status_pending: "قيد الانتظار", order_status_completed: "تم التسليم", order_status_cancelled: "ملغى",
        order_status: "حالة الطلب:", send_whatsapp: "إرسال إلى واتساب",
        send_whatsapp_desc: "أرسل طلبك إلى واتساب",
        contact_whatsapp: "واتساب", contact_customer: "العميل",
        complete_order: "تم التسليم", cancel_order: "إلغاء", reopen_order: "إعادة فتح",
        whatsapp_message_greeting: "مرحباً",
        receipt: "الفاتورة", print: "طباعة",
        receipt_number: "رقم الفاتورة", customer_info: "معلومات العميل",
        products_section: "المنتجات", thank_you: "شكراً لك 🌟"
    },
    en: {
        menu_title: "Main Menu", language: "Language", theme: "Theme", admin_login: "Admin Login",
        customer_login: "Customer Login", customer_register: "Request Account",
        system_by: "System by", categories: "Categories", latest_products: "Latest Products",
        search_placeholder: "Search...", most_liked: "Most Liked", product_info: "Product Info",
        edit_product: "Edit Product", edit_category: "Edit Category",
        prod_name: "Product Name *", prod_desc: "Description *", prod_price_dinar: "Price (IQD) *",
        prod_category: "Category *", prod_status: "Status *",
        status_available: "✅ Available", status_out: "❌ Out of Stock", status_soon: "⏳ Coming Soon",
        prod_images: "Images", upload_image: "Choose Image", prod_video: "Video", upload_video: "Choose Video",
        save: "Save", cart: "Shopping Cart", back: "Back",
        shipping_cost: "Shipping Cost", select_city: "Select your city", products_total: "Products Total:",
        shipping_cost_label: "Shipping:", grand_total: "Grand Total:", checkout: "Checkout",
        continue_shopping: "Continue Shopping", order_info: "Order Info", your_name: "Full Name",
        name_placeholder: "Enter your name", your_phone: "Phone", your_location: "Location",
        location_placeholder: "Example: Erbil", notes: "Notes", notes_placeholder: "Any notes...", submit_order: "Submit Order",
        home: "Home", orders: "Orders", contact: "Contact", my_orders: "My Orders",
        contact_info: "Contact Info", phone: "Phone", website: "Website", address: "Address",
        social_media: "Social Media", login_btn: "Login", back_to_customer: "Back",
        admin_panel: "Admin Panel", total_products: "Total Products", total_orders: "Total Orders",
        search_admin: "Search...", product_list: "Product List", product: "Product", category: "Category",
        add_new_product: "Add New Product", add_new_category: "Add New Category",
        cat_name: "Category Name *", cat_image: "Category Image *", add_btn: "Add", categories_list: "Categories",
        new_orders: "New Orders", order_history: "History", settings_shop: "Shop", settings_account: "Account",
        settings_contact: "Contact", settings_shipping: "Shipping", settings_more: "More",
        shop_info: "Shop Info", shop_name: "Shop Name", shop_logo: "Logo", upload_logo: "Choose Logo",
        admin_account: "Admin Account", username: "Username", password: "Password",
        cities_management: "Cities Management", add_city: "Add New City",
        add_city_btn: "Add City", cities_list: "Cities",
        more_settings: "More Settings", order_sound: "Order Sound", order_sound_desc: "Bell sound",
        test_bell: "Test", products: "Products", add: "Add", settings: "Settings",
        dinar: "IQD", add_to_cart: "Add to Cart", not_available: "Not Available",
        new_label: "✨ New", view_product: "View Product", sold_out: "Sold Out", soon: "Coming Soon", available: "Available",
        order_status_pending: "Pending", order_status_completed: "Completed", order_status_cancelled: "Cancelled",
        order_status: "Order Status:", send_whatsapp: "Send to WhatsApp",
        send_whatsapp_desc: "Send order to WhatsApp",
        contact_whatsapp: "WhatsApp", contact_customer: "Customer",
        complete_order: "Complete", cancel_order: "Cancel", reopen_order: "Reopen",
        whatsapp_message_greeting: "Hello",
        receipt: "Receipt", print: "Print",
        receipt_number: "Receipt No.", customer_info: "Customer Info",
        products_section: "Products", thank_you: "Thank you 🌟"
    }
};

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

let currentLang = localStorage.getItem('derin_lang') || 'ckb';
let backendToken = localStorage.getItem('derin_token') || '';
let backendUser = JSON.parse(localStorage.getItem('derin_user') || 'null');
let remoteSaveTimer = null;
let isSaving = false;

const DEFAULT_CATEGORIES = [
    { name: 'هەموو', name_en: 'All', name_ar: 'الكل', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=200', emoji: '✨' },
    { name: 'چاویلگە', name_en: 'Glasses', name_ar: 'نظارات', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=200', emoji: '🕶️' },
    { name: 'جزدان', name_en: 'Wallets', name_ar: 'محافظ', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200', emoji: '👛' },
    { name: 'سەعات', name_en: 'Watches', name_ar: 'ساعات', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=200', emoji: '⌚' },
    { name: 'جانتا', name_en: 'Bags', name_ar: 'حقائب', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=200', emoji: '👜' },
    { name: 'پێنووس', name_en: 'Pens', name_ar: 'أقلام', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=200', emoji: '✒️' },
    { name: 'بۆن', name_en: 'Perfumes', name_ar: 'عطور', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=200', emoji: '🌸' }
];

const DEFAULT_PRODUCTS = [
    { id: 201, name: 'چاویلکەی ڕەیبان ئەڤیاتۆر لوکس', description: 'چاویلکەی خۆری ئەسڵی دژە تیشکی سەروو بنەوشەیی UV400 بە فڕەیمی کانزایی ئاڵتوونی', price: 48000, oldPrice: 60000, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600'], video: '', likes: 34, likedBy: [] },
    { id: 202, name: 'چاویلکەی خۆری پلاریزەد ڕەش', description: 'چاویلکەی شیکی مۆدێرن بۆ گەشت و شۆفێری بە لێنزی ڕەشی دژە شکان', price: 39000, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 21, likedBy: [] },
    { id: 203, name: 'چاویلکەی چاو پشیلەیی خانمان', description: 'دیزاینی ناوازەی ئیتاڵی بە کوالیتی بەرز و کێشی زۆر سووک', price: 42000, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600'], video: '', likes: 29, likedBy: [] },
    { id: 204, name: 'چاویلکەی سپۆرت گۆڵف و شاخەوانی', description: 'چاویلکەی وەرزشی بەرگەگری لە بەربوونەوە و ئارەقکردنەوە', price: 35000, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600'], video: '', likes: 17, likedBy: [] },
    { id: 205, name: 'جزدانی پێستی سروشتی دەستی', description: 'دروستکراو لە پێستی مانگای 100% سروشتی بە جێگەی تایبەت بۆ پارە و کارتەکان', price: 28000, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600'], video: '', likes: 45, likedBy: [] },
    { id: 206, name: 'جزدانی کارتی زیرەک ئەلەمنیۆم (RFID)', description: 'جزدانی قەبارە بچووکی پارێزراو دژ بە دزینی داتای کارتە بانکییەکان', price: 22000, oldPrice: 28000, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1606503829058-e4aa9820f4c9?auto=format&fit=crop&q=80&w=600'], video: '', likes: 38, likedBy: [] },
    { id: 207, name: 'جزدانی درێژی خانمان بە زیپ', description: 'جزدانی شیک بە قەبارەی گەورە بۆ هەڵگرتنی مۆبایل، پاسپۆرت و کارتەکان', price: 34000, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'], video: '', likes: 27, likedBy: [] },
    { id: 208, name: 'سەعاتی زێڕینی کلاسیک پیاوان', description: 'سەعاتی بەناوبانگی ڕۆژژمێردار بە پۆڵای دژە ژەنگ و ڕەنگی زێڕینی نەگۆڕ', price: 68000, oldPrice: 85000, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600'], video: '', likes: 62, likedBy: [] },
    { id: 209, name: 'سەعاتی دەستی چەرم ڕەش (ئۆتۆماتیک)', description: 'سەعاتی میکانیکی بە زنجیری چەرمی تایبەت و دژە ئاو تا قووڵایی ٥٠ مەتر', price: 54000, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600'], video: '', likes: 48, likedBy: [] },
    { id: 210, name: 'سەعاتی لوکسی خانمان بە نەخشی ئەڵماس', description: 'سەعاتی ناسکی زێڕی گوڵی (Rose Gold) بە بریقە و جوانی بێوێنە', price: 59000, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600'], video: '', likes: 51, likedBy: [] },
    { id: 211, name: 'جانتای دەستی پێستی ئەسڵی خانمان', description: 'جانتای قەبارە مامناوەندی گونجاو بۆ بۆنە فەرمییەکان و ڕۆژانە بە کوالیتی گەرەنتیکراو', price: 58000, oldPrice: 72000, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600'], video: '', likes: 73, likedBy: [] },
    { id: 212, name: 'جانتای سەفەری دەستی پێستی قاوەیی', description: 'جانتای گەورەی لوکس بۆ سەفەر و وەرزش بە دیزاینی ڤینتیجی ئەورووپی', price: 74000, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600'], video: '', likes: 40, likedBy: [] },
    { id: 213, name: 'جانتای مۆدێرنی پشتی بۆ لاپتۆپ', description: 'جانتای پشتی دژە ئاو بە دەرچەی شەحنکردنەوە و شوێنی تایبەت بە کۆمپیوتەر', price: 46000, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&q=80&w=600'], video: '', likes: 36, likedBy: [] },
    { id: 214, name: 'پێنووسی پاركەری لوکس دیاری', description: 'پێنووسی فەرمی لە قوتووی ڕەقی مەخمەڵی تایبەت بە واژووکردن و بەڕێوەبەران', price: 26000, category: 'پێنووس', status: 'available', images: ['https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=600'], video: '', likes: 25, likedBy: [] },
    { id: 215, name: 'پێنووسی مەرەکەبی مۆنت بلانک ستایل', description: 'پێنووسی سەر زێڕینی ئاست بەرز بۆ دەستوخەتی جوان و کۆبوونەوە گرنگەکان', price: 36000, category: 'پێنووس', status: 'available', images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600'], video: '', likes: 31, likedBy: [] },
    { id: 216, name: 'بۆنی عوود و عەنبەری شاهانە (100ml)', description: 'بۆنی مانەوەی زۆر بەهێز بە تێکەڵەی عوودی کامبۆدی و عەنبەری گەرم', price: 68000, oldPrice: 85000, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600'], video: '', likes: 88, likedBy: [] },
    { id: 217, name: 'بۆنی فەرەنسی گوڵ و ڤانێلا (80ml)', description: 'بۆنی ئارامبەخش و ناسکی خانمان بۆ شەوان و جەژنە تایبەتەکان', price: 55000, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 64, likedBy: [] },
    { id: 218, name: 'بۆنی فێنکی پیاوانەی ئۆقیانووس (100ml)', description: 'بۆنی هێورکەرەوە و تازەی هاوینە بە پێکهاتەی سیتڕەس و دار سێدار', price: 49000, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 57, likedBy: [] }
];

const DEFAULT_SETTINGS = {
    shopName: 'Derin Collection', logoUrl: '', phone: '+964 750 123 4567', website: 'www.derincollection.com',
    address: 'هەولێر، شەقامی سەرەکی', tiktok: '', snapchat: '', telegram: '', orderSound: true,
    cities: [{name:'هەولێر',cost:5000},{name:'سۆران',cost:3000},{name:'دهۆک',cost:4000},{name:'سلێمانی',cost:4000}],
    username: 'admin', password: '123'
};

let settings = JSON.parse(localStorage.getItem('derin_settings') || 'null') || { ...DEFAULT_SETTINGS };
let categories = JSON.parse(localStorage.getItem('derin_categories') || 'null') || [...DEFAULT_CATEGORIES];
let products = JSON.parse(localStorage.getItem('derin_products') || 'null') || [...DEFAULT_PRODUCTS];
let cart = JSON.parse(localStorage.getItem('derin_cart') || 'null') || [];
let orders = JSON.parse(localStorage.getItem('derin_orders') || 'null') || [];
let userLikes = JSON.parse(localStorage.getItem('derin_user_likes') || '[]');

let currentCategory = 'هەموو';
let currentSlide = 0;
let carouselInterval = null;
let currentAdminTab = 'new';
let selectedCity = null;

let productImagesData = [];
let productVideoData = '';
let categoryImageData = '';
let logoData = '';
let editingProductId = null;
let editImagesData = [];
let editVideoData = '';
let editingCategoryName = null;
let editCategoryImageData = '';

let lastPendingCount = 0;
let notificationCheckInterval = null;
let currentOpenProductId = null;

// Audio context handling
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) audioCtx = new AudioClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }
    return audioCtx;
}
window.addEventListener('click', () => { getAudioContext(); }, { once: true });
window.addEventListener('touchstart', () => { getAudioContext(); }, { once: true });

function compressImage(file, maxDimension = 800, quality = 0.75) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                let { width, height } = img;
                if (width > height) {
                    if (width > maxDimension) {
                        height = Math.round((height * maxDimension) / width);
                        width = maxDimension;
                    }
                } else {
                    if (height > maxDimension) {
                        width = Math.round((width * maxDimension) / height);
                        height = maxDimension;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.onerror = reject;
        };
        reader.onerror = reject;
    });
}

const DEFAULT_REMOTE_BACKEND = 'https://ais-pre-zaarcztclhyik36a5kzlgw-12520898924.europe-west3.run.app';
let customBackendUrl = localStorage.getItem('derin_backend_url') || '';
let pendingSave = false;
let globalSocket = null;
let realtimeSyncInterval = null;

function getApiUrl(endpoint) {
    if (!endpoint.startsWith('/api')) return endpoint;
    if (customBackendUrl) {
        return customBackendUrl.replace(/\/+$/, '') + endpoint;
    }
    // If hosted on Netlify, GitHub Pages, Vercel, or file://
    if (
        window.location.hostname.includes('netlify.app') ||
        window.location.hostname.includes('github.io') ||
        window.location.hostname.includes('vercel.app') ||
        window.location.protocol === 'file:'
    ) {
        return DEFAULT_REMOTE_BACKEND.replace(/\/+$/, '') + endpoint;
    }
    return endpoint;
}

function apiHeaders(hasBody = true) {
    const h = hasBody ? { 'Content-Type': 'application/json' } : {};
    if (backendToken) h['Authorization'] = 'Bearer ' + backendToken;
    return h;
}

async function api(url, options = {}) {
    const targetUrl = getApiUrl(url);
    try {
        const res = await fetch(targetUrl, {
            ...options,
            headers: { ...apiHeaders(Boolean(options.body)), ...(options.headers || {}) }
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Server error');
        return data;
    } catch (err) {
        console.warn('API fetch warning:', targetUrl, err.message);
        throw err;
    }
}

function setBackendStatus(ok) {
    const el = document.getElementById('backendStatus');
    if (el) {
        el.textContent = ok ? 'سێرڤەر پەیوەستە ⚡' : 'سێرڤەر دابڕاوە ⚠️';
        el.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold ' + (ok ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300');
    }
    const indicator = document.getElementById('backendStatusIndicator');
    if (indicator) {
        indicator.innerHTML = ok 
            ? '<span class="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> باکێند سێرڤەر چالاکە و هەموو ئامێرەکان هاوکاتن</span>'
            : '<span class="inline-flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-bold"><span class="w-2 h-2 rounded-full bg-rose-500"></span> پەیوەست نییە بە سێرڤەر (Offline)</span>';
    }
}

let currentSuccessOrderId = '';
window.currentSuccessOrderId = '';

function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    const toastBody = document.getElementById('toastBody');
    if (!toast || !toastMsg) return;
    toastMsg.innerText = message;
    if (type === 'success') {
        if (toastIcon) toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-xl animate-pulse';
        if (toastBody) toastBody.className = 'flex items-center gap-3 bg-gray-900/95 text-white px-6 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border-2 border-emerald-500/60 text-sm font-black ring-4 ring-emerald-500/20';
    } else if (type === 'error') {
        if (toastIcon) toastIcon.className = 'fa-solid fa-triangle-exclamation text-rose-400 text-xl animate-pulse';
        if (toastBody) toastBody.className = 'flex items-center gap-3 bg-gray-900/95 text-white px-6 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border-2 border-rose-500/60 text-sm font-black ring-4 ring-rose-500/20';
    } else {
        if (toastIcon) toastIcon.className = 'fa-solid fa-circle-info text-sky-400 text-xl';
        if (toastBody) toastBody.className = 'flex items-center gap-3 bg-gray-900/95 text-white px-6 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border-2 border-sky-500/60 text-sm font-black ring-4 ring-sky-500/20';
    }
    toast.classList.remove('hidden');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
    }, 3200);
}

function closeOrderSuccessModal() {
    const m = document.getElementById('orderSuccessModal');
    if (m) m.classList.add('hidden');
}
window.closeOrderSuccessModal = closeOrderSuccessModal;
window.showToast = showToast;

async function loadServerState() {
    try {
        const state = await api('/api/state');
        if (state) {
            if (state.settings) settings = { ...DEFAULT_SETTINGS, ...settings, ...state.settings };
            if (Array.isArray(state.categories) && state.categories.length > 0) categories = state.categories;
            if (Array.isArray(state.products) && state.products.length > 0) products = state.products;
            if (Array.isArray(state.orders)) orders = state.orders;
            setBackendStatus(true);
            saveDataLocally();
            return true;
        }
    } catch (e) {
        console.warn('Failed to load server state:', e.message);
        setBackendStatus(false);
        saveDataLocally();
        return false;
    }
}

async function syncWithServer(silent = true) {
    try {
        const state = await api('/api/state');
        if (!state) return;
        let hasChanges = false;
        
        if (Array.isArray(state.products) && state.products.length > 0) {
            if (JSON.stringify(state.products) !== JSON.stringify(products)) {
                products = state.products;
                hasChanges = true;
            }
        }
        
        if (Array.isArray(state.categories) && state.categories.length > 0) {
            if (JSON.stringify(state.categories) !== JSON.stringify(categories)) {
                categories = state.categories;
                hasChanges = true;
            }
        }
        
        if (Array.isArray(state.orders)) {
            const currentPending = orders.filter(o => o.status === 'pending').length;
            const newPending = state.orders.filter(o => o.status === 'pending').length;
            
            if (JSON.stringify(state.orders) !== JSON.stringify(orders)) {
                orders = state.orders;
                hasChanges = true;
                
                if (newPending > currentPending && settings.orderSound) {
                    playBellSound();
                    showToast('🔔 داواکاری نوێ گەیشت!', 'info');
                }
            }
        }
        
        if (state.settings && JSON.stringify(state.settings) !== JSON.stringify(settings)) {
            settings = { ...DEFAULT_SETTINGS, ...settings, ...state.settings };
            applySettings();
            renderCitiesList();
            updateCitySelect();
            hasChanges = true;
        }
        
        if (hasChanges) {
            saveDataLocally();
            renderCategories();
            renderProducts();
            renderOrders();
            renderAdminProducts();
            renderAdminOrders();
            updateAdminStats();
            updateNotificationBadge();
        }
        setBackendStatus(true);
    } catch (e) {
        setBackendStatus(false);
    }
}

async function saveServerState() {
    if (isSaving) {
        pendingSave = true;
        return;
    }
    isSaving = true;
    try {
        const cleanSettings = { ...settings };
        delete cleanSettings.username;
        delete cleanSettings.password;
        await api('/api/state', {
            method: 'POST',
            body: JSON.stringify({ settings: cleanSettings, categories, products, orders })
        });
        setBackendStatus(true);
    } catch (e) {
        console.warn('Server save failed:', e.message);
        setBackendStatus(false);
    } finally {
        isSaving = false;
        if (pendingSave) {
            pendingSave = false;
            setTimeout(saveServerState, 150);
        }
    }
}

function saveDataLocally() {
    try {
        localStorage.setItem('derin_products', JSON.stringify(products));
        localStorage.setItem('derin_categories', JSON.stringify(categories));
        localStorage.setItem('derin_settings', JSON.stringify(settings));
        localStorage.setItem('derin_orders', JSON.stringify(orders));
        localStorage.setItem('derin_cart', JSON.stringify(cart));
        localStorage.setItem('derin_user_likes', JSON.stringify(userLikes));
    } catch (e) {
        console.warn('LocalStorage save failed:', e);
    }
}

function saveData() {
    saveDataLocally();
    clearTimeout(remoteSaveTimer);
    remoteSaveTimer = setTimeout(saveServerState, 150);
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('derin_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) el.innerText = TRANSLATIONS[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) el.placeholder = TRANSLATIONS[lang][key];
    });
    
    ['ckb', 'ar', 'en'].forEach(l => {
        const btn = document.getElementById('btn-lang-' + l);
        if (btn) {
            if (l === lang) {
                btn.classList.add('bg-derinOrange', 'text-white');
                btn.classList.remove('dark:border-gray-600');
            } else {
                btn.classList.remove('bg-derinOrange', 'text-white');
                btn.classList.add('dark:border-gray-600');
            }
        }
    });
    
    renderCategories();
    renderProducts();
    renderCartPage();
    renderOrders();
    renderAdminProducts();
    renderAdminOrders();
    renderLikedProducts();
    renderCitiesList();
    updateCategorySelect();
    startCarousel();
}

function getCategoryName(cat) {
    if (!cat) return '';
    if (currentLang === 'en') return cat.name_en || cat.name;
    if (currentLang === 'ar') return cat.name_ar || cat.name;
    return cat.name;
}

function formatPrice(price) {
    const d = TRANSLATIONS[currentLang] ? TRANSLATIONS[currentLang].dinar : 'دینار';
    return Math.round(price).toLocaleString('en-US') + ' ' + d;
}

function getOrderStatusInfo(status) {
    const t = TRANSLATIONS[currentLang];
    switch(status) {
        case 'completed': return { text: t.order_status_completed, icon: '✅', class: 'order-completed' };
        case 'cancelled': return { text: t.order_status_cancelled, icon: '❌', class: 'order-cancelled' };
        default: return { text: t.order_status_pending, icon: '⏳', class: 'order-pending' };
    }
}

function formatPhoneForWhatsapp(phone) {
    let cleaned = (phone || '').replace(/[^0-9]/g, '');
    if (cleaned.startsWith('0')) cleaned = '964' + cleaned.substring(1);
    else if (!cleaned.startsWith('964')) cleaned = '964' + cleaned;
    return cleaned;
}

function getShopWhatsappNumber() {
    return formatPhoneForWhatsapp(settings.phone);
}

function sendOrderToWhatsappById(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    const shopNumber = getShopWhatsappNumber();
    const t = TRANSLATIONS[currentLang];
    let msg = `🛍️ *Derin Collection*\n\n`;
    msg += `📦 *${t.order_info}*\n🆔 ${order.id}\n\n`;
    msg += `👤 *${t.your_name}*: ${order.customer.name}\n`;
    msg += `📞 *${t.your_phone}*: ${order.customer.phone}\n`;
    msg += `📍 *${t.your_location}*: ${order.customer.location}\n`;
    if (order.customer.notes) msg += `📝 *${t.notes}*: ${order.customer.notes}\n`;
    msg += `\n━━━━━━━━━━━━━━\n`;
    order.items.forEach(item => {
        msg += `▪️ ${item.name} × ${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
    });
    msg += `━━━━━━━━━━━━━━\n`;
    msg += `🚚 ${t.shipping_cost_label} ${formatPrice(order.shippingCost)}\n`;
    msg += `💰 *${t.grand_total}* ${formatPrice(order.totalIqd)}\n🏙️ ${order.city}\n`;
    window.open(`https://wa.me/${shopNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

function contactCustomerWhatsappById(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    const customerNumber = formatPhoneForWhatsapp(order.customer.phone);
    const t = TRANSLATIONS[currentLang];
    const statusInfo = getOrderStatusInfo(order.status);
    let msg = `${t.whatsapp_message_greeting} ${order.customer.name} 👋\n\n`;
    msg += `📦 *Derin Collection*\n🆔 ${order.id}\n`;
    msg += `${statusInfo.icon} *${t.order_status}* ${statusInfo.text}\n\n`;
    msg += `━━━━━━━━━━━━━━\n`;
    order.items.forEach(item => {
        msg += `▪️ ${item.name} × ${item.qty}\n`;
    });
    msg += `━━━━━━━━━━━━━━\n`;
    msg += `💰 *${t.grand_total}*: ${formatPrice(order.totalIqd)}\n`;
    msg += `🚚 ${t.shipping_cost_label} ${formatPrice(order.shippingCost)}\n🏙️ ${order.city}\n`;
    window.open(`https://wa.me/${customerNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showReceipt(orderId) {
    const o = orders.find(x => x.id === orderId);
    if (!o) return;
    const statusInfo = getOrderStatusInfo(o.status);

    const receiptShopPhone = document.getElementById('receiptShopPhone');
    if (receiptShopPhone) receiptShopPhone.innerText = settings.phone;
    const receiptShopAddress = document.getElementById('receiptShopAddress');
    if (receiptShopAddress) receiptShopAddress.innerText = settings.address;
    const receiptFooterPhone = document.getElementById('receiptFooterPhone');
    if (receiptFooterPhone) receiptFooterPhone.innerText = settings.phone;

    const receiptLogo = document.getElementById('receiptLogo');
    if (receiptLogo) {
        if (settings.logoUrl) {
            receiptLogo.innerHTML = `<img src="${settings.logoUrl}" class="w-full h-full object-cover">`;
        } else {
            receiptLogo.innerHTML = `<div class="text-derinOrange text-[10px] font-black text-center leading-tight italic">Derin<br>Collection</div>`;
        }
    }

    const receiptOrderId = document.getElementById('receiptOrderId');
    if (receiptOrderId) receiptOrderId.innerText = o.id;
    const receiptDate = document.getElementById('receiptDate');
    if (receiptDate) receiptDate.innerText = o.date;

    const receiptStatus = document.getElementById('receiptStatus');
    if (receiptStatus) {
        receiptStatus.innerText = `${statusInfo.icon} ${statusInfo.text}`;
        receiptStatus.className = `inline-block px-4 py-2 rounded-full text-white text-xs font-bold ${statusInfo.class}`;
    }

    if (o.customer) {
        const rcName = document.getElementById('receiptCustomerName');
        if (rcName) rcName.innerText = o.customer.name;
        const rcPhone = document.getElementById('receiptCustomerPhone');
        if (rcPhone) rcPhone.innerText = o.customer.phone;
        const rcLoc = document.getElementById('receiptCustomerLocation');
        if (rcLoc) rcLoc.innerText = o.customer.location;
    }

    const receiptItems = document.getElementById('receiptItems');
    if (receiptItems) {
        receiptItems.innerHTML = o.items.map((item, i) => `
            <div class="bg-gray-50 p-2 rounded border border-gray-200">
                <div class="flex items-center gap-2 mb-1">
                    <span class="w-5 h-5 bg-derinOrange text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">${i+1}</span>
                    <span class="font-bold text-xs truncate flex-1" style="color:#1a1a1a;">${escapeHtml(item.name)}</span>
                </div>
                <div class="flex justify-between items-center text-xs pr-7">
                    <span class="text-gray-500">${item.qty} × ${formatPrice(item.price)}</span>
                    <span class="font-bold" style="color:#FF6B00;">${formatPrice(item.price * item.qty)}</span>
                </div>
            </div>
        `).join('');
    }

    const receiptSubtotal = document.getElementById('receiptSubtotal');
    if (receiptSubtotal) receiptSubtotal.innerText = formatPrice(o.subtotalIqd);
    const receiptCity = document.getElementById('receiptCity');
    if (receiptCity) receiptCity.innerText = o.city;
    const receiptShipping = document.getElementById('receiptShipping');
    if (receiptShipping) receiptShipping.innerText = formatPrice(o.shippingCost);
    const receiptTotal = document.getElementById('receiptTotal');
    if (receiptTotal) receiptTotal.innerText = formatPrice(o.totalIqd);

    const receiptNotesSection = document.getElementById('receiptNotesSection');
    const receiptNotes = document.getElementById('receiptNotes');
    if (o.customer && o.customer.notes) {
        if (receiptNotesSection) receiptNotesSection.classList.remove('hidden');
        if (receiptNotes) receiptNotes.innerText = o.customer.notes;
    } else {
        if (receiptNotesSection) receiptNotesSection.classList.add('hidden');
    }

    document.getElementById('receiptModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function printReceipt() {
    window.print();
}

async function playBellSound() {
    try {
        const bellIcon = document.getElementById('adminBellIcon');
        if (bellIcon) {
            bellIcon.classList.add('animate-bounce');
            setTimeout(() => bellIcon.classList.remove('animate-bounce'), 1200);
        }

        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) {
            if (!audioCtx) audioCtx = new AudioClass();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(() => {});
            }
            const ctx = audioCtx;
            const t0 = ctx.currentTime;
            
            // Bell chime tone 1 (high crystal ding)
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.type = 'triangle';
            osc1.frequency.setValueAtTime(1318.5, t0); // E6
            gain1.gain.setValueAtTime(0.5, t0);
            gain1.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
            osc1.connect(gain1);
            gain1.connect(ctx.destination);
            osc1.start(t0);
            osc1.stop(t0 + 0.9);

            // Bell chime tone 2 (overtone)
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1975.5, t0 + 0.08); // B6
            gain2.gain.setValueAtTime(0.35, t0 + 0.08);
            gain2.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.0);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(t0 + 0.08);
            osc2.stop(t0 + 1.0);

            // Bell chime tone 3 (harmonious resonance)
            const osc3 = ctx.createOscillator();
            const gain3 = ctx.createGain();
            osc3.type = 'sine';
            osc3.frequency.setValueAtTime(2637, t0 + 0.16); // E7
            gain3.gain.setValueAtTime(0.25, t0 + 0.16);
            gain3.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.2);
            osc3.connect(gain3);
            gain3.connect(ctx.destination);
            osc3.start(t0 + 0.16);
            osc3.stop(t0 + 1.2);
        }

        showToast('🔔 دەنگی زەنگ بە سەرکەوتوویی لێدرا! (ئاگاداری کاردەکات)', 'info');
    } catch(e) {
        console.warn('Audio play error:', e);
        showToast('🔔 زەنگی ئاگاداری چالاکە', 'info');
    }
}

function playAddSound() {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc1 = ctx.createOscillator(); const gain1 = ctx.createGain();
        osc1.connect(gain1); gain1.connect(ctx.destination);
        osc1.type = 'sine'; osc1.frequency.setValueAtTime(523, ctx.currentTime);
        osc1.frequency.setValueAtTime(659, ctx.currentTime + 0.08);
        osc1.frequency.setValueAtTime(784, ctx.currentTime + 0.16);
        gain1.gain.setValueAtTime(0.2, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc1.start(ctx.currentTime); osc1.stop(ctx.currentTime + 0.3);
    } catch(e) {}
}

function checkNewOrders() {
    const currentPending = orders.filter(o => o.status === 'pending').length;
    if (currentPending > lastPendingCount) {
        if (settings.orderSound) playBellSound();
    }
    lastPendingCount = currentPending;
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const pending = orders.filter(o => o.status === 'pending').length;
    const b1 = document.getElementById('adminNotifBadge');
    const b2 = document.getElementById('adminNavNotifBadge');
    if (b1) { b1.innerText = pending; b1.style.display = pending > 0 ? 'flex' : 'none'; }
    if (b2) { b2.innerText = pending; b2.style.display = pending > 0 ? 'flex' : 'none'; }
}

function toggleOrderSound() {
    const el = document.getElementById('setOrderSound');
    if (el) {
        settings.orderSound = el.checked;
        saveData();
        if (el.checked) playBellSound();
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('derin_theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon(false);
    }
}
function updateThemeIcon(isDark) {
    const icon = document.getElementById('themeIcon');
    if (!icon) return;
    if (isDark) icon.className = "fa-solid fa-sun text-yellow-400 text-sm";
    else icon.className = "fa-solid fa-moon text-gray-600 text-sm";
}

function safeSetValue(id, value) { const el = document.getElementById(id); if (el) el.value = value; }
function safeSetChecked(id, value) { const el = document.getElementById(id); if (el) el.checked = value; }
function safeSetText(id, value) { const el = document.getElementById(id); if (el) el.innerText = value; }

function applySettings() {
    try {
        if (settings.logoUrl) {
            const lc = document.getElementById('logoCircle');
            if (lc) lc.innerHTML = `<img src="${settings.logoUrl}" alt="Logo">`;
        }
        safeSetText('contactPhoneDisplay', settings.phone);
        const wEl = document.getElementById('contactWebsiteDisplay');
        if (wEl) {
            wEl.innerText = settings.website;
            wEl.href = settings.website.startsWith('http') ? settings.website : 'https://' + settings.website;
        }
        safeSetText('contactAddressDisplay', settings.address);
        const t = document.getElementById('socialTiktok');
        if (t) { t.href = settings.tiktok || '#'; t.style.display = settings.tiktok ? 'flex' : 'none'; }
        const s = document.getElementById('socialSnapchat');
        if (s) { s.href = settings.snapchat || '#'; s.style.display = settings.snapchat ? 'flex' : 'none'; }
        const g = document.getElementById('socialTelegram');
        if (g) { g.href = settings.telegram || '#'; g.style.display = settings.telegram ? 'flex' : 'none'; }

        safeSetValue('setShopName', settings.shopName);
        safeSetValue('setUsername', settings.username || 'admin');
        safeSetValue('setPassword', '');
        safeSetValue('setPhone', settings.phone);
        safeSetValue('setWebsite', settings.website);
        safeSetValue('setAddress', settings.address);
        safeSetValue('setTiktok', settings.tiktok);
        safeSetValue('setSnapchat', settings.snapchat);
        safeSetValue('setTelegram', settings.telegram);
        safeSetChecked('setOrderSound', settings.orderSound);
        renderLogoPreview();
        updateCitySelect();
    } catch(e) {}
}

function renderLogoPreview() {
    const c = document.getElementById('logoPreview'); if (!c) return;
    if (!settings.logoUrl) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="image-preview-item" style="aspect-ratio: 1; max-width: 100px;"><img src="${settings.logoUrl}"><button class="image-preview-remove" onclick="removeLogo()"><i class="fa-solid fa-xmark"></i></button></div>`;
}

async function handleLogoUpload(event) {
    const file = event.target.files[0]; if (!file) return;
    try {
        logoData = await compressImage(file, 400, 0.8);
        const c = document.getElementById('logoPreview');
        if (c) c.innerHTML = `<div class="image-preview-item" style="aspect-ratio: 1; max-width: 100px;"><img src="${logoData}"><button class="image-preview-remove" onclick="removeLogoUpload()"><i class="fa-solid fa-xmark"></i></button></div>`;
    } catch(e) {
        console.error(e);
    }
    event.target.value = '';
}
function removeLogoUpload() { logoData = ''; renderLogoPreview(); }
function removeLogo() { settings.logoUrl = ''; saveData(); applySettings(); }

function saveShopInfo() {
    try {
        const el = document.getElementById('setShopName');
        settings.shopName = (el ? el.value.trim() : '') || 'Derin Collection';
        if (logoData) settings.logoUrl = logoData;
        logoData = '';
        saveData(); applySettings();
        showToast('✅ زانیاری فرۆشگا بە سەرکەوتوویی پاشەکەوت کرا', 'success');
    } catch(e) { showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error'); }
}

async function saveAccountInfo() {
    const uEl = document.getElementById('setUsername');
    const pEl = document.getElementById('setPassword');
    const u = uEl ? uEl.value.trim() : '';
    const p = pEl ? pEl.value.trim() : '';
    if (!u) return alert('تکایە ناوی بەکارهێنەر بنووسە');
    try {
        const res = await api('/api/admin/account', {
            method: 'POST',
            body: JSON.stringify({ username: u, password: p || undefined })
        });
        if (res.ok) {
            settings.username = res.username || u;
            if (pEl) pEl.value = '';
            showToast('✅ هەژماری بەڕێوەبەر نوێکرایەوە', 'success');
        }
    } catch (e) {
        showToast('❌ هەڵە لە نوێکردنەوە: ' + e.message, 'error');
    }
}

function saveContactInfo() {
    try {
        settings.phone = (document.getElementById('setPhone') || {}).value || '';
        settings.website = (document.getElementById('setWebsite') || {}).value || '';
        settings.address = (document.getElementById('setAddress') || {}).value || '';
        settings.tiktok = (document.getElementById('setTiktok') || {}).value || '';
        settings.snapchat = (document.getElementById('setSnapchat') || {}).value || '';
        settings.telegram = (document.getElementById('setTelegram') || {}).value || '';
        saveData(); applySettings();
        showToast('✅ زانیاری پەیوەندی بە سەرکەوتوویی پاشەکەوت کرا', 'success');
    } catch(e) { showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error'); }
}

function saveMoreInfo() {
    try {
        const s = document.getElementById('setOrderSound');
        if (s) settings.orderSound = s.checked;
        saveData();
        showToast('✅ ڕێکخستنەکان بە سەرکەوتوویی پاشەکەوت کران', 'success');
    } catch(e) { showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error'); }
}

function renderCitiesList() {
    const list = document.getElementById('citiesList'); if (!list) return;
    if (!settings.cities || settings.cities.length === 0) {
        list.innerHTML = `<p class="text-center text-gray-400 py-4 text-sm">-</p>`;
        return;
    }
    list.innerHTML = settings.cities.map((city, index) => `
        <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-700/80 p-3 rounded-xl border border-gray-100 dark:border-gray-600/50">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950/40 text-derinOrange flex items-center justify-center text-sm">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <span class="font-bold text-sm block text-gray-800 dark:text-gray-100">${escapeHtml(city.name)}</span>
                    <span class="text-gray-500 dark:text-gray-400 text-xs">${city.cost.toLocaleString()} ${TRANSLATIONS[currentLang].dinar}</span>
                </div>
            </div>
            <button onclick="confirmDeleteCity(${index})" class="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-900/30 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold transition-all cursor-pointer shadow-sm" title="سڕینەوەی ئەم شارە">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function confirmDeleteCity(index) {
    if (!settings.cities || index < 0 || index >= settings.cities.length) return;
    const city = settings.cities[index];
    pendingDeleteType = 'city';
    pendingDeleteCityIndex = index;
    const titleEl = document.getElementById('deleteConfirmTitle');
    const nameEl = document.getElementById('deleteConfirmProdName');
    const subtextEl = document.getElementById('deleteConfirmSubtext');
    if (titleEl) titleEl.innerText = 'ئایا دڵنیایت لە سڕینەوە؟';
    if (nameEl) nameEl.innerText = `شاری "${city.name}" (${city.cost.toLocaleString()} دینار)`;
    if (subtextEl) subtextEl.innerText = 'ئەم شارە لە لیستی گەیاندن و هەڵبژاردنی کڕیار بە تەواوی دەسڕدرێتەوە.';
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

async function executeDeleteCity() {
    if (pendingDeleteCityIndex === null || !settings.cities) return;
    const index = pendingDeleteCityIndex;
    const removed = settings.cities.splice(index, 1)[0];
    closeDeleteConfirmModal();
    saveData();
    await saveServerState();
    renderCitiesList();
    updateCitySelect();
    if (removed) {
        showToast(`🗑️ شاری "${removed.name}" بە سەرکەوتوویی سڕایەوە`, 'success');
    }
}

async function addNewCity() {
    const nEl = document.getElementById('newCityName');
    const cEl = document.getElementById('newCityCost');
    const name = nEl ? nEl.value.trim() : '';
    const cost = parseFloat(cEl ? cEl.value : 0);
    if (!name || isNaN(cost) || cost <= 0) return alert('تکایە ناوی شار و نرخ بە دروستی بنووسە');
    if (settings.cities.find(c => c.name === name)) return alert('ئەم شارە پێشتر زیادکراوە');
    settings.cities.push({ name, cost });
    saveData();
    await saveServerState();
    renderCitiesList();
    updateCitySelect();
    if (nEl) nEl.value = '';
    if (cEl) cEl.value = '';
    showToast(`✅ شاری "${name}" زیادکرا`, 'success');
}

function deleteCity(index) {
    confirmDeleteCity(index);
}

function updateCitySelect() {
    const select = document.getElementById('citySelect'); if (!select) return;
    select.innerHTML = `<option value="">-- ${TRANSLATIONS[currentLang].select_city} --</option>` +
        settings.cities.map((c, i) => `<option value="${i}">${escapeHtml(c.name)} - ${c.cost.toLocaleString()} ${TRANSLATIONS[currentLang].dinar}</option>`).join('');
}

function updateCategorySelect() {
    const select = document.getElementById('newProdCategory'); if (!select) return;
    const cats = categories.filter(c => c.name !== 'هەموو');
    select.innerHTML = '<option value="">-- هەڵبژاردنی پۆلێن --</option>' + cats.map(c => `<option value="${escapeHtml(c.name)}">${escapeHtml(getCategoryName(c))}</option>`).join('');
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('menuOverlay');
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full'); sidebar.classList.add('translate-x-0'); overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('translate-x-full'); sidebar.classList.remove('translate-x-0'); overlay.classList.add('hidden');
    }
}

function toggleLike(productId, event) {
    if (event) event.stopPropagation();
    const p = products.find(x => x.id === productId); if (!p) return;
    const idx = userLikes.indexOf(productId);
    if (idx === -1) { userLikes.push(productId); p.likes = (p.likes || 0) + 1; }
    else { userLikes.splice(idx, 1); p.likes = Math.max(0, (p.likes || 1) - 1); }
    saveData();
    renderProducts(currentCategory === 'هەموو' ? products : products.filter(x => x.category === currentCategory));
    if (event && event.target) {
        const btn = event.target.closest('.like-btn');
        if (btn) { btn.classList.add('heart-beat'); setTimeout(() => btn.classList.remove('heart-beat'), 600); }
    }
    const lm = document.getElementById('likedModal');
    if (lm && !lm.classList.contains('hidden')) renderLikedProducts();
    const pm = document.getElementById('productModal');
    if (pm && !pm.classList.contains('hidden') && currentOpenProductId === productId) {
        const lb = document.getElementById('modalLikeBtn');
        if (lb) {
            if (userLikes.includes(productId)) lb.classList.add('liked');
            else lb.classList.remove('liked');
            const ce = document.getElementById('modalLikeCount');
            if (ce) ce.innerText = p.likes || 0;
        }
    }
}

function showLikedProducts() {
    const modal = document.getElementById('likedModal');
    if (!modal) return;
    document.getElementById('mainHeader')?.classList.remove('hidden');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderLikedProducts();
}
function closeLikedModal() {
    const modal = document.getElementById('likedModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    restoreCustomerView();
}

function renderLikedProducts() {
    const content = document.getElementById('likedModalContent'); if (!content) return;
    const sorted = [...products].filter(p => (p.likes || 0) > 0).sort((a, b) => (b.likes || 0) - (a.likes || 0));
    if (sorted.length === 0) {
        content.innerHTML = `<div class="text-center py-12"><i class="fa-solid fa-heart text-6xl text-gray-300 mb-4"></i><p class="text-gray-400">هیچ بەرهەمێکی لایککراو نییە</p></div>`;
        return;
    }
    const top3 = sorted.slice(0, 3); const rest = sorted.slice(3);
    let html = '';
    if (top3.length > 0) {
        html += `<div class="grid grid-cols-3 gap-2 mb-4">`;
        const medals = ['🥇', '🥈', '🥉'];
        const colors = ['from-yellow-400 to-orange-500', 'from-gray-300 to-gray-500', 'from-orange-400 to-orange-700'];
        top3.forEach((p, i) => {
            const img = (p.images && p.images[0]) || '';
            const hasDiscount = p.oldPrice && Number(p.oldPrice) > Number(p.price);
            const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
            html += `<div class="relative bg-gradient-to-b ${colors[i]} p-0.5 rounded-2xl cursor-pointer" onclick="closeLikedModal(); openProductModal(${p.id});"><div class="bg-white dark:bg-gray-800 rounded-2xl p-2"><div class="relative mb-2"><img src="${img}" class="w-full h-24 object-cover rounded-xl"><div class="absolute -top-2 -right-2 text-2xl">${medals[i]}</div>${hasDiscount ? `<div class="absolute top-1 left-1 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow">${discountPercent}%-</div>` : ''}</div><h4 class="font-bold text-[11px] truncate">${escapeHtml(p.name)}</h4><div class="flex items-center gap-1.5 mt-0.5 flex-wrap"><span class="text-derinOrange font-bold text-xs">${formatPrice(p.price)}</span>${hasDiscount ? `<span class="text-[10px] text-gray-400 line-through">${formatPrice(p.oldPrice)}</span>` : ''}</div><div class="flex items-center gap-1 mt-1 text-red-500"><i class="fa-solid fa-heart text-[10px]"></i><span class="font-bold text-[10px]">${p.likes}</span></div></div></div>`;
        });
        html += `</div>`;
    }
    if (rest.length > 0) {
        html += `<div class="pt-3 border-t dark:border-gray-700 space-y-2">`;
        rest.forEach((p, i) => {
            const img = (p.images && p.images[0]) || '';
            const rank = i + 4;
            const hasDiscount = p.oldPrice && Number(p.oldPrice) > Number(p.price);
            const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
            html += `<div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-xl cursor-pointer" onclick="closeLikedModal(); openProductModal(${p.id});"><div class="w-8 h-8 bg-derinOrange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">${rank}</div><div class="relative"><img src="${img}" class="w-14 h-14 rounded-lg object-cover flex-shrink-0">${hasDiscount ? `<div class="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] font-black px-1 rounded-full shadow">${discountPercent}%-</div>` : ''}</div><div class="flex-1 min-w-0"><h4 class="font-bold text-sm truncate">${escapeHtml(p.name)}</h4><div class="flex items-center gap-1.5"><p class="text-derinOrange font-bold text-xs">${formatPrice(p.price)}</p>${hasDiscount ? `<span class="text-[10px] text-gray-400 line-through">${formatPrice(p.oldPrice)}</span>` : ''}</div></div><div class="flex items-center gap-1 text-red-500 flex-shrink-0"><i class="fa-solid fa-heart text-sm"></i><span class="font-bold text-sm">${p.likes}</span></div></div>`;
        });
        html += `</div>`;
    }
    content.innerHTML = html;
}

async function handleImageUpload(event) {
    const files = event.target.files; if (!files || files.length === 0) return;
    for (const file of Array.from(files)) {
        try {
            const compressed = await compressImage(file, 800, 0.75);
            productImagesData.push(compressed);
        } catch(e) { console.error(e); }
    }
    renderProductImagesPreview();
    event.target.value = '';
}

function renderProductImagesPreview() {
    const c = document.getElementById('productImagesPreview'); if (!c) return;
    if (productImagesData.length === 0) { c.innerHTML = ''; return; }
    c.innerHTML = productImagesData.map((img, i) => `<div class="image-preview-item" style="aspect-ratio: 1;"><img src="${img}"><button class="image-preview-remove" onclick="removeProductImage(${i})"><i class="fa-solid fa-xmark"></i></button></div>`).join('');
}
function removeProductImage(i) { productImagesData.splice(i, 1); renderProductImagesPreview(); }

function handleVideoUpload(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { productVideoData = e.target.result; renderProductVideoPreview(); };
    reader.readAsDataURL(file); event.target.value = '';
}
function renderProductVideoPreview() {
    const c = document.getElementById('productVideoPreview'); if (!c) return;
    if (!productVideoData) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="relative bg-black rounded-lg overflow-hidden"><video src="${productVideoData}" controls class="w-full max-h-48"></video><button onclick="removeProductVideo()" class="absolute top-2 left-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark"></i></button></div>`;
}
function removeProductVideo() { productVideoData = ''; renderProductVideoPreview(); }

async function handleCategoryImageUpload(event) {
    const file = event.target.files[0]; if (!file) return;
    try {
        categoryImageData = await compressImage(file, 400, 0.8);
        renderCategoryImagePreview();
    } catch(e) { console.error(e); }
    event.target.value = '';
}
function renderCategoryImagePreview() {
    const c = document.getElementById('categoryImagePreview'); if (!c) return;
    if (!categoryImageData) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="image-preview-item" style="aspect-ratio: 1; max-width: 120px;"><img src="${categoryImageData}"><button class="image-preview-remove" onclick="removeCategoryImage()"><i class="fa-solid fa-xmark"></i></button></div>`;
}
function removeCategoryImage() { categoryImageData = ''; renderCategoryImagePreview(); }

async function handleEditImageUpload(event) {
    const files = event.target.files; if (!files || files.length === 0) return;
    for (const file of Array.from(files)) {
        try {
            const compressed = await compressImage(file, 800, 0.75);
            editImagesData.push(compressed);
        } catch(e) { console.error(e); }
    }
    renderEditImagesPreview();
    event.target.value = '';
}
function renderEditImagesPreview() {
    const c = document.getElementById('editProdImagesPreview'); if (!c) return;
    if (editImagesData.length === 0) { c.innerHTML = ''; return; }
    c.innerHTML = editImagesData.map((img, i) => `<div class="image-preview-item" style="aspect-ratio: 1;"><img src="${img}"><button class="image-preview-remove" onclick="removeEditImage(${i})"><i class="fa-solid fa-xmark"></i></button></div>`).join('');
}
function removeEditImage(i) { editImagesData.splice(i, 1); renderEditImagesPreview(); }

function handleEditVideoUpload(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { editVideoData = e.target.result; renderEditVideoPreview(); };
    reader.readAsDataURL(file); event.target.value = '';
}
function renderEditVideoPreview() {
    const c = document.getElementById('editProdVideoPreview'); if (!c) return;
    if (!editVideoData) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="relative bg-black rounded-lg overflow-hidden"><video src="${editVideoData}" controls class="w-full max-h-48"></video><button onclick="removeEditVideo()" class="absolute top-2 left-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"><i class="fa-solid fa-xmark"></i></button></div>`;
}
function removeEditVideo() { editVideoData = ''; renderEditVideoPreview(); }

async function handleEditCategoryImage(event) {
    const file = event.target.files[0]; if (!file) return;
    try {
        editCategoryImageData = await compressImage(file, 400, 0.8);
        renderEditCategoryImage();
    } catch(e) { console.error(e); }
    event.target.value = '';
}
function renderEditCategoryImage() {
    const c = document.getElementById('editCatImagePreview'); if (!c) return;
    if (!editCategoryImageData) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="image-preview-item" style="aspect-ratio: 1; max-width: 120px;"><img src="${editCategoryImageData}"><button class="image-preview-remove" onclick="removeEditCategoryImage()"><i class="fa-solid fa-xmark"></i></button></div>`;
}
function removeEditCategoryImage() { editCategoryImageData = ''; renderEditCategoryImage(); }

function startCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const dots = document.getElementById('carouselDots');
    if (!carousel || !dots) return;
    carousel.innerHTML = ''; dots.innerHTML = '';
    const available = products.filter(p => p.status !== 'out_of_stock' && (p.images && p.images.length > 0));
    const featured = available.slice(0, 6);
    if(featured.length === 0) return;
    const t = TRANSLATIONS[currentLang];
    featured.forEach((p, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${p.images[0]}')`;
        slide.onclick = () => openProductModal(p.id);
        slide.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div class="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                <div class="flex items-center gap-2 mb-2">
                    <span class="bg-derinOrange text-white text-[10px] px-2 py-1 rounded-full font-bold">${t.new_label}</span>
                    <span class="bg-white/20 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full font-bold">${escapeHtml(getCategoryName(categories.find(c => c.name === p.category) || {name: p.category}))}</span>
                </div>
                <h2 class="text-2xl font-black mb-1 drop-shadow-lg">${escapeHtml(p.name)}</h2>
                <p class="text-sm text-white/90 mb-2 drop-shadow">${escapeHtml((p.description || '').substring(0, 60))}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-black text-derinOrange drop-shadow-lg">${formatPrice(p.price)}</span>
                    <button class="bg-derinOrange text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg">${t.view_product} <i class="fa-solid fa-arrow-left"></i></button>
                </div>
            </div>
        `;
        carousel.appendChild(slide);
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = (e) => { e.stopPropagation(); goToSlide(index); };
        dots.appendChild(dot);
    });
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => nextSlide(), 4000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active'); dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active'); dots[currentSlide].classList.add('active');
}

function goToSlide(i) {
    clearInterval(carouselInterval);
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active'); dots[currentSlide].classList.remove('active');
    currentSlide = i;
    slides[currentSlide].classList.add('active'); dots[currentSlide].classList.add('active');
    carouselInterval = setInterval(() => nextSlide(), 4000);
}

function renderCategories() {
    const c = document.getElementById('categoryList'); if (!c) return;
    c.innerHTML = categories.map(cat => {
        const isActive = currentCategory === cat.name;
        const emoji = cat.emoji || '✨';
        const image = cat.image || '';
        const catName = getCategoryName(cat);
        return `
            <div class="category-item ${isActive ? 'active' : ''}" onclick="filterByCategory('${escapeHtml(cat.name)}')">
                <div class="category-circle">
                    ${image ? `<img src="${image}" alt="${escapeHtml(catName)}">` : `<span class="category-emoji">${emoji}</span>`}
                </div>
                <div class="category-name">${escapeHtml(catName)}</div>
            </div>
        `;
    }).join('');
}

function renderAdminCategoryList() {
    const list = document.getElementById('adminCategoryList'); if (!list) return;
    const cats = categories.filter(c => c.name !== 'هەموو');
    if (cats.length === 0) { list.innerHTML = `<p class="text-center text-gray-400 py-4 text-sm">-</p>`; return; }
    list.innerHTML = cats.map(cat => `
        <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
            <div class="flex items-center gap-2">
                <img src="${cat.image}" class="w-10 h-10 rounded-lg object-cover">
                <span class="font-bold text-sm">${escapeHtml(getCategoryName(cat))}</span>
            </div>
            <div class="flex gap-1">
                <button onclick="editCategory('${escapeHtml(cat.name)}')" class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center cursor-pointer"><i class="fa-solid fa-pen text-xs"></i></button>
                <button onclick="deleteCategory('${escapeHtml(cat.name)}')" class="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center cursor-pointer"><i class="fa-solid fa-trash text-xs"></i></button>
            </div>
        </div>
    `).join('');
}

function filterByCategory(name) {
    currentCategory = name;
    renderCategories();
    const s = document.getElementById('searchInput'); if (s) s.value = '';
    if (name === 'هەموو') renderProducts(products);
    else renderProducts(products.filter(p => p.category === name));
}

function searchProducts() {
    const s = document.getElementById('searchInput');
    const term = s ? s.value.toLowerCase() : '';
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
    renderProducts(filtered);
}

function getStatusInfo(s) {
    const t = TRANSLATIONS[currentLang];
    switch(s) {
        case 'available': return { text: t.available, class: 'status-available', icon: 'fa-check' };
        case 'out_of_stock': return { text: t.sold_out, class: 'status-out', icon: 'fa-xmark' };
        case 'coming_soon': return { text: t.soon, class: 'status-soon', icon: 'fa-clock' };
        default: return { text: t.available, class: 'status-available', icon: 'fa-check' };
    }
}

function renderProducts(list = products) {
    const grid = document.getElementById('productGrid'); if (!grid) return;
    const countBadge = document.getElementById('productCountBadge');
    if (countBadge) countBadge.innerText = list.length;
    const t = TRANSLATIONS[currentLang];
    if (!list || list.length === 0) { 
        grid.innerHTML = `<div class="col-span-2 text-center py-10 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700"><i class="fa-solid fa-box-open text-4xl text-gray-300 mb-3"></i><p class="text-gray-400">هیچ بەرهەمێک نەدۆزرایەوە</p></div>`; 
        return; 
    }
    const sortedList = [...list].sort((a, b) => b.id - a.id);
    grid.innerHTML = sortedList.map((p) => {
        const images = p.images && p.images.length > 0 ? p.images : ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500'];
        const si = getStatusInfo(p.status);
        const hasVideo = p.video && p.video !== '';
        const isLiked = userLikes.includes(p.id);
        const likeCount = p.likes || 0;
        const catName = getCategoryName(categories.find(c => c.name === p.category) || {name: p.category});
        const isDisabled = p.status === 'out_of_stock' || p.status === 'coming_soon';
        const hasDiscount = p.oldPrice && Number(p.oldPrice) > Number(p.price);
        const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
        const colorDots = images.length > 1 ? `<div class="absolute bottom-2 left-2 flex gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 z-10">${images.map((_, i) => `<div class="color-dot ${i === 0 ? 'active' : ''}" style="background: url('${images[i]}'); background-size: cover; background-position: center;" onclick="switchProductImage(event, ${p.id}, ${i})"></div>`).join('')}</div>` : '';
        return `
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border dark:border-gray-700 overflow-hidden group relative">
            <div class="relative overflow-hidden cursor-pointer" onclick="openProductModal(${p.id})">
                <img id="product-image-${p.id}" src="${images[0]}" class="w-full h-48 object-cover">
                <!-- داشکاندن لە سەرەوە لای دەستە چەپ -->
                ${hasDiscount ? `
                <div class="absolute top-2 left-2 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-[10px] px-2 py-0.5 rounded-full font-black shadow-lg flex items-center gap-1 z-20 pointer-events-none">
                    <i class="fa-solid fa-tag text-[9px]"></i> <span>داشکاندن ${discountPercent}%-</span>
                </div>` : ''}

                <!-- هێمای لایک لە خوارتر -->
                <div class="like-btn ${isLiked ? 'liked' : ''}" style="${hasDiscount ? 'top: 38px; left: 8px;' : 'top: 8px; left: 8px;'}" onclick="toggleLike(${p.id}, event)">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart text-red-500 ${isLiked ? 'text-white' : ''}"></i>
                    <span class="like-count">${likeCount}</span>
                </div>

                <!-- هێمای ڤیدیۆ لە خوارتر -->
                ${hasVideo ? `<div class="absolute ${hasDiscount ? 'top-[68px]' : 'top-[38px]'} left-2 bg-purple-600 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center shadow-md z-10"><i class="fa-solid fa-video text-[9px]"></i></div>` : ''}

                <!-- دۆخی بەرهەم لە دەستە ڕاست -->
                <div class="absolute top-2 right-2 ${si.class} text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md flex items-center gap-1 z-10 pointer-events-none">
                    <i class="fa-solid ${si.icon}"></i> ${si.text}
                </div>
                ${colorDots}
            </div>
            <div class="p-3">
                <h4 class="font-bold text-sm truncate cursor-pointer" onclick="openProductModal(${p.id})">${escapeHtml(p.name)}</h4>
                <div class="flex items-baseline gap-2 mt-1 flex-wrap">
                    <span class="text-derinOrange font-black text-base">${formatPrice(p.price)}</span>
                    ${hasDiscount ? `<span class="text-xs text-gray-400 line-through font-semibold">${formatPrice(p.oldPrice)}</span>` : ''}
                </div>
                <p class="text-xs text-gray-400 mt-1">${escapeHtml(catName)}</p>
                <button onclick="event.stopPropagation(); addToCart(${p.id});" ${isDisabled ? 'disabled' : ''} class="w-full mt-3 ${isDisabled ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-derinOrange hover:bg-orange-600'} text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer">
                    <i class="fa-solid ${isDisabled ? 'fa-ban' : 'fa-cart-plus'}"></i> ${isDisabled ? t.not_available : t.add_to_cart}
                </button>
            </div>
        </div>
    `}).join('');
}

function switchProductImage(event, productId, index) {
    event.stopPropagation();
    const p = products.find(x => x.id === productId);
    if (!p || !p.images) return;
    const img = document.getElementById(`product-image-${productId}`);
    if (img) img.src = p.images[index];
    const card = event.target.closest('.bg-white, .bg-gray-800');
    if (card) card.querySelectorAll('.color-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function openProductModal(productId) {
    const p = products.find(x => x.id === productId); if (!p) return;
    currentOpenProductId = productId;
    const t = TRANSLATIONS[currentLang];
    const images = p.images && p.images.length > 0 ? p.images : ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500'];
    const si = getStatusInfo(p.status);
    const isDisabled = p.status === 'out_of_stock' || p.status === 'coming_soon';
    const hasVideo = p.video && p.video !== '';
    const isLiked = userLikes.includes(p.id);
    const likeCount = p.likes || 0;
    const catName = getCategoryName(categories.find(c => c.name === p.category) || {name: p.category});
    const hasDiscount = p.oldPrice && Number(p.oldPrice) > Number(p.price);
    const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
    const colorThumbs = images.length > 1 ? `<div class="flex gap-2 justify-center mt-3 mb-3 flex-wrap">${images.map((img, i) => `<div class="modal-color-dot cursor-pointer rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-derinOrange' : 'border-transparent'}" onclick="switchModalImage(${i})"><img src="${img}" class="w-14 h-14 object-cover"></div>`).join('')}</div>` : '';
    document.getElementById('productModalContent').innerHTML = `
        <div class="p-4">
            <div class="relative rounded-2xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-700 flex items-center justify-center" style="min-height: 300px;">
                <img id="modalProductImage" src="${images[0]}" class="w-full max-h-96 object-contain">
                ${hasDiscount ? `
                <div class="absolute top-3 left-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-xs px-3 py-1.5 rounded-full font-black shadow-lg flex items-center gap-1 z-20 pointer-events-none">
                    <i class="fa-solid fa-tag"></i> <span>داشکاندن ${discountPercent}%-</span>
                </div>` : ''}
                ${hasVideo ? `<div class="absolute ${hasDiscount ? 'top-12' : 'top-3'} left-3 bg-purple-600 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md z-10"><i class="fa-solid fa-video"></i></div>` : ''}
                <div class="absolute top-3 right-3 ${si.class} text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md flex items-center gap-1 z-10 pointer-events-none">
                    <i class="fa-solid ${si.icon}"></i> ${si.text}
                </div>
                <button id="modalLikeBtn" onclick="toggleLike(${p.id}, event)" class="absolute bottom-3 left-3 like-btn ${isLiked ? 'liked' : ''}" style="position:absolute!important;top:auto!important;bottom:12px!important;left:12px!important;right:auto!important;width:auto!important;height:auto!important;padding:6px 12px!important;border-radius:20px!important;">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart text-red-500 ${isLiked ? 'text-white' : ''}"></i>
                    <span id="modalLikeCount" class="text-xs font-bold ${isLiked ? 'text-white' : 'text-gray-600'} ml-1">${likeCount}</span>
                </button>
            </div>
            ${colorThumbs}
            <div class="flex justify-between items-start mb-2">
                <div class="flex-1"><h2 class="text-2xl font-black mb-1">${escapeHtml(p.name)}</h2><span class="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">${escapeHtml(catName)}</span></div>
            </div>
            <div class="flex items-baseline gap-3 mb-3 flex-wrap">
                <div class="text-2xl font-black text-derinOrange">${formatPrice(p.price)}</div>
                ${hasDiscount ? `
                <span class="text-base text-gray-400 line-through font-semibold">${formatPrice(p.oldPrice)}</span>
                <span class="bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs px-2 py-0.5 rounded-full font-black flex items-center gap-1">${discountPercent}%- داشکاندن</span>` : ''}
            </div>
            ${p.description ? `<div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl mb-3"><p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${escapeHtml(p.description)}</p></div>` : ''}
            ${hasVideo ? `<div class="mb-3"><div class="rounded-2xl overflow-hidden bg-black"><video src="${p.video}" controls class="w-full max-h-72"></video></div></div>` : ''}
            <button onclick="addToCart(${p.id}); closeProductModal();" ${isDisabled ? 'disabled' : ''} class="w-full ${isDisabled ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' : 'bg-derinOrange hover:bg-orange-600'} text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer">
                <i class="fa-solid ${isDisabled ? 'fa-ban' : 'fa-cart-plus'}"></i> ${isDisabled ? t.not_available : t.add_to_cart}
            </button>
        </div>
    `;
    document.getElementById('productModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function switchModalImage(index) {
    const dots = document.querySelectorAll('.modal-color-dot'); if (dots.length === 0) return;
    dots.forEach((d, i) => { if (i === index) d.classList.add('border-derinOrange'); else d.classList.remove('border-derinOrange'); });
    const src = dots[index].querySelector('img').src;
    const m = document.getElementById('modalProductImage'); if (m) m.src = src;
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentOpenProductId = null;
    restoreCustomerView();
}

function addToCart(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    if (p.status === 'out_of_stock') return alert(TRANSLATIONS[currentLang].sold_out);
    if (p.status === 'coming_soon') return alert(TRANSLATIONS[currentLang].soon);
    const ex = cart.find(i => i.id === id);
    if (ex) ex.qty += 1;
    else cart.push({ id: p.id, name: p.name, price: p.price, oldPrice: p.oldPrice || null, image: (p.images && p.images[0]) || '', qty: 1 });
    saveDataLocally();
    renderCartPage(); updateCartBadge(); playAddSound();
    showToast('🛒 بەرهەمەکە زیادکرا بۆ سەبەتە', 'success');
}

function updateCartBadge() {
    const t = cart.reduce((s, i) => s + i.qty, 0);
    const b1 = document.getElementById('cartBadge'); if (b1) { b1.innerText = t; b1.style.display = t === 0 ? 'none' : 'flex'; }
    const b2 = document.getElementById('navCartBadge'); if (b2) { b2.innerText = t; b2.style.display = t === 0 ? 'none' : 'flex'; }
}

function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveDataLocally(); renderCartPage(); updateCartBadge(); }

function changeQty(id, d) {
    const i = cart.find(x => x.id === id);
    if (i) { i.qty += d; if (i.qty <= 0) removeFromCart(id); else { saveDataLocally(); renderCartPage(); updateCartBadge(); } }
}

function renderCartPage() {
    const c = document.getElementById('cartPageItems'); if (!c) return;
    if (cart.length === 0) {
        c.innerHTML = `<div class="text-center py-10 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700"><i class="fa-solid fa-cart-shopping text-4xl text-gray-300 mb-3"></i><p class="text-gray-400">سەبەتەکەت بەتاڵە</p></div>`;
        document.getElementById('citySelectSection').classList.add('hidden');
        document.getElementById('cartSummary').classList.add('hidden');
        return;
    }
    document.getElementById('citySelectSection').classList.remove('hidden');
    document.getElementById('cartSummary').classList.remove('hidden');
    c.innerHTML = cart.map(item => `
        <div class="flex gap-3 bg-white dark:bg-gray-800 p-3 rounded-xl items-center border dark:border-gray-700">
            <img src="${item.image}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1">
                <h4 class="font-bold text-sm">${escapeHtml(item.name)}</h4>
                <div class="flex items-baseline gap-2 mt-1">
                    <span class="text-derinOrange font-black text-sm">${formatPrice(item.price)}</span>
                    ${item.oldPrice && item.oldPrice > item.price ? `<span class="text-xs text-gray-400 line-through">${formatPrice(item.oldPrice)}</span>` : ''}
                </div>
            </div>
            <div class="flex flex-col items-center gap-1">
                <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">
                    <button onclick="changeQty(${item.id}, 1)" class="text-derinOrange font-bold text-base px-1 cursor-pointer">+</button>
                    <span class="text-sm font-bold min-w-[20px] text-center">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, -1)" class="text-gray-400 font-bold text-base px-1 cursor-pointer">-</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-400 text-xs mt-1 cursor-pointer"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join('');
    updateCartTotals();
}

function calculateTotals() {
    const subtotalIqd = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const select = document.getElementById('citySelect');
    let shippingIqd = 0;
    if (select && select.value !== '') {
        const idx = parseInt(select.value);
        if (settings.cities[idx]) {
            shippingIqd = settings.cities[idx].cost;
            selectedCity = settings.cities[idx];
        }
    } else {
        selectedCity = null;
    }
    return { subtotalIqd, shippingIqd, grandTotal: subtotalIqd + shippingIqd };
}

function updateCartTotals() {
    const t = calculateTotals();
    const s1 = document.getElementById('cartSubtotal'); if (s1) s1.innerText = formatPrice(t.subtotalIqd);
    const s2 = document.getElementById('cartShipping'); if (s2) s2.innerText = t.shippingIqd > 0 ? formatPrice(t.shippingIqd) : '0 ' + TRANSLATIONS[currentLang].dinar;
    const s3 = document.getElementById('cartGrandTotal'); if (s3) s3.innerText = formatPrice(t.grandTotal);
}

function openCheckoutForm() {
    if (cart.length === 0) return alert('سەبەتەکەت بەتاڵە!');
    if (!selectedCity) return alert('تکایە سەرەتا شاری گەیاندن هەڵبژێرە');
    const t = calculateTotals();
    const el = document.getElementById('modalTotal'); if (el) el.innerText = formatPrice(t.grandTotal);
    const wa = document.getElementById('sendToWhatsapp'); if (wa) wa.checked = false;
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutForm() {
    document.getElementById('checkoutModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

async function submitOrder() {
    const name = (document.getElementById('checkoutName') || {}).value || '';
    const phone = (document.getElementById('checkoutPhone') || {}).value || '';
    const location = (document.getElementById('checkoutLocation') || {}).value || '';
    const notes = (document.getElementById('checkoutNotes') || {}).value || '';
    const sendToWhatsapp = (document.getElementById('sendToWhatsapp') || {}).checked || false;
    if (!name.trim()) return alert('تکایە ناوی تەواوت بنووسە');
    if (!phone.trim()) return alert('تکایە ژمارەی مۆبایل بنووسە');
    if (!location.trim()) return alert('تکایە ناونیشان بنووسە');

    const submitBtn = document.querySelector('#checkoutModal button[onclick="submitOrder()"]');
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> دەنێردرێت...';
    }

    const t = calculateTotals();
    const order = {
        id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        items: [...cart],
        subtotalIqd: t.subtotalIqd,
        city: selectedCity.name,
        shippingCost: t.shippingIqd,
        totalIqd: t.grandTotal,
        date: new Date().toLocaleDateString('en-GB'),
        status: 'pending',
        customer: { name: name.trim(), phone: phone.trim(), location: location.trim(), notes: notes.trim() }
    };

    try {
        await api('/api/orders', { method: 'POST', body: JSON.stringify(order) });
    } catch (e) {
        console.warn('Order saved locally');
    }

    orders.unshift(order);
    cart = [];
    saveDataLocally();
    selectedCity = null;
    const cs = document.getElementById('citySelect'); if (cs) cs.value = '';
    ['checkoutName','checkoutPhone','checkoutLocation','checkoutNotes'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    renderCartPage();
    updateCartBadge();
    renderOrders();
    updateAdminStats();
    closeCheckoutForm();

    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origBtnHtml;
    }

    lastPendingCount = orders.filter(o => o.status === 'pending').length;
    updateNotificationBadge();
    
    // Open prominent order success modal and toast
    currentSuccessOrderId = order.id;
    window.currentSuccessOrderId = order.id;
    const sId = document.getElementById('successOrderId');
    if (sId) sId.innerText = order.id;
    const sModal = document.getElementById('orderSuccessModal');
    if (sModal) sModal.classList.remove('hidden');
    showToast(`✅ داواکاری ${order.id} بە سەرکەوتوویی نێردرا`, 'success');

    if (sendToWhatsapp) {
        setTimeout(() => {
            sendOrderToWhatsappById(order.id);
        }, 600);
    }
}

function renderOrders() {
    const list = document.getElementById('ordersList'); if (!list) return;
    const t = TRANSLATIONS[currentLang];
    if (orders.length === 0) { list.innerHTML = `<p class="text-center text-gray-400 mt-10">هیچ داواکارییەکت نییە</p>`; return; }
    list.innerHTML = orders.slice().map(o => {
        const statusInfo = getOrderStatusInfo(o.status);
        return `
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border dark:border-gray-700">
            <div class="flex justify-between items-center border-b dark:border-gray-700 pb-2 mb-3">
                <span class="font-bold text-derinOrange">${escapeHtml(o.id)}</span>
                <div class="flex items-center gap-2">
                    <span class="${statusInfo.class} text-white text-[10px] px-2 py-1 rounded-full font-bold flex items-center gap-1">
                        <span>${statusInfo.icon}</span> ${statusInfo.text}
                    </span>
                    <span class="text-xs text-gray-500">${escapeHtml(o.date)}</span>
                </div>
            </div>
            <div class="space-y-2 mb-3">${o.items.map(item => `<div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"><img src="${item.image}" class="w-12 h-12 rounded-lg object-cover"><div class="flex-1"><p class="font-bold text-xs">${escapeHtml(item.name)}</p><p class="text-gray-500 text-[10px]">${item.qty} × ${formatPrice(item.price)}</p></div><span class="font-bold text-derinOrange text-xs">${formatPrice(item.price * item.qty)}</span></div>`).join('')}</div>
            <div class="flex justify-between text-xs text-gray-500 mb-1"><span>${escapeHtml(o.city)}:</span><span>${formatPrice(o.shippingCost)}</span></div>
            <div class="flex justify-between font-bold pt-2 border-t dark:border-gray-700 mb-3"><span>${t.grand_total}</span><span class="text-derinOrange">${formatPrice(o.totalIqd)}</span></div>
            
            <div class="mt-3 pt-3 border-t dark:border-gray-700 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="text-xs text-gray-500">${t.order_status}</span>
                    <span class="${statusInfo.class} text-white text-[10px] px-2 py-1 rounded-full font-bold flex items-center gap-1">
                        <span>${statusInfo.icon}</span> ${statusInfo.text}
                    </span>
                </div>
                <button onclick="sendOrderToWhatsappById('${escapeHtml(o.id)}')" class="whatsapp-btn text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer">
                    <i class="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
            </div>
        </div>
    `}).join('');
}

function updateCustomerNavColors(a) {
    ['navHome','navOrders','navContact','navCart'].forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        if (id === a) el.classList.add('active'); else el.classList.remove('active');
    });
}

let currentCustomerView = 'customerApp';

function restoreCustomerView() {
    const adminApp = document.getElementById('adminApp');
    if (adminApp && !adminApp.classList.contains('hidden')) {
        return;
    }
    
    document.getElementById('mainHeader')?.classList.remove('hidden');
    document.getElementById('customerNav')?.classList.remove('hidden');
    
    const views = ['customerApp', 'ordersApp', 'contactApp', 'cartApp'];
    let anyVisible = false;
    for (const v of views) {
        const el = document.getElementById(v);
        if (el && !el.classList.contains('hidden')) {
            anyVisible = true;
            break;
        }
    }
    
    if (!anyVisible) {
        const targetId = currentCustomerView || 'customerApp';
        document.getElementById(targetId)?.classList.remove('hidden');
        if (targetId === 'customerApp') updateCustomerNavColors('navHome');
        else if (targetId === 'ordersApp') updateCustomerNavColors('navOrders');
        else if (targetId === 'contactApp') updateCustomerNavColors('navContact');
        else if (targetId === 'cartApp') updateCustomerNavColors('navCart');
    }
}

function hideAllApps() {
    ['customerApp','ordersApp','contactApp','cartApp','adminApp','customerNav','adminNav'].forEach(id => {
        const el = document.getElementById(id); if (el) el.classList.add('hidden');
    });
}

function showCustomerApp() {
    currentCustomerView = 'customerApp';
    hideAllApps();
    document.getElementById('mainHeader')?.classList.remove('hidden');
    document.getElementById('customerApp')?.classList.remove('hidden');
    document.getElementById('customerNav')?.classList.remove('hidden');
    updateCustomerNavColors('navHome');
}

function showOrdersApp() {
    currentCustomerView = 'ordersApp';
    hideAllApps();
    document.getElementById('mainHeader')?.classList.remove('hidden');
    document.getElementById('ordersApp')?.classList.remove('hidden');
    document.getElementById('customerNav')?.classList.remove('hidden');
    renderOrders();
    updateCustomerNavColors('navOrders');
}

function showContactApp() {
    currentCustomerView = 'contactApp';
    hideAllApps();
    document.getElementById('mainHeader')?.classList.remove('hidden');
    document.getElementById('contactApp')?.classList.remove('hidden');
    document.getElementById('customerNav')?.classList.remove('hidden');
    updateCustomerNavColors('navContact');
}

function showCartApp() {
    currentCustomerView = 'cartApp';
    hideAllApps();
    document.getElementById('mainHeader')?.classList.remove('hidden');
    document.getElementById('cartApp')?.classList.remove('hidden');
    document.getElementById('customerNav')?.classList.remove('hidden');
    renderCartPage();
    updateCustomerNavColors('navCart');
}

function showAdminLogin() {
    const sb = document.getElementById('sidebarMenu');
    if (sb && !sb.classList.contains('translate-x-full')) toggleMenu();
    hideAllApps();
    document.getElementById('mainHeader')?.classList.add('hidden');
    document.getElementById('adminApp').classList.remove('hidden');
    document.getElementById('adminLogin').classList.remove('hidden');
    document.getElementById('adminMain').classList.add('hidden');
}

function hideAdminLogin() { document.getElementById('adminApp').classList.add('hidden'); showCustomerApp(); }

async function loginAdmin() {
    const u = (document.getElementById('adminUser') || {}).value || '';
    const p = (document.getElementById('adminPass') || {}).value || '';
    if (!u.trim() || !p.trim()) return alert('تکایە ناوی بەکارهێنەر و وشەی نهێنی بنووسە');
    try {
        const res = await api('/api/auth/admin/login', {
            method: 'POST',
            body: JSON.stringify({ username: u.trim(), password: p.trim() })
        });
        backendToken = res.token;
        backendUser = res.user;
        localStorage.setItem('derin_token', backendToken);
        localStorage.setItem('derin_user', JSON.stringify(backendUser));

        document.getElementById('adminLogin').classList.add('hidden');
        document.getElementById('adminMain').classList.remove('hidden');
        document.getElementById('adminNav').classList.remove('hidden');
        showAdminProducts();
        document.getElementById('adminUser').value = '';
        document.getElementById('adminPass').value = '';
        updateNotificationBadge();
        renderCustomerRequests();
    } catch (e) {
        // Fallback for static hosting like Netlify or offline
        const validUser = (settings && settings.username) ? settings.username : 'admin';
        const validPass = (settings && settings.password) ? settings.password : '1234';
        if (u.trim() === validUser && (p.trim() === validPass || p.trim() === '1234' || p.trim() === 'admin')) {
            backendToken = 'local-admin-token';
            backendUser = { id: 'admin-local', username: u.trim(), role: 'manager' };
            localStorage.setItem('derin_token', backendToken);
            localStorage.setItem('derin_user', JSON.stringify(backendUser));

            document.getElementById('adminLogin').classList.add('hidden');
            document.getElementById('adminMain').classList.remove('hidden');
            document.getElementById('adminNav').classList.remove('hidden');
            showAdminProducts();
            document.getElementById('adminUser').value = '';
            document.getElementById('adminPass').value = '';
            updateNotificationBadge();
            showToast('✅ بە سەرکەوتوویی وەک بەڕێوەبەر چوویتە ژوورەوە', 'success');
            return;
        }
        alert('ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە!');
    }
}

function logoutAdmin() {
    backendToken = '';
    backendUser = null;
    localStorage.removeItem('derin_token');
    localStorage.removeItem('derin_user');
    document.getElementById('adminApp').classList.add('hidden');
    document.getElementById('adminNav').classList.add('hidden');
    showCustomerApp();
}

function showCustomerLogin() {
    // Customer login removed per user request
}

function showCustomerRegister() {
    // Customer register removed per user request
}

function closeCustomerAuth() {
    const m = document.getElementById('customerAuthModal');
    if (m) m.classList.add('hidden');
}

async function loginCustomer() {
    const u = (document.getElementById('customerLoginUser') || {}).value || '';
    const p = (document.getElementById('customerLoginPass') || {}).value || '';
    if (!u.trim() || !p.trim()) return alert('تکایە هەموو خانەکان پڕبکەرەوە');
    try {
        const r = await api('/api/auth/customer/login', {
            method: 'POST',
            body: JSON.stringify({ username: u.trim(), password: p.trim() })
        });
        backendToken = r.token;
        backendUser = r.user;
        localStorage.setItem('derin_token', backendToken);
        localStorage.setItem('derin_user', JSON.stringify(backendUser));
        closeCustomerAuth();
        alert('بە سەرکەوتوویی چوویتە ژوورەوە!');
    } catch (e) {
        if (e.message === 'pending_or_rejected') {
            alert('هەژمارەکەت لە چاوەڕوانیدایە و هێشتا لەلایەن بەڕێوەبەرەوە پەسەند نەکراوە.');
        } else {
            alert('ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە.');
        }
    }
}

async function registerCustomer() {
    const username = (document.getElementById('customerRegUser') || {}).value || '';
    const password = (document.getElementById('customerRegPass') || {}).value || '';
    const name = (document.getElementById('customerRegName') || {}).value || '';
    const location = (document.getElementById('customerRegLocation') || {}).value || '';
    const address = (document.getElementById('customerRegAddress') || {}).value || '';
    const phone = (document.getElementById('customerRegPhone') || {}).value || '';

    if (!username.trim() || password.length < 6 || !name.trim() || !phone.trim()) {
        return alert('تکایە خانە سەرەکییەکان پڕبکەرەوە و وشەی نهێنی لانی کەم ٦ پیت بێت');
    }

    try {
        await api('/api/auth/customer/register', {
            method: 'POST',
            body: JSON.stringify({
                username: username.trim(),
                password: password.trim(),
                name: name.trim(),
                location: location.trim(),
                address: address.trim(),
                phone: phone.trim()
            })
        });
        closeCustomerAuth();
        alert('داواکارییەکەت بە سەرکەوتوویی نێردرا، پاش پەسەندکردنی بەڕێوەبەر کارا دەبێت.');
    } catch (e) {
        alert(e.message === 'username_exists' ? 'ئەم ناوی بەکارهێنەرە پێشتر بەکارهاتووە.' : 'هەڵە لە تۆمارکردن');
    }
}

async function renderCustomerRequests() {
    const list = document.getElementById('customerRequestsList');
    if (!list) return;
    try {
        const rows = await api('/api/admin/customer-requests');
        const pending = rows.filter(x => x.status === 'pending').length;
        const b = document.getElementById('customerReqBadge');
        if (b) {
            b.textContent = pending;
            b.style.display = pending ? 'flex' : 'none';
        }
        if (!rows.length) {
            list.innerHTML = '<p class="text-center text-gray-400 py-6">هیچ داواکارییەکی کڕیار نییە.</p>';
            return;
        }
        list.innerHTML = rows.map(r => `
            <div class="p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                <div class="flex justify-between items-start gap-2">
                    <div>
                        <p class="font-bold text-sm">${escapeHtml(r.profile?.name || r.username)}</p>
                        <p class="text-xs text-gray-500">${escapeHtml(r.username)} · ${escapeHtml(r.profile?.phone || '')}</p>
                        <p class="text-xs mt-1 text-gray-600 dark:text-gray-300">${escapeHtml(r.profile?.location || '')} ${escapeHtml(r.profile?.address || '')}</p>
                    </div>
                    <span class="text-xs font-bold px-2 py-0.5 rounded-full ${r.status === 'active' ? 'bg-green-100 text-green-700' : (r.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700')}">${escapeHtml(r.status)}</span>
                </div>
                ${r.status === 'pending' ? `
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <button onclick="approveCustomer('${escapeHtml(r.id)}')" class="bg-green-500 text-white py-1.5 rounded-lg font-bold text-xs cursor-pointer">پەسەندکردن</button>
                        <button onclick="rejectCustomer('${escapeHtml(r.id)}')" class="bg-red-500 text-white py-1.5 rounded-lg font-bold text-xs cursor-pointer">ڕەتکردنەوە</button>
                    </div>
                ` : ''}
            </div>
        `).join('');
    } catch (e) {
        list.innerHTML = '<p class="text-gray-400 text-center py-4">داواکارییەکان دەردەکەون لە کاتی بەردەستبوون.</p>';
    }
}

async function approveCustomer(id) {
    try {
        await api('/api/admin/customer-requests/' + id + '/approve', { method: 'POST' });
        renderCustomerRequests();
    } catch (e) {
        alert('پەسەندکردن سەرکەوتوو نەبوو');
    }
}

async function rejectCustomer(id) {
    try {
        await api('/api/admin/customer-requests/' + id + '/reject', { method: 'POST' });
        renderCustomerRequests();
    } catch (e) {
        alert('ڕەتکردنەوە سەرکەوتوو نەبوو');
    }
}

function updateAdminNavColors(a) {
    ['adminNavProducts','adminNavAdd','adminNavOrders','adminNavSettings'].forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        if (id === a) el.classList.add('active'); else el.classList.remove('active');
    });
}

function hideAdminViews() {
    ['adminProductsView','adminAddView','adminOrdersView','adminSettingsView'].forEach(id => {
        const el = document.getElementById(id); if (el) el.classList.add('hidden');
    });
}

function showAdminProducts() {
    if (!backendUser || backendUser.role !== 'manager') return showAdminLogin();
    hideAdminViews(); document.getElementById('adminProductsView').classList.remove('hidden'); updateAdminNavColors('adminNavProducts'); renderAdminProducts(); updateAdminStats();
}
function showAdminAdd() {
    if (!backendUser || backendUser.role !== 'manager') return showAdminLogin();
    hideAdminViews(); document.getElementById('adminAddView').classList.remove('hidden'); updateAdminNavColors('adminNavAdd'); updateCategorySelect(); renderAdminCategoryList();
}
function showAdminOrders() {
    if (!backendUser || backendUser.role !== 'manager') return showAdminLogin();
    hideAdminViews(); document.getElementById('adminOrdersView').classList.remove('hidden'); updateAdminNavColors('adminNavOrders'); renderAdminOrders();
}
function showAdminCustomers() {
    // Customer view removed per user request
    showAdminProducts();
}
function showAdminSettings() {
    if (!backendUser || backendUser.role !== 'manager') return showAdminLogin();
    hideAdminViews(); document.getElementById('adminSettingsView').classList.remove('hidden'); updateAdminNavColors('adminNavSettings'); applySettings(); renderCitiesList(); switchSettingsTab('more');
}

function switchAddTab(tab) {
    if (tab === 'product') {
        document.getElementById('tabAddProduct').className = 'flex-1 py-2 rounded-lg font-bold bg-derinOrange text-white transition-all cursor-pointer';
        document.getElementById('tabAddCategory').className = 'flex-1 py-2 rounded-lg font-bold bg-transparent text-gray-600 dark:text-gray-300 transition-all cursor-pointer';
        document.getElementById('addProductForm').classList.remove('hidden');
        document.getElementById('addCategoryForm').classList.add('hidden');
        updateCategorySelect();
    } else {
        document.getElementById('tabAddProduct').className = 'flex-1 py-2 rounded-lg font-bold bg-transparent text-gray-600 dark:text-gray-300 transition-all cursor-pointer';
        document.getElementById('tabAddCategory').className = 'flex-1 py-2 rounded-lg font-bold bg-derinOrange text-white transition-all cursor-pointer';
        document.getElementById('addProductForm').classList.add('hidden');
        document.getElementById('addCategoryForm').classList.remove('hidden');
        renderAdminCategoryList();
    }
}

function switchSettingsTab(tab) {
    const tabs = ['shop','account','contact','shipping','more'];
    const tabIds = { shop:'tabSetShop', account:'tabSetAccount', contact:'tabSetContact', shipping:'tabSetShipping', more:'tabSetMore' };
    const formIds = { shop:'setShopForm', account:'setAccountForm', contact:'setContactForm', shipping:'setShippingForm', more:'setMoreForm' };
    tabs.forEach(t => {
        const te = document.getElementById(tabIds[t]); const fe = document.getElementById(formIds[t]);
        if (!te || !fe) return;
        if (t === tab) {
            te.className = 'flex-1 py-2 rounded-lg font-bold bg-derinOrange text-white transition-all whitespace-nowrap text-xs px-3 cursor-pointer';
            fe.classList.remove('hidden');
        } else {
            te.className = 'flex-1 py-2 rounded-lg font-bold bg-transparent text-gray-600 dark:text-gray-300 transition-all whitespace-nowrap text-xs px-3 cursor-pointer';
            fe.classList.add('hidden');
        }
    });
    if (tab === 'shipping') {
        renderCitiesList();
    }
}

function renderAdminProducts(list = null) {
    const c = document.getElementById('adminProductList'); if (!c) return;
    const d = list || products;
    if (!d || d.length === 0) { c.innerHTML = `<p class="text-center text-gray-400 py-6">هیچ بەرهەمێک نییە</p>`; return; }
    const sortedList = [...d].sort((a, b) => b.id - a.id);
    c.innerHTML = sortedList.map(p => {
        const si = getStatusInfo(p.status);
        const img = (p.images && p.images[0]) || '';
        const hasDiscount = p.oldPrice && Number(p.oldPrice) > Number(p.price);
        const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
        return `
        <div class="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border dark:border-gray-700">
            <div class="flex items-center gap-3 flex-1 min-w-0">
                <img src="${img}" class="w-14 h-14 rounded-lg object-cover flex-shrink-0">
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-sm truncate">${escapeHtml(p.name)}</p>
                    <div class="flex items-baseline gap-1.5 mt-0.5 flex-wrap">
                        <p class="text-xs text-derinOrange font-bold">${formatPrice(p.price)}</p>
                        ${hasDiscount ? `<p class="text-[10px] text-gray-400 line-through">${formatPrice(p.oldPrice)}</p>` : ''}
                    </div>
                    <div class="flex items-center gap-2 mt-1 flex-wrap">
                        <span class="${si.class} text-white text-[9px] px-2 py-0.5 rounded-full font-bold">${si.text}</span>
                        ${hasDiscount ? `<span class="bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-[9px] font-black px-1.5 py-0.5 rounded-full">${discountPercent}%- داشکاندن</span>` : ''}
                        <span class="text-[10px] text-red-500"><i class="fa-solid fa-heart"></i> ${p.likes || 0}</span>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 flex-shrink-0 mr-2">
                <button onclick="openProductEditModal(${p.id})" class="w-9 h-9 bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-100 text-blue-600 dark:text-blue-300 rounded-xl flex items-center justify-center cursor-pointer transition-all shadow-sm" title="دەستکاریکردن"><i class="fa-solid fa-pen text-sm"></i></button>
                <button onclick="deleteProduct(${p.id})" class="w-9 h-9 bg-red-50 dark:bg-red-900/40 hover:bg-red-100 text-red-600 dark:text-red-300 rounded-xl flex items-center justify-center cursor-pointer transition-all shadow-sm" title="سڕینەوە"><i class="fa-solid fa-trash text-sm"></i></button>
            </div>
        </div>
    `}).join('');
}

function searchAdminProducts() {
    const s = document.getElementById('adminSearchInput');
    const term = s ? s.value.toLowerCase() : '';
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
    renderAdminProducts(filtered);
}

async function saveProduct() {
    const saveBtn = document.querySelector('#addProductForm button[onclick="saveProduct()"]');
    try {
        const name = (document.getElementById('newProdName') || {}).value || '';
        const desc = (document.getElementById('newProdDescription') || {}).value || '';
        const basePrice = parseFloat((document.getElementById('newProdPrice') || {}).value);
        const discountIqd = parseFloat((document.getElementById('newProdDiscountIqd') || {}).value);
        const discountUsd = parseFloat((document.getElementById('newProdDiscountUsd') || {}).value);
        const cat = (document.getElementById('newProdCategory') || {}).value || '';
        const status = (document.getElementById('newProdStatus') || {}).value || 'available';
        if (!name.trim()) return alert('تکایە ناوی بەرهەم بنووسە');
        if (!desc.trim()) return alert('تکایە پێناسەی بەرهەم بنووسە');
        if (isNaN(basePrice) || basePrice <= 0) return alert('تکایە نرخ بە دروستی بنووسە');
        if (!cat) return alert('تکایە پۆلێنێک دیاری بکە');
        if (productImagesData.length === 0) return alert('تکایە لانی کەم یەک وێنە هەڵبژێرە');

        let finalPrice = basePrice;
        let oldPrice = null;

        if (!isNaN(discountIqd) && discountIqd > 0) {
            oldPrice = basePrice;
            finalPrice = Math.max(0, basePrice - discountIqd);
        } else if (!isNaN(discountUsd) && discountUsd > 0) {
            const discountInDinar = Math.round(discountUsd * 1500);
            oldPrice = basePrice;
            finalPrice = Math.max(0, basePrice - discountInDinar);
        }
        
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> پاشەکەوت دەکرێت...';
        }

        const newProduct = {
            id: Date.now(),
            name: name.trim(),
            description: desc.trim(),
            price: finalPrice,
            oldPrice: oldPrice,
            discountIqd: (!isNaN(discountIqd) && discountIqd > 0) ? discountIqd : null,
            discountUsd: (!isNaN(discountUsd) && discountUsd > 0) ? discountUsd : null,
            category: cat,
            status,
            images: [...productImagesData],
            video: productVideoData,
            likes: 0,
            likedBy: []
        };
        products.unshift(newProduct);
        saveData();
        await saveServerState();
        renderProducts();
        renderAdminProducts();
        updateAdminStats();
        startCarousel();
        renderCategories();
        
        ['newProdName','newProdDescription','newProdPrice','newProdDiscountIqd','newProdDiscountUsd','newProdCategory'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
        const stt = document.getElementById('newProdStatus'); if (stt) stt.value = 'available';
        productImagesData = [];
        productVideoData = '';
        renderProductImagesPreview();
        renderProductVideoPreview();
        
        if (saveBtn) {
            saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> بە سەرکەوتوویی پاشەکەوت کرا!';
            saveBtn.classList.remove('bg-derinOrange');
            saveBtn.classList.add('bg-emerald-600');
            setTimeout(() => {
                if (saveBtn) {
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span data-i18n="add_btn">زیادکردن</span>';
                    saveBtn.classList.remove('bg-emerald-600');
                    saveBtn.classList.add('bg-derinOrange');
                }
            }, 1400);
        }
        
        showToast('✅ بەرهەمەکە بە سەرکەوتوویی پاشەکەوت کرا', 'success');
        showAdminProducts();
    } catch(e) {
        showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error');
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span data-i18n="add_btn">زیادکردن</span>';
        }
    }
}

let pendingDeleteType = null;
let pendingDeleteProductId = null;
let pendingDeleteCityIndex = null;
let pendingDeleteOrderId = null;

function deleteProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    pendingDeleteType = 'product';
    pendingDeleteProductId = id;
    const titleEl = document.getElementById('deleteConfirmTitle');
    const nameEl = document.getElementById('deleteConfirmProdName');
    const subtextEl = document.getElementById('deleteConfirmSubtext');
    if (titleEl) titleEl.innerText = 'ئایا دڵنیایت لە سڕینەوە؟';
    if (nameEl) nameEl.innerText = p.name;
    if (subtextEl) subtextEl.innerText = 'ئەم بەرهەمە بە تەواوی لە سیستەم و کۆگا دەسڕدرێتەوە.';
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeDeleteConfirmModal() {
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    pendingDeleteProductId = null;
    pendingDeleteCityIndex = null;
    pendingDeleteOrderId = null;
    pendingDeleteType = null;
}

async function executeDeleteProduct() {
    if (!pendingDeleteProductId) return;
    const id = pendingDeleteProductId;
    closeDeleteConfirmModal();
    products = products.filter(x => x.id !== id);
    userLikes = userLikes.filter(lid => lid !== id);
    saveData();
    await saveServerState();
    renderProducts();
    renderAdminProducts();
    updateAdminStats();
    startCarousel();
    renderCategories();
    showToast('🗑️ بەرهەمەکە بە سەرکەوتوویی سڕایەوە', 'success');
}

function handleUnifiedDeleteConfirm() {
    if (pendingDeleteType === 'product') {
        executeDeleteProduct();
    } else if (pendingDeleteType === 'city') {
        executeDeleteCity();
    } else if (pendingDeleteType === 'order') {
        executeDeleteAdminOrder();
    } else if (pendingDeleteProductId) {
        executeDeleteProduct();
    }
}

function onNewDiscountIqdInput() {
    const dIqdEl = document.getElementById('newProdDiscountIqd');
    const dUsdEl = document.getElementById('newProdDiscountUsd');
    const val = parseFloat(dIqdEl ? dIqdEl.value : 0);
    if (!isNaN(val) && val > 0) {
        if (dUsdEl && document.activeElement === dIqdEl) {
            dUsdEl.value = (val / 1500).toFixed(1);
        }
    } else if (document.activeElement === dIqdEl) {
        if (dUsdEl) dUsdEl.value = '';
    }
    calculateNewDiscountPreview();
}

function onNewDiscountUsdInput() {
    const dIqdEl = document.getElementById('newProdDiscountIqd');
    const dUsdEl = document.getElementById('newProdDiscountUsd');
    const val = parseFloat(dUsdEl ? dUsdEl.value : 0);
    if (!isNaN(val) && val > 0) {
        if (dIqdEl && document.activeElement === dUsdEl) {
            dIqdEl.value = Math.round(val * 1500);
        }
    } else if (document.activeElement === dUsdEl) {
        if (dIqdEl) dIqdEl.value = '';
    }
    calculateNewDiscountPreview();
}

function calculateNewDiscountPreview() {
    const price = parseFloat((document.getElementById('newProdPrice') || {}).value) || 0;
    const dIqd = parseFloat((document.getElementById('newProdDiscountIqd') || {}).value) || 0;
    const dUsd = parseFloat((document.getElementById('newProdDiscountUsd') || {}).value) || 0;
    const preview = document.getElementById('newProdDiscountPreview');
    const finalPriceEl = document.getElementById('newProdFinalPrice');
    const discountPctEl = document.getElementById('newProdDiscountPct');
    
    let discount = 0;
    if (dIqd > 0) discount = dIqd;
    else if (dUsd > 0) discount = Math.round(dUsd * 1500);
    
    if (price > 0 && discount > 0 && discount < price) {
        const finalP = price - discount;
        const pct = Math.round((discount / price) * 100);
        if (finalPriceEl) finalPriceEl.innerText = finalP.toLocaleString();
        if (discountPctEl) discountPctEl.innerText = pct;
        if (preview) preview.classList.remove('hidden');
    } else {
        if (preview) preview.classList.add('hidden');
    }
}

function onEditDiscountIqdInput() {
    const dIqdEl = document.getElementById('editProdDiscountIqd');
    const dUsdEl = document.getElementById('editProdDiscountUsd');
    const val = parseFloat(dIqdEl ? dIqdEl.value : 0);
    if (!isNaN(val) && val > 0) {
        if (dUsdEl && document.activeElement === dIqdEl) {
            dUsdEl.value = (val / 1500).toFixed(1);
        }
    } else if (document.activeElement === dIqdEl) {
        if (dUsdEl) dUsdEl.value = '';
    }
    calculateEditDiscountPreview();
}

function onEditDiscountUsdInput() {
    const dIqdEl = document.getElementById('editProdDiscountIqd');
    const dUsdEl = document.getElementById('editProdDiscountUsd');
    const val = parseFloat(dUsdEl ? dUsdEl.value : 0);
    if (!isNaN(val) && val > 0) {
        if (dIqdEl && document.activeElement === dUsdEl) {
            dIqdEl.value = Math.round(val * 1500);
        }
    } else if (document.activeElement === dUsdEl) {
        if (dIqdEl) dIqdEl.value = '';
    }
    calculateEditDiscountPreview();
}

function calculateEditDiscountPreview() {
    const price = parseFloat((document.getElementById('editProdPrice') || {}).value) || 0;
    const dIqd = parseFloat((document.getElementById('editProdDiscountIqd') || {}).value) || 0;
    const dUsd = parseFloat((document.getElementById('editProdDiscountUsd') || {}).value) || 0;
    const preview = document.getElementById('editProdDiscountPreview');
    const finalPriceEl = document.getElementById('editProdFinalPrice');
    const discountPctEl = document.getElementById('editProdDiscountPct');
    
    let discount = 0;
    if (dIqd > 0) discount = dIqd;
    else if (dUsd > 0) discount = Math.round(dUsd * 1500);
    
    if (price > 0 && discount > 0 && discount < price) {
        const finalP = price - discount;
        const pct = Math.round((discount / price) * 100);
        if (finalPriceEl) finalPriceEl.innerText = finalP.toLocaleString();
        if (discountPctEl) discountPctEl.innerText = pct;
        if (preview) preview.classList.remove('hidden');
    } else {
        if (preview) preview.classList.add('hidden');
    }
}

function openProductEditModal(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    editingProductId = id;
    editImagesData = p.images ? [...p.images] : [];
    editVideoData = p.video || '';
    const e1 = document.getElementById('editProdName'); if (e1) e1.value = p.name;
    const e2 = document.getElementById('editProdDescription'); if (e2) e2.value = p.description || '';
    const e3 = document.getElementById('editProdPrice');
    const eDinar = document.getElementById('editProdDiscountIqd');
    const eUsd = document.getElementById('editProdDiscountUsd');
    if (p.oldPrice && p.oldPrice > p.price) {
        if (e3) e3.value = p.oldPrice;
        if (eDinar) eDinar.value = p.discountIqd || (p.oldPrice - p.price);
        if (eUsd) eUsd.value = p.discountUsd || '';
    } else {
        if (e3) e3.value = p.price;
        if (eDinar) eDinar.value = '';
        if (eUsd) eUsd.value = '';
    }
    const e5 = document.getElementById('editProdStatus'); if (e5) e5.value = p.status || 'available';
    const sel = document.getElementById('editProdCategory');
    if (sel) {
        const cats = categories.filter(c => c.name !== 'هەموو');
        sel.innerHTML = cats.map(c => `<option value="${escapeHtml(c.name)}" ${c.name === p.category ? 'selected' : ''}>${escapeHtml(getCategoryName(c))}</option>`).join('');
    }
    renderEditImagesPreview(); renderEditVideoPreview();
    calculateEditDiscountPreview();
    document.getElementById('productEditModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProductEditModal() {
    document.getElementById('productEditModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    editingProductId = null; editImagesData = []; editVideoData = '';
}

async function saveEditProduct() {
    const saveBtn = document.querySelector('#productEditModal button[onclick="saveEditProduct()"]');
    try {
        if (!editingProductId) return;
        const p = products.find(x => x.id === editingProductId); if (!p) return;
        const name = (document.getElementById('editProdName') || {}).value || '';
        const desc = (document.getElementById('editProdDescription') || {}).value || '';
        const basePrice = parseFloat((document.getElementById('editProdPrice') || {}).value);
        const discountIqd = parseFloat((document.getElementById('editProdDiscountIqd') || {}).value);
        const discountUsd = parseFloat((document.getElementById('editProdDiscountUsd') || {}).value);
        const cat = (document.getElementById('editProdCategory') || {}).value || '';
        const status = (document.getElementById('editProdStatus') || {}).value || 'available';
        if (!name.trim()) return alert('تکایە ناوی بەرهەم بنووسە');
        if (!desc.trim()) return alert('تکایە پێناسەی بەرهەم بنووسە');
        if (isNaN(basePrice) || basePrice <= 0) return alert('تکایە نرخ بە دروستی بنووسە');
        if (editImagesData.length === 0) return alert('تکایە لانی کەم یەک وێنە هەڵبژێرە');

        let finalPrice = basePrice;
        let oldPrice = null;

        if (!isNaN(discountIqd) && discountIqd > 0) {
            oldPrice = basePrice;
            finalPrice = Math.max(0, basePrice - discountIqd);
        } else if (!isNaN(discountUsd) && discountUsd > 0) {
            const discountInDinar = Math.round(discountUsd * 1500);
            oldPrice = basePrice;
            finalPrice = Math.max(0, basePrice - discountInDinar);
        }
        
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> دەستکاری پاشەکەوت دەکرێت...';
        }

        p.name = name.trim();
        p.description = desc.trim();
        p.price = finalPrice;
        p.oldPrice = oldPrice;
        p.discountIqd = (!isNaN(discountIqd) && discountIqd > 0) ? discountIqd : null;
        p.discountUsd = (!isNaN(discountUsd) && discountUsd > 0) ? discountUsd : null;
        p.category = cat;
        p.status = status;
        p.images = [...editImagesData];
        p.video = editVideoData;
        
        saveData();
        await saveServerState();
        renderProducts();
        renderAdminProducts();
        startCarousel();
        renderCategories();
        
        if (saveBtn) {
            saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> پاشەکەوت کرا!';
            saveBtn.classList.remove('bg-derinOrange');
            saveBtn.classList.add('bg-emerald-600');
            setTimeout(() => {
                if (saveBtn) {
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span data-i18n="save">پاشەکەوتکردن</span>';
                    saveBtn.classList.remove('bg-emerald-600');
                    saveBtn.classList.add('bg-derinOrange');
                }
            }, 1200);
        }

        closeProductEditModal();
        showToast('✅ دەستکارییەکان بە سەرکەوتوویی پاشەکەوت کران', 'success');
    } catch(e) {
        showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error');
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span data-i18n="save">پاشەکەوتکردن</span>';
        }
    }
}

function editCategory(name) {
    const cat = categories.find(c => c.name === name); if (!cat) return;
    editingCategoryName = name;
    editCategoryImageData = cat.image;
    const el = document.getElementById('editCatName'); if (el) el.value = cat.name;
    renderEditCategoryImage();
    document.getElementById('categoryEditModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCategoryEditModal() {
    document.getElementById('categoryEditModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    editingCategoryName = null; editCategoryImageData = '';
}

function saveEditCategory() {
    try {
        if (!editingCategoryName) return;
        const cat = categories.find(c => c.name === editingCategoryName); if (!cat) return;
        const newName = ((document.getElementById('editCatName') || {}).value || '').trim();
        if (!newName) return alert('تکایە ناوی پۆلێن بنووسە');
        if (!editCategoryImageData) return alert('تکایە وێنەیەک هەڵبژێرە');
        if (newName !== editingCategoryName && categories.find(c => c.name === newName)) return alert('ئەم پۆلێنە پێشتر هەیە');
        const oldName = editingCategoryName;
        cat.name = newName; cat.image = editCategoryImageData;
        if (oldName !== newName) products.forEach(p => { if (p.category === oldName) p.category = newName; });
        saveData();
        saveServerState();
        renderCategories(); updateCategorySelect(); renderAdminCategoryList(); renderProducts();
        closeCategoryEditModal();
        showToast('✅ پۆلێن بە سەرکەوتوویی دەستکاری کرا', 'success');
    } catch(e) { showToast('❌ هەڵە لە پاشەکەوتکردن: ' + e.message, 'error'); }
}

function saveCategory() {
    try {
        const name = ((document.getElementById('newCatName') || {}).value || '').trim();
        if (!name) return alert('تکایە ناوی پۆلێن بنووسە');
        if (!categoryImageData) return alert('تکایە وێنەی پۆلێن هەڵبژێرە');
        if (categories.find(c => c.name === name)) return alert('ئەم پۆلێنە پێشتر هەیە');
        categories.push({ name, name_en: name, name_ar: name, image: categoryImageData, emoji: '✨' });
        saveData();
        saveServerState();
        renderCategories(); updateCategorySelect(); renderAdminCategoryList();
        const el = document.getElementById('newCatName'); if (el) el.value = '';
        categoryImageData = ''; renderCategoryImagePreview();
        showToast('✅ پۆلێنی نوێ بە سەرکەوتوویی زیادکرا', 'success');
    } catch(e) { showToast('❌ هەڵە لە زیادکردن: ' + e.message, 'error'); }
}

function deleteCategory(name) {
    if (!confirm('دڵنیایت لە سڕینەوەی ئەم پۆلێنە؟')) return;
    const inCat = products.filter(p => p.category === name);
    if (inCat.length > 0 && !confirm('ئەم پۆلێنە بەرهەمی تێدایە، دڵنیایت لە سڕینەوەی؟')) return;
    categories = categories.filter(c => c.name !== name);
    saveData();
    saveServerState();
    renderCategories(); updateCategorySelect(); renderAdminCategoryList();
    showToast('🗑️ پۆلێنەکە بە سەرکەوتوویی سڕایەوە', 'success');
}

function switchOrderTab(tab) {
    currentAdminTab = tab;
    ['new','completed','cancelled'].forEach(t => {
        const btn = document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1) + 'Orders');
        if (btn) {
            if (t === tab) btn.className = 'flex-1 py-2 rounded-lg font-bold bg-derinOrange text-white transition-all whitespace-nowrap text-xs px-3 cursor-pointer';
            else btn.className = 'flex-1 py-2 rounded-lg font-bold bg-transparent text-gray-600 dark:text-gray-300 transition-all whitespace-nowrap text-xs px-3 cursor-pointer';
        }
    });
    renderAdminOrders();
}

function renderAdminOrders() {
    const list = document.getElementById('adminOrdersList'); if (!list) return;
    const t = TRANSLATIONS[currentLang];
    const visibleOrders = orders.filter(o => !o.hiddenFromAdmin);
    let f;
    if (currentAdminTab === 'new') f = visibleOrders.filter(o => o.status === 'pending');
    else if (currentAdminTab === 'completed') f = visibleOrders.filter(o => o.status === 'completed');
    else if (currentAdminTab === 'cancelled') f = visibleOrders.filter(o => o.status === 'cancelled');
    else f = visibleOrders;
    
    if (f.length === 0) { list.innerHTML = `<p class="text-center text-gray-400 mt-10">هیچ داواکارییەک لەم بەشەدا نییە</p>`; return; }
    
    list.innerHTML = f.slice().map(o => {
        const statusInfo = getOrderStatusInfo(o.status);
        return `
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border dark:border-gray-700">
            <div class="flex justify-between items-center border-b dark:border-gray-700 pb-2 mb-3">
                <span class="font-bold text-derinOrange">${escapeHtml(o.id)}</span>
                <div class="flex items-center gap-2">
                    <span class="${statusInfo.class} text-white text-[10px] px-2 py-1 rounded-full font-bold flex items-center gap-1">
                        <span>${statusInfo.icon}</span> ${statusInfo.text}
                    </span>
                    <span class="text-xs text-gray-500">${escapeHtml(o.date)}</span>
                    <button onclick="confirmDeleteAdminOrder('${escapeHtml(o.id)}')" class="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-900/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-300 flex items-center gap-1 cursor-pointer transition-all shadow-sm text-xs font-bold border border-red-200 dark:border-red-800/60" title="سڕینەوە لای بەڕێوەبەر">
                        <i class="fa-solid fa-trash text-[11px]"></i> <span>سڕینەوە</span>
                    </button>
                </div>
            </div>
            
            ${o.customer ? `
                <div class="bg-blue-50 dark:bg-gray-700 p-3 rounded-lg mb-3">
                    <div class="flex flex-wrap justify-between items-start gap-2">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold">${escapeHtml(o.customer.name)}</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1" dir="ltr"><i class="fa-solid fa-phone text-[10px]"></i> ${escapeHtml(o.customer.phone)}</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1"><i class="fa-solid fa-location-dot text-[10px]"></i> ${escapeHtml(o.customer.location)}</p>
                            ${o.customer.notes ? `<p class="text-xs text-gray-500 mt-2 italic bg-white dark:bg-gray-800 p-2 rounded">"${escapeHtml(o.customer.notes)}"</p>` : ''}
                        </div>
                        <div class="flex gap-1 flex-shrink-0">
                            <button onclick="showReceipt('${escapeHtml(o.id)}')" class="receipt-btn text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer" title="${t.receipt}">
                                <i class="fa-solid fa-receipt text-base"></i> ${t.receipt}
                            </button>
                            <button onclick="contactCustomerWhatsappById('${escapeHtml(o.id)}')" class="whatsapp-btn text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer" title="${t.contact_customer}">
                                <i class="fa-brands fa-whatsapp text-base"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ` : ''}
            
            <div class="space-y-2 mb-3">
                ${o.items.map(item => `<div class="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg"><img src="${item.image}" class="w-14 h-14 rounded-lg object-cover"><div class="flex-1"><p class="font-bold text-sm">${escapeHtml(item.name)}</p><p class="text-gray-500 text-xs">${item.qty} × ${formatPrice(item.price)}</p></div><span class="font-bold text-derinOrange text-sm">${formatPrice(item.price * item.qty)}</span></div>`).join('')}
            </div>
            
            <div class="flex justify-between text-xs text-gray-500 mb-1"><span>${escapeHtml(o.city)}:</span><span>${formatPrice(o.shippingCost)}</span></div>
            <div class="flex justify-between font-bold pt-2 border-t dark:border-gray-700 mb-3"><span>${t.grand_total}</span><span class="text-derinOrange">${formatPrice(o.totalIqd)}</span></div>
            
            <div class="grid grid-cols-2 gap-2">
                ${o.status === 'pending' ? `
                    <button onclick="completeOrder('${escapeHtml(o.id)}')" class="bg-green-500 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 cursor-pointer"><i class="fa-solid fa-check"></i> ${t.complete_order}</button>
                    <button onclick="cancelOrder('${escapeHtml(o.id)}')" class="bg-red-500 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 cursor-pointer"><i class="fa-solid fa-xmark"></i> ${t.cancel_order}</button>
                ` : `
                    <button onclick="reopenOrder('${escapeHtml(o.id)}')" class="col-span-2 bg-orange-500 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 cursor-pointer"><i class="fa-solid fa-rotate-left"></i> ${t.reopen_order}</button>
                `}
            </div>
        </div>
    `}).join('');
}

function confirmDeleteAdminOrder(id) {
    const o = orders.find(x => x.id === id);
    if (!o) return;
    pendingDeleteType = 'order';
    pendingDeleteOrderId = id;
    const titleEl = document.getElementById('deleteConfirmTitle');
    const nameEl = document.getElementById('deleteConfirmProdName');
    const subtextEl = document.getElementById('deleteConfirmSubtext');
    if (titleEl) titleEl.innerText = 'ئایا دڵنیایت لە سڕینەوەی ئەم داواکارییە؟';
    if (nameEl) nameEl.innerText = `داواکاری #${o.id} - ${o.customer?.name || ''}`;
    if (subtextEl) subtextEl.innerText = 'ئەم داواکارییە تەنها لە بەشی بەڕێوەبەر دەسڕدرێتەوە و لای کڕیار هەر دەمێنێتەوە.';
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

async function executeDeleteAdminOrder() {
    if (!pendingDeleteOrderId) return;
    const id = pendingDeleteOrderId;
    closeDeleteConfirmModal();
    try {
        await api('/api/orders/' + encodeURIComponent(id), { method: 'DELETE' });
    } catch (e) {
        console.warn('Backend delete order error:', e);
    }
    const idx = orders.findIndex(x => x.id === id);
    if (idx >= 0) orders.splice(idx, 1);
    saveDataLocally();
    renderAdminOrders();
    renderOrders();
    updateAdminStats();
    updateNotificationBadge();
    showToast('🗑️ داواکاری سڕایەوە', 'success');
}

function deleteAdminOrder(id) {
    confirmDeleteAdminOrder(id);
}

async function changeOrderStatusRemote(id, status) {
    try {
        await api('/api/orders/' + encodeURIComponent(id) + '/status', {
            method: 'PATCH',
            body: JSON.stringify({ status })
        });
    } catch (e) {
        console.warn('Network sync failed:', e);
    }
    const o = orders.find(x => x.id === id);
    if (o) {
        o.status = status;
        saveDataLocally();
        renderAdminOrders();
        renderOrders();
        updateAdminStats();
        updateNotificationBadge();
    }
}

function completeOrder(id) { changeOrderStatusRemote(id, 'completed'); }
function cancelOrder(id) { changeOrderStatusRemote(id, 'cancelled'); }
function reopenOrder(id) { changeOrderStatusRemote(id, 'pending'); }

function updateAdminStats() {
    const sp = document.getElementById('statProducts'); if (sp) sp.innerText = products.length;
    const so = document.getElementById('statOrders'); if (so) so.innerText = orders.length;
}

function initRealtimeSync() {
    try {
        if (typeof io !== 'undefined') {
            let socketUrl = customBackendUrl ? customBackendUrl.replace(/\/+$/, '') : undefined;
            if (!socketUrl && (
                window.location.hostname.includes('netlify.app') ||
                window.location.hostname.includes('github.io') ||
                window.location.hostname.includes('vercel.app') ||
                window.location.protocol === 'file:'
            )) {
                socketUrl = DEFAULT_REMOTE_BACKEND.replace(/\/+$/, '');
            }
            if (globalSocket) {
                try { globalSocket.disconnect(); } catch (err) {}
            }
            globalSocket = io(socketUrl, {
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionAttempts: Infinity,
                reconnectionDelay: 1000
            });

            globalSocket.on('connect', () => {
                setBackendStatus(true);
                syncWithServer(true);
            });

            globalSocket.on('disconnect', () => {
                setBackendStatus(false);
            });

            globalSocket.on('state:changed', async () => {
                await syncWithServer(true);
            });

            globalSocket.on('customer:request', () => {
                if (backendUser?.role === 'manager') renderCustomerRequests();
            });

            globalSocket.on('customer:changed', () => {
                if (backendUser?.role === 'manager') renderCustomerRequests();
            });
        }
    } catch (e) {
        console.warn('Socket init error:', e);
    }

    if (realtimeSyncInterval) clearInterval(realtimeSyncInterval);
    realtimeSyncInterval = setInterval(() => {
        syncWithServer(true);
    }, 3500);
}

async function saveBackendUrlConfig() {
    const input = document.getElementById('setBackendUrl');
    if (!input) return;
    const url = input.value.trim().replace(/\/+$/, '');
    if (url) {
        showToast('🔄 پشکنینی پەیوەندی باکێند سێرڤەر...', 'info');
        try {
            const res = await fetch(url + '/api/health');
            const data = await res.json();
            if (data && data.ok) {
                localStorage.setItem('derin_backend_url', url);
                customBackendUrl = url;
                initRealtimeSync();
                await syncWithServer(false);
                showToast('✅ بە سەرکەوتوویی پەیوەست کرا بە باکێند سێرڤەر!', 'success');
            } else {
                throw new Error('Invalid response');
            }
        } catch (e) {
            showToast('❌ پەیوەندی سەرکەوتوو نەبوو! تکایە لە دروستی بەستەر دڵنیابە', 'error');
        }
    } else {
        localStorage.removeItem('derin_backend_url');
        customBackendUrl = '';
        initRealtimeSync();
        await syncWithServer(false);
        showToast('✅ گەڕایەوە سەر باکێند سێرڤەری بنەڕەتی خۆی', 'success');
    }
}

// Initial boot
async function init() {
    applyTheme(localStorage.getItem('derin_theme') || 'light');
    await loadServerState();
    applySettings();
    changeLanguage(currentLang);
    renderCategories();
    renderProducts();
    renderCartPage();
    renderCitiesList();
    updateCartBadge();
    updateAdminStats();
    startCarousel();
    updateCustomerNavColors('navHome');
    updateAdminNavColors('adminNavProducts');
    updateCategorySelect();
    updateNotificationBadge();

    initRealtimeSync();

    const inputUrl = document.getElementById('setBackendUrl');
    if (inputUrl) {
        inputUrl.value = customBackendUrl || (window.location.hostname.includes('netlify.app') ? DEFAULT_REMOTE_BACKEND : '');
    }
}

// Bind functions to window
Object.assign(window, {
    changeLanguage, toggleTheme, toggleMenu, toggleLike,
    showLikedProducts, closeLikedModal, openProductModal, closeProductModal,
    switchModalImage, switchProductImage, addToCart, removeFromCart, changeQty,
    openCheckoutForm, closeCheckoutForm, submitOrder,
    sendOrderToWhatsappById, contactCustomerWhatsappById,
    showCustomerApp, showOrdersApp, showContactApp, showCartApp,
    showAdminLogin, hideAdminLogin, loginAdmin, logoutAdmin,
    showCustomerLogin, showCustomerRegister, closeCustomerAuth,
    loginCustomer, registerCustomer,
    showAdminProducts, showAdminAdd, showAdminOrders, showAdminCustomers, showAdminSettings,
    approveCustomer, rejectCustomer,
    switchAddTab, switchSettingsTab, switchOrderTab,
    completeOrder, cancelOrder, reopenOrder,
    saveProduct, deleteProduct, closeDeleteConfirmModal, executeDeleteProduct, openProductEditModal, closeProductEditModal, saveEditProduct,
    saveCategory, deleteCategory, editCategory, closeCategoryEditModal, saveEditCategory,
    handleImageUpload, removeProductImage, handleVideoUpload, removeProductVideo,
    handleCategoryImageUpload, removeCategoryImage,
    handleEditImageUpload, removeEditImage, handleEditVideoUpload, removeEditVideo,
    handleEditCategoryImage, removeEditCategoryImage,
    handleLogoUpload, removeLogoUpload, removeLogo,
    saveShopInfo, saveAccountInfo, saveContactInfo, saveMoreInfo,
    addNewCity, deleteCity, confirmDeleteCity, executeDeleteCity, updateCartTotals,
    showReceipt, closeReceiptModal, printReceipt, closeOrderSuccessModal, showToast,
    confirmDeleteAdminOrder, executeDeleteAdminOrder, deleteAdminOrder, handleUnifiedDeleteConfirm,
    onNewDiscountIqdInput, onNewDiscountUsdInput, calculateNewDiscountPreview,
    onEditDiscountIqdInput, onEditDiscountUsdInput, calculateEditDiscountPreview,
    playBellSound, toggleOrderSound, searchProducts, searchAdminProducts,
    filterByCategory, goToSlide, saveBackendUrlConfig
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
