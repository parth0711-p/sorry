/* =====================================================
   EDIT THIS PART ONLY — everything else just works
   ===================================================== */
const CFG = {
  her: "Babygirl",          // her pet name
  him: "Your Mister",       // how you sign off

  // Cards: use an image (put it in assets/images/) or leave img:"" to show the emoji
  cards: [
    { top: "FOR YOU",  emo: "🐻💐", img: "", cap: "Some flowers for you" },
    { top: "",         emo: "🪧🐻", img: "", cap: "Love you" },
    { top: "",         emo: "🥺👉👈", img: "", cap: "Please forgive me hehe" },
    { top: "I ♥ YOU",  emo: "💌",   img: "", cap: "I ♥ You Card" }
  ],

  // Songs: Spotify track IDs (the part after /track/ in a Spotify link).
  // To add a song: open it on Spotify -> Share -> Copy link -> paste the ID here.
  songs: [
    { t: "Tum Hi Ho",     a: "Arijit Singh",                          id: "7LfIX3DCzl3AtGJWlCKOKK" },
    { t: "Dagabaaz Re",   a: "Rahat Fateh Ali Khan, Shreya Ghoshal",  id: "6MudETKykE31rz3v2DOHa0" },
    { t: "Yeh Fitoor Mera", a: "Arijit Singh",                        id: "6Mb62Ep2HBNDR7GxXOuSch" }
  ]
};
/* ===================================================== */

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
$("#herName").textContent = CFG.her.toUpperCase() + " ✦";
$$(".herName").forEach(e => e.textContent = CFG.her);
$$(".himName").forEach(e => e.textContent = CFG.him);

/* ---------- navigation ---------- */
const scr = $$(".screen"); let i = 0, won = false;
function go(n) {
  i = Math.max(0, Math.min(scr.length - 1, n));
  scr.forEach((s, k) => s.classList.toggle("on", k === i));
  $("#back").disabled = i === 0;
  $("#next").disabled = i === scr.length - 1 || (i === 1 && !won);
  if (i === scr.length - 1) rain();
  if (i === 4) startSong(); else stopSong();
}
$("#back").onclick = () => go(i - 1);
$("#next").onclick = () => go(i + 1);

/* ---------- tic-tac-toe: fill the centre heart to continue ---------- */
const layout = ["h","x","x","x","","x","x","x","h"], cells = [];
layout.forEach((v, k) => {
  const c = document.createElement("button");
  c.className = "cell";
  c.textContent = v === "h" ? "❤" : v === "x" ? "✕" : "";
  c.onclick = () => {
    if (k !== 4 || won) return;
    c.textContent = "❤"; won = true;
    [0, 4, 8].forEach(j => cells[j].classList.add("win"));
    $("#gameHint").textContent = "You win my heart 💖";
    $("#gameMsg").textContent = "I'm all yours. Every single time.";
    rain(); $("#next").disabled = false;
    setTimeout(() => { if (i === 1) go(2); }, 1800);
  };
  cells.push(c); $("#grid").appendChild(c);
});

/* ---------- special cards ---------- */
let ci = 0;
function card() {
  const c = CFG.cards[ci];
  $("#cTop").textContent = c.top;
  $("#cEmo").textContent = c.img ? "" : c.emo;
  $$(".frame img.pic").forEach(x => x.remove());
  if (c.img) { const im = document.createElement("img"); im.className = "pic"; im.src = c.img; im.alt = c.cap; $(".frame").prepend(im); }
  $("#cCap").textContent = c.cap;
}
$("#cNext").onclick = () => { ci = (ci + 1) % CFG.cards.length; card(); };
$("#cPrev").onclick = () => { ci = (ci - 1 + CFG.cards.length) % CFG.cards.length; card(); };
card();

/* ---------- songs: Spotify embeds ---------- */
let si = 0;
const sp = $("#sp");
function showSong(play) {
  const s = CFG.songs[si];
  $("#title").textContent = s.t; $("#artist").textContent = s.a;
  $("#nowTag").textContent = `› SONG ${si + 1} OF ${CFG.songs.length} ‹`;
  $("#dots").innerHTML = CFG.songs.map((_, k) => `<i class="${k === si ? "on" : ""}"></i>`).join("");
  sp.src = play ? `https://open.spotify.com/embed/track/${s.id}?utm_source=generator` : "about:blank";
}
function startSong() { showSong(true); }
function stopSong() { sp.src = "about:blank"; }   // stops the music when she leaves this page
$("#skip").onclick = () => { si = (si + 1) % CFG.songs.length; showSong(true); };
$("#prev").onclick = () => { si = (si - 1 + CFG.songs.length) % CFG.songs.length; showSong(true); };

/* ---------- floating hearts ---------- */
function rain() {
  for (let k = 0; k < 22; k++) {
    const h = document.createElement("div");
    h.className = "heart"; h.textContent = ["❤️", "💖", "💕", "🌸"][k % 4];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 20 + "px";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    h.style.animationDelay = Math.random() * 1.2 + "s";
    document.body.appendChild(h); setTimeout(() => h.remove(), 7000);
  }
}
go(0);
