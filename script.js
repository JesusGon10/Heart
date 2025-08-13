var c = document.getElementById('alx');
var a = c.getContext('2d');

e = [];
h = [];
WIDTH = c.width = innerWidth;
HEIGHT = c.height = innerHeight;
v = 32 + 16 + 8;
R = Math.random;
C = Math.cos;
Y = 6.3;

// Lista de "Te amo" en más de 100 idiomas
var frases = [
"Te amo","I love you","Je t’aime","Ich liebe dich","Ti amo","Eu te amo","Я тебя люблю","我爱你","愛してる","사랑해",
"أحبك","मैं तुमसे प्यार करता हूँ","আমি তোমাকে ভালোবাসি","ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ","میں تم سے محبت کرتا ہوں","Seni seviyorum",
"دوستت دارم","אני אוהב אותך","Σ’ αγαπώ","Ik hou van jou","Jag älskar dig","Jeg elsker deg","Jeg elsker dig","Rakastan sinua",
"Ég elska þig","Kocham cię","Miluji tě","Ľúbim ťa","Szeretlek","Te iubesc","Обичам те","Волим те","Volim te","Ljubim te",
"Те сакам","Të dua","Es tevi mīlu","Aš tave myliu","Ma armastan sind","Inħobbok","Taim i’ ngra leat","Rwy’n dy garu di",
"Tha gaol agam ort","T’estimo","Maite zaitut","Kuyayki","Muntaña","Rohayhu","Nimitztlazohtla","Nadxié lidxhii","Nda’a ñu’u",
"Gí hñuntsi","In k’áatech","K’ut ri in k’ulmataj","Nugía wabürebu","Nakupenda","እወድሃለሁ","ኣዝየ ሓፍተይ","Waan ku jeclahay",
"Ngiyakuthanda","Ndiyakuthanda","Kea u rata","Ke a go rata","Ndinokuda","Ina son ku","Mo nifẹ rẹ","A hụrụ m gị n’anya",
"Nalingi yo","Ndagukunda","Ndagukunda","Saya cinta kamu","Aku cinta kamu","Mahal kita","Gihigugma tika","Ay-ayaten ka",
"Anh yêu em","ฉันรักคุณ","ຂ້ອຍຮັກເຈົ້າ","မင်းကိုချစ်တယ်","ខ្ញុំស្រលាញ់អ្នក","Би чамд хайртай","Мен сені сүйемін","Мен сени сүйөм",
"Men seni sevaman","Men seni söýýärin","زه تا سره مینه لرم","நான் உன்னை காதலிக்கிறேன்","నేను నిన్ను ప్రేమిస్తున్నాను","ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ",
"ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു","मी तुझ्यावर प्रेम करतो","હું તને પ્રેમ કરું છું","مان تو سان محبت ڪريان ٿو","මම ඔයාට ආදරෙයි","म तिमीलाई माया गर्छु",
"ང་ཁྱེད་ལ་དགའ་པོ་ཡོད།","ང་ཁྱེད་ལ་དགའ་བ","Tiako ianao","Hu guaiya hao","Au domoni iko","‘Ofa atu","Ou te alofa ia te oe",
"Aroha ahau ki a koe","Aloha wau iā ‘oe","Mwen renmen ou","N kre bu","Mi amas vin","Io ama te","Te amo"
];

// Crear partículas para la lluvia de frases
var lluvia = [];
for (let i = 0; i < frases.length; i++) {
    lluvia.push({
        texto: frases[i],
        x: R() * WIDTH,
        y: R() * HEIGHT,
        vel: 0.3 + R() * 0.7,
        color: `hsl(${R()*20}, 100%, ${40+R()*20}%)`
    });
}

// Generar puntos del corazón
for (i = 0; i < Y ; i += 0.2) 
    h.push([WIDTH / 2  + 210 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

for (i = 0; i < Y  ; i += 0.4) 
    h.push([WIDTH / 2  + 150 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

for (i = 0; i < Y  ; i += 0.8) 
    h.push([WIDTH / 2  + 90 * Math.pow(Math.sin(i), 3), 
      HEIGHT / 2  + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

for (i = 0; i < v;) {
    x = R() * WIDTH;
    y = R() * HEIGHT;
    H = 80 * (i / v) + Math.random * 100;
    S = 40 * R() + 60;
    B = 60 * R() + 20;
    f = [];
    for (k = 0; k < v;) f[k++] = {
        x: x,
        y: y,
        X: 0,
        Y: 0,
        R: 1 - k / v + 1,
        S: R() + 1,
        q: ~~(R() * v),
        D: 2 * (i % 2) - 1,
        F: 0.2 * R() + 0.7,
        f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
    };
    e[i++] = f
}

function path(d) {
    a.fillStyle = d.f;
    a.beginPath();
    a.arc(d.x, d.y, d.R, 0, Y, 1);
    a.closePath();
    a.fill()
}

setInterval(function () {
    a.fillStyle = "rgba(0,0,0,0.2)";
    a.fillRect(0, 0, WIDTH, HEIGHT);

    // Lluvia de frases
    a.font = "16px Arial";
    a.textAlign = "center";
    for (let drop of lluvia) {
        a.fillStyle = drop.color;
        a.fillText(drop.texto, drop.x, drop.y);
        drop.y += drop.vel;
        if (drop.y > HEIGHT) {
            drop.y = -20;
            drop.x = R() * WIDTH;
        }
    }

    // Animación del corazón
    for (i = v; i--;) {
        f = e[i];
        u = f[0];
        q = h[u.q];
        D = u.x - q[0];
        E = u.y - q[1];
        G = Math.sqrt(D * D + E * E);
        10 > G && (0.95 < R() ? u.q = ~~ (R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
        u.X += -D / G * u.S;
        u.Y += -E / G * u.S;
        u.x += u.X;
        u.y += u.Y;
        path(u);
        u.X *= u.F;
        u.Y *= u.F;
        for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
    }

    // Texto central con efecto de latido
    let scale = 1 + 0.05 * Math.sin(Date.now() / 200);
    a.save();
    a.translate(WIDTH / 2, HEIGHT / 2);
    a.scale(scale, scale);
    a.fillStyle = "white";
    a.font = "bold 26px Arial";
    a.textAlign = "center";
    a.fillText("Más de 100 maneras de decirlo", 0, 0);
    a.fillText("y solo quiero que sean para ti", 0, 30);
    a.restore();

}, 25);