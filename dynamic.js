const UserText = document.querySelector("#fname");
const UserInput = document.querySelector("#uscl");
const Image = document.getElementById("result");
const Floor = document.getElementById("floorsOrder");

let previousButton = null;

document.getElementById("btn1").onclick  = function(){ Image.src = "Floor_1.png" ; changeButtonColors(this)}
document.getElementById("btn21").onclick = function(){ Image.src = "Floor_21.png"; changeButtonColors(this)}
document.getElementById("btn22").onclick = function(){ Image.src = "Floor_22.png"; changeButtonColors(this)}
document.getElementById("btn31").onclick = function(){ Image.src = "Floor_31.png"; changeButtonColors(this)}
document.getElementById("btn32").onclick = function(){ Image.src = "Floor_32.png"; changeButtonColors(this)}
document.getElementById("btn41").onclick = function(){ Image.src = "Floor_41.png"; changeButtonColors(this)}
document.getElementById("btn42").onclick = function(){ Image.src = "Floor_42.png"; changeButtonColors(this)}

function changeButtonColors(button) {
  button.style.backgroundColor = "#28a7e2";
  button.style.color = "white";

  if (previousButton !== null) {
      previousButton.style.backgroundColor = "white";
      previousButton.style.color = "#28a7e2";   
  }
  
  previousButton = button;
}


const f1 = [ 
  "G106", "G107", "G108", "G109", "G110", "G111", "G116", "G117", "G118", "G119", "G120",
  "معمل", "النادي العملي", "قاعة اجتماعات كلية علوم الحاسب والمعلومات", "أعضاء تدريس إدارة", "الجودة", "علاقات عامة", "مركز الأبحاث",
];

const f21 = [
  "F099", "F100", "F101", "F102", "F103", "F104", "F105", "F107", "F108", "F109", "F110", "F111", "F112", "F113", "F114", "F115", "F116", "F117", "F118",
  "وكيلة قسم التقنية", "سكرتيرة قسم التقنية", "ريم عسيري", "نورة الغامدي + ذهب البحيري", "أ/حنان الوادي", "جوزاء+ايمان", "د.نجود العشبان",
  "عبير العريني + ساره العيد", "امل الغفيص + الجوهره اليوسف", "لجين العواد + نوف الدوسري", "وتين + شدن", "نفلاء الرميان", "سمر العيسى",
  "فاطمة+شموخ", "خوله+انتصار", "شذا الخالدي", "ملاك العتيق", "اجتماعات قسم التقنية",
];

const f22 = [
 "F076", "F077", "F078", "F079", "F080", "F081", "F082", "F083", "F088", "F089", "F090", "F091", "F092", "F093", "F094",
 "البحث العملي ", "هند + فاطمة", "شذى+بشائر", "عبير + سارة", "وضحى المحامض", "رحمة الاحمري", "وحدة التصوير", "مكتب التصوير",
  "د.نهى الشقيران", "نوف+ندى", "هيفاء الحسيني", "سارة الراشد", "نجلاء الحسون", "د.هتون الصقري",
];

const f31 = [
  "S110", "S111", "S112", "S113", "S114", "S115", "S116", "S118", "S119", "S120", "S121", "S122", "S123", "S124", "S125", "S126", "S127", "S128", "S129",
  "مكتبة ادارة المعلومات", "حياة المسلم ", "أمجاد العمرو", "ولاء الصرامي", "د.امل السيف ", "د.سارة الحمود", "د.ايمان الزيد", "د.دلال الضويلع ",
  "د.أسماء الصالح ", "د.هيفاء بن قاسم ", "منيرة الشبل", "د.أرام السدراني", "بسمة الصولي", "د.بسمة القاضي", "د.تهاني البلوي ", "دانية العمر",
  "د.عريب العويشق", " مشاريع ادراة المعلومات",
];

const f32 = [ 
  "S089", "S090", "S091", "S092", "S093", "S094", "S095", "S096", "S099", "S100", "S101", "S102", "S103", "S104", "S105", "S106",
  "د. مكتبة قسم العلوم", "د. مزنة المطيري", "د. وجدان بن سعيدان", "د. منان المسلم", "د. منال السبهان", "سكرتيرة قسم العلوم",
  "وكيلة قسم العلوم",  "اجتماعات قسم العلوم", "د. لميس الهزاع", "د. وعد الحوشان", "غادة العصيمي", "د. مها الربيعة",
  "د. عبير النفجان", "د. زهراء حربان", "د. عبير النفجان",
];

const f41 = [
  "T113", "T114", "T115", "T116", "T117", "T118", "T119", "T121", "T122", "T123", "T124", "T125", "T126", "T127", "T128", "T129", "T130", "T131", "T132",
  "اجتماعات إدارة المعلومات", "د. ريمية العتيبي", "د. مها الخثعمي", "د. موضي الدبيان", "د. عليا السليمي", "د. أمل العمران",
  "د. لولوة السويدان", "د. مريم العوشن", "د. منى العالم", "د. نوف الشريف", "د. العنود السالم", "د.أريج العسكر", "د. إعتماد مؤمنة",
  "د. هند عافية", "د. أمل السالم", "مساعدة إدارة المعلومات", "سكرتيرة إدارة المعلومات", "وكيلة إدارة المعلومات",
];

const f42 = [ 
  "T089", "T090", "T091", "T092", "T093", "T094", "T095", "T096", "T101", "T102", "T103", "T104", "T105", "T106", "T107", "T108",
  "د. الهنوف السويلم", "د.عبير السند", "د. هلا الرميح", "د. هالة آل الشيخ", "د. هياء الحقباني", "مساعدة قسم النظم", "سكرتيرة قسم النظم",
  "وكيلة قسم النظم", "قاعة اجتماعات النظم", "د. موضي آل الشيخ", "د. لجين الدهش", "د. ميسون الدخيل", "د. منى الخطابي", "د. ايات عثمان",
  "د. عبير الحربي", "مكتبة قسمة النظم",
];


UserInput.addEventListener("click", function (e) {
  const Uservalue = UserText.value;
  e.preventDefault();

  for (let i = 0; i < f1.length; i++) {
    if (f1[i].includes(Uservalue)) Image.src = "Floor_1.png";
  }
  for (let i = 0; i < f21.length; i++) {
    if (f21[i].includes(Uservalue)) Image.src = "Floor_21.png";
  }
  for (let i = 0; i < f22.length; i++) {
    if (f22[i].includes(Uservalue)) Image.src = "Floor_22.png";
  }
  for (let i = 0; i < f31.length; i++) {
    if (f31[i].includes(Uservalue)) Image.src = "Floor_31.png";
  }
  for (let i = 0; i < f32.length; i++) {
    if (f32[i].includes(Uservalue)) Image.src = "Floor_32.png";
  }
  for (let i = 0; i < f41.length; i++) {
    if (f41[i].includes(Uservalue)) Image.src = "Floor_41.png";
  }
  for (let i = 0; i < f42.length; i++) {
    if (f42[i].includes(Uservalue)) Image.src = "Floor_42.png";
  }
});
