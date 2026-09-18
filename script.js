//section A DOMS
let myBtn = document.getElementById("myBtn");
let mySvg1 = document.getElementById("mySvg1")
let myText = document.getElementById("myText")
let myText2 = document.getElementById("myText2");

// Section B DOMS
let myForm = document.getElementById("myForm")
let pWord = document.getElementById("pWord")
let sectionB = document.getElementById("sectionB")
let myP = document.getElementById("myP")
let mySubmit = document.getElementById('mySubmit')

// Section C DOMS
let sectionC = document.getElementById("sectionC")
let aud = document.getElementById("aud")
let happy = document.getElementById("happy")
let mySvg2 = document.getElementById("mySvg2")
let newSv = document.getElementById("newSv");
let music = document.getElementById("music")
//sectionD
let sectionD = document.getElementById("sectionD");

// Section E
let sectionE = document.getElementById("sectionE");
let keep = document.getElementById("keep")
// Section F
let sectionF = document.getElementById("sectionF")
// Section G
let sectionG = document.getElementById("sectionG")
let headFG = document.getElementById("headFG")
let vidi = document.getElementById("vidi")
let readG = document.getElementById("readG")
// Section I
let sectionI = document.querySelector("#sectionI")
//Section J
let sectionJ = document.querySelector(".ending")
myBtn.addEventListener("click",() => {
  myBtn.remove()
  mySvg1.style.display = "block";
  setTimeout(() => {
    sectionA.style.display = "none"
    sectionB.style.display = "flex";
    mySvg1.style.display = "none";
    } ,3000)

  
})

// Section B
function secLay() {
  myForm.style.display = "none"
}

function confettiPop() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.classList.add("piece");

    const fromLeft = i < 30;

    piece.style.left = fromLeft ? "0" : "100%";
    piece.style.top = "100%";

    piece.style.background = [
      "#FF4D8D",
      "#A855F7",
      "#FACC15",
      "#38BDF8",
      "#FF7A59"
    ][Math.floor(Math.random() * 5)];

    const x = fromLeft
      ? Math.random() * 50 + 10
      : -(Math.random() * 50 + 10);

    const y = -(Math.random() * 100 + 50);

    piece.animate(
      [
        {
          transform: "translate(0, 0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translate(${x}vw, ${y}vh) rotate(720deg)`,
          opacity: 0
        }
      ],
      {
        duration: 3000 + Math.random() * 800,
        easing: "cubic-bezier(.1,.8,.3,1)",
        fill: "forwards"
      }
    );

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 2200);
  }
}

  

let bDate = new Date(2010, 8, 23);
let cDate = new Date();

let year = cDate.getFullYear() - bDate.getFullYear();
let birthday = new Date(
  cDate.getFullYear(), bDate.getMonth(), bDate.getDate()
)
if(cDate < birthday){
  year -= 1
}
let months =
  (cDate.getFullYear() - bDate.getFullYear()) * 12 +
  (cDate.getMonth() - bDate.getMonth());
  if (cDate.getDate() < bDate.getDate()) {
  months--;
}
let days = Math.floor((cDate - bDate) / (1000 * 60 * 60 * 24));

let yrs = document.getElementById("yr");
let mon = document.getElementById("mon");
let da = document.getElementById("da")
function displayCir(param) {
  yrs.innerHTML = `${year} <span  class="yearText">Years</span>`;
  mon.innerHTML = `${months} <span  class="yearText">Months</span>`;
  da.innerHTML = `${days} <span  class="yearText">Days</span>`;
  
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }
  })
},
  {
    threshold: 0.5
  }
)
 observer.observe(yrs)
 observer.observe(mon)
 observer.observe(da)
 
 
 function loadng() {
  let i = 5;
  newSv.style.display = "flex";
  mySvg2.style.display = "block";
 let timer = setInterval(() => {
    i--;
    myText2.innerHTML = i;
  }, 1300)
  
  setTimeout(() => {
    clearInterval(timer)
    newSv.style.display = "none";
    sectionC.style.display = "none"
    sectionD.style.display = "flex";
    
  confettiPop()
  aud.currentTime = 0.2;
  aud.play()
  happy.play()
  music.play()
}, 6500)

}


 myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (pWord.value === "1235") {
    secLay();
    
    happy.load();
  happy.play().then(() => {
    happy.pause();
    happy.currentTime = 0;
  });

  aud.load();

aud.play().then(() => {
  aud.pause();
  aud.currentTime = 0.2;
});
music.load();
  music.play().then(() => {
    music.pause();
    music.currentTime = 0;
  });
    loadng()
    sectionC.style.display = "flex"
    
    sectionB.style.display = "none";
  }
  else if (pWord.value === ""){
    myP.innerHTML = "Enter a Value"
    
  }
  else {
    myP.innerHTML = "Incorrect";
    pWord.value = ""
  }
});

displayCir()
 
  class Card {
    constructor(name, speech){
      this.name = name;
      this.speech = speech;
    }
  }
  let cards = [];
  
  let farcy = new Card("Anonymous", "Happy Birthdayyy!  I hope your day is filled with good food, great vibes, lots of laughter, and all the people who make you feel special. Wishing you an amazing year ahead, full of happiness, unforgettable memories, and plenty of success. Enjoy your day and celebrate big!Happy Birthday!❤️🎂🎉")
  let juliet = new Card("Juliet", "Happy birthday 🎉 to the most precious girl of my life long life 💕 😘 and prosperity ❤️more money❤️‍🔥 in ur Azar more calendar to destroy . Enjoy your day to the fullest my love 😘")
let Ahmidat = new Card("Ahmidat", "Happy Birthday, Bae Kaffy! Wishing you a day full of joy and a year full of wins. Thank you for being you — kind, funny, and genuinely one of a kind. You mean so much more to me than words can say. Enjoy your day to the fullest. You deserve it all.")
    cards.push(farcy)
    cards.push(juliet)
    cards.push(Ahmidat)
  function displayCard(){
    
    for(let i = 0; i < cards.length; i++){
      let heade = document.createElement("p")
      heade.className = "heade"
    let foo = document.createElement("p")
    foo.className = "foo"
    let myD = document.createElement('div')
    myD.className = "myD"
      heade.innerText = cards[i].name;
      foo.innerText = cards[i].speech;
    myD.appendChild(heade);
    myD.appendChild(foo);
    sectionE.appendChild(myD);
    
      odser.observe(myD)
      odser.observe(heade)
      odser.observe(foo)
    }
  }
  let odser = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
      entry.target.classList.add("show")
      }
    })
  },
  {
  threshold: 0.3
  })

  displayCard()
  let clicki = document.getElementById("clicki")
  clicki.addEventListener("click", () => {
    sectionE.style.display = "flex";
    keep.style.display = "block"
  })
  keep.addEventListener("click", () => {
    realG.style.display = "flex";
    sectionD.style.display = "none"
    sectionC.style.display = "none"
    sectionE.style.display = "none"
    keep.style.display = "none"
  })
  // Section F
  let startStyle = document.getElementById("startStyle");
  let timer = document.getElementById("timer")
  /*
  function startTime(){
    startStyle.remove();
    let f = 60;
   let bro = setInterval(() => {
      f--;
      timer.innerHTML = f;
      if (f === 0){
      clearInterval(bro)
      sectionF.style.display = "none";
      realG.style.display = "none"
      vidi.play()
    }
    },1000)
    
  }
  startStyle.addEventListener("click",() => {
    sectionF.style.display = "flex";
    timer.classList.add("show")
    startTime();
  })
  */
  // Section E
  const birthdayLanguages = [
  { language: "English", birthday: "Happy Birthday", flag: "🇬🇧" },
  { language: "Spanish", birthday: "Feliz cumpleaños", flag: "🇪🇸" },
  { language: "French", birthday: "Joyeux anniversaire", flag: "🇫🇷" },
  { language: "German", birthday: "Alles Gute zum Geburtstag", flag: "🇩🇪" },
  { language: "Italian", birthday: "Buon compleanno", flag: "🇮🇹" },
  { language: "Portuguese", birthday: "Feliz aniversário", flag: "🇵🇹" },
  { language: "Dutch", birthday: "Fijne verjaardag", flag: "🇳🇱" },
  { language: "Swedish", birthday: "Grattis på födelsedagen", flag: "🇸🇪" },
  { language: "Norwegian", birthday: "Gratulerer med dagen", flag: "🇳🇴" },
  { language: "Danish", birthday: "Tillykke med fødselsdagen", flag: "🇩🇰" },
  { language: "Finnish", birthday: "Hyvää syntymäpäivää", flag: "🇫🇮" },
  { language: "Icelandic", birthday: "Til hamingju með afmælið", flag: "🇮🇸" },
  { language: "Polish", birthday: "Wszystkiego najlepszego z okazji urodzin", flag: "🇵🇱" },
  { language: "Czech", birthday: "Všechno nejlepší k narozeninám", flag: "🇨🇿" },
  { language: "Slovak", birthday: "Všetko najlepšie k narodeninám", flag: "🇸🇰" },
  { language: "Slovenian", birthday: "Vse najboljše za rojstni dan", flag: "🇸🇮" },
  { language: "Croatian", birthday: "Sretan rođendan", flag: "🇭🇷" },
  { language: "Serbian", birthday: "Srećan rođendan", flag: "🇷🇸" },
  { language: "Bosnian", birthday: "Sretan rođendan", flag: "🇧🇦" },
  { language: "Bulgarian", birthday: "Честит рожден ден", flag: "🇧🇬" },
  { language: "Romanian", birthday: "La mulți ani", flag: "🇷🇴" },
  { language: "Hungarian", birthday: "Boldog születésnapot", flag: "🇭🇺" },
  { language: "Greek", birthday: "Χρόνια πολλά", flag: "🇬🇷" },
  { language: "Russian", birthday: "С днём рождения", flag: "🇷🇺" },
  { language: "Ukrainian", birthday: "З днем народження", flag: "🇺🇦" },
  { language: "Belarusian", birthday: "З Днём нараджэння", flag: "🇧🇾" },
  { language: "Lithuanian", birthday: "Su gimtadieniu", flag: "🇱🇹" },
  { language: "Latvian", birthday: "Daudz laimes dzimšanas dienā", flag: "🇱🇻" },
  { language: "Estonian", birthday: "Palju õnne sünnipäevaks", flag: "🇪🇪" },
  { language: "Albanian", birthday: "Gëzuar ditëlindjen", flag: "🇦🇱" },
  { language: "Macedonian", birthday: "Среќен роденден", flag: "🇲🇰" },
  { language: "Turkish", birthday: "Doğum günün kutlu olsun", flag: "🇹🇷" },
  { language: "Arabic", birthday: "عيد ميلاد سعيد", flag: "🇸🇦" },
  { language: "Hebrew", birthday: "יום הולדת שמח", flag: "🇮🇱" },
  { language: "Persian", birthday: "تولدت مبارک", flag: "🇮🇷" },
  { language: "Urdu", birthday: "سالگرہ مبارک", flag: "🇵🇰" },
  { language: "Hindi", birthday: "जन्मदिन मुबारक हो", flag: "🇮🇳" },
  { language: "Bengali", birthday: "শুভ জন্মদিন", flag: "🇧🇩" },
  { language: "Punjabi", birthday: "ਜਨਮਦਿਨ ਮੁਬਾਰਕ", flag: "🇮🇳" },
  { language: "Gujarati", birthday: "જન્મદિવસની શુભેચ્છા", flag: "🇮🇳" },
  { language: "Marathi", birthday: "वाढदिवसाच्या हार्दिक शुभेच्छा", flag: "🇮🇳" },
  { language: "Nepali", birthday: "जन्मदिनको शुभकामना", flag: "🇳🇵" },
  { language: "Sinhala", birthday: "සුභ උපන්දිනයක් වේවා", flag: "🇱🇰" },
  { language: "Tamil", birthday: "பிறந்தநாள் வாழ்த்துக்கள்", flag: "🇮🇳" },
  { language: "Telugu", birthday: "పుట్టినరోజు శుభాకాంక్షలు", flag: "🇮🇳" },
  { language: "Kannada", birthday: "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು", flag: "🇮🇳" },
  { language: "Malayalam", birthday: "ജന്മദിനാശംസകൾ", flag: "🇮🇳" },
  { language: "Odia", birthday: "ଜନ୍ମଦିନର ଶୁଭେଚ୍ଛା", flag: "🇮🇳" },
  { language: "Assamese", birthday: "জন্মদিনৰ শুভেচ্ছা", flag: "🇮🇳" },
  { language: "Chinese", birthday: "生日快乐", flag: "🇨🇳" },
  { language: "Japanese", birthday: "お誕生日おめでとう", flag: "🇯🇵" },
  { language: "Korean", birthday: "생일 축하합니다", flag: "🇰🇷" },
  { language: "Vietnamese", birthday: "Chúc mừng sinh nhật", flag: "🇻🇳" },
  { language: "Thai", birthday: "สุขสันต์วันเกิด", flag: "🇹🇭" },
  { language: "Khmer", birthday: "រីករាយថ្ងៃកំណើត", flag: "🇰🇭" },
  { language: "Lao", birthday: "ສຸກສັນວັນເກີດ", flag: "🇱🇦" },
  { language: "Burmese", birthday: "မွေးနေ့မင်္ဂလာပါ", flag: "🇲🇲" },
  { language: "Indonesian", birthday: "Selamat ulang tahun", flag: "🇮🇩" },
  { language: "Malay", birthday: "Selamat hari jadi", flag: "🇲🇾" },
  { language: "Filipino", birthday: "Maligayang kaarawan", flag: "🇵🇭" },
  { language: "Javanese", birthday: "Sugeng ambal warsa", flag: "🇮🇩" },
  { language: "Sundanese", birthday: "Wilujeng tepang taun", flag: "🇮🇩" },
  { language: "Mongolian", birthday: "Төрсөн өдрийн мэнд хүргэе", flag: "🇲🇳" },
  { language: "Kazakh", birthday: "Туған күніңмен", flag: "🇰🇿" },
  { language: "Uzbek", birthday: "Tug‘ilgan kuningiz bilan", flag: "🇺🇿" },
  { language: "Kyrgyz", birthday: "Туулган күнүң менен", flag: "🇰🇬" },
  { language: "Tajik", birthday: "Зодрӯз муборак", flag: "🇹🇯" },
  { language: "Turkmen", birthday: "Doglan günüň gutly bolsun", flag: "🇹🇲" },
  { language: "Georgian", birthday: "გილოცავ დაბადების დღეს", flag: "🇬🇪" },
  { language: "Armenian", birthday: "Ծնունդդ շնորհավոր", flag: "🇦🇲" },
  { language: "Azerbaijani", birthday: "Ad günün mübarək", flag: "🇦🇿" },
  { language: "Swahili", birthday: "Heri ya siku ya kuzaliwa", flag: "🇰🇪" },
  { language: "Zulu", birthday: "Usuku lokuzalwa oluhle", flag: "🇿🇦" },
  { language: "Xhosa", birthday: "Usuku lokuzalwa olumnandi", flag: "🇿🇦" },
  { language: "Yoruba", birthday: "Ẹ ku ọjọ́ ìbí", flag: "🇳🇬" },
  { language: "Igbo", birthday: "Ezi ụbọchị ọmụmụ", flag: "🇳🇬" },
  { language: "Hausa", birthday: "Barka da ranar haihuwa", flag: "🇳🇬" },
  { language: "Amharic", birthday: "መልካም ልደት", flag: "🇪🇹" },
  { language: "Somali", birthday: "Dhalasho wacan", flag: "🇸🇴" },
  { language: "Afrikaans", birthday: "Gelukkige verjaarsdag", flag: "🇿🇦" },
  { language: "Malagasy", birthday: "Tratry ny tsingerintaona nahaterahana", flag: "🇲🇬" },
  { language: "Hawaiian", birthday: "Hauʻoli lā hānau", flag: "🇺🇸" },
  { language: "Māori", birthday: "Hari huritau", flag: "🇳🇿" },
  { language: "Samoan", birthday: "Manuia lou aso fanau", flag: "🇼🇸" },
  { language: "Tongan", birthday: "Fiefia ʻaho faʻeleʻi", flag: "🇹🇴" },
  { language: "Fijian", birthday: "Marautaki ni siganisucu", flag: "🇫🇯" },
  { language: "Irish", birthday: "Lá breithe shona duit", flag: "🇮🇪" },
  { language: "Welsh", birthday: "Pen-blwydd hapus", flag: "🏴" },
  { language: "Scottish Gaelic", birthday: "Co-là breith sona dhut", flag: "🏴" },
  { language: "Basque", birthday: "Zorionak", flag: "🇪🇸" },
  { language: "Catalan", birthday: "Per molts anys", flag: "🇪🇸" },
  { language: "Galician", birthday: "Feliz aniversario", flag: "🇪🇸" },
  { language: "Esperanto", birthday: "Feliĉan naskiĝtagon", flag: "🌍" },
  { language: "Latin", birthday: "Felix natalis", flag: "🏛️" },
  { language: "Maltese", birthday: "Għeluq is-sena t-tajba", flag: "🇲🇹" },
  { language: "Luxembourgish", birthday: "Alles Guddes fir de Gebuertsdag", flag: "🇱🇺" },
  { language: "Frisian", birthday: "Lokkige jierdei", flag: "🇳🇱" },
  { language: "Estonian", birthday: "Palju õnne sünnipäevaks", flag: "🇪🇪" },
  { language: "Bosnian", birthday: "Sretan rođendan", flag: "🇧🇦" },
  { language: "Kurdish", birthday: "Rojbûna te pîroz be", flag: "🌍" },
  { language: "Pashto", birthday: "د زوکړې ورځ دې مبارک شه", flag: "🇦🇫" },
  { language: "Balochi", birthday: "Rochi tawallod mubarak", flag: "🌍" },
  { language: "Tatar", birthday: "Туган көнең белән", flag: "🇷🇺" },
  { language: "Albanian", birthday: "Gëzuar ditëlindjen", flag: "🇦🇱" },
  { language: "Macedonian", birthday: "Среќен роденден", flag: "🇲🇰" },
  { language: "Slovak", birthday: "Všetko najlepšie k narodeninám", flag: "🇸🇰" },
  { language: "Malayalam", birthday: "ജന്മദിനാശംസകൾ", flag: "🇮🇳" },
  { language: "Aramaic", birthday: "ܝܘܡܐ ܕܝܠܕܐ ܒܪܝܟܐ", flag: "🌍" },
  { language: "Quechua", birthday: "Kusisqa p'unchaw", flag: "🇵🇪" },
  { language: "Guarani", birthday: "Vy'apavẽ nde arambotýre", flag: "🇵🇾" },
  { language: "Haitian Creole", birthday: "Bòn fèt", flag: "🇭🇹" },
  { language: "Jamaican Patois", birthday: "Happy Birthday", flag: "🇯🇲" },
  { language: "Hmong", birthday: "Zoo siab hnub yug", flag: "🌏" },
  { language: "Tibetan", birthday: "འཁྲུངས་སྐར་བཀྲ་ཤིས།", flag: "🇹🇧" },
  { language: "Uyghur", birthday: "تۇغۇلغان كۈنىڭىزگە مۇبارەك بولسۇن", flag: "🌏" },
  { language: "Aymara", birthday: "Aski phaxsi uru", flag: "🇧🇴" },
  { language: "Corsican", birthday: "Felice anniversariu", flag: "🇫🇷" }
];

  let whole = document.getElementById("whole");
  let birthLang = document.getElementById("birthLang");
  let countryLang= document.getElementById("countryLang");
  let forward = document.getElementById("forward");
  let next = document.getElementById("next")
  let current = 0;
  forward.addEventListener("click", () => {
    whole.classList.remove("show")
    
    void whole.offsetWidth;
    current++;
    if(current === birthdayLanguages.length){
      realG.style.display = "none";
      sectionH.style.display = "block";
    }
    
    birthLang.innerHTML = birthdayLanguages[current].birthday;
    countryLang.innerHTML = birthdayLanguages[current ].language + " " + birthdayLanguages[current ].flag
    
    
    whole.classList.add("show")
  })
  next.addEventListener("click", () => {
      realG.style.display = "none";
      sectionH.style.display = "block";
    })
    
    
    //Section H
    let animalName = document.getElementById("animalName");
    let animalDescription = document.getElementById("animalDescription");
    let animalImg = document.getElementById("animalImg");
    let animalModal = document.getElementById("animalModal");
    let centering = document.getElementById("centering");
    let gif1 = document.getElementById("gif1");
    let gif2 = document.getElementById("gif2");
    let gif3 = document.getElementById("gif3")
    function displayMode(name, description){
      animalName.innerHTML = name;
      animalDescription.innerHTML = description;
    }
   gif1.addEventListener("click", () => {
     centering.style.display = "flex"
     animalModal.style.display = "block";
     animalImg.src = "./images/lions.png";
     displayMode("Lion", "Strong, confident, and fearless. You have a natural presence that makes you stand out, and you carry yourself with a quiet strength that people can't ignore. You protect the people you love, never give up when things get difficult, and always find a way to rise above challenges.")
     
   }) 
   gif2.addEventListener("click", () => {
  centering.style.display = "flex"
  animalModal.style.display = "block";
  animalImg.src = "./images/butter.png";
  displayMode("Butterfly", "Gentle, graceful, beautiful, and free-spirited. You have a beautiful way of bringing light and happiness wherever you go. You may seem delicate, but there's a quiet strength within you that helps you adapt, grow, and keep moving forward. 🦋")
  
})
gif3.addEventListener("click", () => {
  centering.style.display = "flex"
  animalModal.style.display = "block";
  animalImg.src = "./images/pea.png";
  displayMode("Peacock", "Elegant, confident, beautiful, and unforgettable. You have a natural way of standing out and bringing color wherever you go. There's something unique about you that makes you impossible to overlook, and your presence leaves a lasting impression on everyone around you. 🦚")
  
})
animalModal.addEventListener("click", () => {
  sectionH.style.display = "none";
  sectionI.style.display = "flex";
})
// Section I
let nAgain = document.getElementById("nAgain");
function showBox(boxN, wish, heading, description) {
  let boxC = document.createElement("p");
  boxC.className = "boxC";
  let boxD = document.createElement("p");
  boxD.className = "boxD";
  let boxE = document.createElement("h2");
  boxE.className = "boxE";
  let boxF = document.createElement("p");
  boxF.className = "boxF";
  let bow = document.createElement("div");
  sectionI.insertBefore(bow, nAgain)
  bow.className = "bow";
  boxC.innerText = boxN;
  boxD.innerText = wish;
  boxE.innerText = heading
  boxF.innerText = description;
  bow.appendChild(boxC);
  bow.appendChild(boxD);
  bow.appendChild(boxE);
  bow.appendChild(boxF);
}
showBox("01","Things I wish for you", "Happiness", "A year full of genuine smiles and beautiful moments.");
showBox("02","Things I wish for you", "Success", "May all the things you're working towards slowly become reality.");
showBox("03","Things I wish for you", "Peace", "I hope you always find peace, even when life gets a little messy.");
showBox("04","Things I wish for you", "Good People", "May you always have people around you who appreciate and respect you.");
showBox("05","Things I wish for you", "Adventure", "I hope this year gives you new places, new experiences, and stories worth telling.");
showBox("06","Things I wish for you", "Confidence", "May you believe in yourself a little more with every step you take.");
showBox("07","Things I wish for you", "Growth", "I hope you become an even better version of yourself this year.");
showBox("08","Things I wish for you", "Opportunities", "May the right opportunities find you when you least expect them.");
showBox("09","Things I wish for you", "Beautiful Memories", "I hope this year gives you moments you'll look back on with a smile.");
showBox("10","Things I wish for you", "A Wonderful Year", "Most of all, I hope this next chapter turns out better than you imagined.");
nAgain.addEventListener("click", () => {
  sectionI.style.display = "none";
  sectionJ.style.display = "flex";
})
let dont = document.getElementById("dont")
dont.addEventListener("click",()=>{
  sectionJ.style.display = "none";
  sectionK.style.display = "flex"
  music.pause()
})