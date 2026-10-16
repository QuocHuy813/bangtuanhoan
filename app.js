/* =========================================================
   BẢNG TUẦN HOÀN HÓA HỌC
   FULL JAVASCRIPT - 118 NGUYÊN TỐ
   Giữ đúng ID của index.html hiện tại
========================================================= */


/* =========================================================
   DỮ LIỆU 118 NGUYÊN TỐ
========================================================= */

const elementNames = [
    "Hiđrô", "Heli",
    "Liti", "Beri", "Bo", "Cacbon", "Nitơ", "Oxi", "Flo", "Neon",
    "Natri", "Magie", "Nhôm", "Silic", "Photpho", "Lưu huỳnh", "Clo", "Argon",
    "Kali", "Canxi", "Scandi", "Titan", "Vanadi", "Crom", "Mangan",
    "Sắt", "Coban", "Niken", "Đồng", "Kẽm", "Gali", "Gecmani",
    "Asen", "Selen", "Brom", "Krypton",
    "Rubidi", "Stronti", "Ytri", "Zirconi", "Niobi", "Molypden",
    "Tecneti", "Rutheni", "Rodi", "Paladi", "Bạc", "Cadimi",
    "Indi", "Thiếc", "Antimon", "Telua", "Iốt", "Xenon",
    "Xesi", "Bari", "Lantan", "Ceri", "Praseodymi", "Neodymi",
    "Prometi", "Samari", "Europi", "Gadolini", "Terbi", "Dysprosi",
    "Holmi", "Erbi", "Thuli", "Ytterbi", "Luteti",
    "Hafni", "Tantan", "Vonfram", "Rheni", "Osmi", "Iridi",
    "Bạch kim", "Vàng", "Thủy ngân", "Tali", "Chì", "Bitmut",
    "Poloni", "Astatin", "Radon",
    "Franxi", "Radi", "Actini", "Thori", "Protactini", "Urani",
    "Neptuni", "Plutoni", "Americi", "Curi", "Berkeli", "Californi",
    "Einsteini", "Fermi", "Mendelevi", "Nobeli", "Lawrenci",
    "Rutherfordi", "Dubni", "Seaborgi", "Bohri", "Hassi",
    "Meitneri", "Darmstadti", "Roentgeni", "Copernici", "Nihoni",
    "Flerovi", "Moscovi", "Livermori", "Tennessin", "Oganesson"
];


const symbols = [
    "H", "He",
    "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe",
    "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd",
    "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu",
    "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
    "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn",
    "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am",
    "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr",
    "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn",
    "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];


/* =========================================================
   TÊN TIẾNG ANH QUỐC TẾ
   Dùng cho nút 🔊
========================================================= */

const englishNames = {
    H: "Hydrogen",
    He: "Helium",
    Li: "Lithium",
    Be: "Beryllium",
    B: "Boron",
    C: "Carbon",
    N: "Nitrogen",
    O: "Oxygen",
    F: "Fluorine",
    Ne: "Neon",

    Na: "Sodium",
    Mg: "Magnesium",
    Al: "Aluminium",
    Si: "Silicon",
    P: "Phosphorus",
    S: "Sulfur",
    Cl: "Chlorine",
    Ar: "Argon",

    K: "Potassium",
    Ca: "Calcium",
    Sc: "Scandium",
    Ti: "Titanium",
    V: "Vanadium",
    Cr: "Chromium",
    Mn: "Manganese",
    Fe: "Iron",
    Co: "Cobalt",
    Ni: "Nickel",
    Cu: "Copper",
    Zn: "Zinc",

    Ga: "Gallium",
    Ge: "Germanium",
    As: "Arsenic",
    Se: "Selenium",
    Br: "Bromine",
    Kr: "Krypton",

    Rb: "Rubidium",
    Sr: "Strontium",
    Y: "Yttrium",
    Zr: "Zirconium",
    Nb: "Niobium",
    Mo: "Molybdenum",
    Tc: "Technetium",
    Ru: "Ruthenium",
    Rh: "Rhodium",
    Pd: "Palladium",
    Ag: "Silver",
    Cd: "Cadmium",
    In: "Indium",
    Sn: "Tin",
    Sb: "Antimony",
    Te: "Tellurium",
    I: "Iodine",
    Xe: "Xenon",

    Cs: "Caesium",
    Ba: "Barium",

    La: "Lanthanum",
    Ce: "Cerium",
    Pr: "Praseodymium",
    Nd: "Neodymium",
    Pm: "Promethium",
    Sm: "Samarium",
    Eu: "Europium",
    Gd: "Gadolinium",
    Tb: "Terbium",
    Dy: "Dysprosium",
    Ho: "Holmium",
    Er: "Erbium",
    Tm: "Thulium",
    Yb: "Ytterbium",
    Lu: "Lutetium",

    Hf: "Hafnium",
    Ta: "Tantalum",
    W: "Tungsten",
    Re: "Rhenium",
    Os: "Osmium",
    Ir: "Iridium",
    Pt: "Platinum",
    Au: "Gold",
    Hg: "Mercury",
    Tl: "Thallium",
    Pb: "Lead",
    Bi: "Bismuth",
    Po: "Polonium",
    At: "Astatine",
    Rn: "Radon",

    Fr: "Francium",
    Ra: "Radium",

    Ac: "Actinium",
    Th: "Thorium",
    Pa: "Protactinium",
    U: "Uranium",
    Np: "Neptunium",
    Pu: "Plutonium",
    Am: "Americium",
    Cm: "Curium",
    Bk: "Berkelium",
    Cf: "Californium",
    Es: "Einsteinium",
    Fm: "Fermium",
    Md: "Mendelevium",
    No: "Nobelium",
    Lr: "Lawrencium",

    Rf: "Rutherfordium",
    Db: "Dubnium",
    Sg: "Seaborgium",
    Bh: "Bohrium",
    Hs: "Hassium",
    Mt: "Meitnerium",
    Ds: "Darmstadtium",
    Rg: "Roentgenium",
    Cn: "Copernicium",
    Nh: "Nihonium",
    Fl: "Flerovium",
    Mc: "Moscovium",
    Lv: "Livermorium",
    Ts: "Tennessine",
    Og: "Oganesson"
};


/* =========================================================
   VỊ TRÍ BẢNG TUẦN HOÀN
========================================================= */

const positions = {

    1: [1, 1],
    2: [18, 1],

    3: [1, 2],
    4: [2, 2],
    5: [13, 2],
    6: [14, 2],
    7: [15, 2],
    8: [16, 2],
    9: [17, 2],
    10: [18, 2],

    11: [1, 3],
    12: [2, 3],
    13: [13, 3],
    14: [14, 3],
    15: [15, 3],
    16: [16, 3],
    17: [17, 3],
    18: [18, 3],

    19: [1, 4],
    20: [2, 4],
    21: [3, 4],
    22: [4, 4],
    23: [5, 4],
    24: [6, 4],
    25: [7, 4],
    26: [8, 4],
    27: [9, 4],
    28: [10, 4],
    29: [11, 4],
    30: [12, 4],
    31: [13, 4],
    32: [14, 4],
    33: [15, 4],
    34: [16, 4],
    35: [17, 4],
    36: [18, 4],

    37: [1, 5],
    38: [2, 5],
    39: [3, 5],
    40: [4, 5],
    41: [5, 5],
    42: [6, 5],
    43: [7, 5],
    44: [8, 5],
    45: [9, 5],
    46: [10, 5],
    47: [11, 5],
    48: [12, 5],
    49: [13, 5],
    50: [14, 5],
    51: [15, 5],
    52: [16, 5],
    53: [17, 5],
    54: [18, 5],

    55: [1, 6],
    56: [2, 6],

    57: [3, 6],

    72: [4, 6],
    73: [5, 6],
    74: [6, 6],
    75: [7, 6],
    76: [8, 6],
    77: [9, 6],
    78: [10, 6],
    79: [11, 6],
    80: [12, 6],
    81: [13, 6],
    82: [14, 6],
    83: [15, 6],
    84: [16, 6],
    85: [17, 6],
    86: [18, 6],

    87: [1, 7],
    88: [2, 7],

    89: [3, 7],

    104: [4, 7],
    105: [5, 7],
    106: [6, 7],
    107: [7, 7],
    108: [8, 7],
    109: [9, 7],
    110: [10, 7],
    111: [11, 7],
    112: [12, 7],
    113: [13, 7],
    114: [14, 7],
    115: [15, 7],
    116: [16, 7],
    117: [17, 7],
    118: [18, 7]
};


/* =========================================================
   PHÂN LOẠI NGUYÊN TỐ
========================================================= */

const categories = {

    1: "alkali",
    2: "noble",

    3: "alkali",
    4: "alkaline",
    5: "metalloid",
    6: "nonmetal",
    7: "nonmetal",
    8: "nonmetal",
    9: "halogen",
    10: "noble",

    11: "alkali",
    12: "alkaline",
    13: "post-transition",
    14: "metalloid",
    15: "nonmetal",
    16: "nonmetal",
    17: "halogen",
    18: "noble",

    19: "alkali",
    20: "alkaline",

    21: "transition",
    22: "transition",
    23: "transition",
    24: "transition",
    25: "transition",
    26: "transition",
    27: "transition",
    28: "transition",
    29: "transition",
    30: "transition",

    31: "post-transition",
    32: "metalloid",
    33: "metalloid",
    34: "nonmetal",
    35: "halogen",
    36: "noble",

    37: "alkali",
    38: "alkaline",

    39: "transition",
    40: "transition",
    41: "transition",
    42: "transition",
    43: "transition",
    44: "transition",
    45: "transition",
    46: "transition",
    47: "transition",
    48: "transition",

    49: "post-transition",
    50: "post-transition",
    51: "metalloid",
    52: "metalloid",
    53: "halogen",
    54: "noble",

    55: "alkali",
    56: "alkaline",

    57: "lanthanide",
    58: "lanthanide",
    59: "lanthanide",
    60: "lanthanide",
    61: "lanthanide",
    62: "lanthanide",
    63: "lanthanide",
    64: "lanthanide",
    65: "lanthanide",
    66: "lanthanide",
    67: "lanthanide",
    68: "lanthanide",
    69: "lanthanide",
    70: "lanthanide",
    71: "lanthanide",

    72: "transition",
    73: "transition",
    74: "transition",
    75: "transition",
    76: "transition",
    77: "transition",
    78: "transition",
    79: "transition",
    80: "transition",

    81: "post-transition",
    82: "post-transition",
    83: "post-transition",
    84: "post-transition",
    85: "halogen",
    86: "noble",

    87: "alkali",
    88: "alkaline",

    89: "actinide",
    90: "actinide",
    91: "actinide",
    92: "actinide",
    93: "actinide",
    94: "actinide",
    95: "actinide",
    96: "actinide",
    97: "actinide",
    98: "actinide",
    99: "actinide",
    100: "actinide",
    101: "actinide",
    102: "actinide",
    103: "actinide",

    104: "transition",
    105: "transition",
    106: "transition",
    107: "transition",
    108: "transition",
    109: "transition",
    110: "transition",
    111: "transition",
    112: "transition",

    113: "post-transition",
    114: "post-transition",
    115: "post-transition",
    116: "post-transition",
    117: "halogen",
    118: "noble"
};


/* =========================================================
   TÊN LOẠI
========================================================= */

const categoryNames = {

    alkali: "Kim loại kiềm",

    alkaline: "Kim loại kiềm thổ",

    transition: "Kim loại chuyển tiếp",

    "post-transition": "Kim loại",

    metalloid: "Á kim",

    nonmetal: "Phi kim",

    halogen: "Halogen",

    noble: "Khí hiếm",

    lanthanide: "Họ Lantan",

    actinide: "Họ Actini"
};


/* =========================================================
   TẠO DỮ LIỆU
========================================================= */

const elements = [];


for (let number = 1; number <= 118; number++) {

    const symbol = symbols[number - 1];

    const name = elementNames[number - 1];

    const category = categories[number];

    let group = "";
    let period = "";

    let gridGroup = 0;
    let gridPeriod = 0;


    /* -------------------------
       VỊ TRÍ
    ------------------------- */

    if (positions[number]) {

        gridGroup = positions[number][0];

        gridPeriod = positions[number][1];

    }


    /* -------------------------
       NHÓM
    ------------------------- */

    if (category === "lanthanide") {

        group = "Họ nguyên tố";

        period = "Chu kỳ 6";

    }

    else if (category === "actinide") {

        group = "Họ nguyên tố";

        period = "Chu kỳ 7";

    }

    else {

        group = `Nhóm ${gridGroup}`;

        period = `Chu kỳ ${gridPeriod}`;

    }


    /* -------------------------
       NỘI DUNG HÓA HỌC
    ------------------------- */

    let chemical = `
${name} là nguyên tố thuộc nhóm ${categoryNames[category]}.

Bạn có thể bổ sung thông tin chi tiết về tính chất hóa học của ${name} tại đây.

Có thể thêm:
- Tính chất hóa học
- Số oxi hóa
- Phản ứng với oxi
- Phản ứng với axit
- Phản ứng với bazơ
- Các phương trình hóa học
`;


    /* -------------------------
       NỘI DUNG VẬT LÝ
    ------------------------- */

    let physical = `
${name} là nguyên tố thuộc nhóm ${categoryNames[category]}.

Bạn có thể bổ sung thông tin chi tiết về tính chất vật lý tại đây.

Có thể thêm:
- Trạng thái
- Màu sắc
- Khối lượng riêng
- Nhiệt độ nóng chảy
- Nhiệt độ sôi
- Tính dẫn điện
- Tính dẫn nhiệt
`;


    /* -------------------------
       LỊCH SỬ
    ------------------------- */

    let history = `
Thông tin lịch sử của ${name} có thể được bổ sung tại đây.

Bạn có thể thêm:
- Người phát hiện
- Năm phát hiện
- Nguồn gốc tên gọi
- Lịch sử nghiên cứu
`;


    elements.push({

        number: number,

        symbol: symbol,

        name: name,

        englishName:
            englishNames[symbol] || name,

        group: group,

        period: period,

        gridGroup: gridGroup,

        gridPeriod: gridPeriod,

        type:
            categoryNames[category],

        category: category,

        chemical: chemical,

        physical: physical,

        history: history,

        image: ""

    });

}


/* =========================================================
   DOM
========================================================= */

const periodicTable =
    document.getElementById("periodicTable");

const lanthanides =
    document.getElementById("lanthanides");

const actinides =
    document.getElementById("actinides");

const searchInput =
    document.getElementById("searchInput");

const detailOverlay =
    document.getElementById("detailOverlay");

const closeButton =
    document.getElementById("closeButton");


/* =========================================================
   KIỂM TRA DOM
========================================================= */

if (!periodicTable) {

    console.error(
        "Không tìm thấy #periodicTable trong index.html"
    );

}

if (!lanthanides) {

    console.error(
        "Không tìm thấy #lanthanides trong index.html"
    );

}

if (!actinides) {

    console.error(
        "Không tìm thấy #actinides trong index.html"
    );
}


/* =========================================================
   TẠO CARD NGUYÊN TỐ
========================================================= */

function createElementCard(element) {

    const card =
        document.createElement("div");


    card.className =
        `element ${element.category}`;


    card.dataset.number =
        element.number;


    card.dataset.name =
        element.name.toLowerCase();


    card.dataset.symbol =
        element.symbol.toLowerCase();


    card.dataset.english =
        element.englishName.toLowerCase();


    card.innerHTML = `

        <span class="element-number">
            ${element.number}
        </span>

        <strong class="element-symbol">
            ${element.symbol}
        </strong>

        <span class="element-name">
            ${element.name}
        </span>

    `;


    card.addEventListener(
        "click",
        function () {

            openElement(element);

        }
    );


    return card;

}


/* =========================================================
   TẠO BẢNG CHÍNH
========================================================= */

function createPeriodicTable() {

    if (!periodicTable) return;


    periodicTable.innerHTML = "";


    elements.forEach(
        function (element) {


            /*
               Lantan và Actini không nằm
               trực tiếp ở bảng chính
            */

            if (
                element.category === "lanthanide" ||
                element.category === "actinide"
            ) {

                return;

            }


            const card =
                createElementCard(element);


            card.style.gridColumn =
                element.gridGroup;


            card.style.gridRow =
                element.gridPeriod;


            periodicTable.appendChild(card);

        }
    );

}


/* =========================================================
   TẠO LANTHANIDE + ACTINIDE
========================================================= */

function createSeries() {

    if (!lanthanides || !actinides) {
        return;
    }


    lanthanides.innerHTML = "";

    actinides.innerHTML = "";


    /* -------------------------
       LANTAN
    ------------------------- */

    for (
        let number = 58;
        number <= 71;
        number++
    ) {

        const element =
            elements.find(
                function (e) {
                    return e.number === number;
                }
            );


        if (element) {

            lanthanides.appendChild(
                createElementCard(element)
            );

        }

    }


    /* -------------------------
       ACTINI
    ------------------------- */

    for (
        let number = 90;
        number <= 103;
        number++
    ) {

        const element =
            elements.find(
                function (e) {
                    return e.number === number;
                }
            );


        if (element) {

            actinides.appendChild(
                createElementCard(element)
            );

        }

    }

}


/* =========================================================
   MỞ CHI TIẾT NGUYÊN TỐ
========================================================= */

function openElement(element) {


    const detailNumber =
        document.getElementById(
            "detailNumber"
        );


    const detailSymbol =
        document.getElementById(
            "detailSymbol"
        );


    const detailName =
        document.getElementById(
            "detailName"
        );


    const detailType =
        document.getElementById(
            "detailType"
        );


    const infoSymbol =
        document.getElementById(
            "infoSymbol"
        );


    const infoNumber =
        document.getElementById(
            "infoNumber"
        );


    const infoGroup =
        document.getElementById(
            "infoGroup"
        );


    const infoPeriod =
        document.getElementById(
            "infoPeriod"
        );


    const infoType =
        document.getElementById(
            "infoType"
        );


    /* -------------------------
       THÔNG TIN CƠ BẢN
    ------------------------- */

    if (detailNumber) {

        detailNumber.textContent =
            element.number;

    }


    if (detailSymbol) {

        detailSymbol.textContent =
            element.symbol;

    }


    if (detailName) {

        detailName.textContent =
            element.name;

    }


    if (detailType) {

        detailType.textContent =
            element.type;

    }


    if (infoSymbol) {

        infoSymbol.textContent =
            element.symbol;

    }


    if (infoNumber) {

        infoNumber.textContent =
            element.number;

    }


    if (infoGroup) {

        infoGroup.textContent =
            element.group;

    }


    if (infoPeriod) {

        infoPeriod.textContent =
            element.period;

    }


    if (infoType) {

        infoType.textContent =
            element.type;

    }


    /* -------------------------
       NỘI DUNG
    ------------------------- */

    const chemicalContent =
        document.getElementById(
            "chemicalContent"
        );


    const physicalContent =
        document.getElementById(
            "physicalContent"
        );


    const historyContent =
        document.getElementById(
            "historyContent"
        );


    if (chemicalContent) {

        chemicalContent.innerHTML =
            formatInformation(
                element.chemical
            );

    }


    if (physicalContent) {

        physicalContent.innerHTML =
            formatInformation(
                element.physical
            );

    }


    if (historyContent) {

        historyContent.innerHTML =
            formatInformation(
                element.history
            );

    }


    /* =====================================================
       HÌNH ẢNH
    ===================================================== */

    const image =
        document.getElementById(
            "elementImage"
        );


    const placeholder =
        document.getElementById(
            "imagePlaceholder"
        );


    if (
        image &&
        placeholder
    ) {


        if (
            element.image &&
            element.image.trim() !== ""
        ) {

            image.src =
                element.image;

            image.classList.add(
                "show"
            );

            placeholder.style.display =
                "none";

        }

        else {

            image.src = "";

            image.classList.remove(
                "show"
            );

            placeholder.style.display =
                "block";

        }

    }


    /* =====================================================
       MÀU KÝ HIỆU
    ===================================================== */

    const colors = {

        alkali: "#ff7676",

        alkaline: "#ff9e4d",

        transition: "#3979ee",

        "post-transition": "#6678df",

        metalloid: "#28a991",

        nonmetal: "#3caf69",

        halogen: "#a54acb",

        noble: "#d04d83",

        lanthanide: "#d28b25",

        actinide: "#c76c43"

    };


    const bigSymbol =
        document.querySelector(
            ".big-symbol"
        );


    if (bigSymbol) {

        const color =
            colors[element.category] ||
            "#3979ee";


        bigSymbol.style.background =
            `${color}18`;

    }


    if (detailSymbol) {

        detailSymbol.style.color =
            colors[element.category] ||
            "#3979ee";

    }


    /* =====================================================
       RESET TAB
    ===================================================== */

    document
        .querySelectorAll(
            ".tab-button"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );

            }
        );


    const chemicalButton =
        document.querySelector(
            '[data-tab="chemical"]'
        );


    if (chemicalButton) {

        chemicalButton.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(
            ".tab-content"
        )
        .forEach(
            function (content) {

                content.classList.remove(
                    "active"
                );

            }
        );


    const chemicalTab =
        document.getElementById(
            "chemicalTab"
        );


    if (chemicalTab) {

        chemicalTab.classList.add(
            "active"
        );

    }


    /* =====================================================
       NÚT ĐỌC
    ===================================================== */

    const speakButton =
        document.getElementById(
            "speakButton"
        );


    if (speakButton) {

        speakButton.onclick =
            function () {

                speakElement(
                    element
                );

            };

    }


    /* =====================================================
       HIỆN PANEL
    ===================================================== */

    if (detailOverlay) {

        detailOverlay.classList.add(
            "show"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   FORMAT INFORMATION
========================================================= */

function formatInformation(text) {

    if (
        !text ||
        text.trim() === ""
    ) {

        return `
            <span class="empty-information">
                Chưa có thông tin.
            </span>
        `;

    }


    return text
        .trim()
        .replace(
            /\n/g,
            "<br>"
        );

}


/* =========================================================
   ĐỌC TÊN NGUYÊN TỐ
========================================================= */

function speakElement(element) {

    if (
        !(
            "speechSynthesis"
            in window
        )
    ) {

        alert(
            "Trình duyệt của bạn không hỗ trợ đọc văn bản."
        );

        return;

    }


    /*
       Dừng giọng đọc trước
    */

    speechSynthesis.cancel();


    /*
       Đọc tên tiếng Anh
       Ví dụ:

       Nhôm → Aluminium
       Sắt → Iron
       Đồng → Copper
       Vàng → Gold
       Bạc → Silver
    */

    const speech =
        new SpeechSynthesisUtterance(
            element.englishName ||
            element.name
        );


    /*
       Tiếng Anh
    */

    speech.lang =
        "en-US";


    /*
       Tốc độ chậm
    */

    speech.rate =
        0.6;


    /*
       Cao độ
    */

    speech.pitch =
        1;


    /*
       Âm lượng tối đa
    */

    speech.volume =
        1;


    speechSynthesis.speak(
        speech
    );

}


/* =========================================================
   ĐÓNG PANEL
========================================================= */

function closeDetail() {

    if (detailOverlay) {

        detailOverlay.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";


    if (
        "speechSynthesis"
        in window
    ) {

        speechSynthesis.cancel();

    }

}


/* =========================================================
   NÚT ĐÓNG
========================================================= */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeDetail
    );

}


/* =========================================================
   CLICK RA NGOÀI PANEL
========================================================= */

if (detailOverlay) {

    detailOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                detailOverlay
            ) {

                closeDetail();

            }

        }
    );

}


/* =========================================================
   PHÍM ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeDetail();

        }

    }
);


/* =========================================================
   TAB HÓA HỌC / VẬT LÝ / LỊCH SỬ
========================================================= */

document
    .querySelectorAll(
        ".tab-button"
    )
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    const tab =
                        this.dataset.tab;


                    /*
                       Bỏ active tất cả nút
                    */

                    document
                        .querySelectorAll(
                            ".tab-button"
                        )
                        .forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    /*
                       Active nút hiện tại
                    */

                    this.classList.add(
                        "active"
                    );


                    /*
                       Ẩn tất cả nội dung
                    */

                    document
                        .querySelectorAll(
                            ".tab-content"
                        )
                        .forEach(
                            function (content) {

                                content.classList.remove(
                                    "active"
                                );

                            }
                        );


                    /*
                       Hiện tab tương ứng
                    */

                    const selectedTab =
                        document.getElementById(
                            `${tab}Tab`
                        );


                    if (selectedTab) {

                        selectedTab.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


/* =========================================================
   TÌM KIẾM
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {


            const keyword =
                this.value
                    .trim()
                    .toLowerCase();


            document
                .querySelectorAll(
                    ".element"
                )
                .forEach(
                    function (card) {


                        const name =
                            card.dataset.name ||
                            "";


                        const symbol =
                            card.dataset.symbol ||
                            "";


                        const number =
                            card.dataset.number ||
                            "";


                        const english =
                            card.dataset.english ||
                            "";


                        const found =

                            name.includes(
                                keyword
                            )

                            ||

                            symbol.includes(
                                keyword
                            )

                            ||

                            number.includes(
                                keyword
                            )

                            ||

                            english.includes(
                                keyword
                            );


                        if (found) {

                            card.classList.remove(
                                "hidden"
                            );

                        }

                        else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

        }
    );

}


/* =========================================================
   KHỞI ĐỘNG
========================================================= */

createPeriodicTable();

createSeries();


/* =========================================================
   KIỂM TRA
========================================================= */

console.log(
    "Bảng tuần hoàn đã tải thành công."
);


console.log(
    "Số nguyên tố:",
    elements.length
);