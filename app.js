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
    H: "Hydrogen", He: "Helium",
    Li: "Lithium", Be: "Beryllium", B: "Boron", C: "Carbon",
    N: "Nitrogen", O: "Oxygen", F: "Fluorine", Ne: "Neon",

    Na: "Sodium", Mg: "Magnesium", Al: "Aluminium", Si: "Silicon",
    P: "Phosphorus", S: "Sulfur", Cl: "Chlorine", Ar: "Argon",

    K: "Potassium", Ca: "Calcium", Sc: "Scandium", Ti: "Titanium",
    V: "Vanadium", Cr: "Chromium", Mn: "Manganese", Fe: "Iron",
    Co: "Cobalt", Ni: "Nickel", Cu: "Copper", Zn: "Zinc",
    Ga: "Gallium", Ge: "Germanium", As: "Arsenic", Se: "Selenium",
    Br: "Bromine", Kr: "Krypton",

    Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium",
    Nb: "Niobium", Mo: "Molybdenum", Tc: "Technetium", Ru: "Ruthenium",
    Rh: "Rhodium", Pd: "Palladium", Ag: "Silver", Cd: "Cadmium",
    In: "Indium", Sn: "Tin", Sb: "Antimony", Te: "Tellurium",
    I: "Iodine", Xe: "Xenon",

    Cs: "Caesium", Ba: "Barium",

    La: "Lanthanum", Ce: "Cerium", Pr: "Praseodymium", Nd: "Neodymium",
    Pm: "Promethium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium",
    Tb: "Terbium", Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium",
    Tm: "Thulium", Yb: "Ytterbium", Lu: "Lutetium",

    Hf: "Hafnium", Ta: "Tantalum", W: "Tungsten", Re: "Rhenium",
    Os: "Osmium", Ir: "Iridium", Pt: "Platinum", Au: "Gold",
    Hg: "Mercury", Tl: "Thallium", Pb: "Lead", Bi: "Bismuth",
    Po: "Polonium", At: "Astatine", Rn: "Radon",

    Fr: "Francium", Ra: "Radium",

    Ac: "Actinium", Th: "Thorium", Pa: "Protactinium", U: "Uranium",
    Np: "Neptunium", Pu: "Plutonium", Am: "Americium", Cm: "Curium",
    Bk: "Berkelium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium",
    Md: "Mendelevium", No: "Nobelium", Lr: "Lawrencium",

    Rf: "Rutherfordium", Db: "Dubnium", Sg: "Seaborgium", Bh: "Bohrium",
    Hs: "Hassium", Mt: "Meitnerium", Ds: "Darmstadtium", Rg: "Roentgenium",
    Cn: "Copernicium", Nh: "Nihonium", Fl: "Flerovium", Mc: "Moscovium",
    Lv: "Livermorium", Ts: "Tennessine", Og: "Oganesson"
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
   THÔNG TIN CHI TIẾT CÁC NGUYÊN TỐ
   Nguyên tố nào chưa có ở đây sẽ dùng nội dung mẫu.
   Để thêm nguyên tố mới: thêm một mục theo ký hiệu hóa học,
   gồm 3 trường: physical, chemical, history.
========================================================= */

const elementInfo = {

    H: {
        physical: `
• Trạng thái: Khí ở điều kiện thường, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 1,008.
• Khối lượng riêng: ≈ 0,0899 g/L, là nguyên tố nhẹ nhất.
• Nhiệt độ nóng chảy: −259,16 °C.
• Nhiệt độ sôi: −252,87 °C.
• Dạng tồn tại: Chủ yếu ở dạng phân tử H₂.
• Đồng vị: ¹H, ²H và ³H; ¹H phổ biến nhất.
`,
        chemical: `
• Vị trí: Nhóm 1, chu kỳ 1, khối s.
• Cấu hình electron: 1s¹.
• Số oxi hóa: Thường +1, có thể −1 trong một số hiđrua kim loại.
• Tính chất: Phi kim, dễ cháy và có tính khử.
• Với oxygen: 2H₂ + O₂ → 2H₂O.
• Với chlorine: H₂ + Cl₂ → 2HCl.
• Trong tự nhiên: Chủ yếu tồn tại trong nước và các hợp chất hữu cơ.
`,
        history: `
• Năm 1766: Henry Cavendish nhận diện hydro là một loại khí dễ cháy.
• Năm 1783: Antoine Lavoisier chứng minh hydro cháy tạo thành nước.
• Lavoisier đặt tên Hydrogen, liên quan đến ý nghĩa "sinh ra nước".
• Hydro sau đó trở thành nguyên tố quan trọng trong nghiên cứu cấu tạo nguyên tử.
• Ngày nay: Được sử dụng trong công nghiệp hóa chất, nhiên liệu và nghiên cứu năng lượng.
`
    },

    He: {
        physical: `
• Trạng thái: Khí, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 4,003.
• Khối lượng riêng: ≈ 0,1785 g/L.
• Nhiệt độ sôi: −268,93 °C, rất thấp.
• Là nguyên tố nhẹ thứ hai sau hydro.
• Có khả năng dẫn nhiệt tốt và không cháy.
• Khi phóng điện, helium phát ra ánh sáng đặc trưng.
`,
        chemical: `
• Vị trí: Nhóm 18, chu kỳ 1.
• Cấu hình electron: 1s².
• Lớp electron ngoài cùng đã bão hòa nên helium cực kỳ trơ.
• Hầu như không tham gia phản ứng hóa học ở điều kiện thường.
• Không cháy và không duy trì sự cháy.
• Một số hợp chất helium chỉ tồn tại trong điều kiện đặc biệt.
`,
        history: `
• Năm 1868: Pierre Janssen và Norman Lockyer phát hiện dấu hiệu của helium trong quang phổ Mặt Trời.
• Tên Helium bắt nguồn từ "Helios", nghĩa là Mặt Trời.
• Năm 1895: William Ramsay cô lập helium trên Trái Đất.
• Việc phát hiện helium là trường hợp đặc biệt vì nguyên tố được phát hiện trong Mặt Trời trước khi tìm thấy trên Trái Đất.
`
    },

    Li: {
        physical: `
• Trạng thái: Kim loại rắn, màu trắng bạc.
• Khối lượng nguyên tử: ≈ 6,94.
• Khối lượng riêng: ≈ 0,534 g/cm³, là kim loại nhẹ nhất.
• Mềm và có thể cắt bằng dao.
• Nhiệt độ nóng chảy: ≈ 180,5 °C.
• Dẫn điện và dẫn nhiệt tốt.
• Có màu đỏ thẫm khi thử ngọn lửa.
`,
        chemical: `
• Vị trí: Nhóm 1, chu kỳ 2.
• Cấu hình electron: 1s²2s¹.
• Số oxi hóa phổ biến: +1.
• Là kim loại kiềm có tính khử mạnh.
• Phản ứng với nước tạo LiOH và H₂:
2Li + 2H₂O → 2LiOH + H₂.
• Phản ứng với oxygen tạo oxide.
• Dễ tạo hợp chất ion với nhiều phi kim.
`,
        history: `
• Năm 1817: Johan August Arfwedson phát hiện lithium khi nghiên cứu khoáng vật petalite.
• Tên lithium bắt nguồn từ tiếng Hy Lạp "lithos", nghĩa là đá.
• Năm 1855: Lithium được điều chế ở dạng kim loại tinh khiết hơn bằng phương pháp điện phân.
• Ngày nay: Lithium có vai trò quan trọng trong pin và nhiều lĩnh vực công nghệ.
`
    },

    Be: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc.
• Khối lượng nguyên tử: ≈ 9,012.
• Khối lượng riêng: ≈ 1,85 g/cm³.
• Cứng, nhẹ và có nhiệt độ nóng chảy cao khoảng 1287 °C.
• Dẫn nhiệt tốt.
• Có độ cứng và độ bền cao so với khối lượng.
• Bụi và một số hợp chất beryllium có độc tính cao.
`,
        chemical: `
• Vị trí: Nhóm 2, chu kỳ 2.
• Cấu hình electron: 1s²2s².
• Số oxi hóa phổ biến: +2.
• Bề mặt có lớp BeO bảo vệ nên tương đối bền trong không khí.
• Tác dụng với acid tạo muối và giải phóng H₂.
• BeO và Be(OH)₂ có tính lưỡng tính.
• Có khả năng tạo nhiều hợp chất cộng hóa trị hơn các kim loại kiềm thổ khác.
`,
        history: `
• Năm 1798: Louis Nicolas Vauquelin phát hiện beryllium trong beryl và ngọc lục bảo.
• Ban đầu nguyên tố được gọi bằng tên liên quan đến beryl.
• Kim loại beryllium được cô lập vào thế kỷ XIX.
• Sau này beryllium được nghiên cứu rộng rãi vì nhẹ, cứng và có nhiều tính chất đặc biệt.
`
    },

    B: {
        physical: `
• Trạng thái: Chất rắn, thuộc nhóm á kim.
• Khối lượng nguyên tử: ≈ 10,81.
• Có nhiều dạng thù hình với màu đen hoặc nâu sẫm.
• Nhiệt độ nóng chảy rất cao, khoảng 2076 °C.
• Dẫn điện kém ở nhiệt độ thường.
• Có tính bán dẫn và độ cứng tương đối cao.
`,
        chemical: `
• Vị trí: Nhóm 13, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p¹.
• Số oxi hóa phổ biến: +3.
• Chủ yếu tạo liên kết cộng hóa trị.
• Phản ứng với oxygen khi đun nóng tạo B₂O₃.
• Có khả năng tạo borane và nhiều hợp chất với halogen.
• Boron tạo nhiều hợp chất có cấu trúc hóa học đa dạng.
`,
        history: `
• Năm 1808: Joseph Louis Gay-Lussac, Louis Jacques Thénard và Humphry Davy cùng nghiên cứu việc cô lập boron.
• Boron được biết đến từ lâu thông qua các khoáng vật chứa borat.
• Tên nguyên tố liên quan đến khoáng vật borax.
• Ngày nay boron được sử dụng trong thủy tinh, vật liệu và nhiều hợp chất công nghiệp.
`
    },

    C: {
        physical: `
• Trạng thái: Chất rắn ở điều kiện thường.
• Khối lượng nguyên tử: ≈ 12,011.
• Có nhiều dạng thù hình quan trọng như kim cương, than chì, graphene và fullerene.
• Kim cương rất cứng và hầu như không dẫn điện.
• Than chì mềm hơn và dẫn điện tốt.
• Có nhiệt độ thăng hoa rất cao.
`,
        chemical: `
• Vị trí: Nhóm 14, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p².
• Số oxi hóa thường gặp: −4, +2 và +4.
• Có khả năng liên kết với chính nó tạo thành chuỗi và mạng lưới rất đa dạng.
• Là cơ sở của hóa học hữu cơ.
• Carbon cháy trong oxygen tạo CO₂:
C + O₂ → CO₂.
• Ở nhiệt độ cao, carbon có thể khử một số oxide kim loại.
`,
        history: `
• Carbon được con người biết đến từ thời cổ đại dưới dạng than, muội than và kim cương.
• Người cổ đại đã sử dụng than làm nhiên liệu và vật liệu.
• Tên Carbon bắt nguồn từ tiếng Latin "carbo", nghĩa là than.
• Việc nghiên cứu carbon sau này đóng vai trò nền tảng cho sự phát triển của hóa học hữu cơ.
`
    },

    N: {
        physical: `
• Trạng thái: Khí, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 14,007.
• Chiếm khoảng 78% thể tích khí quyển Trái Đất.
• Khối lượng riêng lớn hơn hydrogen nhưng nhỏ hơn oxygen.
• Nhiệt độ sôi: khoảng −195,8 °C.
• Ít tan trong nước.
• Nitrogen lỏng không màu và được sử dụng trong kỹ thuật nhiệt độ thấp.
`,
        chemical: `
• Vị trí: Nhóm 15, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p³.
• Có nhiều số oxi hóa từ −3 đến +5.
• Phân tử N₂ chứa liên kết ba rất bền nên tương đối trơ ở điều kiện thường.
• Phản ứng với oxygen ở nhiệt độ cao tạo NO:
N₂ + O₂ → 2NO.
• Phản ứng với hydrogen tạo ammonia trong điều kiện thích hợp:
N₂ + 3H₂ ⇌ 2NH₃.
`,
        history: `
• Năm 1772: Daniel Rutherford nhận diện nitrogen trong không khí.
• Ông nhận thấy một phần không khí còn lại sau khi loại oxygen và carbon dioxide không duy trì sự cháy.
• Nitrogen sau đó được xác định là thành phần chính của khí quyển.
• Ngày nay nitrogen có vai trò quan trọng trong sinh học, nông nghiệp và công nghiệp hóa chất.
`
    },

    O: {
        physical: `
• Trạng thái: Khí, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 15,999.
• Chiếm khoảng 21% thể tích khí quyển.
• Nặng hơn nitrogen.
• Nhiệt độ sôi: khoảng −183 °C.
• Oxygen lỏng có màu xanh nhạt.
• Cần thiết cho hô hấp của nhiều sinh vật.
`,
        chemical: `
• Vị trí: Nhóm 16, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p⁴.
• Số oxi hóa phổ biến: −2.
• Là chất oxi hóa mạnh.
• Phản ứng với nhiều kim loại và phi kim tạo oxide.
• Hỗ trợ quá trình cháy nhưng bản thân oxygen không phải nhiên liệu.
• Có thể tạo ozone O₃, một dạng thù hình của oxygen.
`,
        history: `
• Năm 1772: Carl Wilhelm Scheele nghiên cứu và thu được oxygen.
• Năm 1774: Joseph Priestley cũng thu được khí này.
• Antoine Lavoisier sau đó giải thích vai trò của oxygen trong quá trình cháy và hô hấp.
• Tên Oxygen bắt nguồn từ tiếng Hy Lạp và được Lavoisier sử dụng trong hệ thống danh pháp mới.
`
    },

    F: {
        physical: `
• Trạng thái: Khí màu vàng nhạt.
• Khối lượng nguyên tử: ≈ 18,998.
• Nhiệt độ sôi: khoảng −188 °C.
• Có tính độc và ăn mòn rất mạnh.
• Là nguyên tố có độ âm điện lớn nhất.
• Phân tử đơn chất tồn tại dưới dạng F₂.
`,
        chemical: `
• Vị trí: Nhóm 17, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p⁵.
• Số oxi hóa phổ biến: −1.
• Là phi kim hoạt động hóa học mạnh nhất.
• Có khả năng phản ứng với rất nhiều nguyên tố.
• Phản ứng với hydrogen tạo HF:
H₂ + F₂ → 2HF.
• Fluorine có tính oxi hóa rất mạnh.
`,
        history: `
• Fluorine từng được các nhà hóa học nghiên cứu trong thời gian dài nhưng rất khó cô lập vì tính phản ứng cực mạnh.
• Năm 1886: Henri Moissan cô lập thành công fluorine.
• Thành tựu này mang lại cho ông giải Nobel Hóa học năm 1906.
• Tên fluorine liên quan đến khoáng vật fluorspar/fluorite.
`
    },

    Ne: {
        physical: `
• Trạng thái: Khí hiếm, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 20,180.
• Nhiệt độ sôi: khoảng −246 °C.
• Có khối lượng riêng lớn hơn helium.
• Khi phóng điện, phát ra ánh sáng đỏ cam đặc trưng.
• Rất ít tan trong nước.
`,
        chemical: `
• Vị trí: Nhóm 18, chu kỳ 2.
• Cấu hình electron: 1s²2s²2p⁶.
• Lớp electron ngoài cùng đã bão hòa.
• Rất trơ về mặt hóa học.
• Không cháy và không duy trì sự cháy.
• Hầu như không tạo hợp chất bền ở điều kiện thường.
`,
        history: `
• Năm 1898: William Ramsay và Morris Travers phát hiện neon.
• Neon được tìm thấy trong phần khí còn lại sau khi hóa lỏng và tách các thành phần của không khí.
• Tên Neon bắt nguồn từ tiếng Hy Lạp "neos", nghĩa là mới.
• Sau này neon trở nên nổi tiếng nhờ ứng dụng trong các loại đèn phát sáng.
`
    },

    Na: {
        physical: `
• Trạng thái: Kim loại rắn, màu trắng bạc.
• Khối lượng nguyên tử: ≈ 22,990.
• Khối lượng riêng: ≈ 0,97 g/cm³.
• Mềm và có thể cắt bằng dao.
• Nhiệt độ nóng chảy: khoảng 97,8 °C.
• Dẫn điện và dẫn nhiệt tốt.
• Nhẹ hơn nước.
`,
        chemical: `
• Vị trí: Nhóm 1, chu kỳ 3.
• Cấu hình electron: [Ne]3s¹.
• Số oxi hóa phổ biến: +1.
• Là kim loại kiềm có tính khử mạnh.
• Phản ứng mạnh với nước:
2Na + 2H₂O → 2NaOH + H₂.
• Dễ phản ứng với oxygen và halogen.
• Phải được bảo quản tránh tiếp xúc với nước và không khí ẩm.
`,
        history: `
• Năm 1807: Humphry Davy cô lập sodium bằng điện phân sodium hydroxide nóng chảy.
• Tên sodium liên quan đến "soda".
• Sodium và các hợp chất của nó đã được con người sử dụng từ lâu.
• Ngày nay sodium có vai trò lớn trong hóa chất, công nghiệp và sinh học.
`
    },

    Mg: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng bạc.
• Khối lượng nguyên tử: ≈ 24,305.
• Khối lượng riêng: ≈ 1,74 g/cm³.
• Nhẹ, tương đối mềm và dễ gia công.
• Nhiệt độ nóng chảy: khoảng 650 °C.
• Khi cháy phát ra ánh sáng trắng rất mạnh.
`,
        chemical: `
• Vị trí: Nhóm 2, chu kỳ 3.
• Cấu hình electron: [Ne]3s².
• Số oxi hóa phổ biến: +2.
• Có tính khử khá mạnh.
• Phản ứng với acid tạo muối magnesium và H₂.
• Khi đun nóng có thể phản ứng với nước và hơi nước.
• Cháy trong oxygen tạo MgO:
2Mg + O₂ → 2MgO.
`,
        history: `
• Năm 1755: Joseph Black nhận ra magnesium là một nguyên tố riêng biệt.
• Năm 1808: Humphry Davy cô lập magnesium.
• Tên Magnesium bắt nguồn từ địa danh Magnesia ở Hy Lạp.
• Magnesium sau đó được sử dụng rộng rãi trong hợp kim nhẹ và nhiều lĩnh vực kỹ thuật.
`
    },

    Al: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng bạc.
• Khối lượng nguyên tử: ≈ 26,982.
• Khối lượng riêng: ≈ 2,70 g/cm³.
• Nhẹ, mềm và dễ dát mỏng.
• Dẫn điện và dẫn nhiệt tốt.
• Bề mặt nhanh chóng tạo lớp oxide bảo vệ.
`,
        chemical: `
• Vị trí: Nhóm 13, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p¹.
• Số oxi hóa phổ biến: +3.
• Có tính khử và tính lưỡng tính.
• Al₂O₃ bảo vệ kim loại khỏi bị ăn mòn sâu.
• Có thể phản ứng với acid và kiềm mạnh.
• Phản ứng với oxygen tạo Al₂O₃.
`,
        history: `
• Năm 1825: Hans Christian Ørsted thu được aluminium ở dạng chưa tinh khiết.
• Friedrich Wöhler tiếp tục nghiên cứu và thu được kim loại tinh khiết hơn.
• Năm 1886: Hall và Héroult phát triển quy trình điện phân sản xuất aluminium quy mô lớn.
• Aluminium từ đó trở thành một trong những kim loại được sử dụng phổ biến nhất.
`
    },

    Si: {
        physical: `
• Trạng thái: Chất rắn, thuộc nhóm á kim.
• Màu xám sẫm, có ánh kim.
• Khối lượng nguyên tử: ≈ 28,085.
• Có cấu trúc tinh thể tương tự kim cương.
• Là chất bán dẫn quan trọng.
• Nhiệt độ nóng chảy: khoảng 1414 °C.
`,
        chemical: `
• Vị trí: Nhóm 14, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p².
• Số oxi hóa phổ biến: +4 và −4.
• Tương đối trơ ở điều kiện thường.
• Phản ứng mạnh với fluorine.
• Có thể phản ứng với oxygen tạo SiO₂.
• Tan trong một số dung dịch kiềm mạnh tạo silicate.
`,
        history: `
• Năm 1824: Jöns Jacob Berzelius cô lập silicon tương đối tinh khiết.
• Silicon được dự đoán trước đó bởi Mendeleev dưới tên "eka-silicon".
• Sau này silicon trở thành vật liệu nền tảng của ngành bán dẫn.
• Ngày nay được sử dụng rộng rãi trong chip, pin mặt trời và vật liệu.
`
    },

    P: {
        physical: `
• Trạng thái: Chất rắn ở điều kiện thường.
• Khối lượng nguyên tử: ≈ 30,974.
• Có nhiều dạng thù hình, quan trọng nhất là phosphorus trắng và phosphorus đỏ.
• Phosphorus trắng mềm, dễ cháy và độc.
• Phosphorus đỏ bền hơn ở điều kiện thường.
• Không tồn tại phổ biến dưới dạng đơn chất trong tự nhiên.
`,
        chemical: `
• Vị trí: Nhóm 15, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p³.
• Có nhiều số oxi hóa, phổ biến −3, +3 và +5.
• Phosphorus trắng hoạt động hóa học mạnh.
• Phản ứng với oxygen tạo oxide phosphorus.
• Có thể phản ứng với halogen và nhiều kim loại.
• Là nguyên tố quan trọng trong các hợp chất phosphate.
`,
        history: `
• Năm 1669: Henning Brand phát hiện phosphorus.
• Ông thu được chất phát sáng trong bóng tối trong quá trình nghiên cứu các chất chứa phosphorus.
• Tên phosphorus bắt nguồn từ tiếng Hy Lạp, liên quan đến ý nghĩa "mang ánh sáng".
• Sau này phosphorus được xác định là nguyên tố thiết yếu đối với sinh vật.
`
    },

    S: {
        physical: `
• Trạng thái: Chất rắn màu vàng.
• Khối lượng nguyên tử: ≈ 32,06.
• Không tan trong nước.
• Tan tốt hơn trong một số dung môi hữu cơ.
• Có nhiều dạng thù hình.
• Nhiệt độ nóng chảy: khoảng 115 °C.
`,
        chemical: `
• Vị trí: Nhóm 16, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p⁴.
• Có nhiều số oxi hóa như −2, +4 và +6.
• Vừa có tính oxi hóa vừa có tính khử.
• Phản ứng với oxygen tạo SO₂:
S + O₂ → SO₂.
• Phản ứng với nhiều kim loại tạo sulfide.
• Có vai trò quan trọng trong sulfuric acid và nhiều hợp chất công nghiệp.
`,
        history: `
• Sulfur được con người biết đến từ thời cổ đại.
• Người Hy Lạp và La Mã đã sử dụng sulfur trong nhiều mục đích khác nhau.
• Sulfur từng được gọi là lưu huỳnh hoặc diêm sinh.
• Việc nghiên cứu sulfur góp phần quan trọng vào sự phát triển của hóa học vô cơ.
`
    },

    Cl: {
        physical: `
• Trạng thái: Khí màu vàng lục.
• Khối lượng nguyên tử: ≈ 35,45.
• Mùi xốc và độc khi hít ở nồng độ cao.
• Nặng hơn không khí.
• Tan trong nước tạo nước chlorine.
• Dễ hóa lỏng hơn nhiều khí thông thường.
`,
        chemical: `
• Vị trí: Nhóm 17, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p⁵.
• Số oxi hóa phổ biến: −1; ngoài ra có thể có số oxi hóa dương trong một số hợp chất.
• Là chất oxi hóa mạnh.
• Phản ứng với hydrogen tạo HCl:
H₂ + Cl₂ → 2HCl.
• Phản ứng với kim loại tạo chloride.
• Có thể phản ứng với dung dịch kiềm tạo các sản phẩm chứa chlorine khác nhau.
`,
        history: `
• Năm 1774: Carl Wilhelm Scheele phát hiện chlorine.
• Ban đầu chlorine được cho là một hợp chất của oxygen.
• Năm 1810: Humphry Davy chứng minh chlorine là một nguyên tố.
• Tên Chlorine liên quan đến màu vàng lục đặc trưng của khí.
`
    },

    Ar: {
        physical: `
• Trạng thái: Khí hiếm, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 39,948.
• Chiếm khoảng 0,93% khí quyển.
• Nặng hơn oxygen và nitrogen.
• Nhiệt độ sôi: khoảng −185,8 °C.
• Khi phóng điện có thể phát ra ánh sáng đặc trưng.
`,
        chemical: `
• Vị trí: Nhóm 18, chu kỳ 3.
• Cấu hình electron: [Ne]3s²3p⁶.
• Lớp electron ngoài cùng bão hòa.
• Rất trơ về mặt hóa học.
• Không cháy và không duy trì sự cháy.
• Được sử dụng làm môi trường khí trơ trong nhiều quá trình kỹ thuật.
`,
        history: `
• Năm 1894: Lord Rayleigh và William Ramsay phát hiện argon.
• Họ nhận thấy nitrogen từ không khí có tính chất khác nitrogen điều chế bằng phương pháp hóa học.
• Tên Argon bắt nguồn từ tiếng Hy Lạp "argos", nghĩa là lười hoặc không hoạt động.
• Argon sau đó được xếp vào nhóm khí hiếm.
`
    },

    K: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng bạc.
• Khối lượng nguyên tử: ≈ 39,098.
• Khối lượng riêng: ≈ 0,86 g/cm³.
• Rất mềm và nhẹ.
• Nhiệt độ nóng chảy: khoảng 63,4 °C.
• Dẫn điện tốt.
• Khi thử ngọn lửa tạo màu tím nhạt đặc trưng.
`,
        chemical: `
• Vị trí: Nhóm 1, chu kỳ 4.
• Cấu hình electron: [Ar]4s¹.
• Số oxi hóa phổ biến: +1.
• Là kim loại kiềm có tính khử rất mạnh.
• Phản ứng dữ dội với nước:
2K + 2H₂O → 2KOH + H₂.
• Dễ phản ứng với oxygen và halogen.
• Hợp chất potassium rất quan trọng đối với sinh vật.
`,
        history: `
• Năm 1807: Humphry Davy cô lập potassium bằng điện phân KOH nóng chảy.
• Tên potassium liên quan đến potash.
• Đây là một trong những nguyên tố đầu tiên được cô lập bằng điện phân.
• Potassium sau này được xác định là chất dinh dưỡng thiết yếu đối với thực vật.
`
    },

    Ca: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc.
• Khối lượng nguyên tử: ≈ 40,078.
• Khối lượng riêng: ≈ 1,55 g/cm³.
• Mềm hơn nhiều kim loại chuyển tiếp.
• Nhiệt độ nóng chảy: khoảng 842 °C.
• Dẫn nhiệt và dẫn điện tốt.
`,
        chemical: `
• Vị trí: Nhóm 2, chu kỳ 4.
• Cấu hình electron: [Ar]4s².
• Số oxi hóa phổ biến: +2.
• Có tính khử mạnh.
• Phản ứng với nước tạo Ca(OH)₂ và H₂.
• Phản ứng với oxygen tạo CaO.
• Tạo nhiều hợp chất quan trọng như CaCO₃, CaO và Ca(OH)₂.
`,
        history: `
• Năm 1808: Humphry Davy cô lập calcium bằng phương pháp điện phân.
• Tên Calcium bắt nguồn từ tiếng Latin "calx", nghĩa là vôi.
• Các hợp chất calcium đã được con người sử dụng từ thời cổ đại.
• Calcium có vai trò đặc biệt quan trọng trong xương, răng và nhiều quá trình sinh học.
`
    },

    Sc: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng bạc.
• Khối lượng nguyên tử: ≈ 44,956.
• Khối lượng riêng: ≈ 2,99 g/cm³.
• Tương đối nhẹ và cứng.
• Nhiệt độ nóng chảy: khoảng 1541 °C.
• Có tính chất của kim loại chuyển tiếp.
`,
        chemical: `
• Vị trí: Nhóm 3, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹4s².
• Số oxi hóa phổ biến: +3.
• Dễ tạo ion Sc³⁺.
• Phản ứng với acid tạo muối Sc(III).
• Bề mặt có thể tạo lớp oxide bảo vệ.
• Các hợp chất Sc(III) thường không màu hoặc có màu rất nhạt.
`,
        history: `
• Năm 1879: Lars Fredrik Nilson phát hiện scandium.
• Nguyên tố được tìm thấy trong các khoáng vật euxenite và gadolinite.
• Mendeleev từng dự đoán một nguyên tố tương tự dưới tên "eka-boron".
• Việc phát hiện scandium giúp củng cố giá trị của bảng tuần hoàn.
`
    },

    Ti: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc.
• Khối lượng nguyên tử: ≈ 47,867.
• Khối lượng riêng: ≈ 4,51 g/cm³.
• Cứng, nhẹ và có độ bền cao.
• Nhiệt độ nóng chảy: khoảng 1668 °C.
• Chống ăn mòn rất tốt.
`,
        chemical: `
• Vị trí: Nhóm 4, chu kỳ 4.
• Cấu hình electron: [Ar]3d²4s².
• Số oxi hóa phổ biến: +4, ngoài ra có +3 và +2.
• Tương đối bền trong nước và không khí.
• Tạo lớp TiO₂ bảo vệ trên bề mặt.
• Có thể phản ứng với halogen và oxygen ở nhiệt độ thích hợp.
• Titanium dioxide được sử dụng rộng rãi làm chất màu trắng.
`,
        history: `
• Năm 1791: William Gregor phát hiện titanium trong một khoáng vật chứa sắt.
• Năm 1795: Martin Heinrich Klaproth xác nhận nguyên tố và đặt tên titanium.
• Tên gọi liên quan đến các Titan trong thần thoại Hy Lạp.
• Titanium hiện được sử dụng nhiều trong hàng không, y tế và hợp kim.
`
    },

    V: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc.
• Khối lượng nguyên tử: ≈ 50,942.
• Khối lượng riêng: ≈ 6,11 g/cm³.
• Cứng, bền và có khả năng chịu nhiệt.
• Nhiệt độ nóng chảy: khoảng 1910 °C.
• Có nhiều trạng thái oxi hóa nên các hợp chất có màu sắc đa dạng.
`,
        chemical: `
• Vị trí: Nhóm 5, chu kỳ 4.
• Cấu hình electron: [Ar]3d³4s².
• Số oxi hóa từ +2 đến +5.
• Có khả năng tạo nhiều oxide khác nhau.
• Các ion vanadium ở trạng thái oxi hóa khác nhau thường có màu khác nhau.
• Tương đối bền trong không khí ở điều kiện thường.
• Được dùng làm nguyên tố hợp kim hóa thép.
`,
        history: `
• Năm 1801: Andrés Manuel del Río phát hiện một nguyên tố mới trong quặng chì ở Mexico.
• Phát hiện ban đầu không được công nhận rộng rãi.
• Năm 1830: Nils Gabriel Sefström tái phát hiện và đặt tên vanadium.
• Tên gọi lấy theo Vanadís, một nữ thần trong thần thoại Bắc Âu.
`
    },

    Cr: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc, sáng bóng.
• Khối lượng nguyên tử: ≈ 51,996.
• Khối lượng riêng: ≈ 7,19 g/cm³.
• Cứng và có khả năng đánh bóng cao.
• Nhiệt độ nóng chảy: khoảng 1907 °C.
• Có khả năng chống ăn mòn tốt nhờ lớp oxide bảo vệ.
`,
        chemical: `
• Vị trí: Nhóm 6, chu kỳ 4.
• Cấu hình electron: [Ar]3d⁵4s¹.
• Số oxi hóa thường gặp: +2, +3 và +6.
• Chromium(III) tương đối bền.
• Chromium(VI) có tính oxi hóa mạnh và nhiều hợp chất độc hại.
• Tạo lớp oxide bảo vệ giúp chống ăn mòn.
• Là thành phần quan trọng của thép không gỉ.
`,
        history: `
• Năm 1797: Louis Nicolas Vauquelin phát hiện chromium.
• Ông nghiên cứu khoáng vật crocoite chứa chì chromate.
• Tên Chromium bắt nguồn từ tiếng Hy Lạp "chroma", nghĩa là màu sắc.
• Tên gọi phản ánh màu sắc đa dạng của nhiều hợp chất chromium.
`
    },

    Mn: {
        physical: `
• Trạng thái: Kim loại rắn màu xám trắng.
• Khối lượng nguyên tử: ≈ 54,938.
• Khối lượng riêng: ≈ 7,21 g/cm³.
• Cứng nhưng khá giòn.
• Nhiệt độ nóng chảy: khoảng 1246 °C.
• Có nhiều dạng cấu trúc tinh thể.
`,
        chemical: `
• Vị trí: Nhóm 7, chu kỳ 4.
• Cấu hình electron: [Ar]3d⁵4s².
• Có nhiều số oxi hóa từ +2 đến +7.
• Permanganate MnO₄⁻ là chất oxi hóa mạnh.
• Manganese phản ứng với acid tạo muối và H₂.
• Tạo nhiều oxide khác nhau.
• Được sử dụng quan trọng trong sản xuất thép.
`,
        history: `
• Năm 1774: Johan Gottlieb Gahn cô lập manganese.
• Ông khử manganese dioxide để thu được kim loại.
• Quặng manganese đã được sử dụng từ thời cổ đại làm chất màu.
• Ngày nay manganese chủ yếu được sử dụng trong luyện kim và sản xuất hợp kim.
`
    },

    Fe: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc.
• Khối lượng nguyên tử: ≈ 55,845.
• Khối lượng riêng: ≈ 7,87 g/cm³.
• Có tính từ mạnh ở nhiệt độ thường.
• Dẫn điện và dẫn nhiệt tương đối tốt.
• Nhiệt độ nóng chảy: khoảng 1538 °C.
`,
        chemical: `
• Vị trí: Nhóm 8, chu kỳ 4.
• Cấu hình electron: [Ar]3d⁶4s².
• Số oxi hóa phổ biến: +2 và +3.
• Có thể phản ứng với acid tạo muối và H₂.
• Trong không khí ẩm, sắt có thể bị ăn mòn tạo gỉ.
• Phản ứng với oxygen tạo nhiều oxide khác nhau.
• Là thành phần chính của thép và nhiều hợp kim.
`,
        history: `
• Sắt được con người sử dụng từ hàng nghìn năm trước Công nguyên.
• Việc sử dụng sắt đánh dấu sự phát triển của "Thời đại đồ sắt".
• Sắt từ lâu đã đóng vai trò quan trọng trong công cụ, vũ khí và xây dựng.
• Ngày nay sắt là một trong những kim loại quan trọng nhất của công nghiệp.
`
    },

    Co: {
        physical: `
• Trạng thái: Kim loại rắn màu xám bạc hơi xanh.
• Khối lượng nguyên tử: ≈ 58,933.
• Khối lượng riêng: ≈ 8,90 g/cm³.
• Có tính từ.
• Cứng và có độ bền cao.
• Nhiệt độ nóng chảy: khoảng 1495 °C.
`,
        chemical: `
• Vị trí: Nhóm 9, chu kỳ 4.
• Cấu hình electron: [Ar]3d⁷4s².
• Số oxi hóa phổ biến: +2 và +3.
• Tương đối bền trong không khí ở nhiệt độ thường.
• Phản ứng với acid tạo muối cobalt.
• Nhiều hợp chất cobalt có màu xanh đặc trưng.
• Một số đồng vị cobalt có tính phóng xạ và được sử dụng trong y học.
`,
        history: `
• Khoáng vật chứa cobalt đã được sử dụng từ thời cổ đại làm chất tạo màu.
• Khoảng năm 1735–1739: George Brandt nghiên cứu và xác định cobalt là một nguyên tố.
• Tên cobalt liên quan đến từ "kobold" trong tiếng Đức.
• Cobalt ngày nay được dùng trong hợp kim, chất màu và công nghệ pin.
`
    },

    Ni: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng bạc.
• Khối lượng nguyên tử: ≈ 58,693.
• Khối lượng riêng: ≈ 8,90 g/cm³.
• Có tính từ.
• Cứng, dẻo và chống ăn mòn tốt.
• Nhiệt độ nóng chảy: khoảng 1455 °C.
`,
        chemical: `
• Vị trí: Nhóm 10, chu kỳ 4.
• Cấu hình electron: [Ar]3d⁸4s².
• Số oxi hóa phổ biến: +2.
• Tương đối bền trong không khí.
• Phản ứng với một số acid tạo muối nickel.
• Có khả năng xúc tác nhiều phản ứng hóa học.
• Được sử dụng trong nhiều hợp kim chống ăn mòn.
`,
        history: `
• Năm 1751: Axel Fredrik Cronstedt phát hiện nickel.
• Ông nghiên cứu khoáng vật niccolite và nhận thấy nó chứa một kim loại mới.
• Tên nickel liên quan đến tên khoáng vật và truyền thuyết về "copper demon".
• Nickel ngày nay được dùng trong thép không gỉ, hợp kim và xúc tác.
`
    },

    Cu: {
        physical: `
• Trạng thái: Kim loại rắn màu đỏ cam.
• Khối lượng nguyên tử: ≈ 63,546.
• Khối lượng riêng: ≈ 8,96 g/cm³.
• Rất dẻo và dễ kéo thành dây.
• Dẫn điện và dẫn nhiệt rất tốt.
• Nhiệt độ nóng chảy: khoảng 1085 °C.
`,
        chemical: `
• Vị trí: Nhóm 11, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s¹.
• Số oxi hóa phổ biến: +1 và +2.
• Ít hoạt động hơn nhiều kim loại đứng trước trong dãy hoạt động hóa học.
• Không phản ứng đáng kể với nước ở điều kiện thường.
• Tan trong một số acid có tính oxi hóa mạnh.
• Tạo nhiều hợp chất có màu xanh lam hoặc xanh lục.
`,
        history: `
• Đồng là một trong những kim loại đầu tiên được con người sử dụng.
• Các vật dụng bằng đồng đã xuất hiện từ hàng nghìn năm trước.
• Đồng đóng vai trò quan trọng trong "Thời đại đồ đồng".
• Ngày nay đồng được sử dụng đặc biệt nhiều trong dây điện, thiết bị điện và hợp kim.
`
    },

    Zn: {
        physical: `
• Trạng thái: Kim loại rắn màu trắng xanh.
• Khối lượng nguyên tử: ≈ 65,38.
• Khối lượng riêng: ≈ 7,14 g/cm³.
• Khá giòn ở nhiệt độ thường.
• Dẻo hơn ở khoảng 100–150 °C.
• Nhiệt độ nóng chảy: khoảng 419,5 °C.
`,
        chemical: `
• Vị trí: Nhóm 12, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s².
• Số oxi hóa phổ biến: +2.
• Có tính khử tương đối mạnh.
• Phản ứng với acid tạo Zn²⁺ và H₂.
• Có tính lưỡng tính, có thể phản ứng với kiềm mạnh.
• Thường được dùng để mạ kẽm bảo vệ sắt khỏi ăn mòn.
`,
        history: `
• Kẽm đã được sử dụng từ thời cổ đại dưới dạng hợp kim đồng thau.
• Năm 1746: Andreas Sigismund Marggraf điều chế kẽm tương đối tinh khiết.
• Kẽm sau đó trở thành kim loại quan trọng trong luyện kim.
• Ngày nay ứng dụng nổi bật là mạ kẽm và sản xuất hợp kim.
`
    },

    Ga: {
        physical: `
• Trạng thái: Kim loại rắn ở nhiệt độ phòng thấp nhưng có thể nóng chảy gần nhiệt độ cơ thể.
• Màu trắng bạc.
• Khối lượng nguyên tử: ≈ 69,723.
• Nhiệt độ nóng chảy: khoảng 29,76 °C.
• Nhiệt độ sôi rất cao, khoảng 2400 °C.
• Có thể giãn nở khi đông đặc.
`,
        chemical: `
• Vị trí: Nhóm 13, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p¹.
• Số oxi hóa phổ biến: +3.
• Có thể phản ứng với acid và kiềm mạnh.
• Tạo oxide và hydroxide của gallium.
• Một số hợp chất gallium được sử dụng trong vật liệu bán dẫn.
• Gallium có tính chất hóa học tương tự aluminium ở một số khía cạnh.
`,
        history: `
• Năm 1875: Paul-Émile Lecoq de Boisbaudran phát hiện gallium bằng phương pháp quang phổ.
• Mendeleev đã dự đoán trước sự tồn tại của nguyên tố tương ứng với "eka-aluminium".
• Tính chất của gallium gần với những dự đoán của Mendeleev.
• Đây là một bằng chứng quan trọng cho tính đúng đắn của bảng tuần hoàn.
`
    },

    Ge: {
        physical: `
• Trạng thái: Chất rắn thuộc nhóm á kim.
• Màu xám trắng và có ánh kim.
• Khối lượng nguyên tử: ≈ 72,630.
• Khối lượng riêng: ≈ 5,32 g/cm³.
• Có tính bán dẫn.
• Nhiệt độ nóng chảy: khoảng 938 °C.
`,
        chemical: `
• Vị trí: Nhóm 14, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p².
• Số oxi hóa phổ biến: +2 và +4.
• Tương đối bền trong không khí ở nhiệt độ thường.
• Có thể tạo GeO₂ và nhiều hợp chất cộng hóa trị.
• Tính chất hóa học nằm giữa silicon và thiếc.
• Có khả năng tạo các hợp chất với halogen.
`,
        history: `
• Năm 1886: Clemens Winkler phát hiện germanium.
• Ông tìm thấy nguyên tố này trong khoáng vật argyrodite.
• Mendeleev từng dự đoán nguyên tố này dưới tên "eka-silicon".
• Việc phát hiện germanium phù hợp khá tốt với dự đoán trước đó.
`
    },

    As: {
        physical: `
• Trạng thái: Chất rắn thuộc nhóm á kim.
• Khối lượng nguyên tử: ≈ 74,922.
• Có nhiều dạng thù hình như xám, vàng và đen.
• Dạng xám có ánh kim và tương đối giòn.
• Một số hợp chất arsenic có độc tính rất cao.
• Không nên nhầm arsenic nguyên tố với các hợp chất arsenic khác nhau.
`,
        chemical: `
• Vị trí: Nhóm 15, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p³.
• Số oxi hóa phổ biến: −3, +3 và +5.
• Có thể thể hiện cả tính oxi hóa và tính khử.
• Tạo nhiều hợp chất với oxygen, sulfur và halogen.
• Một số hợp chất arsenic rất độc đối với sinh vật.
• Tính chất hóa học có nhiều điểm tương đồng với phosphorus.
`,
        history: `
• Arsenic và các hợp chất của nó đã được biết đến từ thời cổ đại.
• Khoảng thế kỷ XIII: Albertus Magnus được ghi nhận là người đã thu được arsenic.
• Các hợp chất arsenic từng được sử dụng trong thuốc, thuốc nhuộm và nhiều lĩnh vực khác.
• Sau này độc tính của arsenic được nghiên cứu và kiểm soát chặt chẽ hơn.
`
    },

    Se: {
        physical: `
• Trạng thái: Chất rắn, thuộc nhóm phi kim/á kim.
• Khối lượng nguyên tử: ≈ 78,971.
• Có nhiều dạng thù hình.
• Selen xám có tính quang dẫn.
• Khả năng dẫn điện thay đổi khi cường độ ánh sáng thay đổi.
• Nhiệt độ nóng chảy: khoảng 221 °C.
`,
        chemical: `
• Vị trí: Nhóm 16, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p⁴.
• Có số oxi hóa phổ biến −2, +4 và +6.
• Có nhiều điểm tương đồng với sulfur.
• Có thể phản ứng với kim loại tạo selenide.
• Cháy trong oxygen tạo selenium dioxide.
• Có thể tham gia nhiều hợp chất hữu cơ và vô cơ.
`,
        history: `
• Năm 1817: Jöns Jacob Berzelius và Johan Gottlieb Gahn phát hiện selenium.
• Nguyên tố được tìm thấy khi nghiên cứu cặn trong quá trình sản xuất sulfuric acid.
• Tên Selenium bắt nguồn từ "Selene", nữ thần Mặt Trăng trong thần thoại Hy Lạp.
• Sau này tính quang dẫn của selenium trở thành đặc điểm quan trọng trong công nghệ.
`
    },

    Br: {
        physical: `
• Trạng thái: Chất lỏng màu đỏ nâu ở nhiệt độ phòng.
• Khối lượng nguyên tử: ≈ 79,904.
• Là một trong hai nguyên tố phi kim tồn tại ở dạng lỏng gần nhiệt độ phòng.
• Dễ bay hơi tạo hơi màu nâu đỏ.
• Có mùi khó chịu và gây kích ứng.
• Nhiệt độ sôi: khoảng 58,8 °C.
`,
        chemical: `
• Vị trí: Nhóm 17, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p⁵.
• Số oxi hóa phổ biến: −1.
• Là chất oxi hóa, hoạt động kém chlorine nhưng mạnh hơn iodine.
• Phản ứng với nhiều kim loại tạo bromide.
• Có thể phản ứng với hydrogen tạo HBr.
• Tham gia nhiều phản ứng thế trong hóa học hữu cơ.
`,
        history: `
• Năm 1825: Antoine Jérôme Balard phát hiện bromine trong nước muối.
• Carl Löwig cũng nghiên cứu và thu được bromine trong cùng khoảng thời gian.
• Tên Bromine bắt nguồn từ tiếng Hy Lạp "bromos", nghĩa là mùi hôi.
• Bromine sau đó được sử dụng trong nhiều ngành công nghiệp hóa chất.
`
    },

    Kr: {
        physical: `
• Trạng thái: Khí hiếm, không màu, không mùi.
• Khối lượng nguyên tử: ≈ 83,798.
• Nhiệt độ sôi: khoảng −153,4 °C.
• Nặng hơn nhiều khí hiếm nhẹ như helium và neon.
• Khi phóng điện có thể phát ra ánh sáng trắng hoặc tím nhạt.
• Có rất ít trong khí quyển.
`,
        chemical: `
• Vị trí: Nhóm 18, chu kỳ 4.
• Cấu hình electron: [Ar]3d¹⁰4s²4p⁶.
• Lớp electron ngoài cùng bão hòa.
• Rất trơ về mặt hóa học.
• Không cháy và không duy trì sự cháy.
• Có thể tạo một số hợp chất hiếm trong điều kiện đặc biệt, ví dụ KrF₂.
• Hoạt động hóa học mạnh hơn một chút so với helium, neon và argon.
`,
        history: `
• Năm 1898: William Ramsay và Morris Travers phát hiện krypton.
• Krypton được tìm thấy trong phần cặn còn lại sau khi hóa lỏng và tách các thành phần của không khí.
• Tên Krypton bắt nguồn từ tiếng Hy Lạp "kryptos", nghĩa là ẩn giấu.
• Ngày nay krypton được nghiên cứu và sử dụng trong một số loại đèn và công nghệ chiếu sáng.
`
    }

};



const additionalElementInfo = {
    "Ba": {
        "physical": "• Trạng thái: Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 137,327.\n• Khối lượng riêng: ≈ 3,62 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 727 °C.\n• Barium và các hợp chất tan của nó cần được xử lý cẩn thận vì có độc tính.",
        "chemical": "• Vị trí: Nhóm 2, chu kỳ 6.\n• Cấu hình electron: [Xe] 6s².\n• Số oxi hóa phổ biến: +2.\n• Phản ứng với nước tạo Ba(OH)₂ và H₂.\n• Ion Ba²⁺ tạo kết tủa BaSO₄ không tan với sulfate.",
        "history": "• Năm 1772: Carl Wilhelm Scheele nghiên cứu khoáng vật barit và nhận ra một \"đất\" mới.\n• Năm 1808: Humphry Davy điều chế barium kim loại bằng điện phân.\n• Nơi phát hiện ban đầu: barit (barium sulfate) được nghiên cứu tại châu Âu; Davy cô lập kim loại ở London, Anh.\n• Tên barium bắt nguồn từ tiếng Hy Lạp \"barys\", nghĩa là nặng."
    },
    "La": {
        "physical": "• Trạng thái: Kim loại rắn màu trắng bạc, tương đối mềm.\n• Khối lượng nguyên tử: ≈ 138,905.\n• Khối lượng riêng: ≈ 6,15 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 920 °C.\n• Dễ bị xỉn màu trong không khí.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Cấu hình electron: [Xe] 5d¹6s².\n• Số oxi hóa phổ biến: +3.\n• Dễ bị oxi hóa trong không khí và phản ứng với nước.\n• Tạo nhiều muối La(III).",
        "history": "• Năm 1838: Carl Gustaf Mosander tách lantan từ ceria.\n• Nơi phát hiện: khoáng cerite ở vùng Bastnäs, Västmanland, Thụy Điển.\n• Tên lanthanum xuất phát từ tiếng Hy Lạp \"lanthanein\", nghĩa là ẩn mình.\n• Lantan mở đầu dãy nguyên tố họ Lantan."
    },
    "Ce": {
        "physical": "• Kim loại rắn màu xám bạc, khá mềm.\n• Khối lượng nguyên tử: ≈ 140,116.\n• Khối lượng riêng: ≈ 6,77 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 798 °C.\n• Có thể bị xỉn màu nhanh trong không khí.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3 và +4.\n• Dễ bị oxi hóa; cerium(IV) có tính oxi hóa.\n• Oxide CeO₂ được dùng trong vật liệu đánh bóng và xúc tác.",
        "history": "• Năm 1803: Jöns Jakob Berzelius và Wilhelm Hisinger ở Thụy Điển, đồng thời Martin Heinrich Klaproth ở Đức, phát hiện cerium.\n• Nơi phát hiện: khoáng cerite tại Bastnäs, Thụy Điển.\n• Tên gọi liên quan đến tiểu hành tinh Ceres được phát hiện năm 1801."
    },
    "Pr": {
        "physical": "• Kim loại rắn màu trắng bạc, tương đối mềm.\n• Khối lượng nguyên tử: ≈ 140,908.\n• Khối lượng riêng: ≈ 6,77 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 931 °C.\n• Có tính thuận từ.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Dễ phản ứng với oxygen và tạo oxide.\n• Tạo nhiều muối Pr(III) có màu đặc trưng.",
        "history": "• Năm 1885: Carl Auer von Welsbach tách praseodymium khỏi hỗn hợp didymium.\n• Nơi phát hiện/tách: Vienna, Áo, trong quá trình xử lý các muối đất hiếm.\n• Tên bắt nguồn từ tiếng Hy Lạp, mang nghĩa liên quan đến \"cặp đôi màu xanh\"."
    },
    "Nd": {
        "physical": "• Kim loại rắn màu trắng bạc, mềm.\n• Khối lượng nguyên tử: ≈ 144,242.\n• Khối lượng riêng: ≈ 7,01 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1024 °C.\n• Có tính từ đáng kể.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Dễ bị oxi hóa ngoài không khí.\n• Hợp chất neodymium(III) thường có màu tím/hồng tùy phối tử.",
        "history": "• Năm 1885: Carl Auer von Welsbach tách neodymium khỏi didymium.\n• Nơi phát hiện/tách: Vienna, Áo.\n• Neodymium từng bị nhầm lẫn với praseodymium vì cả hai cùng nằm trong didymium."
    },
    "Pm": {
        "physical": "• Kim loại phóng xạ, không có đồng vị bền.\n• Khối lượng nguyên tử quy ước không có giá trị chuẩn như nguyên tố bền.\n• Dãy đồng vị đều phóng xạ.\n• Có thể phát ánh sáng do bức xạ kích thích vật liệu phát quang.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Hóa học tương tự các nguyên tố đất hiếm nhẹ khác.\n• Tất cả các dạng tồn tại tự nhiên của promethium đều rất hiếm và phóng xạ.",
        "history": "• Năm 1945: Jacob Marinsky, Lawrence Glendenin và Charles Coryell xác nhận promethium.\n• Nơi phát hiện/tổng hợp: Oak Ridge, Tennessee, Hoa Kỳ, trong sản phẩm phân hạch của uranium.\n• Tên gọi lấy theo Prometheus trong thần thoại Hy Lạp."
    },
    "Sm": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 150,36.\n• Khối lượng riêng: ≈ 7,52 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1072 °C.\n• Có tính thuận từ mạnh.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3; +2 cũng gặp trong một số hợp chất.\n• Dễ bị oxi hóa trong không khí.\n• Tạo oxide và muối đất hiếm.",
        "history": "• Năm 1879: Paul-Émile Lecoq de Boisbaudran phát hiện samarium.\n• Nơi phát hiện: Paris, Pháp, từ khoáng samarskite.\n• Tên nguyên tố bắt nguồn từ tên khoáng vật samarskite."
    },
    "Eu": {
        "physical": "• Kim loại rắn màu trắng bạc, tương đối mềm.\n• Khối lượng nguyên tử: ≈ 151,964.\n• Khối lượng riêng: ≈ 5,24 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 826 °C.\n• Là một trong các kim loại đất hiếm có mật độ thấp.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3 và +2.\n• Dễ bị oxi hóa và phản ứng với nước.\n• Ion Eu²⁺ và Eu³⁺ có tính phát quang hữu ích trong vật liệu.",
        "history": "• Năm 1901: Eugène-Anatole Demarçay cô lập europium tương đối tinh khiết.\n• Nơi phát hiện/tách: Paris, Pháp, từ các hợp chất đất hiếm.\n• Tên gọi theo châu Âu (Europe)."
    },
    "Gd": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 157,25.\n• Khối lượng riêng: ≈ 7,90 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1313 °C.\n• Có tính từ mạnh.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Tạo Gd₂O₃ và nhiều muối Gd(III).\n• Có khả năng hấp thụ neutron tốt, hữu ích trong kỹ thuật hạt nhân.",
        "history": "• Năm 1880: Jean Charles Galissard de Marignac phát hiện gadolinium qua nghiên cứu đất hiếm.\n• Nơi phát hiện: Geneva, Thụy Sĩ.\n• Tên gọi theo nhà hóa học Johan Gadolin."
    },
    "Tb": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 158,925.\n• Khối lượng riêng: ≈ 8,23 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1356 °C.\n• Có tính thuận từ.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3; +4 có thể gặp.\n• Dễ bị oxi hóa và tạo muối Tb(III).\n• Một số hợp chất có tính phát quang.",
        "history": "• Năm 1843: Carl Gustaf Mosander tách các phân đoạn đất hiếm dẫn đến nhận biết terbium.\n• Nơi nghiên cứu: Stockholm, Thụy Điển.\n• Tên gọi liên quan đến Ytterby, Thụy Điển."
    },
    "Dy": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 162,500.\n• Khối lượng riêng: ≈ 8,54 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1412 °C.\n• Có tính thuận từ mạnh.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Tạo các oxide và muối Dy(III).\n• Có khả năng hấp thụ neutron cao.",
        "history": "• Năm 1886: Paul-Émile Lecoq de Boisbaudran xác định dysprosium.\n• Nơi phát hiện/tách: Paris, Pháp, từ các phân đoạn đất hiếm.\n• Tên dysprosium bắt nguồn từ tiếng Hy Lạp \"dysprositos\", nghĩa là khó đạt được."
    },
    "Ho": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 164,930.\n• Khối lượng riêng: ≈ 8,79 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1474 °C.\n• Có tính từ mạnh.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Tạo Ho₂O₃ và các muối Ho(III).\n• Bị oxi hóa chậm trong không khí.",
        "history": "• Năm 1878: Marc Delafontaine và Jacques-Louis Soret nhận ra dấu hiệu quang phổ của holmium; Per Teodor Cleve sau đó phân lập phần đất hiếm liên quan.\n• Nơi nghiên cứu chính: Geneva, Thụy Sĩ và Uppsala, Thụy Điển.\n• Tên holmium theo tên Latin của Stockholm."
    },
    "Er": {
        "physical": "• Kim loại rắn màu trắng bạc.\n• Khối lượng nguyên tử: ≈ 167,259.\n• Khối lượng riêng: ≈ 9,07 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1529 °C.\n• Có tính thuận từ.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Tạo oxide Er₂O₃ và nhiều muối Er(III).\n• Ion Er³⁺ có tính phát quang, dùng trong sợi quang.",
        "history": "• Năm 1843: Carl Gustaf Mosander tách erbium trong quá trình phân đoạn đất yttria.\n• Nơi nghiên cứu: Stockholm, Thụy Điển.\n• Tên gọi liên quan đến làng Ytterby."
    },
    "Tm": {
        "physical": "• Kim loại rắn màu trắng bạc, mềm.\n• Khối lượng nguyên tử: ≈ 168,934.\n• Khối lượng riêng: ≈ 9,32 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1545 °C.\n• Là một trong các nguyên tố đất hiếm hiếm nhất.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Dễ tạo muối và oxide Tm(III).\n• Kim loại có thể phản ứng với acid giải phóng hydrogen.",
        "history": "• Năm 1879: Per Teodor Cleve phát hiện thulium trong các phân đoạn đất hiếm.\n• Nơi phát hiện/tách: Uppsala, Thụy Điển.\n• Tên thulium lấy theo tên cổ của vùng Scandinavia."
    },
    "Yb": {
        "physical": "• Kim loại rắn màu trắng bạc, tương đối mềm.\n• Khối lượng nguyên tử: ≈ 173,045.\n• Khối lượng riêng: ≈ 6,90 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 824 °C.\n• Có thể tồn tại ở trạng thái oxi hóa +2 hoặc +3.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa: +2 và +3.\n• Dễ bị oxi hóa trong không khí.\n• Tạo các muối và oxide của ytterbium.",
        "history": "• Năm 1878: Jean Charles Galissard de Marignac phát hiện ytterbium trong đất erbia.\n• Nơi phát hiện: Geneva, Thụy Sĩ.\n• Tên gọi liên quan đến Ytterby, Thụy Điển."
    },
    "Lu": {
        "physical": "• Kim loại rắn màu trắng bạc, khá cứng.\n• Khối lượng nguyên tử: ≈ 174,967.\n• Khối lượng riêng: ≈ 9,84 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1663 °C.\n• Là nguyên tố cuối dãy Lantan.",
        "chemical": "• Vị trí: Họ Lantan, chu kỳ 6.\n• Số oxi hóa phổ biến: +3.\n• Tạo oxide Lu₂O₃ và các muối Lu(III).\n• Tương đối bền hơn một số lanthanide nhẹ trong không khí.",
        "history": "• Năm 1907: Georges Urbain phân lập lutetium tương đối tinh khiết.\n• Nơi phát hiện/tách: Paris, Pháp, từ các phân đoạn ytterbia.\n• Tên gọi theo Lutetia, tên Latin của Paris."
    },
    "Hf": {
        "physical": "• Kim loại rắn màu xám bạc, nặng và chịu nhiệt.\n• Khối lượng nguyên tử: ≈ 178,49.\n• Khối lượng riêng: ≈ 13,3 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 2233 °C.\n• Có khả năng chống ăn mòn tốt.",
        "chemical": "• Vị trí: Nhóm 4, chu kỳ 6.\n• Cấu hình electron: [Xe] 4f¹⁴5d²6s².\n• Số oxi hóa phổ biến: +4.\n• HfO₂ rất bền và có tính chịu nhiệt cao.\n• Hafnium hấp thụ neutron tốt.",
        "history": "• Năm 1923: Dirk Coster và George de Hevesy xác nhận hafnium.\n• Nơi phát hiện: Copenhagen, Đan Mạch, trong zirconium từ khoáng zircon.\n• Tên hafnium theo tên Latin của Copenhagen."
    },
    "Ra": {
        "physical": "• Kim loại phóng xạ, màu trắng bạc nhưng nhanh chóng xỉn màu.\n• Đồng vị đều phóng xạ; Ra-226 là đồng vị được biết đến nhiều.\n• Khối lượng riêng khoảng 5,5 g/cm³.\n• Phát bức xạ mạnh.",
        "chemical": "• Vị trí: Nhóm 2, chu kỳ 7.\n• Số oxi hóa phổ biến: +2.\n• Tạo Ra²⁺ và các hợp chất tương tự barium.\n• Tính phóng xạ khiến radium cần được quản lý đặc biệt.",
        "history": "• Năm 1898: Marie Curie và Pierre Curie phát hiện radium khi nghiên cứu pitchblende.\n• Nơi phát hiện: Paris, Pháp, tại các phòng thí nghiệm và xưởng xử lý quặng uranium.\n• Tên radium liên quan đến tiếng Latin \"radius\", nghĩa là tia."
    },
    "Ac": {
        "physical": "• Kim loại phóng xạ màu bạc.\n• Không có đồng vị bền.\n• Ac-227 là đồng vị quan trọng trong nghiên cứu phóng xạ.\n• Có tính phát xạ mạnh.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3.\n• Hóa học tương tự một số actinide nhẹ.\n• Dễ tạo oxide và muối Ac(III).",
        "history": "• Năm 1899: André-Louis Debierne phát hiện actinium trong quặng pitchblende.\n• Nơi phát hiện: Paris, Pháp.\n• Tên actinium bắt nguồn từ tiếng Hy Lạp \"aktis\", nghĩa là tia."
    },
    "Th": {
        "physical": "• Kim loại phóng xạ màu xám bạc.\n• Khối lượng nguyên tử chuẩn: ≈ 232,038.\n• Khối lượng riêng: ≈ 11,7 g/cm³.\n• Th-232 có chu kỳ bán rã rất dài.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +4.\n• Dễ tạo ThO₂ bền và các hợp chất thorium(IV).\n• Có thể tạo nhiều hợp chất phối trí.",
        "history": "• Năm 1828: Morten Thrane Esmark gửi khoáng vật mới từ đảo Løvøya cho Jöns Jakob Berzelius.\n• Berzelius xác định thorium từ mẫu khoáng vật ở Na Uy.\n• Tên thorium theo thần Thor trong thần thoại Bắc Âu."
    },
    "Pa": {
        "physical": "• Kim loại phóng xạ màu bạc.\n• Không có đồng vị bền; Pa-231 là đồng vị tự nhiên quan trọng.\n• Khối lượng riêng khoảng 15,4 g/cm³.\n• Rất hiếm trong tự nhiên.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +5 và +4.\n• Có hóa học trung gian giữa thorium và uranium.\n• Hợp chất Pa(V) dễ tạo dạng oxo.",
        "history": "• Năm 1913: Kasimir Fajans và Oswald Helmuth Göhring phát hiện đồng vị phóng xạ ngắn của nguyên tố 91.\n• Năm 1917: Lise Meitner và Otto Hahn xác định protactinium rõ hơn.\n• Nơi nghiên cứu: Đức, đặc biệt tại Berlin."
    },
    "U": {
        "physical": "• Kim loại nặng màu xám bạc, phóng xạ.\n• Khối lượng nguyên tử: ≈ 238,029.\n• Khối lượng riêng: ≈ 19,1 g/cm³.\n• Nhiệt độ nóng chảy: ≈ 1135 °C.\n• Có nhiều đồng vị phóng xạ, trong đó U-238 phổ biến nhất tự nhiên.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa thường gặp: +3, +4, +5, +6.\n• Tạo nhiều oxide như UO₂ và U₃O₈.\n• Hợp chất uranyl chứa ion UO₂²⁺ rất đặc trưng.",
        "history": "• Năm 1789: Martin Heinrich Klaproth xác định uranium trong khoáng pitchblende.\n• Nơi phát hiện: Berlin, Phổ (nay thuộc Đức).\n• Tên gọi theo hành tinh Uranus."
    },
    "Np": {
        "physical": "• Kim loại phóng xạ, màu bạc.\n• Không có đồng vị bền.\n• Neptunium có nhiều đồng vị nhân tạo.\n• Np-237 là đồng vị tương đối bền và quan trọng trong nghiên cứu hạt nhân.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa có thể từ +3 đến +7.\n• Tạo nhiều oxide và ion phức.\n• Hóa học đa dạng do có nhiều trạng thái oxi hóa.",
        "history": "• Năm 1940: Edwin McMillan và Philip Abelson tạo ra neptunium bằng cách chiếu neutron vào uranium tại Berkeley.\n• Nơi phát hiện/tổng hợp: University of California, Berkeley, Hoa Kỳ.\n• Tên gọi theo hành tinh Neptune."
    },
    "Pu": {
        "physical": "• Kim loại phóng xạ màu bạc nhưng nhanh xỉn màu.\n• Có nhiều dạng thù hình và nhiều đồng vị.\n• Pu-239 là đồng vị phân hạch quan trọng.\n• Phát nhiệt do phân rã phóng xạ.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa có thể từ +3 đến +7.\n• Có nhiều trạng thái oxi hóa trong dung dịch.\n• Tạo oxide và hợp chất halide đa dạng.",
        "history": "• Năm 1940: Glenn T. Seaborg, Edwin McMillan, Joseph Kennedy và Arthur Wahl tổng hợp plutonium.\n• Nơi tổng hợp: Berkeley, California, Hoa Kỳ.\n• Tên gọi theo hành tinh Pluto."
    },
    "Am": {
        "physical": "• Kim loại phóng xạ màu bạc.\n• Không có đồng vị bền.\n• Am-241 là đồng vị nổi tiếng với ứng dụng trong thiết bị phát hiện khói.\n• Phát bức xạ alpha mạnh.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3; các trạng thái khác cũng tồn tại.\n• Tạo oxide Am₂O₃ và nhiều phức chất.\n• Có tính chất hóa học tương tự các actinide lân cận.",
        "history": "• Năm 1944: Glenn Seaborg và cộng sự tổng hợp americium.\n• Nơi tổng hợp: Metallurgical Laboratory tại Chicago, Hoa Kỳ.\n• Tên americium đặt theo châu Mỹ, tương tự europium đặt theo châu Âu."
    },
    "Cm": {
        "physical": "• Kim loại phóng xạ màu bạc.\n• Không có đồng vị bền.\n• Cm-244 là đồng vị được nghiên cứu nhiều.\n• Phát nhiệt đáng kể do phóng xạ.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3.\n• Tạo oxide và muối Cm(III).\n• Có hóa học tương tự gadolinium ở một số khía cạnh.",
        "history": "• Năm 1944: Glenn Seaborg, Ralph James và Albert Ghiorso tạo ra curium.\n• Nơi tổng hợp: Berkeley, California, Hoa Kỳ.\n• Tên curium để vinh danh Marie và Pierre Curie."
    },
    "Bk": {
        "physical": "• Kim loại phóng xạ, không có đồng vị bền.\n• Berkelium chỉ được tạo với lượng rất nhỏ.\n• Bk-249 là đồng vị quan trọng trong nghiên cứu.\n• Tính chất vật lý được nghiên cứu chủ yếu qua mẫu cực nhỏ.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3 và +4.\n• Tạo oxide và các hợp chất halide.\n• Hóa học chịu ảnh hưởng của cấu hình actinide.",
        "history": "• Năm 1949: Glenn Seaborg và cộng sự phát hiện berkelium.\n• Nơi tổng hợp: University of California, Berkeley, Hoa Kỳ.\n• Tên gọi theo thành phố Berkeley."
    },
    "Cf": {
        "physical": "• Kim loại phóng xạ, không có đồng vị bền.\n• Cf-252 là nguồn neutron mạnh do phân hạch tự phát.\n• Chỉ tạo được lượng rất nhỏ.\n• Khó nghiên cứu vì tính phóng xạ cao.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3.\n• Tạo các hợp chất Cf(III) tương đối ổn định.\n• Có tính chất hóa học tương tự các actinide nặng lân cận.",
        "history": "• Năm 1950: nhóm của Glenn Seaborg tổng hợp californium.\n• Nơi tổng hợp: Berkeley, California, Hoa Kỳ.\n• Tên gọi theo bang California và University of California."
    },
    "Es": {
        "physical": "• Nguyên tố tổng hợp, phóng xạ, không có đồng vị bền.\n• Es-253 là một đồng vị được nghiên cứu.\n• Chỉ tạo được lượng rất nhỏ.\n• Tính chất vật lý phần lớn được suy ra từ các thí nghiệm hạt nhân.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3.\n• Hóa học tương tự các actinide nặng khác.\n• Các hợp chất Es(III) là dạng quan trọng trong nghiên cứu.",
        "history": "• Năm 1952: einsteinium được phát hiện trong mảnh vụn của vụ thử bom nhiệt hạch Ivy Mike.\n• Nơi phát hiện: Enewetak Atoll, quần đảo Marshall, Thái Bình Dương.\n• Tên gọi để vinh danh Albert Einstein."
    },
    "Fm": {
        "physical": "• Nguyên tố tổng hợp, phóng xạ, không có đồng vị bền.\n• Fm-257 là đồng vị tương đối bền nhất.\n• Chỉ tồn tại với lượng cực nhỏ.\n• Tính chất vật lý trực tiếp rất khó đo.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3.\n• Có hóa học của actinide nặng.\n• Nhiều đặc điểm được nghiên cứu qua hóa học dung dịch ở quy mô vi lượng.",
        "history": "• Năm 1952: fermium được phát hiện cùng einsteinium trong mảnh vụn Ivy Mike.\n• Nơi phát hiện: Enewetak Atoll, quần đảo Marshall.\n• Tên gọi để vinh danh Enrico Fermi."
    },
    "Md": {
        "physical": "• Nguyên tố tổng hợp, phóng xạ, không có đồng vị bền.\n• Md-258 là một đồng vị tương đối bền.\n• Chỉ tạo được lượng rất nhỏ.\n• Không có mẫu vĩ mô để quan sát trực tiếp.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3; +2 cũng có thể tồn tại.\n• Tạo ion và phức chất trong dung dịch.\n• Hóa học của Md được nghiên cứu ở quy mô nguyên tử.",
        "history": "• Năm 1955: nhóm của Albert Ghiorso tổng hợp mendelevium.\n• Nơi tổng hợp: Lawrence Berkeley Laboratory, California, Hoa Kỳ.\n• Tên gọi để vinh danh Dmitri Mendeleev."
    },
    "No": {
        "physical": "• Nguyên tố tổng hợp, phóng xạ, không có đồng vị bền.\n• No-259 là một trong các đồng vị được nghiên cứu.\n• Chỉ tạo được số nguyên tử rất nhỏ.\n• Tính chất vật lý vĩ mô chưa thể quan sát trực tiếp.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa thường gặp: +2 và +3.\n• No²⁺ tương đối bền trong một số môi trường dung dịch.\n• Hóa học được nghiên cứu bằng kỹ thuật tách nguyên tử.",
        "history": "• Năm 1958–1966: nobelium được báo cáo và xác nhận qua nhiều thí nghiệm độc lập.\n• Nơi tổng hợp/xác nhận quan trọng: Dubna, Liên Xô, và Berkeley, Hoa Kỳ.\n• Tên gọi để vinh danh Alfred Nobel."
    },
    "Lr": {
        "physical": "• Nguyên tố tổng hợp, phóng xạ, không có đồng vị bền.\n• Lr-266 là một đồng vị được nghiên cứu.\n• Chỉ tạo được lượng cực nhỏ.\n• Phần lớn tính chất được suy ra từ thí nghiệm hạt nhân và hóa học nguyên tử.",
        "chemical": "• Vị trí: Họ Actini, chu kỳ 7.\n• Số oxi hóa phổ biến: +3; +1 có thể xuất hiện ở trạng thái nguyên tử/ion đặc biệt.\n• Thuộc nhóm actinide nặng.\n• Hóa học được nghiên cứu ở quy mô vài nguyên tử.",
        "history": "• Năm 1961: nhóm của Albert Ghiorso tổng hợp lawrencium.\n• Nơi tổng hợp: Berkeley, California, Hoa Kỳ.\n• Tên gọi để vinh danh Ernest Lawrence."
    },
    "Rf": {
        "physical": "• Nguyên tố tổng hợp siêu nặng, phóng xạ.\n• Không có đồng vị bền.\n• Chỉ tạo được vài nguyên tử trong mỗi thí nghiệm.\n• Tính chất vĩ mô chưa thể đo trực tiếp.",
        "chemical": "• Vị trí: Nhóm 4, chu kỳ 7.\n• Dự đoán số oxi hóa phổ biến: +4.\n• Thuộc nhóm kim loại chuyển tiếp siêu nặng.\n• Hóa học được nghiên cứu bằng các thí nghiệm tách nguyên tử.",
        "history": "• Năm 1964: nhóm tại Dubna, Liên Xô, công bố tổng hợp rutherfordium; Berkeley cũng có các kết quả liên quan.\n• Nơi tổng hợp: Dubna, Liên Xô (nay là Nga), sau đó được xác nhận qua nhiều thí nghiệm.\n• Tên gọi để vinh danh Ernest Rutherford."
    }
};


const discoveryPlaces = {
    "H": "Phòng thí nghiệm của Henry Cavendish, London, Anh (khí dễ cháy từ acid và kim loại).",
    "He": "Quang phổ Mặt Trời (phát hiện đầu tiên); trên Trái Đất được cô lập từ khoáng cleveite tại London, Anh.",
    "Li": "Khoáng petalite ở đảo Utö, Thụy Điển.",
    "Be": "Khoáng beryl và ngọc lục bảo được nghiên cứu tại Pháp; Vauquelin xác định nguyên tố từ các mẫu khoáng này.",
    "B": "Các khoáng vật borat như borax; việc cô lập nguyên tố được thực hiện ở Pháp và Anh.",
    "C": "Được con người biết đến từ thời cổ đại; than và kim cương là các nguồn tự nhiên tiêu biểu, không có một địa điểm phát hiện duy nhất.",
    "N": "Phòng thí nghiệm tại Edinburgh, Scotland, nơi Daniel Rutherford nghiên cứu phần khí còn lại của không khí.",
    "O": "Phòng thí nghiệm của Carl Wilhelm Scheele ở Thụy Điển; Joseph Priestley cũng thu được oxygen tại Wiltshire, Anh.",
    "F": "Phòng thí nghiệm của Henri Moissan tại Paris, Pháp, nơi fluorine được cô lập.",
    "Ne": "University College London, Anh, từ không khí hóa lỏng.",
    "Na": "Royal Institution, London, Anh, nơi Humphry Davy cô lập sodium bằng điện phân.",
    "Mg": "Anh; Humphry Davy cô lập magnesium kim loại tại London sau các nghiên cứu trước đó về magnesia.",
    "Al": "Copenhagen, Đan Mạch, nơi Hans Christian Ørsted thu được dạng nhôm chưa tinh khiết.",
    "Si": "Stockholm, Thụy Điển, nơi Jöns Jakob Berzelius điều chế silicon vô định hình.",
    "P": "Hamburg, Đức, từ nước tiểu, nơi Hennig Brand tiến hành thí nghiệm và cô lập phosphorus.",
    "S": "Được biết từ thời cổ đại; sulfur tự nhiên xuất hiện ở nhiều vùng núi lửa và không có một địa điểm phát hiện duy nhất.",
    "Cl": "Uppsala, Thụy Điển, nơi Carl Wilhelm Scheele thu được khí chlorine từ khoáng pyrolusite.",
    "Ar": "London, Anh, nơi Lord Rayleigh và William Ramsay xác định khí argon trong không khí.",
    "K": "Royal Institution, London, Anh, nơi Humphry Davy cô lập potassium bằng điện phân.",
    "Ca": "Royal Institution, London, Anh, nơi Humphry Davy cô lập calcium bằng điện phân.",
    "Sc": "Uppsala, Thụy Điển, nơi Lars Fredrik Nilson phát hiện scandium trong khoáng vật đất hiếm.",
    "Ti": "Các khoáng ilmenite/rutile; Martin Heinrich Klaproth nhận ra nguyên tố trong mẫu khoáng ở Đức.",
    "V": "Mexico, nơi Andrés Manuel del Río phát hiện vanadium trong quặng chì ở vùng Zimapán.",
    "Cr": "Paris, Pháp, từ crocoite ở Siberia, nơi Louis Nicolas Vauquelin nghiên cứu mẫu khoáng.",
    "Mn": "Các khoáng mangan ở châu Âu; Johan Gottlieb Gahn cô lập manganese tại Falun, Thụy Điển.",
    "Fe": "Được con người sử dụng từ thời tiền sử; sắt tự nhiên và quặng sắt xuất hiện ở nhiều nơi, không có một địa điểm phát hiện duy nhất.",
    "Co": "Khoáng vật ở vùng Saxony, Đức, nơi Georg Brandt nghiên cứu và nhận ra cobalt.",
    "Ni": "Quặng kupfernickel ở vùng Saxony, Đức, nơi Axel Fredrik Cronstedt nhận ra nickel.",
    "Cu": "Được sử dụng từ thời tiền sử; các mỏ đồng tự nhiên ở nhiều vùng, không có một địa điểm phát hiện duy nhất.",
    "Zn": "Được luyện và sử dụng từ thời cổ đại; bằng chứng luyện kẽm cổ được tìm thấy ở nhiều khu vực châu Á, nên không có một địa điểm phát hiện duy nhất.",
    "Ga": "Paris, Pháp, nơi Paul-Émile Lecoq de Boisbaudran phát hiện gallium trong quặng sphalerite.",
    "Ge": "Freiberg, Đức, nơi Clemens Winkler phát hiện germanium trong khoáng argyrodite.",
    "Ba": "Khoáng barit được nghiên cứu ở châu Âu; Humphry Davy cô lập barium kim loại tại London, Anh.",
    "La": "Bastnäs, Västmanland, Thụy Điển, trong khoáng cerite.",
    "Ce": "Bastnäs, Thụy Điển, trong khoáng cerite.",
    "Pr": "Vienna, Áo, nơi Carl Auer von Welsbach tách praseodymium từ didymium.",
    "Nd": "Vienna, Áo, nơi Carl Auer von Welsbach tách neodymium từ didymium.",
    "Pm": "Oak Ridge, Tennessee, Hoa Kỳ, từ sản phẩm phân hạch uranium.",
    "Sm": "Paris, Pháp, từ khoáng samarskite.",
    "Eu": "Paris, Pháp, trong các phân đoạn đất hiếm được Eugène Demarçay nghiên cứu.",
    "Gd": "Geneva, Thụy Sĩ, trong nghiên cứu các khoáng đất hiếm.",
    "Tb": "Stockholm, Thụy Điển, trong các phân đoạn đất hiếm liên quan đến khoáng yttria.",
    "Dy": "Paris, Pháp, từ các phân đoạn đất hiếm.",
    "Ho": "Geneva, Thụy Sĩ và Uppsala, Thụy Điển, qua nghiên cứu các phân đoạn đất hiếm.",
    "Er": "Stockholm, Thụy Điển, từ đất yttria.",
    "Tm": "Uppsala, Thụy Điển, từ các phân đoạn đất hiếm.",
    "Yb": "Geneva, Thụy Sĩ, từ đất erbia.",
    "Lu": "Paris, Pháp, từ các phân đoạn ytterbia.",
    "Hf": "Copenhagen, Đan Mạch, trong zirconium từ khoáng zircon.",
    "Ra": "Paris, Pháp, từ quặng pitchblende.",
    "Ac": "Paris, Pháp, từ quặng pitchblende.",
    "Th": "Løvøya, Na Uy, từ khoáng vật thorite.",
    "Pa": "Berlin, Đức, từ các sản phẩm phóng xạ của uranium.",
    "U": "Berlin, Đức, từ khoáng pitchblende.",
    "Np": "Berkeley, California, Hoa Kỳ.",
    "Pu": "Berkeley, California, Hoa Kỳ.",
    "Am": "Chicago, Illinois, Hoa Kỳ.",
    "Cm": "Berkeley, California, Hoa Kỳ.",
    "Bk": "Berkeley, California, Hoa Kỳ.",
    "Cf": "Berkeley, California, Hoa Kỳ.",
    "Es": "Enewetak Atoll, quần đảo Marshall, trong sản phẩm của vụ thử nhiệt hạch Ivy Mike.",
    "Fm": "Enewetak Atoll, quần đảo Marshall, trong sản phẩm của vụ thử nhiệt hạch Ivy Mike.",
    "Md": "Berkeley, California, Hoa Kỳ.",
    "No": "Dubna, Liên Xô (nay là Nga), với các thí nghiệm xác nhận sau đó tại Berkeley, Hoa Kỳ.",
    "Lr": "Berkeley, California, Hoa Kỳ.",
    "Rf": "Dubna, Liên Xô (nay là Nga), sau đó được nghiên cứu/xác nhận tại Berkeley.",
    "Rb": "Heidelberg, Đức, trong các khoáng vật lepidolite được Robert Bunsen nghiên cứu.",
    "Sr": "Strontian, Scotland, trong khoáng vật strontianite.",
    "Y": "Ytterby, Thụy Điển, trong khoáng vật đất hiếm.",
    "Zr": "Berlin, Đức, từ zircon; Martin Heinrich Klaproth xác định zirconium.",
    "Nb": "London, Anh, từ khoáng columbite; Charles Hatchett phát hiện columbium/niobium.",
    "Mo": "Uppsala, Thụy Điển, từ molybdenite; Carl Wilhelm Scheele nhận ra nguyên tố.",
    "Tc": "Palermo, Italy, nơi Emilio Segrè và Carlo Perrier xác nhận nguyên tố từ molybdenum đã chiếu xạ.",
    "Ru": "Kazan, Nga, nơi Karl Ernst Claus cô lập ruthenium từ khoáng platinum.",
    "Rh": "London, Anh, nơi William Hyde Wollaston phát hiện rhodium trong quặng platinum.",
    "Pd": "London, Anh, nơi William Hyde Wollaston phát hiện palladium từ quặng platinum.",
    "Ag": "Được biết từ thời cổ đại; bạc tự nhiên và quặng bạc xuất hiện ở nhiều nền văn minh.",
    "Cd": "Göttingen, Đức, nơi Friedrich Stromeyer phát hiện cadmium trong hợp chất kẽm.",
    "In": "Freiberg, Đức, nơi Ferdinand Reich và Hieronymus Theodor Richter phát hiện indium.",
    "Sn": "Được biết từ thời tiền sử; thiếc và hợp kim đồng-thiếc xuất hiện ở nhiều nền văn minh cổ.",
    "Sb": "Được biết từ thời cổ đại; khoáng stibnite được sử dụng từ lâu ở nhiều khu vực.",
    "Te": "Transylvania, vùng nay thuộc Romania, nơi Franz-Joseph Müller von Reichenstein phát hiện tellurium.",
    "I": "Paris, Pháp, nơi Bernard Courtois phát hiện iodine từ tro rong biển.",
    "Xe": "London, Anh, nơi William Ramsay và Morris Travers phát hiện xenon từ không khí hóa lỏng.",
    "Cs": "Heidelberg, Đức, nơi Robert Bunsen và Gustav Kirchhoff phát hiện cesium qua quang phổ.",
    "Ta": "Uppsala, Thụy Điển, nơi Anders Gustaf Ekeberg phát hiện tantalum trong khoáng tantalite.",
    "W": "Bergara, Tây Ban Nha, nơi anh em Elhuyar cô lập tungsten từ wolframite.",
    "Re": "Berlin, Đức, nơi Walter Noddack, Ida Tacke và Otto Berg phát hiện rhenium.",
    "Os": "London, Anh, nơi Smithson Tennant phát hiện osmium trong cặn quặng platinum.",
    "Ir": "London, Anh, nơi Smithson Tennant phát hiện iridium trong cặn quặng platinum.",
    "Pt": "Nam Mỹ, đặc biệt các mỏ platinum ở Colombia; người châu Âu biết đến platinum từ các mẫu quặng ở khu vực này.",
    "Au": "Được biết từ thời tiền sử; vàng tự nhiên xuất hiện ở nhiều vùng trên thế giới.",
    "Hg": "Được biết từ thời cổ đại; cinnabar và thủy ngân được sử dụng ở nhiều nền văn minh.",
    "Tl": "London, Anh, nơi William Crookes phát hiện thallium qua quang phổ.",
    "Pb": "Được biết từ thời tiền sử; quặng galena được khai thác ở nhiều khu vực cổ đại.",
    "Bi": "Được biết từ thời cổ đại/trung đại; các quặng bismuth xuất hiện ở châu Âu.",
    "Po": "Paris, Pháp, từ pitchblende, nơi Marie và Pierre Curie phát hiện polonium.",
    "At": "Berkeley, California, Hoa Kỳ, nơi nguyên tố được tổng hợp năm 1940.",
    "Rn": "Halle, Đức, nơi Friedrich Ernst Dorn nghiên cứu khí phóng xạ phát ra từ radium.",
    "Fr": "Paris, Pháp, tại Institut du Radium, nơi Marguerite Perey phát hiện francium.",
    "Db": "Dubna, Liên Xô và Berkeley, Hoa Kỳ; nguyên tố được tổng hợp trong các thí nghiệm hạt nhân độc lập.",
    "Sg": "Berkeley, California, Hoa Kỳ, tại Lawrence Berkeley Laboratory.",
    "Bh": "Darmstadt, Đức, tại GSI, trong các thí nghiệm ion nặng.",
    "Hs": "Darmstadt, Đức, tại GSI.",
    "Mt": "Darmstadt, Đức, tại GSI.",
    "Ds": "Darmstadt, Đức, tại GSI.",
    "Rg": "Darmstadt, Đức, tại GSI.",
    "Cn": "Darmstadt, Đức, tại GSI.",
    "Nh": "Wako, Saitama, Nhật Bản, tại RIKEN.",
    "Fl": "Dubna, Nga, tại Joint Institute for Nuclear Research.",
    "Mc": "Dubna, Nga, tại Joint Institute for Nuclear Research.",
    "Lv": "Dubna, Nga, tại Joint Institute for Nuclear Research, phối hợp với Lawrence Livermore.",
    "Ts": "Dubna, Nga, tại Joint Institute for Nuclear Research, phối hợp với Oak Ridge.",
    "Og": "Dubna, Nga, tại Joint Institute for Nuclear Research, phối hợp với Lawrence Livermore.",
    "As": "Miền Trung Âu; Albertus Magnus mô tả arsenic vào thế kỷ XIII từ các khoáng arsenide.",
    "Se": "Gripsholm, Thụy Điển, nơi Jöns Jakob Berzelius và Johan Gottlieb Gahn phát hiện selenium trong cặn từ nhà máy acid sulfuric.",
    "Br": "Montpellier, Pháp, nơi Antoine Jérôme Balard phát hiện bromine trong nước muối.",
    "Kr": "London, Anh, nơi William Ramsay và Morris Travers phát hiện krypton từ không khí hóa lỏng."
};


const isotopeInfo = {
    "H": "• Khái niệm: các nguyên tử cùng là hydrogen nhưng khác số neutron.\n• ¹H (protium): 1 proton, 0 neutron, phổ biến nhất.\n• ²H (deuterium, D): 1 proton, 1 neutron.\n• ³H (tritium, T): 1 proton, 2 neutron, phóng xạ.",
    "He": "• ³He và ⁴He là hai đồng vị quan trọng; ⁴He rất phổ biến trong tự nhiên.\n• ⁴He: 2 proton, 2 neutron.\n• ³He: 2 proton, 1 neutron.",
    "C": "• ¹²C và ¹³C là đồng vị bền; ¹⁴C phóng xạ.\n• ¹²C: 6 proton, 6 neutron.\n• ¹³C: 6 proton, 7 neutron.\n• ¹⁴C: 6 proton, 8 neutron, dùng trong định tuổi phóng xạ.",
    "N": "• ¹⁴N và ¹⁵N là hai đồng vị bền phổ biến.\n• ¹⁴N: 7 proton, 7 neutron.\n• ¹⁵N: 7 proton, 8 neutron.",
    "O": "• ¹⁶O, ¹⁷O và ¹⁸O đều tồn tại tự nhiên.\n• ¹⁶O là đồng vị phổ biến nhất.\n• Tỷ lệ các đồng vị oxygen được dùng trong nghiên cứu địa chất và khí hậu.",
    "Cl": "• ³⁵Cl và ³⁷Cl là hai đồng vị bền chủ yếu.\n• ³⁵Cl chiếm khoảng 3/4 chlorine tự nhiên, ³⁷Cl khoảng 1/4.",
    "Fe": "• Các đồng vị bền quan trọng: ⁵⁴Fe, ⁵⁶Fe, ⁵⁷Fe, ⁵⁸Fe.\n• ⁵⁶Fe là đồng vị tự nhiên phổ biến nhất.\n• ⁵⁷Fe được dùng trong một số nghiên cứu phổ Mössbauer.",
    "Cu": "• ⁶³Cu và ⁶⁵Cu là hai đồng vị bền tự nhiên chính.\n• Cả hai có cùng 29 proton nhưng khác số neutron.",
    "Br": "• ⁷⁹Br và ⁸¹Br là hai đồng vị bền chủ yếu.\n• Tỷ lệ gần 1:1 giúp bromine có khối lượng nguyên tử trung bình đặc trưng.",
    "Xe": "• Xenon có nhiều đồng vị bền và phóng xạ.\n• ¹²⁹Xe được dùng trong nghiên cứu cộng hưởng từ và vật lý hạt nhân.\n• ¹³⁶Xe là đồng vị quan trọng trong các thí nghiệm vật lý hạt nhân.",
    "Ba": "• Barium tự nhiên có nhiều đồng vị, trong đó ¹³⁸Ba phổ biến nhất.\n• Một số đồng vị như ¹³³Ba được dùng làm nguồn chuẩn trong nghiên cứu.",
    "U": "• ²³⁸U: phổ biến nhất trong tự nhiên, chu kỳ bán rã rất dài.\n• ²³⁵U: có khả năng phân hạch bằng neutron chậm.\n• ²³⁴U: tồn tại với lượng nhỏ trong uranium tự nhiên.",
    "Th": "• ²³²Th là đồng vị tự nhiên quan trọng và gần như toàn bộ thorium tự nhiên.\n• Thorium còn có các đồng vị phóng xạ ngắn sống hơn trong chuỗi phân rã.",
    "Ra": "• ²²⁶Ra là đồng vị nổi tiếng, nằm trong chuỗi phân rã của ²³⁸U.\n• Radium không có đồng vị bền.",
    "Ac": "• ²²⁷Ac là đồng vị tự nhiên quan trọng của actinium.\n• Actinium không có đồng vị bền.",
    "Np": "• ²³⁷Np là đồng vị quan trọng, có chu kỳ bán rã dài.\n• Neptunium không có đồng vị bền.",
    "Pu": "• ²³⁹Pu là đồng vị phân hạch quan trọng.\n• ²⁴⁰Pu và ²³⁸Pu cũng được nghiên cứu rộng rãi.\n• Plutonium không có đồng vị bền.",
    "Am": "• ²⁴¹Am là đồng vị phổ biến trong các ứng dụng nguồn alpha.\n• Americium không có đồng vị bền.",
    "Cm": "• ²⁴⁴Cm là đồng vị có ý nghĩa trong nghiên cứu và nguồn nhiệt phóng xạ.\n• Curium không có đồng vị bền.",
    "Es": "• Einsteinium chỉ có các đồng vị phóng xạ; ²⁵³Es là một đồng vị được nghiên cứu.",
    "Fm": "• Fermium chỉ có các đồng vị phóng xạ; ²⁵⁷Fm là đồng vị thường được nhắc đến.",
    "Md": "• Mendelevium chỉ có các đồng vị phóng xạ; ²⁵⁸Md tương đối bền hơn các đồng vị khác.",
    "No": "• Nobelium chỉ có các đồng vị phóng xạ; ²⁵⁹No là một đồng vị được nghiên cứu.",
    "Lr": "• Lawrencium chỉ có các đồng vị phóng xạ; ²⁶⁶Lr là một đồng vị được nghiên cứu.",
    "Rf": "• Rutherfordium chỉ có các đồng vị phóng xạ; các đồng vị thường được nghiên cứu có số khối khoảng 260.",
    "Db": "• Dubnium chỉ có các đồng vị phóng xạ; ²⁶⁸Db là một đồng vị được nghiên cứu.",
    "Sg": "• Seaborgium chỉ có các đồng vị phóng xạ; ²⁶⁹Sg là một đồng vị được nghiên cứu.",
    "Bh": "• Bohrium chỉ có các đồng vị phóng xạ; ²⁷⁰Bh là một đồng vị được nghiên cứu.",
    "Hs": "• Hassium chỉ có các đồng vị phóng xạ; ²⁷⁷Hs là một đồng vị được nghiên cứu.",
    "Mt": "• Meitnerium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Ds": "• Darmstadtium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Rg": "• Roentgenium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Cn": "• Copernicium chỉ có các đồng vị phóng xạ; ²⁸⁵Cn là một đồng vị được nghiên cứu.",
    "Nh": "• Nihonium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Fl": "• Flerovium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Mc": "• Moscovium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Lv": "• Livermorium chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Ts": "• Tennessine chỉ có các đồng vị phóng xạ; không có đồng vị bền.",
    "Og": "• Oganesson chỉ có các đồng vị phóng xạ; không có đồng vị bền."
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


    /* -------------------------
       THÔNG TIN CHI TIẾT (nếu có)
    ------------------------- */

    const info = elementInfo[symbol] || additionalElementInfo[symbol];

    if (info) {

        chemical = info.chemical;

        physical = info.physical;

        history = info.history;

    }

    const discoveryPlace = discoveryPlaces[symbol];

    if (discoveryPlace) {
        history += `\n• Nơi phát hiện/tìm thấy/tổng hợp đầu tiên: ${discoveryPlace}`;
    }


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

        isotope: isotopeInfo[symbol] || `
Khái niệm đồng vị: các nguyên tử của cùng một nguyên tố có cùng số proton nhưng khác số neutron.

Các đồng vị của ${name} có cùng số hiệu nguyên tử nhưng khác số khối. Một số đồng vị có thể bền, một số khác có thể phóng xạ.

Có thể bổ sung danh sách đồng vị cụ thể của ${name} tại đây.
`,

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
   Ô ĐẠI DIỆN DẢI LANTAN / ACTINI TRONG BẢNG CHÍNH
========================================================= */

function createSeriesPlaceholder(rangeText, titleText, colorClass) {
    const card = document.createElement("div");
    card.className = "series-placeholder " + (colorClass || "");
    card.innerHTML = `
        <span class="placeholder-number">${rangeText}</span>
        <span class="placeholder-symbol">↳</span>
        <span class="placeholder-name">${titleText}</span>
    `;
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

    // Vị trí nhóm 3 của chu kỳ 6 và 7: ô đại diện cho dải 57–71 và 89–103.
    const lanthanidePlaceholder = createSeriesPlaceholder("57–71", "Họ Lantan", "placeholder-lanthanide");
    lanthanidePlaceholder.style.gridColumn = 3;
    lanthanidePlaceholder.style.gridRow = 6;
    periodicTable.appendChild(lanthanidePlaceholder);

    const actinidePlaceholder = createSeriesPlaceholder("89–103", "Họ Actini", "placeholder-actinide");
    actinidePlaceholder.style.gridColumn = 3;
    actinidePlaceholder.style.gridRow = 7;
    periodicTable.appendChild(actinidePlaceholder);

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
       LANTAN: La → Lu (57–71)
    ------------------------- */

    for (
        let number = 57;
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
       ACTINI: Ac → Lr (89–103)
    ------------------------- */

    for (
        let number = 89;
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
   CẤU HÌNH ELECTRON 3D (THREE.JS)
   - Hạt nhân gồm proton (đỏ) + nơtron (xám), đứng yên
   - Electron (xanh) quay quanh trên các quỹ đạo nghiêng
   - Hiển thị trong tab "Tính chất hóa học"
   - Có nút tạm dừng / chạy
   Three.js được tải tự động từ cdnjs (cần Internet)
========================================================= */

/*
   Các nguyên tố có cấu hình electron ngoại lệ
   (không theo đúng quy tắc Madelung).
   Giá trị: số electron ở các lớp K, L, M, N, O, P, Q
*/
const shellExceptions = {
    24: [2, 8, 13, 1],                 // Cr
    29: [2, 8, 18, 1],                 // Cu
    41: [2, 8, 18, 12, 1],             // Nb
    42: [2, 8, 18, 13, 1],             // Mo
    44: [2, 8, 18, 15, 1],             // Ru
    45: [2, 8, 18, 16, 1],             // Rh
    46: [2, 8, 18, 18],                // Pd
    47: [2, 8, 18, 18, 1],             // Ag
    57: [2, 8, 18, 18, 9, 2],          // La
    58: [2, 8, 18, 19, 9, 2],          // Ce
    64: [2, 8, 18, 25, 9, 2],          // Gd
    78: [2, 8, 18, 32, 17, 1],         // Pt
    79: [2, 8, 18, 32, 18, 1],         // Au
    89: [2, 8, 18, 32, 18, 9, 2],      // Ac
    90: [2, 8, 18, 32, 18, 10, 2],     // Th
    91: [2, 8, 18, 32, 20, 9, 2],      // Pa
    92: [2, 8, 18, 32, 21, 9, 2],      // U
    93: [2, 8, 18, 32, 22, 9, 2],      // Np
    96: [2, 8, 18, 32, 25, 9, 2],      // Cm
    103: [2, 8, 18, 32, 32, 8, 3]      // Lr
};


/*
   Số khối (xấp xỉ, đồng vị phổ biến / bền nhất)
   dùng để vẽ số nơtron trong hạt nhân
*/
const massNumbers = [
    1, 4,
    7, 9, 11, 12, 14, 16, 19, 20,
    23, 24, 27, 28, 31, 32, 35, 40,
    39, 40, 45, 48, 51, 52, 55, 56, 59, 59, 64, 65, 70, 73, 75, 79, 80, 84,
    85, 88, 89, 91, 93, 96, 98, 101, 103, 106, 108, 112, 115, 119, 122, 128, 127, 131,
    133, 137, 139, 140, 141, 144, 145, 150, 152, 157, 159, 163, 165, 167, 169, 173, 175,
    178, 181, 184, 186, 190, 192, 195, 197, 201, 204, 207, 209, 209, 210, 222,
    223, 226, 227, 232, 231, 238, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 266,
    267, 268, 269, 270, 277, 278, 281, 282, 285, 286, 289, 290, 293, 294, 294
];


/*
   Tính số electron theo lớp K, L, M, N, O, P, Q
   bằng quy tắc Madelung (1s 2s 2p 3s 3p 4s 3d ...)
*/
function createShells(number) {

    const shells = [0, 0, 0, 0, 0, 0, 0];

    if (shellExceptions[number]) {

        shellExceptions[number].forEach(
            function (count, index) {
                shells[index] = count;
            }
        );

        return shells;

    }

    const order = [
        [1, "s"], [2, "s"], [2, "p"], [3, "s"], [3, "p"], [4, "s"],
        [3, "d"], [4, "p"], [5, "s"], [4, "d"], [5, "p"], [6, "s"],
        [4, "f"], [5, "d"], [6, "p"], [7, "s"], [5, "f"], [6, "d"],
        [7, "p"]
    ];

    const capacity = { s: 2, p: 6, d: 10, f: 14 };

    let remaining = number;

    for (const [n, type] of order) {

        if (remaining <= 0) break;

        const amount =
            Math.min(remaining, capacity[type]);

        shells[n - 1] += amount;

        remaining -= amount;

    }

    return shells;

}


/* -------------------------
   TIỆN ÍCH
------------------------- */

let electronScene = null;

let electronToken = 0;

let threePromise = null;


function seededRandom(seed) {

    let a = (seed * 2654435761) >>> 0;

    return function () {

        a |= 0;
        a = (a + 0x6D2B79F5) | 0;

        let t = Math.imul(a ^ (a >>> 15), 1 | a);

        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;

    };

}


function loadThree() {

    if (window.THREE) {
        return Promise.resolve(window.THREE);
    }

    if (!threePromise) {

        threePromise = new Promise(function (resolve, reject) {

            const script = document.createElement("script");

            script.src =
                "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

            script.onload = function () {

                if (window.THREE) {
                    resolve(window.THREE);
                } else {
                    reject(new Error("THREE not found"));
                }

            };

            script.onerror = function () {

                threePromise = null;

                reject(new Error("Cannot load three.js"));

            };

            document.head.appendChild(script);

        });

    }

    return threePromise;

}


function destroyElectron3D() {

    electronToken++;

    if (electronScene) {

        electronScene.destroy();

        electronScene = null;

    }

}


/* -------------------------
   CSS (chỉ thêm 1 lần)
------------------------- */

function injectElectronStyle() {

    if (document.getElementById("electron3DStyle")) return;

    const style = document.createElement("style");

    style.id = "electron3DStyle";

    style.textContent = `

        #electron3DPanel {
            margin-top: 25px;
            padding: 20px;
            border-radius: 20px;
            background: #f8fafc;
            border: 1px solid #e5e7eb;
        }

        .e3d-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .e3d-title h3 {
            margin: 0;
            font-size: 20px;
        }

        .e3d-title span {
            font-size: 14px;
            color: #666;
        }

        .e3d-stage {
            position: relative;
            height: 460px;
            border-radius: 16px;
            overflow: hidden;
            background: radial-gradient(
                circle at 50% 45%,
                #e6ecf5 0%,
                #f3f5f9 45%,
                #fdfdfd 100%
            );
        }

        .e3d-canvas {
            position: absolute;
            inset: 0;
        }

        .e3d-canvas canvas {
            display: block;
            width: 100%;
            height: 100%;
            cursor: grab;
            touch-action: none;
        }

        .e3d-canvas canvas:active {
            cursor: grabbing;
        }

        .e3d-message {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #64748b;
            pointer-events: none;
        }

        .e3d-bar {
            position: absolute;
            left: 50%;
            bottom: 14px;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 6px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.12);
        }

        .e3d-bar button {
            border: 0;
            background: transparent;
            cursor: pointer;
            font: inherit;
            font-size: 13px;
            font-weight: 600;
            color: #64748b;
            padding: 9px 16px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .e3d-bar button.active {
            background: #0f172a;
            color: #fff;
        }

        .e3d-bar .e3d-pause {
            padding: 9px 12px;
            font-size: 15px;
            color: #475569;
        }

        .e3d-legend {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 14px;
        }

        .e3d-legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 10px;
            background: #fff;
            border: 1px solid #e5e7eb;
            font-size: 13px;
        }

        .e3d-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
        }

        .e3d-config {
            margin-top: 12px;
            text-align: center;
            font-size: 14px;
            color: #334155;
        }

        @media (max-width: 600px) {

            .e3d-stage {
                height: 360px;
            }

            .e3d-bar button {
                padding: 8px 11px;
                font-size: 12px;
            }

        }

    `;

    document.head.appendChild(style);

}


/* -------------------------
   DỰNG CẢNH 3D
------------------------- */

function createElectronScene(THREE, canvasHost, element, shells) {

    const Z = element.number;

    const A = Math.max(massNumbers[Z - 1] || Z * 2, Z);

    const N = A - Z;

    const rand = seededRandom(Z + 7);


    const scene = new THREE.Scene();

    const camera =
        new THREE.PerspectiveCamera(45, 1, 0.1, 300);

    const renderer =
        new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 2)
    );

    canvasHost.appendChild(renderer.domElement);


    /* Ánh sáng */

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const keyLight =
        new THREE.DirectionalLight(0xffffff, 0.9);

    keyLight.position.set(6, 9, 12);

    scene.add(keyLight);

    const fillLight =
        new THREE.PointLight(0xaec6ff, 0.5);

    fillLight.position.set(-10, -6, 8);

    scene.add(fillLight);


    const root = new THREE.Group();

    root.rotation.x = 0.45;

    root.rotation.y = 0.2;

    scene.add(root);


    /* =====================================================
       HẠT NHÂN: proton đỏ + nơtron xám (đứng yên)
    ===================================================== */

    const nucleus = new THREE.Group();

    root.add(nucleus);

    const nr =
        Math.min(0.34, 1.25 / (1.2 * Math.cbrt(A)));

    const nucleusRadius =
        nr * 1.2 * Math.cbrt(A);

    const limit =
        Math.max(nucleusRadius - nr, 0);

    const pts = [];

    for (let i = 0; i < A; i++) {

        if (A === 1) {
            pts.push([0, 0, 0]);
            break;
        }

        const u = rand() * 2 - 1;

        const phi = rand() * Math.PI * 2;

        const s = Math.sqrt(1 - u * u);

        const r = limit * Math.cbrt(rand());

        pts.push([
            r * s * Math.cos(phi),
            r * s * Math.sin(phi),
            r * u
        ]);

    }

    /* Đẩy các hạt ra xa nhau để không chồng lấn */

    const minDist = 2 * nr * 0.98;

    for (let iter = 0; iter < 40 && A > 1; iter++) {

        for (let i = 0; i < A; i++) {

            for (let j = i + 1; j < A; j++) {

                const dx = pts[j][0] - pts[i][0];
                const dy = pts[j][1] - pts[i][1];
                const dz = pts[j][2] - pts[i][2];

                const d2 = dx * dx + dy * dy + dz * dz;

                if (d2 < minDist * minDist && d2 > 1e-9) {

                    const d = Math.sqrt(d2);

                    const push = (minDist - d) / 2 / d;

                    pts[i][0] -= dx * push;
                    pts[i][1] -= dy * push;
                    pts[i][2] -= dz * push;

                    pts[j][0] += dx * push;
                    pts[j][1] += dy * push;
                    pts[j][2] += dz * push;

                }

            }

        }

        for (let i = 0; i < A; i++) {

            const len = Math.sqrt(
                pts[i][0] * pts[i][0] +
                pts[i][1] * pts[i][1] +
                pts[i][2] * pts[i][2]
            );

            if (len > limit && len > 0) {

                const k = limit / len;

                pts[i][0] *= k;
                pts[i][1] *= k;
                pts[i][2] *= k;

            }

        }

    }

    /* Trộn proton / nơtron */

    const types = [];

    for (let i = 0; i < Z; i++) types.push("p");

    for (let i = 0; i < N; i++) types.push("n");

    for (let i = types.length - 1; i > 0; i--) {

        const j = Math.floor(rand() * (i + 1));

        const tmp = types[i];

        types[i] = types[j];

        types[j] = tmp;

    }

    const nucleonGeometry =
        new THREE.SphereGeometry(nr, 20, 16);

    const protonMaterial =
        new THREE.MeshPhongMaterial({
            color: 0xff1a1a,
            specular: 0xffffff,
            shininess: 90
        });

    const neutronMaterial =
        new THREE.MeshPhongMaterial({
            color: 0x808080,
            specular: 0xffffff,
            shininess: 90
        });

    for (let i = 0; i < A; i++) {

        const mesh = new THREE.Mesh(
            nucleonGeometry,
            types[i] === "p" ? protonMaterial : neutronMaterial
        );

        mesh.position.set(pts[i][0], pts[i][1], pts[i][2]);

        nucleus.add(mesh);

    }


    /* =====================================================
       QUỸ ĐẠO + ELECTRON
    ===================================================== */

    const palette = [
        "#bdbdbd",
        "#fbb12a",
        "#7aa7ff",
        "#5fcf80",
        "#e66bd1",
        "#ff7676",
        "#40c4c4"
    ];

    const tiltX = [60, 75, 50, 70, 55, 65, 45];
    const tiltY = [0, 35, -30, 60, -55, 20, -75];
    const tiltZ = [0, 20, 70, -40, 110, 150, -100];

    const deg = Math.PI / 180;

    const orbitsGroup = new THREE.Group();

    root.add(orbitsGroup);

    const electronGeometry =
        new THREE.SphereGeometry(0.17, 20, 16);

    const electronMaterial =
        new THREE.MeshPhongMaterial({
            color: 0x0a0aa0,
            specular: 0x8888ff,
            shininess: 100
        });

    const trailRadii = [0.13, 0.105, 0.08, 0.06, 0.04];

    const trailOpacity = [0.55, 0.42, 0.3, 0.2, 0.1];

    const trailGeometries =
        trailRadii.map(function (r) {
            return new THREE.SphereGeometry(r, 10, 8);
        });

    const trailMaterials =
        trailOpacity.map(function (o) {
            return new THREE.MeshBasicMaterial({
                color: 0x6a6aff,
                transparent: true,
                opacity: o,
                depthWrite: false
            });
        });

    const spinners = [];

    let maxRadius = 0;

    shells.forEach(function (count, index) {

        if (count <= 0) return;

        const R = 2.4 + index * 1.05;

        maxRadius = Math.max(maxRadius, R);

        const color = palette[index % palette.length];


        /* Quỹ đạo nghiêng cố định */

        const orbit = new THREE.Group();

        orbit.rotation.set(
            tiltX[index] * deg,
            tiltY[index] * deg,
            tiltZ[index] * deg
        );

        orbitsGroup.add(orbit);


        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(R, 0.035, 8, 128),
            new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.95
            })
        );

        orbit.add(ring);


        /* Lớp quay: electron nằm trong lớp này */

        const spinner = new THREE.Group();

        orbit.add(spinner);

        spinners.push({
            group: spinner,
            speed: 1.6 / (1 + index * 0.5)
        });


        for (let i = 0; i < count; i++) {

            const theta = (Math.PI * 2 / count) * i;

            const electron = new THREE.Mesh(
                electronGeometry,
                electronMaterial
            );

            electron.position.set(
                R * Math.cos(theta),
                R * Math.sin(theta),
                0
            );

            spinner.add(electron);

            /* Vệt mờ phía sau electron */

            for (let k = 0; k < trailGeometries.length; k++) {

                const a = theta - (k + 1) * 0.3 / R;

                const dot = new THREE.Mesh(
                    trailGeometries[k],
                    trailMaterials[k]
                );

                dot.position.set(
                    R * Math.cos(a),
                    R * Math.sin(a),
                    0
                );

                spinner.add(dot);

            }

        }


    });

    maxRadius = Math.max(maxRadius, 2.4) + 0.6;


    /* =====================================================
       ĐIỀU KHIỂN: KÉO ĐỂ XOAY, CUỘN ĐỂ PHÓNG TO
    ===================================================== */

    let zoom = 1;

    let dragging = false;

    let lastX = 0;

    let lastY = 0;

    const canvas = renderer.domElement;

    canvas.addEventListener("pointerdown", function (e) {

        dragging = true;

        lastX = e.clientX;

        lastY = e.clientY;

        canvas.setPointerCapture(e.pointerId);

    });

    canvas.addEventListener("pointermove", function (e) {

        if (!dragging) return;

        root.rotation.y += (e.clientX - lastX) * 0.008;

        root.rotation.x += (e.clientY - lastY) * 0.008;

        root.rotation.x =
            Math.max(-1.4, Math.min(1.4, root.rotation.x));

        lastX = e.clientX;

        lastY = e.clientY;

    });

    function stopDrag() {
        dragging = false;
    }

    canvas.addEventListener("pointerup", stopDrag);

    canvas.addEventListener("pointercancel", stopDrag);

    canvas.addEventListener(
        "wheel",
        function (e) {

            e.preventDefault();

            zoom *= Math.exp(e.deltaY * 0.001);

            zoom = Math.max(0.5, Math.min(1.8, zoom));

        },
        { passive: false }
    );


    /* =====================================================
       VÒNG LẶP HOẠT ẢNH
    ===================================================== */

    let paused = false;

    let lastW = 0;

    let lastH = 0;

    let frame = 0;

    const clock = new THREE.Clock();

    function updateCamera() {

        const aspect = lastW / lastH;

        const halfFov =
            (camera.fov * Math.PI / 180) / 2;

        const distance =
            (maxRadius / Math.tan(halfFov)) /
            Math.min(1, aspect) * 1.08;

        camera.position.set(0, 0, distance * zoom);

        camera.lookAt(0, 0, 0);

    }

    function tick() {

        frame = requestAnimationFrame(tick);

        const dt = Math.min(clock.getDelta(), 0.05);

        const w = canvasHost.clientWidth;

        const h = canvasHost.clientHeight;

        /* Tab đang ẩn thì không vẽ */

        if (!w || !h) return;

        if (w !== lastW || h !== lastH) {

            lastW = w;

            lastH = h;

            renderer.setSize(w, h, false);

            camera.aspect = w / h;

            camera.updateProjectionMatrix();

        }

        if (!paused) {

            spinners.forEach(function (s) {
                s.group.rotation.z += s.speed * dt;
            });


        }

        updateCamera();

        renderer.render(scene, camera);

    }

    tick();


    return {

        setPaused: function (value) {

            paused = value;

        },

        destroy: function () {

            cancelAnimationFrame(frame);

            scene.traverse(function (object) {

                if (object.geometry) {
                    object.geometry.dispose();
                }

                if (object.material) {

                    if (Array.isArray(object.material)) {
                        object.material.forEach(function (m) {
                            m.dispose();
                        });
                    } else {
                        object.material.dispose();
                    }

                }

            });

            renderer.dispose();

            if (canvas.parentElement) {
                canvas.parentElement.removeChild(canvas);
            }

        }

    };

}


/* -------------------------
   PANEL TRONG TAB HÓA HỌC
------------------------- */

function renderElectron3D(element) {

    injectElectronStyle();

    destroyElectron3D();

    const token = electronToken;


    let section =
        document.getElementById("electron3DPanel");

    if (!section) {

        section = document.createElement("section");

        section.id = "electron3DPanel";

        const host =
            document.getElementById("chemicalContent");

        if (host && host.parentElement) {

            host.insertAdjacentElement("afterend", section);

        }

        else {

            const tab =
                document.getElementById("chemicalTab");

            if (!tab) return;

            tab.appendChild(section);

        }

    }


    const shellNames = ["K", "L", "M", "N", "O", "P", "Q"];

    const shells = createShells(element.number);

    const Z = element.number;

    const A = Math.max(massNumbers[Z - 1] || Z * 2, Z);

    const N = A - Z;


    let legendHTML = "";

    shells.forEach(function (count, index) {

        if (count <= 0) return;

        legendHTML += `
            <div class="e3d-legend-item">
                <strong>${shellNames[index]}: ${count}</strong> electron
            </div>
        `;

    });

    const configText =
        shells.filter(function (c) { return c > 0; }).join(", ");


    section.innerHTML = `

        <div class="e3d-title">
            <h3>⚛ Cấu hình electron</h3>
            <span>${element.number} electron</span>
        </div>

        <div class="e3d-stage">

            <div class="e3d-canvas"></div>

            <div class="e3d-message">Đang tải mô hình 3D...</div>

            <div class="e3d-bar">

                <button class="e3d-pause" type="button"
                    title="Tạm dừng / Chạy">⏸</button>

            </div>

        </div>

        <div class="e3d-config">
            Cấu hình electron theo lớp:
            <strong>${configText}</strong>
        </div>

        <div class="e3d-legend">

            ${legendHTML}

            <div class="e3d-legend-item">
                <span class="e3d-dot" style="background:#ff1a1a"></span>
                ${Z} proton
            </div>

            <div class="e3d-legend-item">
                <span class="e3d-dot" style="background:#808080"></span>
                ≈ ${N} nơtron
            </div>

        </div>

    `;


    /* ---------- điều khiển ---------- */

    const controller = {

        paused: false,

        scene: null,

        destroy: function () {

            if (this.scene) {
                this.scene.destroy();
            }

            this.scene = null;

        }

    };

    electronScene = controller;


    const pauseButton =
        section.querySelector(".e3d-pause");

    pauseButton.addEventListener("click", function () {

        controller.paused = !controller.paused;

        pauseButton.textContent =
            controller.paused ? "▶" : "⏸";

        if (controller.scene) {
            controller.scene.setPaused(controller.paused);
        }

    });


    /* ---------- tải Three.js rồi dựng cảnh ---------- */

    const message =
        section.querySelector(".e3d-message");

    loadThree()

        .then(function (THREE) {

            if (token !== electronToken) return;

            controller.scene = createElectronScene(
                THREE,
                section.querySelector(".e3d-canvas"),
                element,
                shells
            );

            controller.scene.setPaused(controller.paused);

            if (message) message.remove();

        })

        .catch(function (error) {

            console.error(error);

            if (token !== electronToken) return;

            if (message) {

                message.textContent =
                    "Không thể hiển thị mô hình 3D (cần Internet và WebGL).";

            }

        });

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

    const isotopeContent =
        document.getElementById(
            "isotopeContent"
        );

    if (isotopeContent) {
        isotopeContent.innerHTML =
            formatInformation(
                element.isotope
            );
    }


    /* -------------------------
       CẤU HÌNH ELECTRON 3D
    ------------------------- */

    renderElectron3D(element);


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

    destroyElectron3D();

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
   PHÒNG PHẢN ỨNG HÓA HỌC
   Mô phỏng các phản ứng mẫu thông dụng
========================================================= */

const reactionDatabase = {
    "H2|O2": {
        equation: "2H₂ + O₂ → 2H₂O",
        title: "Tạo thành nước",
        description: "Hiđrô phản ứng với oxi tạo thành nước.",
        note: "Phản ứng cần điều kiện thích hợp để xảy ra."
    },
    "H2|Cl2": {
        equation: "H₂ + Cl₂ → 2HCl",
        title: "Hiđrô tác dụng với clo",
        description: "Hiđrô và clo tạo thành hiđrô clorua.",
        note: "Đây là phản ứng hóa hợp đơn giản."
    },
    "Cl2|Na": {
        equation: "2Na + Cl₂ → 2NaCl",
        title: "Tạo natri clorua",
        description: "Natri phản ứng với clo tạo natri clorua.",
        note: "NaCl là muối ăn quen thuộc."
    },
    "HCl|NaOH": {
        equation: "HCl + NaOH → NaCl + H₂O",
        title: "Phản ứng trung hòa",
        description: "Axit clohiđric và natri hiđroxit tạo thành muối và nước.",
        note: "Đây là phản ứng axit–bazơ điển hình."
    },
    "CaCO3|HCl": {
        equation: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑",
        title: "Axit tác dụng với muối cacbonat",
        description: "Canxi cacbonat phản ứng với axit clohiđric tạo muối, nước và khí CO₂.",
        note: "Có hiện tượng sủi bọt do khí CO₂ tạo thành."
    },
    "H2O|Na": {
        equation: "2Na + 2H₂O → 2NaOH + H₂↑",
        title: "Natri tác dụng với nước",
        description: "Natri phản ứng với nước tạo natri hiđroxit và khí hiđrô.",
        note: "Đây là phản ứng đặc trưng của kim loại kiềm."
    },
    "C|O2": {
        equation: "C + O₂ → CO₂",
        title: "Cacbon cháy trong oxi",
        description: "Cacbon phản ứng với oxi tạo cacbon đioxit.",
        note: "Đây là phản ứng cháy và phản ứng hóa hợp."
    },
    "O2|S": {
        equation: "S + O₂ → SO₂",
        title: "Lưu huỳnh tác dụng với oxi",
        description: "Lưu huỳnh cháy trong oxi tạo lưu huỳnh đioxit.",
        note: "SO₂ là một oxit của lưu huỳnh."
    },
    "Mg|O2": {
        equation: "2Mg + O₂ → 2MgO",
        title: "Magie tác dụng với oxi",
        description: "Magie kết hợp với oxi tạo magie oxit.",
        note: "Đây là phản ứng hóa hợp."
    },
    "Fe|O2": {
        equation: "3Fe + 2O₂ → Fe₃O₄",
        title: "Sắt tác dụng với oxi",
        description: "Sắt phản ứng với oxi khi đun nóng tạo oxit sắt từ.",
        note: "Phương trình này là một phản ứng mẫu thường gặp."
    },
    "Cu|O2": {
        equation: "2Cu + O₂ → 2CuO",
        title: "Đồng tác dụng với oxi",
        description: "Đồng bị oxi hóa khi đun nóng trong oxi tạo đồng(II) oxit.",
        note: "CuO là chất rắn màu đen."
    },
    "CO2|Ca(OH)2": {
        equation: "CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O",
        title: "CO₂ tác dụng với nước vôi trong",
        description: "Cacbon đioxit phản ứng với canxi hiđroxit tạo kết tủa canxi cacbonat và nước.",
        note: "Nước vôi trong có thể bị vẩn đục."
    },
    "H2SO4|NaOH": {
        equation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
        title: "Trung hòa axit–bazơ",
        description: "Axit sulfuric phản ứng với natri hiđroxit tạo muối và nước.",
        note: "Đây là phản ứng trung hòa."
    },
    "AgNO3|NaCl": {
        equation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
        title: "Tạo kết tủa bạc clorua",
        description: "Bạc nitrat và natri clorua tạo kết tủa bạc clorua.",
        note: "AgCl là kết tủa màu trắng."
    },
    "BaCl2|H2SO4": {
        equation: "BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl",
        title: "Tạo kết tủa bari sunfat",
        description: "Bari clorua phản ứng với axit sulfuric tạo kết tủa bari sunfat.",
        note: "BaSO₄ là chất kết tủa màu trắng, rất ít tan."
    },
    "Cl2|NaOH": {
        equation: "Cl₂ + 2NaOH → NaCl + NaClO + H₂O",
        title: "Tạo nước Javen",
        description: "Clo tác dụng với dung dịch NaOH loãng, lạnh tạo natri clorua, natri hipoclorit và nước.",
        note: "Dung dịch chứa NaClO được gọi là nước Javen."
    },
    "HCl|Zn": {
        equation: "Zn + 2HCl → ZnCl₂ + H₂↑",
        title: "Kẽm tác dụng với axit",
        description: "Kẽm phản ứng với axit clohiđric tạo kẽm clorua và khí hiđrô.",
        note: "Có khí H₂ thoát ra."
    },
    "Fe|HCl": {
        equation: "Fe + 2HCl → FeCl₂ + H₂↑",
        title: "Sắt tác dụng với axit",
        description: "Sắt phản ứng với axit clohiđric tạo sắt(II) clorua và khí hiđrô.",
        note: "Đây là phản ứng thế đơn giản."
    },
    "CuO|HCl": {
        equation: "CuO + 2HCl → CuCl₂ + H₂O",
        title: "Oxit kim loại tác dụng với axit",
        description: "Đồng(II) oxit phản ứng với axit clohiđric tạo muối và nước.",
        note: "Đây là phản ứng giữa oxit bazơ và axit."
    },
    "HCl|Na2CO3": {
        equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑",
        title: "Axit tác dụng với natri cacbonat",
        description: "Natri cacbonat phản ứng với axit clohiđric tạo muối, nước và khí CO₂.",
        note: "Có hiện tượng sủi bọt khí."
    },
    "CaO|H2O": {
        equation: "CaO + H₂O → Ca(OH)₂",
        title: "Canxi oxit tác dụng với nước",
        description: "Canxi oxit phản ứng với nước tạo canxi hiđroxit.",
        note: "Phản ứng tỏa nhiệt."
    },
    "NH3|HCl": {
        equation: "NH₃ + HCl → NH₄Cl",
        title: "Amoniac tác dụng với axit",
        description: "Amoniac phản ứng với axit clohiđric tạo amoni clorua.",
        note: "Đây là phản ứng tạo muối amoni."
    },
    "SO3|H2O": {
        equation: "SO₃ + H₂O → H₂SO₄",
        title: "Lưu huỳnh trioxit tác dụng với nước",
        description: "Lưu huỳnh trioxit kết hợp với nước tạo axit sulfuric.",
        note: "Đây là phản ứng hóa hợp."
    },
    "P|O2": {
        equation: "4P + 5O₂ → 2P₂O₅",
        title: "Photpho tác dụng với oxi",
        description: "Photpho cháy trong oxi tạo photpho(V) oxit.",
        note: "Đây là phản ứng hóa hợp."
    },
    "CO|O2": {
        equation: "2CO + O₂ → 2CO₂",
        title: "Cacbon monoxit tác dụng với oxi",
        description: "Cacbon monoxit bị oxi hóa thành cacbon đioxit.",
        note: "Đây là phản ứng oxi hóa CO."
    },
    "SO2|O2": {
        equation: "2SO₂ + O₂ → 2SO₃",
        title: "Oxi hóa lưu huỳnh đioxit",
        description: "Lưu huỳnh đioxit phản ứng với oxi tạo lưu huỳnh trioxit.",
        note: "Phản ứng cần điều kiện thích hợp."
    },
    "Ca(OH)2|HCl": {
        equation: "Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O",
        title: "Canxi hiđroxit tác dụng với axit",
        description: "Canxi hiđroxit phản ứng với axit clohiđric tạo muối và nước.",
        note: "Đây là phản ứng trung hòa."
    },
    "Na2O|H2O": {
        equation: "Na₂O + H₂O → 2NaOH",
        title: "Natri oxit tác dụng với nước",
        description: "Natri oxit phản ứng với nước tạo natri hiđroxit.",
        note: "Đây là phản ứng hóa hợp."
    },
    "CuO|H2SO4": {
        equation: "CuO + H₂SO₄ → CuSO₄ + H₂O",
        title: "Đồng(II) oxit tác dụng với axit sulfuric",
        description: "Đồng(II) oxit phản ứng với axit sulfuric tạo đồng(II) sunfat và nước.",
        note: "Đây là phản ứng giữa oxit bazơ và axit."
    },
    "Fe2O3|HCl": {
        equation: "Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O",
        title: "Sắt(III) oxit tác dụng với axit",
        description: "Sắt(III) oxit phản ứng với axit clohiđric tạo sắt(III) clorua và nước.",
        note: "Đây là phản ứng giữa oxit bazơ và axit."
    },
    "Al|HCl": {
        equation: "2Al + 6HCl → 2AlCl₃ + 3H₂↑",
        title: "Nhôm tác dụng với axit",
        description: "Nhôm phản ứng với axit clohiđric tạo nhôm clorua và khí hiđrô.",
        note: "Đây là phản ứng thế đơn giản."
    },
    "Mg|HCl": {
        equation: "Mg + 2HCl → MgCl₂ + H₂↑",
        title: "Magie tác dụng với axit",
        description: "Magie phản ứng với axit clohiđric tạo magie clorua và khí hiđrô.",
        note: "Có khí H₂ thoát ra."
    }
};

function normalizeReactionFormula(value) {
    return (value || "")
        .trim()
        .replace(/\s+/g, "")
        .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, function (ch) {
            return "₀₁₂₃₄₅₆₇₈₉".indexOf(ch);
        });
}

function reactionKey(a, b) {
    return [normalizeReactionFormula(a), normalizeReactionFormula(b)]
        .sort(function (x, y) { return x.localeCompare(y); })
        .join("|");
}

function escapeReactionHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function initReactionTool() {
    const section = document.getElementById("reactionSection");
    const navButton = document.getElementById("reactionNavButton");
    const inputA = document.getElementById("reactionInputA");
    const inputB = document.getElementById("reactionInputB");
    const runButton = document.getElementById("reactionRunButton");
    const clearButton = document.getElementById("reactionClearButton");
    const result = document.getElementById("reactionResult");

    if (!section || !inputA || !inputB || !runButton || !result) return;

    if (navButton) {
        navButton.addEventListener("click", function () {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }


    function showReaction(a, b) {
        const cleanA = normalizeReactionFormula(a);
        const cleanB = normalizeReactionFormula(b);

        if (!cleanA || !cleanB) {
            result.innerHTML = `
                <div class="reaction-result-icon">⚠</div>
                <div><strong>Chưa đủ dữ liệu</strong><p>Vui lòng nhập đủ 2 chất.</p></div>
            `;
            return;
        }

        let data = reactionDatabase[reactionKey(cleanA, cleanB)];

        if (!data) {
            for (const key in reactionDatabase) {
                const parts = key.split("|");
                if (parts.length === 2 && reactionKey(parts[0], parts[1]) === reactionKey(cleanA, cleanB)) {
                    data = reactionDatabase[key];
                    break;
                }
            }
        }

        if (!data) {
            result.innerHTML = `
                <div class="reaction-result-icon">?</div>
                <div>
                    <strong>Chưa có dữ liệu cho cặp chất này</strong>
                    <p>Hệ thống hiện chưa có phương trình mẫu cho <b>${escapeReactionHTML(a)}</b> và <b>${escapeReactionHTML(b)}</b>.</p>
                    <p>Bạn có thể thêm cặp phản ứng mới vào biến <code>reactionDatabase</code> trong app.js.</p>
                </div>
            `;
            return;
        }

        result.innerHTML = `
            <div class="reaction-result-icon">✓</div>
            <div>
                <strong>${escapeReactionHTML(data.title)}</strong>
                <p>${escapeReactionHTML(data.description)}</p>
                <div class="reaction-equation">${data.equation}</div>
                <p>${escapeReactionHTML(data.note)}</p>
            </div>
        `;
    }

    runButton.addEventListener("click", function () {
        showReaction(inputA.value, inputB.value);
    });

    clearButton.addEventListener("click", function () {
        inputA.value = "";
        inputB.value = "";
        result.innerHTML = `
            <div class="reaction-result-icon">⚗</div>
            <div><strong>Chưa chọn chất</strong><p>Hãy nhập 2 chất rồi bấm “Xảy ra phản ứng”.</p></div>
        `;
    });

    document.querySelectorAll("[data-reaction-example]").forEach(function (button) {
        button.addEventListener("click", function () {
            const parts = button.dataset.reactionExample.split("|");
            inputA.value = parts[0];
            inputB.value = parts[1];
            showReaction(parts[0], parts[1]);
        });
    });

    [inputA, inputB].forEach(function (input) {
        if (!input) return;
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") runButton.click();
        });
    });
}


/* =========================================================
   KHỞI ĐỘNG
========================================================= */

createPeriodicTable();

createSeries();

initReactionTool();


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