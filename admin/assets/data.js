// Data contoh. Semua data disimpan di localStorage (awalan cms_). Ganti dengan API server.
const CATS=['Politik','Sosial','Hukum','Ekonomi','Ragam','Luar Negeri','Iptek','Gaya Hidup','Bola','Video'];
const dt=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10);
const SEED={
berita:[
['Lakpesdam PCNU Indramayu Dorong Siapkan Perdes Pencegahan dan Penanganan Perkawinan Anak','Sosial','Ismail','Baebudin',0,'Terbit',980],
['Kritik Muktamar Diancam Sanksi, Kang Ejat: Jangan Sampai Partai Jadi Alat Membungkam Nurani Warga NU','Politik','Almak','Opini',1,'Terbit',860],
['Diduga Peras Perangkat Desa Rp3 Juta, Dua Pria yang Mengaku Wartawan Diamankan Polisi','Hukum','Baebudin','Baebudin',1,'Terbit',1200],
['Pemkab Lampung Selatan Terapkan Sidak Acak, ASN Mangkir Apel Terancam Sanksi','Ragam','Baebudin','Ismail',2,'Terbit',640],
['Lampung Selatan Raih Peringkat Ketiga PPD 2026 Tingkat Nasional','Ragam','Ismail','Baebudin',2,'Review',720],
['Para Juara 4 Wilayah Bersaing Adu Kekuatan di Bupati Cup 2026, Panggung Terbaik Bola Voli Lamsel','Bola','Almak','Baebudin',3,'Terbit',530],
['Tingkatkan Respon Cepat, Polsek Lusangi Pasang Stiker Layanan Kepolisian di Desa Santing','Hukum','Baebudin','Baebudin',3,'Draft',380],
['Pemerintah Tetapkan Prosedur Penggantian Penerima Bantuan Pangan Beras Periode Juli–September 2026','Ekonomi','Ismail','Ismail',4,'Terbit',1500],
['Polindra Terapkan Teknologi IoT','Iptek','Almak','Opini',5,'Terbit',330]
].map((a,i)=>({id:i+1,judul:a[0],kategori:a[1],editor:a[2],penulis:a[3],tanggal:dt(a[4]),status:a[5],dibaca:a[6],foto:'',isi:''})),
video:[['Istri Calon Bupati Indramayu nomor urut 3, Kunjungi Ketua Sikandi Brigade 08',0,'Tayang'],['Organ NEW ARIMBI | Wedding Of Hilmi & Indah | Tugu-Sliyeg',2,'Tayang'],['[Contoh] Liputan Bupati Cup 2026',3,'Tayang'],['[Contoh] Profil Desa Santing',6,'Draft'],['[Contoh] Dokumentasi Karang Taruna Got Talent',8,'Tayang']].map((a,i)=>({id:i+1,judul:a[0],link:'https://youtu.be/ID_VIDEO',tanggal:dt(a[1]),status:a[2]})),
polling:[{id:1,pertanyaan:'Contoh polling: berita apa yang paling kamu tunggu minggu ini?',opsi:'Sosial\nPolitik\nBola\nRagam',status:'Aktif',suara:'18,9,24,11'},{id:2,pertanyaan:'Contoh polling lama: kanal favoritmu?',opsi:'Hukum\nEkonomi\nIptek',status:'Nonaktif',suara:'5,3,2'}],
'iklan-gambar':[['[Contoh] Banner Header','Header 728×90',10,-20,'Tayang'],['[Contoh] Banner Sidebar','Sidebar 300×250',5,-25,'Tayang'],['[Contoh] Banner Dalam Artikel','Artikel 640×200',40,10,'Berakhir']].map((a,i)=>({id:i+1,judul:a[0],posisi:a[1],link:'#',mulai:dt(a[2]),selesai:dt(a[3]),status:a[4]})),
'iklan-baris':[['Pemasang A','[Contoh] Dijual motor bekas, kondisi terawat, hubungi pemasang.','Kendaraan',0,'Menunggu'],['Pemasang B','[Contoh] Dikontrakkan rumah dekat pusat kota.','Properti',1,'Menunggu'],['Pemasang C','[Contoh] Dibutuhkan admin toko, kirim lamaran.','Lowongan',2,'Disetujui'],['Pemasang D','[Contoh] Jual beli perabot rumah tangga.','Jual Beli',3,'Disetujui'],['Pemasang E','[Contoh] Iklan tidak sesuai ketentuan.','Jual Beli',4,'Ditolak'],['Pemasang F','[Contoh] Sewa ruko strategis.','Properti',5,'Menunggu']].map((a,i)=>({id:i+1,pemasang:a[0],isi:a[1],kategori:a[2],tanggal:dt(a[3]),status:a[4]})),
curhat:[['[Contoh] Jalan desa rusak dan belum diperbaiki sejak lama.',0,'Baru'],['[Contoh] Mohon lampu jalan di pertigaan diperbaiki.',1,'Baru'],['[Contoh] Layanan puskesmas pagi hari sangat ramai.',2,'Tampil'],['[Contoh] Terima kasih untuk program bantuan pangan.',3,'Tampil'],['[Contoh] Pesan tidak pantas ditampilkan.',4,'Disembunyikan'],['[Contoh] Saluran air tersumbat saat hujan.',5,'Baru']].map((a,i)=>({id:i+1,pengirim:'Anonim',pesan:a[0],tanggal:dt(a[1]),status:a[2]})),
covid:[0,1,2,3,4].map(i=>({id:i+1,tanggal:dt(i),wilayah:'Indramayu',positif:2+i,sembuh:3+i,meninggal:i%2})),
'rc-kandidat':[{id:1,no:1,nama:'Pasangan Calon 1',usungan:'Partai A, Partai B'},{id:2,no:2,nama:'Pasangan Calon 2',usungan:'Partai C'},{id:3,no:3,nama:'Pasangan Calon 3',usungan:'Partai D, Partai E'}],
'rc-suara':[['Kecamatan A',1,1200],['Kecamatan A',2,980],['Kecamatan A',3,640],['Kecamatan B',1,860],['Kecamatan B',2,1100],['Kecamatan B',3,720]].map((a,i)=>({id:i+1,kecamatan:a[0],no:a[1],jumlah:a[2]})),
'set-kategori':CATS.map((n,i)=>({id:i+1,nama:n,urutan:i+1,tampil:'Ya'})),
'set-pengguna':[['Alghoz','Admin'],['Ismail','Editor'],['Almak','Editor'],['Baebudin','Editor'],['Opini','Penulis']].map((a,i)=>({id:i+1,nama:a[0],email:a[0].toLowerCase()+'@example.com',peran:a[1],status:'Aktif'}))
};
