// Data contoh. Tambahkan properti img:'url-foto' pada tiap berita untuk foto asli. Ganti dengan API/CMS cuplikcom. Isi 'yt' dengan ID video YouTube agar video bisa diputar.
const T=['#d9e6dc','#e8dede','#dde3e0','#e6e6e0','#d8e0d9','#e9e2dc'];
const A=[
['Lakpesdam PCNU Indramayu Dorong Siapkan Perdes Pencegahan dan Penanganan Perkawinan Anak','Sosial','2026-09-30',980],
['Kritik Muktamar Diancam Sanksi, Kang Ejat: Jangan Sampai Partai Jadi Alat Membungkam Nurani Warga NU','Politik','2026-09-27',860],
['Diduga Peras Perangkat Desa Rp3 Juta, Dua Pria yang Mengaku Wartawan Diamankan Polisi','Hukum','2026-09-28',1200],
['Pemkab Lampung Selatan Terapkan Sidak Acak, ASN Mangkir Apel Terancam Sanksi','Ragam','2026-09-28',640],
['Lampung Selatan Raih Peringkat Ketiga PPD 2026 Tingkat Nasional','Ragam','2026-09-30',720],
['Kepengurusan DPD LPM Lamsel Terbentuk, Perkuat Ruang Aspirasi Warga dalam Pembangunan','Ragam','2026-09-30',410],
['Para Juara 4 Wilayah Bersaing Adu Kekuatan di Bupati Cup 2026, Panggung Terbaik Bola Voli Lamsel','Bola','2026-09-30',530],
['Tingkatkan Respon Cepat, Polsek Lusangi Pasang Stiker Layanan Kepolisian di Desa Santing','Hukum','2026-09-30',380],
['Karang Taruna Got Talent 2026 Buka Panggung bagi Talenta Muda Lampung Selatan','Ragam','2026-09-29',450],
['Pemerintah Tetapkan Prosedur Penggantian Penerima Bantuan Pangan Beras Periode Juli–September 2026','Ekonomi','2026-09-29',1500],
['Polindra Terapkan Teknologi IoT','Iptek','2026-09-29',330],
['Kunjungan IWO Kota Tegal di Biliard 101','Gaya Hidup','2026-09-28',290],
['Sikap PT FPJ Bikin Geram, BPD dan Karang Taruna Muntur Siapkan Unras 1.000 Massa','Sosial','2026-09-27',1100]
].map((a,i)=>({id:i+1,t:a[0],c:a[1],d:a[2],v:a[3],tone:T[i%6]}));
const V=[{t:'Istri Calon Bupati Indramayu nomor urut 3, Kunjungi Ketua Sikandi Brigade 08',yt:''},{t:'Organ NEW ARIMBI | Wedding Of Hilmi & Indah | Tugu-Sliyeg',yt:''}];
const TAGS=['Pendidikan','Kuliner','Bumdesa','Timnas','Liga Inggris','Olahraga','Pilkada 2024','Piala Dunia 2026'];

// Jembatan CMS: berita berstatus Terbit dan video Tayang dari CMS (admin/) otomatis tampil di portal.
(function(){try{const r=JSON.parse(localStorage.getItem('cms_berita'));if(r&&r.length){const L=r.filter(x=>x.status=='Terbit').sort((a,b)=>b.tanggal.localeCompare(a.tanggal)||b.id-a.id);if(L.length){A.length=0;L.forEach((x,i)=>A.push({id:x.id,t:x.judul,c:x.kategori,d:x.tanggal,v:x.dibaca||0,tone:T[i%6],img:x.foto||'',isi:x.isi||''}))}}
const v=JSON.parse(localStorage.getItem('cms_video'));if(v&&v.length){const L=v.filter(x=>x.status=='Tayang');if(L.length){V.length=0;L.forEach(x=>V.push({t:x.judul,yt:((x.link||'').match(/(?:youtu\.be\/|v=)([\w-]{11})/)||[])[1]||''}))}}}catch(e){}})();
