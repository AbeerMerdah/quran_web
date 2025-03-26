const surahs = [

    { id: 1, name: "الفاتحة", juz:[ 1] },

    { id: 2, name: "البقرة", juz:[1,2] },

    { id: 3, name: "آل عمران", juz: [3] },

    { id: 4, name: "النساء", juz: [4,5] },

    { id: 5, name: "المائدة", juz:[ 6] },

    { id: 6, name: "الأنعام", juz: [7] },

    { id: 7, name: "الأعراف", juz: [8] },

    { id: 8, name: "الأنفال", juz:[ 9 ]},

    { id: 9, name: "التوبة", juz: [10] },

    { id: 10, name: "يونس", juz: [11] },

    { id: 11, name: "هود", juz: [12] },

    { id: 12, name: "يوسف", juz:[ 12] },

    { id: 13, name: "الرعد", juz: [13] },

    { id: 14, name: "إبراهيم", juz: [13] },

    { id: 15, name: "الحجر", juz:[ 14] },

    { id: 16, name: "النحل", juz: [14] },

    { id: 17, name: "الإسراء", juz: [15] },

    { id: 18, name: "الكهف", juz: [15] },

    { id: 19, name: "مريم", juz: [16] },

    { id: 20, name: "طه", juz: [16] },

    { id: 21, name: "الأنبياء", juz: [17] },

    { id: 22, name: "الحج", juz: [17] },

    { id: 23, name: "المؤمنون", juz: [18] },

    { id: 24, name: "النور", juz: [18] },

    { id: 25, name: "الفرقان", juz: [19] },

    { id: 26, name: "الشعراء", juz: [19] },

    { id: 27, name: "النمل", juz: [19] },

    { id: 28, name: "القصص", juz: [20] },

    { id: 29, name: "العنكبوت", juz:[ 20] },

    { id: 30, name: "الروم", juz:[ 21] },

    {id: 31, name: "لقمان", juz:[ 21]},

    {id: 32, name: "السجدة", juz: [21]},

    {id: 33, name: "الأحزاب",  juz: [21]},
    {id: 34, name: "سبإ", juz: [22]},
    {id: 35, name: "فاطر",  juz: [22]},
    {id: 36, name: " يس ",  juz: [23]},
    {id: 37, name: "الصافات", juz:[ 23]},
    {id: 38, name: " ص ",juz: [23]},
    {id: 39, name: "الزمر", juz: [24]},
    {id: 40, name: "غافر", juz:[ 24]},
    {id: 41, name: "فصلت", juz: [25]},
    {id: 42, name: "الشورى", juz: [25]},
    {id: 43, name: "الزخرف", juz: [25]},
    {id: 44, name: "الدخان", juz: [25]},
    {id: 45, name: "الجاثية",  juz: [26]},
    {id: 46, name: "الأحقاف", juz: [26]},
    {id: 47, name: "محمد", juz:[ 26]},
    {id: 48, name: "الفتح", juz: [26]},
    {id: 49, name: "الحجرات", juz: [26]},
    {id: 50, name: "ق", juz:[ 26]},
    {id: 51, name: "الذريات", juz: [27]},
    {id: 52, name: "الطور", juz:[ 27]},
    {id: 53, name: "النجم", juz:[ 27]},
    {id: 54, name: "القمر",  juz: [27]},
    {id: 55, name: "الرحمن", juz: [27]},
    {id: 56, name: "الواقعة", juz: [27]},
    {id: 57, name: "الحديد",  juz: [28]},
    {id: 58, name: "المجادلة", juz: [28]},
    {id: 59, name: "الحشر",  juz: [28]},
    {id: 60, name: "الممتحنة", juz: [28]},
    {id: 61, name: "الصف",  juz:[ 28]},
    {id: 62, name: "الجمعة", juz: [28]},
    {id: 63, name: "المنافقون", juz: [28]},
    {id: 64, name: "التغابن", juz: [28]},
    {id: 65, name: "الطلاق", juz: [28]},
    {id: 66, name: "التحريم",  juz: [28]},
    {id: 67, name: "الملك", juz:[ 29]},
    {id: 68, name: "القلم",  juz: [29]},
    {id: 69, name: "الحاقة",  juz: [29]},
    {id: 70, name: "المعارج", juz:[ 29]},
    {id: 71, name: "نوح",juz:[ 29]},
    {id: 72, name: "الجن", juz: [29]},
    {id: 73, name: "المزمل", juz: [29]},
    {id: 74, name: "المدثر", juz: [29]},
    {id: 75, name: "القيامة",  juz: [29]},
    {id: 76, name: "الانسان", juz: [29]},
    {id: 77, name: "المرسلات",  juz: [29]},
    {id: 78, name: "النبإ",  juz: [30]},
    {id: 79, name: "النازعات", juz: [30]},
    {id: 80, name: "عبس",juz: [30]},
    {id: 81, name: "التكوير", juz: [30]},
    {id: 82, name: "الإنفطار", juz: [30]},
    {id: 83, name: "المطففين", juz: [30]},
    {id: 84, name: "الإنشقاق", juz: [30]},
    {id: 85, name: "البروج", juz: [30]},
    {id: 86, name: "الطارق", juz: [30]},
    {id: 87, name: "الأعلى",  juz: [30]},
    {id: 88, name: "الغاشية", juz: [30]},
    {id: 89, name: "الفجر", juz: [30]},
    {id: 90, name: "البلد", juz: [30]},
    {id: 91, name: "الشمس", juz: [30]},
    {id: 92, name: "الليل", juz: [30]},
    {id: 93, name: "الضحى", juz: [30]},
    {id: 94, name: "الشرح", juz: [30]},
    {id: 95, name: "التين", juz: [30]},
    {id: 96, name: "العلق",  juz: [30]},
    {id: 97, name: "القدر", juz: [30]},
    {id: 98, name: "البينة", juz: [30]},
    {id: 99, name: "الزلزلة",  juz: [30]},
    {id: 100, name: "العاديات", juz: [30]},
    {id: 101, name: "القارعة",  juz: [30]},
    {id: 102, name: "التكاثر", juz: [30]},
    {id: 103, name: "العصر", juz: [30]},
    {id: 104, name: "الهمزة", juz: [30]},
    {id: 105, name: "الفيل", juz: [30]},
    {id: 106, name: "قريش",  juz: [30]},
    {id: 107, name: "الماعون", juz: [30]},
    {id: 108, name: "الكوثر",  juz: [30]},
    {id: 109, name: "الكافرون",  juz: [30]},
    {id: 110, name: "النصر", juz: [30]},
    {id: 111, name: "المسد",juz: [30]},
    {id: 112, name: "الإخلاص", juz: [30]},
    {id: 113, name: "الفلق ", juz: [30]},
    {id: 114, name: "الناس", juz: [30]},





];



const surahList = document.getElementById("surah-list");



surahs.forEach(surah => {

    const div = document.createElement("div");

    div.className = "surah-container";



    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.id = `surah-${surah.id}`;

    checkbox.dataset.juz = JSON.stringify(surah.juz); // تخزين الأجزاء في الـ dataset

    checkbox.addEventListener("change", calculateProgress);



    const label = document.createElement("label");

    label.htmlFor = checkbox.id;

    label.innerText = `${surah.name} (الجزء ${surah.juz.join(", ")})`; // إظهار كل الأجزاء



    div.appendChild(checkbox);

    div.appendChild(label);

    surahList.appendChild(div);

});


function calculateProgress() {

    const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");



    // قائمة السور حسب الأجزاء (يجب التأكد أن جميع السور مضبوطة هنا)

    const juzSurahs = {

        30: ["النبأ", "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"],

        29: ["الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات"]

        // أضف باقي الأجزاء بنفس الطريقة...

    };



    let totalSurahs = 114; // مجموع سور القرآن الكريم

    let completedSurahs = 0; // عدد السور المختارة

    let completedJuzCount = 0; // عدد الأجزاء المكتملة



    // تحويل قائمة السور المختارة إلى مصفوفة للحصول على الأسماء

    let selectedSurahs = [...checkedBoxes].map(box => box.dataset.surah);



    // حساب عدد السور المختارة

    completedSurahs = selectedSurahs.length;



    // التحقق من الأجزاء المكتملة

    Object.keys(juzSurahs).forEach(juz => {

        let allSurahsCompleted = juzSurahs[juz].every(surah => selectedSurahs.includes(surah));

        if (allSurahsCompleted) {

            completedJuzCount += 1;

        }

    });



    // حساب النسبة

    let completionRate = ((completedSurahs / totalSurahs) * 100).toFixed(2);

    let remainingJuzCount = 30 - completedJuzCount;



    // تحديث العرض

    document.getElementById("progress").innerHTML = `

        ✅ نسبة الختم: ${completionRate}% <br>

        ✅ الأجزاء المكتملة: ${completedJuzCount} / 30 <br>

        ❌ الأجزاء المتبقية: ${remainingJuzCount} جزء

    `;

}

