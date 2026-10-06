# 💌 I'm Sorry — a little website for my girlfriend

A mobile-first apology site: intro → heart game → letter → special cards → songs → thank-you.
No build tools, no installs. Just HTML, CSS and JavaScript.

## Files
```
index.html      page structure
style.css       colours, fonts, layout
script.js       ★ edit the CFG block at the top (names, cards, songs)
assets/images/  put card pictures / album covers here
```

## 1. Personalise it (2 minutes)
Open `script.js` and change the `CFG` block at the top:
- `her` → her pet name, `him` → how you sign off.
- To change the letter text, open `index.html` and edit the paragraph inside the "A Letter" section.
- `cards` → captions, emoji, or `img: "assets/images/card1.png"` for your own pictures.
- `songs` → Spotify songs are already added. To change one, copy its ID from the Spotify share link (`open.spotify.com/track/THIS_PART`) into `id`.

## 2. Test locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.
(The Spotify player needs the local server or the live site; it may not load if you just double-click the file.)

## 3. Put it on GitHub Pages (free link)
1. Create a new repository on github.com (e.g. `sorry`), set it to **Public**.
2. Click **Add file → Upload files**, drag in everything from this folder (including `assets` and `.nojekyll`), and **Commit**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After about a minute your site is live at `https://YOUR-USERNAME.github.io/sorry/`.

## 4. Send it like the reel
Paste your link into any free QR code generator, then send her the QR image (or just the link). 

Note: the full song plays only if she is logged in to Spotify; otherwise Spotify plays a 30-second preview.
