// CuplikCom - Logic & Dynamic Rendering Engine (Anti-AI Slop, High Quality Vanilla JS)
const $ = (s, e = document) => e.querySelector(s);
const $$ = (s, e = document) => [...e.querySelectorAll(s)];
const Q = new URLSearchParams(location.search);
const P = document.body.dataset.page || 'home';

// Helpers
const tgl = d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const ls = (k, v) => {
    try {
        if (v === undefined) return JSON.parse(localStorage.getItem(k));
        localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {
        return null;
    }
};

// Dark mode initialization
const initTheme = () => {
    const saved = ls('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
};
initTheme();

// Components
const th = a => `
    <div class="th" style="--t:${a.tone || '#d9e6dc'}">
        ${a.loc ? `<span class="th-loc">${a.loc}</span>` : ''}
        ${a.img ? `<img src="${a.img}" alt="${a.t}" loading="lazy" onerror="this.remove()">` : ''}
        <b>${(a.c || 'C')[0]}</b>
    </div>
`;

const inner = (a, showExcerpt = false) => `
    <span class="tag">${a.c}</span>
    <h3>${a.t}</h3>
    ${showExcerpt && a.lead ? `<p class="lead-excerpt">${a.lead.slice(0, 110)}…</p>` : ''}
    <time>${tgl(a.d)} · ${a.v ? a.v.toLocaleString('id-ID') : 0} pembaca</time>
`;

const card = a => `<a class="card" href="artikel.html?id=${a.id}">${th(a)}${inner(a, true)}</a>`;
const big = a => `<a class="card big" href="artikel.html?id=${a.id}">${th(a)}${inner(a, true)}</a>`;
const row = a => `<a class="card row" href="artikel.html?id=${a.id}">${th(a)}<div>${inner(a)}</div></a>`;
const kl = k => `<a href="kanal.html?c=${encodeURIComponent(k)}">${k}</a>`;

const user = ls('u');
const SOC = [
    ['FB', 'Facebook', 'https://facebook.com/cupliknews'],
    ['IG', 'Instagram', 'https://instagram.com/cuplikcom'],
    ['X', 'X / Twitter', 'https://twitter.com/cuplikcom'],
    ['YT', 'YouTube', 'https://youtube.com/@cuplikcom'],
    ['WA', 'WhatsApp', 'https://wa.me/6287727030115']
];

const soc = () => SOC.map(s => `<a href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[1]}" title="${s[1]}">${s[0]}</a>`).join('');
const ad = (label, ratio = '8/1') => `<div class="ad" style="aspect-ratio:${ratio}">IKLAN & SPONSOR CUPLIKCOM — ${label}</div>`;

const slider = () => {
    const slides = A.slice(0, 5);
    return `
        <div class="sl">
            <div class="track">
                ${slides.map(a => `
                    <a class="slide" href="artikel.html?id=${a.id}">
                        ${th(a)}
                        <div class="cap">
                            <span class="tag">${a.c}</span>
                            <h3>${a.t}</h3>
                        </div>
                    </a>
                `).join('')}
            </div>
            <button class="sb" data-s="-1" aria-label="Sebelumnya">‹</button>
            <button class="sb r" data-s="1" aria-label="Berikutnya">›</button>
            <div class="dots">
                ${slides.map((_, i) => `<i data-d="${i}" class="${i === 0 ? 'on' : ''}"></i>`).join('')}
            </div>
        </div>
    `;
};

const head = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return `
        <div id="bar"></div>
        <div class="top">
            <div class="w">
                <span>${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · Portal Berita Unik dan Menggelitik</span>
                <div class="top-right">
                    <button class="theme-toggle" id="thm" title="Ubah Tema">${isDark ? '☀ Terang' : '🌙 Gelap'}</button>
                    <span class="soc">${soc()}</span>
                    <span>${user ? `Halo, <b>${user.n}</b> · <a href="#" id="out">Keluar</a>` : '<a href="masuk.html">Masuk / Daftar</a>'}</span>
                </div>
            </div>
        </div>
        <header class="mast">
            <div class="w">
                <a href="index.html" class="logo">
                    <img src="assets/logo.svg" alt="CuplikCom - Beritanya Unik dan Menggelitik">
                </a>
                <button class="burger" id="bg" aria-label="Menu Utama">☰ Menu</button>
                <form class="sf" action="cari.html" method="get">
                    <input name="q" placeholder="Cari berita atau isu daerah…" value="${Q.get('q') || ''}" required>
                    <button type="submit">Cari</button>
                </form>
            </div>
        </header>
        <nav class="main">
            <div class="w">
                <a href="index.html" class="${P === 'home' ? 'on' : ''}">Beranda</a>
                ${KANALS.map(k => `<a href="kanal.html?c=${encodeURIComponent(k)}" class="${Q.get('c') === k ? 'on' : ''}">${k}</a>`).join('')}
                <a href="video.html" class="${P === 'video' ? 'on' : ''}">Video</a>
                <a href="polling.html" class="${P === 'polling' ? 'on' : ''}">Polling</a>
                <a href="kanal.html?c=Index" class="${Q.get('c') === 'Index' ? 'on' : ''}">Index</a>
            </div>
        </nav>
        <div class="tick">
            <b>TERKINI</b>
            <div class="tick-marquee">
                <div>
                    ${A.slice(0, 12).map(a => `<span>▪ <a href="artikel.html?id=${a.id}">${a.t}</a></span>`).join('')}
                </div>
            </div>
        </div>
        <div class="w">${ad('728 × 90 PIXELS (LEADERBOARD)')}</div>
    `;
};

const foot = () => `
    <footer class="foot">
        <div class="w">
            <div>
                <div class="logo">cuplik<span style="color:var(--g)">com</span></div>
                <p><strong>Unik dan Menggelitik</strong> — Portal berita siber independen menyajikan informasi mendalam, aktual, dan berimbang seputar Pantura, nasional, dan global.</p>
                <div class="soc">${soc()}</div>
            </div>
            <div>
                <h4 style="color:#fff;margin-bottom:12px">Kanal Utama</h4>
                ${KANALS.slice(0, 6).map(kl).join('')}
            </div>
            <div>
                <h4 style="color:#fff;margin-bottom:12px">Jelajah</h4>
                ${KANALS.slice(6).map(kl).join('')}
                <a href="video.html">Galeri Video</a>
                <a href="polling.html">Polling Pembaca</a>
            </div>
            <div>
                <h4 style="color:#fff;margin-bottom:12px">Perusahaan</h4>
                <a href="info.html?p=redaksi">Susunan Redaksi</a>
                <a href="info.html?p=pedoman">Pedoman Media Siber</a>
                <a href="info.html?p=disclaimer">Pasal Sanggahan (Disclaimer)</a>
                <a href="info.html?p=iklan">Info Pemasangan Iklan</a>
            </div>
        </div>
        <div class="foot-bottom">
            <div class="w">
                PT. Cuplik Media Center (CMC) · Anggota Serikat Media Siber Indonesia (SMSI) · Hak Cipta Dilindungi Undang-Undang
            </div>
        </div>
    </footer>
`;

const pop = () => `
    <div class="box">
        <h2 class="sec">Terpopuler <span class="sec-sub">Paling Banyak Dibaca</span></h2>
        <ol class="pop">
            ${[...A].sort((a, b) => b.v - a.v).slice(0, 8).map(a => `
                <li><a href="artikel.html?id=${a.id}">${a.t}</a></li>
            `).join('')}
        </ol>
    </div>
`;

const pollIn = () => {
    const v = ls('pv');
    const b = ls('pb') || [34, 48, 26, 19];
    const total = b.reduce((x, y) => x + y, 0);
    return `
        <p><strong>${POLL.q}</strong></p>
        ${POLL.o.map((o, i) => {
            const pct = Math.round((b[i] / total) * 100);
            return `
                <button class="opt" data-v="${i}" ${v != null ? 'disabled' : ''}>
                    ${v != null ? `<i style="width:${pct}%"></i>` : ''}
                    <span>${o} <b>${v != null ? pct + '%' : ''}</b></span>
                </button>
            `;
        }).join('')}
        ${v != null ? `<small>✓ Suara Anda telah tercatat (${total} total partisipan)</small>` : '<small>Klik salah satu opsi untuk memberikan suara</small>'}
    `;
};

const vt = v => `
    <div class="vid" data-yt="${v.yt || ''}">
        <div class="th" style="--t:#1b2b22">
            ${v.dur ? `<span class="th-loc">${v.dur}</span>` : ''}
            <button class="play" aria-label="Putar video">▶</button>
        </div>
        <h3>${v.t}</h3>
        <span class="vid-meta">${v.views ? v.views.toLocaleString('id-ID') + ' views · ' : ''}${tgl(v.date)}</span>
    </div>
`;

const tags = () => TAGS.map(t => `<a class="chip" href="cari.html?q=${encodeURIComponent(t)}">#${t}</a>`).join('');

const curhatWidget = () => `
    <div class="box">
        <h2 class="sec">Curhat Rakyat <span class="sec-sub">Aspirasi Warga</span></h2>
        ${CURHAT.slice(0, 3).map(c => `
            <div class="curhat-item">
                <h4>${c.judul}</h4>
                <p>“${c.isi}”</p>
                <small>${c.nama} · ${c.lokasi}</small>
            </div>
        `).join('')}
    </div>
`;

function pager(list, container, btn, count, renderer) {
    let cursor = 0;
    const loadNext = () => {
        const slice = list.slice(cursor, cursor + count);
        container.insertAdjacentHTML('beforeend', slice.map(renderer).join(''));
        cursor += count;
        if (btn) btn.hidden = cursor >= list.length;
    };
    if (btn) btn.onclick = loadNext;
    loadNext();
}

// Router Pages
const pages = {
    home: () => `
        <div class="w">
            <div class="hero">
                ${slider()}
                <div class="side">
                    ${A.slice(5, 8).map(row).join('')}
                </div>
            </div>
            <div class="layout">
                <section>
                    <h2 class="sec">Berita Terbaru <span class="sec-sub">Kabar Terkini Pantura & Nasional</span></h2>
                    <div class="list" id="ls"></div>
                    <p style="text-align:center;margin-top:32px">
                        <button class="btn" id="more">Muat Lebih Banyak Berita</button>
                    </p>
                </section>
                <aside>
                    ${pop()}
                    ${ad('300 × 250 PIXELS (SIDEBAR)', '6/5')}
                    <div class="box">
                        <h2 class="sec">Polling Cuplik</h2>
                        <div class="poll">${pollIn()}</div>
                    </div>
                    <div class="box">
                        <h2 class="sec">Video Cuplik</h2>
                        ${V.slice(0, 2).map(vt).join('')}
                    </div>
                    ${curhatWidget()}
                    <div class="box">
                        <h2 class="sec">Tag Populer</h2>
                        ${tags()}
                    </div>
                </aside>
            </div>
        </div>
    `,

    kanal: () => {
        const c = Q.get('c') || 'Index';
        const isAll = c === 'Index';
        const filtered = isAll ? A : A.filter(a => a.c.toLowerCase() === c.toLowerCase());
        return `
            <div class="w">
                <div class="head">
                    <div>
                        <h1>Kanal: ${c}</h1>
                        <p style="color:var(--text-muted);margin:4px 0 0">${filtered.length} artikel terindeks pada kanal ini</p>
                    </div>
                    <select id="srt">
                        <option value="d">Urutkan: Terbaru</option>
                        <option value="v">Urutkan: Terpopuler</option>
                    </select>
                </div>
                <div class="grid3" id="gr"></div>
                <p id="emp" ${filtered.length > 0 ? 'hidden' : ''} style="text-align:center;padding:40px;color:var(--text-muted)">
                    Belum ada artikel pada kanal ini.
                </p>
                <p style="text-align:center;margin:36px 0">
                    <button class="btn" id="more" ${filtered.length <= 6 ? 'hidden' : ''}>Muat Lebih Banyak</button>
                </p>
            </div>
        `;
    },

    artikel: () => {
        const id = parseInt(Q.get('id'), 10);
        const a = A.find(x => x.id === id) || A[0];
        if (!a) return pages.nf();

        const related = A.filter(x => x.c === a.c && x.id !== a.id)
            .concat(A.filter(x => x.c !== a.c && x.id !== a.id))
            .slice(0, 4);

        document.title = `${a.t} — CuplikCom`;

        const shareUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(`${a.t} via CuplikCom:`);

        return `
            <div class="w">
                <article class="art">
                    <div class="art-crumbs">
                        <a href="index.html">Beranda</a> &rsaquo; 
                        <a href="kanal.html?c=${encodeURIComponent(a.c)}">${a.c}</a> &rsaquo; 
                        <span>Detail Artikel</span>
                    </div>

                    <a class="tag" href="kanal.html?c=${encodeURIComponent(a.c)}">${a.c}</a>
                    <h1>${a.t}</h1>

                    <div class="art-meta-box">
                        <div class="art-author">
                            <div class="author-avatar">${(a.author || 'C')[0]}</div>
                            <div>
                                <div><strong>${a.author || 'Pewarta CMC'}</strong> ${a.loc ? `· <em>${a.loc}</em>` : ''}</div>
                                <time style="margin:0">${tgl(a.d)}</time>
                            </div>
                        </div>
                        <div class="art-stats">
                            <span>👁 ${a.v ? a.v.toLocaleString('id-ID') : 0} dibaca</span>
                            <span>⏱ ~${a.readTime || 2} mnt baca</span>
                        </div>
                    </div>

                    <div class="tools">
                        <button id="fm" title="Perkecil huruf">A−</button>
                        <button id="fr" title="Ukuran standar">A</button>
                        <button id="fp" title="Perbesar huruf">A+</button>
                        <a class="wa" target="_blank" href="https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}">Share WhatsApp</a>
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}">Facebook</a>
                        <a target="_blank" href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}">X</a>
                        <button id="cp">Salin Tautan</button>
                    </div>

                    ${th(a)}

                    <div class="body" id="bd">
                        ${a.body ? a.body.map(p => `<p>${p}</p>`).join('') : `<p>${a.lead || ''}</p>`}
                        ${ad('640 × 160 PIXELS (IN-ARTICLE SPONSOR)', '16/4')}
                    </div>

                    <div class="art-tags">
                        <b>Topik Terkait:</b>
                        ${(a.tags || [a.c, 'Pantura', 'Berita']).map(t => `<a class="chip" href="cari.html?q=${encodeURIComponent(t)}">#${t}</a>`).join('')}
                    </div>

                    <div class="comm-section">
                        <h2 class="sec">Suara Pembaca / Curhat Terkait</h2>
                        <form class="comm-form" id="cf">
                            <input class="f" name="cn" placeholder="Nama Anda" required>
                            <textarea name="ct" placeholder="Tuliskan tanggapan, opini, atau keluhan Anda terkait berita ini..." required></textarea>
                            <button class="btn" type="submit">Kirim Tanggapan</button>
                        </form>
                        <div class="comm-list" id="cl"></div>
                    </div>

                    <h2 class="sec" style="margin-top:44px">Baca Berita Terkait Lainnya</h2>
                    <div class="list">
                        ${related.map(row).join('')}
                    </div>
                </article>
            </div>
        `;
    },

    cari: () => {
        const q = (Q.get('q') || '').trim();
        return `
            <div class="w">
                <div class="head">
                    <div>
                        <h1>Pencarian Berita</h1>
                        <p id="cnt" style="color:var(--text-muted);margin-top:4px"></p>
                    </div>
                </div>
                <div class="grid3" id="gr"></div>
                <p id="emp" hidden style="text-align:center;padding:50px;color:var(--text-muted)">
                    Tidak ada berita yang cocok dengan kata kunci yang Anda masukkan.
                </p>
            </div>
        `;
    },

    video: () => `
        <div class="w">
            <div class="head">
                <div>
                    <h1>Galeri Video Cuplik</h1>
                    <p style="color:var(--text-muted);margin-top:4px">Liputan visual eksklusif, hiburan rakyat, seni budaya, dan wawancara khusus.</p>
                </div>
            </div>
            <div class="grid3">
                ${V.map(vt).join('')}
            </div>
        </div>
    `,

    polling: () => `
        <div class="w">
            <div class="head">
                <div>
                    <h1>Polling & Aspirasi Publik</h1>
                    <p style="color:var(--text-muted);margin-top:4px">Kanal survei opini pembaca CuplikCom terhadap isu krusial daerah dan nasional.</p>
                </div>
            </div>
            <div class="box" style="max-width:640px;margin:30px auto">
                <div class="poll">${pollIn()}</div>
            </div>
        </div>
    `,

    masuk: () => `
        <div class="w">
            <div class="box" style="max-width:440px;margin:40px auto;border-radius:4px">
                <div class="tabs">
                    <button class="btn on" data-t="0">Masuk</button>
                    <button class="btn" data-t="1">Daftar Akun</button>
                </div>
                <form id="fm1">
                    <input class="f" name="n" placeholder="Nama Lengkap" hidden>
                    <input class="f" name="e" type="email" placeholder="Alamat Email" required>
                    <input class="f" name="s" type="password" placeholder="Kata Sandi (min. 6 karakter)" minlength="6" required>
                    <button class="btn" style="width:100%">Lanjutkan</button>
                    <div class="msg" id="ms"></div>
                </form>
            </div>
        </div>
    `,

    info: () => {
        const p = Q.get('p') || 'redaksi';
        const infoObj = INFO[p] || INFO.redaksi;
        return `
            <div class="w">
                <div class="head">
                    <div>
                        <h1>${infoObj.title}</h1>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap">
                        <a class="btn ${p === 'redaksi' ? '' : 'btn-secondary'}" href="info.html?p=redaksi">Redaksi</a>
                        <a class="btn ${p === 'pedoman' ? '' : 'btn-secondary'}" href="info.html?p=pedoman">Pedoman Siber</a>
                        <a class="btn ${p === 'disclaimer' ? '' : 'btn-secondary'}" href="info.html?p=disclaimer">Disclaimer</a>
                        <a class="btn ${p === 'iklan' ? '' : 'btn-secondary'}" href="info.html?p=iklan">Info Iklan</a>
                    </div>
                </div>
                <article class="art" style="margin:20px auto">
                    <div class="body">
                        ${infoObj.content}
                    </div>
                </article>
            </div>
        `;
    },

    nf: () => `
        <div class="w">
            <div class="art" style="text-align:center;padding:60px 0">
                <h1 style="font-size:110px;color:var(--r);margin-bottom:10px">404</h1>
                <h2>Halaman Tidak Ditemukan</h2>
                <p class="body" style="font-size:17px;color:var(--text-muted)">Halaman yang Anda tuju mungkin telah dipindahkan atau tautan sudah tidak aktif.</p>
                <p><a class="btn" href="index.html">Kembali ke Beranda CuplikCom</a></p>
            </div>
        </div>
    `
};

// Render Main Layout
$('#app').innerHTML = head() + '<main>' + (pages[P] || pages.nf)() + '</main>' + foot();

// Theme Toggle Action
const thm = $('#thm');
if (thm) {
    thm.onclick = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            ls('theme', 'light');
            thm.textContent = '🌙 Gelap';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            ls('theme', 'dark');
            thm.textContent = '☀ Terang';
        }
    };
}

// Auth Actions
const out = $('#out');
if (out) {
    out.onclick = e => {
        e.preventDefault();
        localStorage.removeItem('u');
        location.reload();
    };
}

// Global Event Listeners (Polling & Video)
document.addEventListener('click', e => {
    // Polling Click
    const opt = e.target.closest('[data-v]');
    if (opt && ls('pv') == null) {
        const b = ls('pb') || [34, 48, 26, 19];
        b[+opt.dataset.v]++;
        ls('pb', b);
        ls('pv', +opt.dataset.v);
        $$('.poll').forEach(p => p.innerHTML = pollIn());
    }

    // Video Play Click
    const pl = e.target.closest('.play');
    if (pl) {
        const vid = pl.closest('.vid');
        const ytId = vid.dataset.yt;
        if (ytId) {
            vid.firstElementChild.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        } else {
            alert('Video ini bersumber dari arsip live streaming CuplikCom.');
        }
    }
});

// Page Specific Initializations
if (P === 'home') {
    pager(A.slice(8), $('#ls'), $('#more'), 6, row);

    // Hero Slider logic
    const tr = $('.track');
    if (tr) {
        const ds = $$('.dots i');
        const n = ds.length;
        let idx = 0;
        let isHover = false;

        const goTo = k => {
            idx = (k + n) % n;
            tr.style.transform = `translateX(-${idx * 100}%)`;
            ds.forEach((d, j) => d.classList.toggle('on', j === idx));
        };

        $$('[data-s]').forEach(b => b.onclick = () => goTo(idx + +b.dataset.s));
        ds.forEach(d => d.onclick = () => goTo(+d.dataset.d));

        const sl = $('.sl');
        if (sl) {
            sl.onmouseenter = () => isHover = true;
            sl.onmouseleave = () => isHover = false;
        }

        goTo(0);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInterval(() => {
                if (!isHover) goTo(idx + 1);
            }, 6000);
        }
    }
}

if (P === 'kanal') {
    const c = Q.get('c') || 'Index';
    const isAll = c === 'Index';
    const list = isAll ? A : A.filter(a => a.c.toLowerCase() === c.toLowerCase());

    const runKanal = () => {
        const sortVal = $('#srt').value;
        const sorted = [...list].sort((a, b) => sortVal === 'v' ? b.v - a.v : b.d.localeCompare(a.d));
        $('#gr').innerHTML = '';
        $('#emp').hidden = sorted.length > 0;
        pager(sorted, $('#gr'), $('#more'), 6, card);
    };

    $('#srt').onchange = runKanal;
    runKanal();
}

if (P === 'cari') {
    const runSearch = () => {
        const query = (Q.get('q') || $('.sf input').value || '').trim().toLowerCase();
        const matches = query
            ? A.filter(a => (a.t + ' ' + a.c + ' ' + (a.tags || []).join(' ') + ' ' + (a.body || []).join(' ')).toLowerCase().includes(query))
            : [];

        $('#cnt').textContent = query ? `${matches.length} berita ditemukan untuk kata kunci “${query}”` : 'Silakan masukkan kata kunci pencarian.';
        $('#gr').innerHTML = matches.map(card).join('');
        $('#emp').hidden = matches.length > 0;
    };

    $('.sf input').oninput = runSearch;
    runSearch();
}

if (P === 'artikel') {
    const bd = $('#bd');
    if (bd) {
        let currentSize = ls('fz') || 19;
        const setSize = delta => {
            currentSize = delta ? Math.min(26, Math.max(15, currentSize + delta)) : 19;
            bd.style.fontSize = currentSize + 'px';
            ls('fz', currentSize);
        };
        bd.style.fontSize = currentSize + 'px';

        $('#fm').onclick = () => setSize(-2);
        $('#fr').onclick = () => setSize(0);
        $('#fp').onclick = () => setSize(2);

        $('#cp').onclick = e => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(location.href);
                e.target.textContent = 'Tersalin ✓';
                setTimeout(() => e.target.textContent = 'Salin Tautan', 2500);
            }
        };

        window.addEventListener('scroll', () => {
            const bar = $('#bar');
            if (bar) {
                const totalH = document.body.scrollHeight - window.innerHeight;
                bar.style.width = totalH > 0 ? (window.scrollY / totalH) * 100 + '%' : '0%';
            }
        });

        // Article Local Comments
        const artId = Q.get('id') || '1';
        const comKey = `comm_${artId}`;
        const renderComms = () => {
            const list = ls(comKey) || [
                { n: 'H. Sudirman', t: 'Informasi yang sangat berimbang dan aktual. Terima kasih CuplikCom!', d: '2026-10-02' }
            ];
            const cl = $('#cl');
            if (cl) {
                cl.innerHTML = list.map(c => `
                    <div class="comm-bubble">
                        <b>${c.n}</b> <time>${c.d}</time>
                        <p style="margin:4px 0 0">${c.t}</p>
                    </div>
                `).join('');
            }
        };

        renderComms();

        const cf = $('#cf');
        if (cf) {
            cf.onsubmit = e => {
                e.preventDefault();
                const list = ls(comKey) || [];
                list.unshift({
                    n: cf.cn.value.trim(),
                    t: cf.ct.value.trim(),
                    d: new Date().toLocaleDateString('id-ID')
                });
                ls(comKey, list);
                cf.reset();
                renderComms();
            };
        }
    }
}

if (P === 'masuk') {
    let mode = 0;
    const f = $('#fm1');
    const nameInput = f.n;
    const msg = $('#ms');

    $$('[data-t]').forEach(btn => {
        btn.onclick = () => {
            mode = +btn.dataset.t;
            nameInput.hidden = !mode;
            nameInput.required = !!mode;
            $$('[data-t]').forEach(x => x.classList.toggle('on', x === btn));
            msg.textContent = '';
        };
    });

    f.onsubmit = e => {
        e.preventDefault();
        const accounts = ls('acc') || {};
        const email = f.e.value.toLowerCase().trim();

        if (mode) {
            if (accounts[email]) {
                msg.textContent = 'Alamat email ini sudah terdaftar.';
                return;
            }
            accounts[email] = { n: nameInput.value.trim(), s: f.s.value };
            ls('acc', accounts);
            ls('u', { n: accounts[email].n, e: email });
            location.href = 'index.html';
        } else {
            if (!accounts[email] || accounts[email].s !== f.s.value) {
                msg.textContent = 'Email atau kata sandi tidak cocok.';
                return;
            }
            ls('u', { n: accounts[email].n, e: email });
            location.href = 'index.html';
        }
    };
}

// Mobile Drawer
const bg = $('#bg');
if (bg) {
    bg.onclick = () => $('nav.main').classList.toggle('open');
}
