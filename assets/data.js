// Data Asli CuplikCom (www.cuplik.com) - Portal Berita Unik dan Menggelitik
// Terintegrasi dengan seluruh kanal, artikel lengkap, liputan video, polling interaktif, dan info redaksi resmi

const T = ['#d9e6dc', '#e8dede', '#dde3e0', '#e6e6e0', '#d8e0d9', '#e9e2dc'];

const KANALS = [
    'Sosial', 'Politik', 'Hukum', 'Ekonomi', 'Ragam',
    'Luar Negeri', 'Iptek', 'Gaya Hidup', 'Bola', 'Opini', 'Profil', 'Video'
];

const TAGS = [
    'Pendidikan', 'Kuliner', 'PKS', 'Bumdesa', 'Liga Indonesia',
    'Timnas', 'Transfer Pemain', 'Liga Inggris', 'Liga Italia', 'Olahraga',
    'Pilkada 2024', 'Piala Dunia 2026', 'Indramayu', 'Majalengka', 'Cirebon', 'Lampung'
];

const A = [
    {
        id: 1,
        t: 'Baru Sehari Menjabat, Plt Camat Anjatan Tinjau UPTD Puskesmas',
        c: 'Sosial',
        d: '2026-10-03',
        v: 2840,
        author: 'Daman',
        loc: 'Indramayu',
        tags: ['Desa', 'Indramayu', 'Kesehatan', 'Pelayanan Publik'],
        lead: 'Langkah cepat dan responsif langsung ditunjukkan oleh Pelaksana Tugas (Plt) Camat Anjatan yang baru, Deddy Irawan, S.Sos., M.A.P.',
        body: [
            'Langkah cepat dan responsif langsung ditunjukkan oleh Pelaksana Tugas (Plt) Camat Anjatan yang baru, Deddy Irawan, S.Sos., M.A.P. Tanpa membuang waktu, sehari pasca resmi mengemban amanah baru, ia turun langsung ke lapangan untuk memastikan seluruh instansi pelayanan publik berjalan maksimal dan prima.',
            'Fokus utama peninjauan perdana ini tertuju pada fasilitas pelayanan kesehatan masyarakat. Deddy Irawan mendatangi UPTD Puskesmas Bugis dan UPTD Puskesmas Anjatan pada Sabtu (3/10/2026) sekitar pukul 10.57 WIB untuk melihat secara dekat aktivitas pelayanan medis serta interaksi petugas dengan para pasien.',
            'Kunjungan mendadak ini dilakukan guna memastikan bahwa pelayanan kesehatan di wilayah Kecamatan Anjatan berjalan secara optimal, profesional, dan akuntabel. Deddy ingin memastikan tidak ada hambatan dalam penyediaan fasilitas kesehatan dasar bagi warga sekitar.',
            'Setibanya di lokasi, Plt Camat Anjatan yang tampil santai namun lugas ini langsung menghampiri area meja pendaftaran dan loket pelayanan utama yang kemudian dilanjutkan ke seluruh ruangan penunjang medis.',
            'Kehadirannya di tengah-tengah ruang pelayanan memberikan dorongan semangat tersendiri bagi para tenaga medis. Para petugas yang mengenakan seragam batik dan jilbab tampak sigap serta melayani pertanyaan maupun arahan dari sang pemimpin wilayah.',
            'Melalui peninjauan ini, Deddy menekankan pentingnya 3S (Senyum, Sapa, Salam), kecepatan, dan ketepatan petugas dalam memberikan bantuan medis. Sektor kesehatan adalah salah satu fondasi utama mutu pelayanan publik yang paling vital dan menyangkut hajat hidup orang banyak di Indramayu.'
        ]
    },
    {
        id: 2,
        t: 'Ketika Guru PAUD Terjebak di Lorong Regulasi: Rp100 Ribu yang Menguji Nurani Pemerintah',
        c: 'Opini',
        d: '2026-10-02',
        v: 4920,
        author: 'Masduki Duryat',
        loc: 'Indramayu',
        tags: ['Opini', 'Pendidikan', 'Guru PAUD', 'Indramayu'],
        lead: 'Ironi pendidikan Indonesia terkadang tidak terletak pada besarnya anggaran, melainkan pada betapa sulitnya memberikan hak dasar Rp100 ribu per bulan bagi pendidik anak usia dini.',
        body: [
            'Oleh: Masduki Duryat (Rektor Institut Studi Islam Al-Amin Indramayu; Dosen Pascasarjana UIN Siber Syekh Nurjati Cirebon)',
            'Ironi pendidikan Indonesia terkadang tidak terletak pada besarnya anggaran, melainkan pada betapa sulitnya pemerintah memberikan sesuatu yang nilainya bahkan hanya Rp100 ribu per bulan kepada orang-orang yang setiap hari berada di garis depan pendidikan anak bangsa.',
            'Di Kabupaten Indramayu, guru PAUD bahkan masih harus menunggu kepastian pencairan insentif daerah, sementara di sejumlah kabupaten/kota lain kebijakan serupa telah berjalan. Lebih ironis lagi, persoalannya bukan semata ketiadaan anggaran, melainkan birokrasi yang masih mencari-cari dasar regulasi untuk membenarkan apakah guru PAUD—terutama yang belum bergelar S-1—layak disebut penerima insentif.',
            'Ada setidaknya tiga hal yang harus dibedakan secara jernih: status sebagai pendidik, kualifikasi akademik, dan hak menerima insentif daerah. Menetapkan standar ideal S-1 tidak serta-merta berarti menghapus keberadaan mereka yang sedang berada dalam masa transisi pengabdian puluhan tahun.',
            'Bagi sebagian orang, Rp100 ribu mungkin dianggap kecil. Tetapi bagi guru PAUD yang penghasilannya sangat terbatas, angka itu bukan sekadar nominal. Ia adalah simbol bahwa pemerintah melihat, mengakui, dan menghargai pengabdian mereka.',
            'Indramayu sebenarnya tidak membutuhkan perdebatan birokratis yang berlarut-larut. Yang dibutuhkan adalah keberanian administratif: tetapkan status, verifikasi data, susun kriteria, pastikan dasar hukum, lalu cairkan hak para pahlawan tanpa tanda jasa tersebut.'
        ]
    },
    {
        id: 3,
        t: 'Mewakili Kuwu, Lurah Muntur Apresiasi Kekompakan dan Ajak Warga Dukung Pembangunan Desa',
        c: 'Ragam',
        d: '2026-10-03',
        v: 2150,
        author: 'Baebudin',
        loc: 'Indramayu',
        tags: ['Desa', 'Sedekah Bumi', 'Muntur', 'Indramayu'],
        lead: 'Pemerintah Desa Muntur mengapresiasi tingginya antusiasme dan kebersamaan warga dalam melestarikan tradisi adat serta mendukung agenda pembangunan desa.',
        body: [
            'Mewakili Kuwu Desa Muntur, Lurah Muntur menyampaikan rasa terima kasih dan apresiasi setinggi-tingginya kepada segenap tokoh masyarakat, karang taruna, dan warga atas suksesnya penyelenggaraan adat desa tahunan.',
            'Kekompakan warga yang terjalin selama prosesi syukuran menjadi bukti nyata bahwa semangat gotong royong masih mengakar kuat di pedesaan Indramayu.',
            'Dalam sambutannya, pihak Pemdes mengajak seluruh elemen masyarakat untuk terus bersinergi mengawal program pembangunan infrastruktur jalan, sanitasi, dan pemberdayaan ekonomi tani.',
            '"Kemajuan desa tidak bisa diraih sendirian oleh aparatur desa, melainkan butuh partisipasi aktif dan pengawasan dari seluruh warga. Bersama kita bangun Desa Muntur yang maju, mandiri, dan berbudaya," tegasnya.'
        ]
    },
    {
        id: 4,
        t: 'Polres Indramayu Terjunkan Agen Perlinsos untuk Awasi Penyaluran Bansos',
        c: 'Hukum',
        d: '2026-10-02',
        v: 3410,
        author: 'Winanto',
        loc: 'Indramayu',
        tags: ['Hukum', 'Polres Indramayu', 'Bansos', 'Keamanan'],
        lead: 'Guna memastikan bantuan sosial tepat sasaran dan bebas dari pungutan liar, Polres Indramayu menerjunkan agen Perlindungan Sosial (Perlinsos) di seluruh polsek jajaran.',
        body: [
            'Kepolisian Resor Indramayu mengambil langkah preventif strategis dalam pengawalan program bantuan sosial pemerintah pusat dan daerah dengan mengerahkan personel khusus Agen Perlinsos.',
            'Kapolres Indramayu menyatakan bahwa kehadiran personel kepolisian di titik-titik pembagian bansos bertujuan untuk mencegah potensi penyimpangan data penerima serta memberikan rasa aman bagi warga lansia dan rentan.',
            'Petugas juga membuka posko aduan cepat bagi masyarakat yang menemukan indikasi potongan liar atau intimidasi selama proses pencairan dana maupun bantuan pangan.',
            'Dengan pengawasan terintegrasi bersama unsur TNI dan pemerintah kecamatan, diharapkan hak masyarakat kurang mampu dapat tersalurkan 100 persen secara utuh dan transparan.'
        ]
    },
    {
        id: 5,
        t: 'Kini Tak Perlu Bingung, Foto Kegiatan Pemkab Lampung Selatan Bisa Diunduh Gratis via QR Code',
        c: 'Ragam',
        d: '2026-10-02',
        v: 1890,
        author: 'Ismail',
        loc: 'Lampung Selatan',
        tags: ['Lampung Selatan', 'Inovasi', 'Diskominfo', 'Pelayanan'],
        lead: 'Dinas Kominfo Lampung Selatan menghadirkan kemudahan dokumentasi digital bagi masyarakat dan aparatur pemerintah melalui sistem QR Code terpusat.',
        body: [
            'Inovasi digital kembali dihadirkan oleh Pemerintah Kabupaten Lampung Selatan melalui Dinas Komunikasi dan Informatika (Diskominfo) setempat.',
            'Masyarakat, jurnalis, maupun peserta acara resmi Pemkab kini tidak perlu lagi kesulitan mencari dokumentasi foto resolusi tinggi pasca-kegiatan.',
            'Cukup dengan memindai QR Code yang disediakan di lokasi acara atau kanal resmi, seluruh galeri dokumentasi foto dapat diunduh secara gratis dan cepat.',
            'Kepala Diskominfo Lamsel menyatakan inovasi ini adalah bentuk keterbukaan informasi publik dan pemanfaatan teknologi informasi untuk meningkatkan kepuasan layanan masyarakat.'
        ]
    },
    {
        id: 6,
        t: 'Kawal Singa Depok, Polsek Gabuswetan Pastikan Hajatan Warga Kondusif',
        c: 'Sosial',
        d: '2026-10-02',
        v: 1620,
        author: 'Ato Susanto',
        loc: 'Indramayu',
        tags: ['Seni Tradisi', 'Singa Depok', 'Gabuswetan', 'Kamtibmas'],
        lead: 'Antusiasme ribuan penonton dalam arak-arakan kesenian tradisional Singa Depok di Gabuswetan berjalan aman dan tertib berkat pengamanan humanis aparat kepolisian.',
        body: [
            'Kesenian tradisional arak-arakan Singa Depok selalu menjadi daya tarik hiburan utama dalam pesta hajatan warga di wilayah pesisir Jawa Barat.',
            'Guna mengantisipasi kemacetan jalan poros kecamatan dan gesekan antar-penonton, jajaran Polsek Gabuswetan diterjunkan langsung mengawal iring-iringan seni Singa Depok dari awal hingga selesai.',
            'Personel kepolisian berbaur secara humanis dengan warga sambil mengatur lalu lintas di persimpangan jalan desa.',
            'Warga setempat menyambut positif kehadiran aparat kepolisian yang menjaga situasi kamtibmas tetap sejuk sehingga hiburan rakyat berlangsung meriah tanpa kendala.'
        ]
    },
    {
        id: 7,
        t: 'Kritik Muktamar Diancam Sanksi, Kang Eep: Jangan Sampai Partai Jadi Alat Membungkam Nurani Warga NU',
        c: 'Politik',
        d: '2026-09-28',
        v: 5120,
        author: 'Farhan Maksudi',
        loc: 'Cirebon',
        tags: ['Politik', 'NU', 'Muktamar', 'Demokrasi'],
        lead: 'Dinamika wacana Muktamar NU ke-35 kian memanas setelah muncul isu ancaman sanksi bagi kader yang bersuara kritis di ruang publik.',
        body: [
            'Tokoh muda Nahdlatul Ulama, Kang Eep, angkat bicara merespons berkembangnya polemik sanksi organisasi terhadap kader-kader yang menyuarakan aspirasi menjelang Muktamar.',
            'Menurutnya, tradisi permusyawaratan di tubuh NU sejak era pendiri (Mbah Hasyim Asy\'ari dan Gus Dur) selalu menjunjung tinggi keterbukaan dialog, tabayyun, dan kebebasan berpikir yang santun.',
            '"Jangan sampai ada anasir politik praktis atau kepentingan partai tertentu yang mencoba membungkam nurani warga nahdliyin. NU adalah jam\'iyyah diniyyah ijtima\'iyyah milik umat, bukan milik segelintir elite," tegas Kang Eep.',
            'Ia menyerukan agar seluruh cabang dan wilayah NU di tanah air tetap fokus pada agenda penguatan kemandirian ekonomi umat, pendidikan pesantren, dan pengayoman warga di akar rumput.'
        ]
    },
    {
        id: 8,
        t: 'Sambal Petis Bunda Prabu Khas Indramayu Menembus E-Commerce',
        c: 'Ekonomi',
        d: '2026-10-01',
        v: 3890,
        author: 'Lina Maulidiyah',
        loc: 'Indramayu',
        tags: ['Kuliner', 'UMKM', 'Indramayu', 'Ekonomi Digital'],
        lead: 'Kuliner tradisional sambal petis khas pesisir pantai utara Indramayu berhasil menembus pasar digital nasional dengan omzet jutaan rupiah per bulan.',
        body: [
            'Kekayaan kuliner khas Indramayu kembali menorehkan prestasi membanggakan. Produk olahan "Sambal Petis Bunda Prabu" yang diproduksi oleh perajin rumahan lokal sukses merambah berbagai platform lokapasar (e-commerce) terkemuka tanah air.',
            'Dengan mempertahankan racikan petis udang alami tanpa bahan pengawet kimiawi dan dipadukan dengan cabai rawit segar lokal, produk ini digemari konsumen dari berbagai kota besar di Pulau Jawa, Sumatera, hingga Kalimantan.',
            'Pemilik usaha menuturkan bahwa kunci keberhasilan pemasaran terletak pada kemasan higienis modern, legalitas izin edar P-IRT yang lengkap, serta pemanfaatan promosi media sosial.',
            'Dinas Koperasi dan UKM Kabupaten Indramayu memberikan apresiasi serta siap memberikan pendampingan sertifikasi halal dan fasilitasi ekspor bagi UMKM olahan pangan laut lokal.'
        ]
    },
    {
        id: 9,
        t: 'Cegah Hal Membahayakan, Tim Gabungan Bongas Evakuasi ODGJ ke RSUD',
        c: 'Sosial',
        d: '2026-10-01',
        v: 2410,
        author: 'Daman',
        loc: 'Indramayu',
        tags: ['Sosial', 'Kesehatan Jiwa', 'Bongas', 'RSUD'],
        lead: 'Aksi cepat tanggap diperlihatkan tim gabungan kecamatan Bongas dalam mengevakuasi warga dengan gangguan jiwa demi keselamatan diri dan lingkungan.',
        body: [
            'Tim gabungan yang terdiri dari unsur Satpol PP, Puskesmas Bongas, aparat kepolisian, dan perangkat desa mengevakuasi seorang warga dengan disabilitas mental (ODGJ) yang sempat meresahkan di area permukiman.',
            'Proses evakuasi dilakukan dengan pendekatan persuasif dan manusiawi tanpa kekerasan fisik, setelah berkoordinasi dengan pihak keluarga.',
            'Pasien kemudian dibawa menggunakan ambulans siaga menuju RSUD Indramayu untuk mendapatkan perawatan medis kejiwaan intensif secara gratis melalui skema penjaminan kesehatan daerah (UHC).',
            'Camat setempat mengimbau masyarakat untuk segera melapor kepada petugas desa apabila menemukan warga yang membutuhkan bantuan darurat medis serupa.'
        ]
    },
    {
        id: 10,
        t: 'Wujud Syukur Pembangunan Jalan Selesai, Pemdes dan Warga Rancamulya Gelar Tasyakuran',
        c: 'Ragam',
        d: '2026-10-01',
        v: 1980,
        author: 'Bakrodin',
        loc: 'Indramayu',
        tags: ['Infrastruktur', 'Desa', 'Rancamulya', 'Syukuran'],
        lead: 'Selesainya pengecoran jalan poros desa disambut suka cita oleh warga dan petani yang kini menikmati kelancaran mobilitas pengangkutan hasil bumi.',
        body: [
            'Rasa syukur mendalam dirasakan oleh warga Desa Rancamulya setelah proyek pembangunan jalan cor beton penghubung sentra persawahan tuntas dikerjakan.',
            'Sebagai bentuk ungkapan syukur, ratusan warga bersama perangkat desa menggelar doa bersama dan makan tumpeng bersama di sepanjang ruas jalan baru.',
            'Kuwu Desa Rancamulya menyatakan bahwa jalan yang sebelumnya berlubang dan becek saat musim hujan kini telah kokoh dan memangkas waktu tempuh petani menuju pasar hingga 50 persen.',
            'Warga berkomitmen untuk bersama-sama menjaga tonase kendaraan yang melintas agar ketahanan jalan tetap terjaga dalam jangka panjang.'
        ]
    },
    {
        id: 11,
        t: 'Lestarikan Tradisi dan Bangkitkan Ekonomi, Pemdes Muntur Gelar Adat Sedekah Bumi',
        c: 'Ragam',
        d: '2026-10-01',
        v: 2750,
        author: 'Baebudin',
        loc: 'Indramayu',
        tags: ['Sedekah Bumi', 'Budaya', 'Ekonomi Kerakyatan', 'Muntur'],
        lead: 'Perayaan adat sedekah bumi di Desa Muntur tidak hanya melestarikan warisan leluhur, tetapi juga menggerakkan perputaran ekonomi puluhan pedagang kecil.',
        body: [
            'Ratusan gunungan hasil bumi berupa padi, palawija, buah-buahan, dan aneka jajanan pasar diarak meriah melintasi jalan-jalan desa dalam gelaran Sedekah Bumi Muntur.',
            'Tradisi tahunan ini menjadi wujud rasa syukur para petani atas limpahan berkah panen sekaligus sarana memohon keselamatan menghadapi musim tanam berikutnya.',
            'Selain prosesi ritual doa bersama, acara juga diisi pagelaran wayang kulit semalam suntuk dan pasar rakyat yang dipadati ribuan pengunjung.',
            'Kepala desa menegaskan bahwa kearifan lokal seperti ini terbukti ampuh mempererat ikatan persaudaraan warga dan membangkitkan UMKM kuliner lokal.'
        ]
    },
    {
        id: 12,
        t: 'Pembangunan Jalan Beton Tuntas, Pemdes Sidamulya dan Warga Blok Benda Gelar Syukuran',
        c: 'Ragam',
        d: '2026-09-30',
        v: 1730,
        author: 'Maulana Yusuf',
        loc: 'Indramayu',
        tags: ['Pembangunan', 'Sidamulya', 'Blok Benda', 'Gotong Royong'],
        lead: 'Akses transportasi antar-blok di Sidamulya kini mulus dengan selesainya betonisasi jalan yang telah lama dinantikan warga.',
        body: [
            'Warga Blok Benda Desa Sidamulya akhirnya bernapas lega. Akses jalan utama yang menjadi urat nadi mobilitas harian anak sekolah dan pedagang kini telah rampung dicor beton.',
            'Kuwu Sidamulya menuturkan bahwa pengalokasian Dana Desa untuk infrastruktur ini adalah hasil rembuk musrenbangdes yang melibatkan seluruh perwakilan dusun.',
            'Dengan selesainya jalan ini, biaya angkut logistik hasil pertanian menjadi lebih efisien dan roda ekonomi warga semakin bergeliat.'
        ]
    },
    {
        id: 13,
        t: 'Resmi Berganti, Deddy Irawan Didaulat Jadi Plt Camat Anjatan',
        c: 'Politik',
        d: '2026-10-02',
        v: 3120,
        author: 'Daman',
        loc: 'Indramayu',
        tags: ['Birokrasi', 'Anjatan', 'Pemkab Indramayu', 'Pemerintahan'],
        lead: 'Pemerintah Kabupaten Indramayu resmi menunjuk Deddy Irawan sebagai Pelaksana Tugas Camat Anjatan guna mempercepat efektivitas layanan publik.',
        body: [
            'Rotasi kepemimpinan di tingkat kecamatan kembali bergulir di lingkungan Pemkab Indramayu. Deddy Irawan, S.Sos., M.A.P. resmi mengemban tugas sebagai Plt Camat Anjatan.',
            'Penunjukan ini ditujukan untuk mengakselerasi program strategis daerah di wilayah barat Indramayu, khususnya terkait ketahanan pangan, pelayanan kependudukan, dan koordinasi pemerintahan desa.',
            'Dalam pidato perdananya, Deddy menegaskan komitmennya untuk menerapkan tata kelola birokrasi yang cepat, tanggap terhadap keluhan warga, dan transparan.'
        ]
    },
    {
        id: 14,
        t: 'Tradisi Temoan Warnai Kemeriahan Sedekah Bumi di Desa Muntur',
        c: 'Gaya Hidup',
        d: '2026-10-02',
        v: 1480,
        author: 'Baebudin',
        loc: 'Indramayu',
        tags: ['Kearifan Lokal', 'Temoan', 'Budaya Jawa', 'Muntur'],
        lead: 'Keunikan prosesi temu sesepuh (Temoan) menjadi daya tarik tersendiri yang memperkuat nilai silaturahmi antar-generasi di desa.',
        body: [
            'Salah satu ritual yang paling ditunggu dalam rangkaian Sedekah Bumi Desa Muntur adalah tradisi "Temoan", yakni prosesi pertemuan sakral antar-tetua adat, pamong desa, dan warga.',
            'Dalam tradisi ini, setiap keluarga membawa hantaran makanan khas untuk ditukar dan dinikmati bersama sebagai perlambang kesetaraan dan kerukunan.',
            'Budayawan lokal mengapresiasi generasi muda desa yang antusias mendokumentasikan dan melestarikan warisan adiluhung ini melalui media digital.'
        ]
    },
    {
        id: 15,
        t: 'Kombinasi Komben dan Grabag Warnai Panen di Desa Kendayakan',
        c: 'Iptek',
        d: '2026-10-01',
        v: 2190,
        author: 'Gustiawan',
        loc: 'Indramayu',
        tags: ['Pertanian', 'Alsintan', 'Inovasi Tani', 'Kendayakan'],
        lead: 'Harmonisasi teknologi mesin modern (combine harvester) dengan tenaga kerja tradisional (grabag) terbukti menjaga keseimbangan sosial-ekonomi di Kendayakan.',
        body: [
            'Musim panen raya di Desa Kendayakan menampilkan pemandangan menarik: mesin pemanen modern (combine harvester) bekerja berdampingan dengan kelompok pemanen tradisional (grabag).',
            'Ketua kelompok tani menjelaskan bahwa integrasi ini sengaja dirancang agar efisiensi panen dapat tercapai tanpa menyingkirkan mata pencaharian buruh tani setempat.',
            'Hasil panen gabah musim ini tercatat mengalami peningkatan produktivitas mencapai 7,2 ton per hektare berkat perbaikan sistem irigasi dan benih unggul tahan hama.'
        ]
    },
    {
        id: 16,
        t: 'Kurang Dua Hari, Tekab 308 Polsek Penengahan Bekuk Dua Terduga Pelaku Curat di Bakauheni',
        c: 'Hukum',
        d: '2026-10-02',
        v: 4120,
        author: 'Ismail',
        loc: 'Lampung',
        tags: ['Hukum', 'Kriminal', 'Tekab 308', 'Bakauheni'],
        lead: 'Kerja cepat Tim Khusus Anti Bandit (Tekab) 308 Presisi Polres Lampung Selatan berhasil mengungkap kasus pencurian dengan pemberatan di kawasan pelabuhan.',
        body: [
            'Dalam kurun waktu kurang dari 48 jam, Tekab 308 Polsek Penengahan berhasil membekuk dua tersangka sindikat pencurian dengan pemberatan (curat) yang beraksi di sekitar dermaga Bakauheni.',
            'Kapolsek Penengahan mengonfirmasi bahwa penangkapan dilakukan setelah petugas menganalisis rekaman kamera pengawas (CCTV) dan keterangan para saksi di tempat kejadian perkara.',
            'Dari tangan tersangka, polisi mengamankan sejumlah barang bukti hasil curian serta peralatan kunci leter T. Kedua pelaku kini mendekam di tahanan dan dijerat Pasal 363 KUHP.'
        ]
    },
    {
        id: 17,
        t: 'Lakpesdam PCNU Indramayu Dorong Desa Siapkan Perdes Pencegahan Perkawinan Anak',
        c: 'Sosial',
        d: '2026-09-30',
        v: 2340,
        author: 'Farhan Maksudi',
        loc: 'Indramayu',
        tags: ['Sosial', 'PCNU', 'Perlindungan Anak', 'Regulasi'],
        lead: 'Upaya menekan angka dispensasi nikah dini terus digelorakan Lakpesdam NU melalui penguatan payung hukum Peraturan Desa di 31 kecamatan.',
        body: [
            'Lembaga Kajian dan Pengembangan Sumber Daya Manusia (Lakpesdam) PCNU Kabupaten Indramayu secara intensif menggelar lokakarya penyusunan Peraturan Desa (Perdes) Perlindungan Anak.',
            'Direktur Lakpesdam menegaskan bahwa perkawinan di bawah umur memiliki dampak sistemik terhadap tingginya angka stunting, putus sekolah, dan kerentanan ekonomi keluarga baru.',
            'Dengan adanya Perdes khusus, pemerintah desa bersama tokoh agama memiliki mandat hukum yang kuat untuk melakukan mediasi, edukasi pranikah, dan pembinaan hak tumbuh kembang anak.'
        ]
    },
    {
        id: 18,
        t: 'Empat Alasan Kuat Mengapa Muktamar NU ke-35 Harus di Cirebon Raya',
        c: 'Opini',
        d: '2026-09-29',
        v: 3670,
        author: 'Ade Hamdani',
        loc: 'Cirebon',
        tags: ['Opini', 'Muktamar NU', 'Cirebon Raya', 'Pesantren'],
        lead: 'Kawasan Cirebon Raya dinilai memiliki kesiapan historis, geografis, infrastruktur pesantren, dan nilai diplomasi kebudayaan yang paripurna untuk menggelar Muktamar NU ke-35.',
        body: [
            'Oleh: Ade Hamdani (Pemerhati Sosial Keagamaan Cirebon Raya)',
            'Wacana penetapan tuan rumah Muktamar NU ke-35 mulai mengemuka di kalangan nahdliyin. Sedikitnya terdapat empat argumen fundamental mengapa Cirebon Raya (Cirebon, Indramayu, Majalengka, Kuningan) sangat layak dipilih.',
            'Pertama, akar historis dakwah Sunan Gunung Jati dan jejaring ribuan pesantren sepuh di Ciayumajakuning yang menjadi benteng ahlussunnah wal jamaah.',
            'Kedua, aksesibilitas prima dengan adanya Bandara Internasional Kertajati (BIJB), jalur Tol Trans-Jawa, dan stasiun kereta api utama yang sangat memudahkan kedatangan muktamirin dari seluruh nusantara dan mancanegara.',
            'Ketiga, ketersediaan ribuan pondok pesantren yang siap menampung para kiai dan delegasi dengan suasana tawadhu dan barakah.',
            'Keempat, Cirebon sebagai miniatur toleransi dan persaudaraan kebangsaan yang merefleksikan nilai-nilai Islam Rahmatan lil Alamin.'
        ]
    },
    {
        id: 19,
        t: 'SMSI Tandatangani Kerja Sama dengan Kedubes Iran Perkuat Jurnalisme Media Siber',
        c: 'Luar Negeri',
        d: '2026-09-29',
        v: 2890,
        author: 'Tim CMC',
        loc: 'Jakarta',
        tags: ['Luar Negeri', 'SMSI', 'Diplomasi', 'Media Siber'],
        lead: 'Serikat Media Siber Indonesia (SMSI) memperluas jejaring global melalui penandatanganan nota kesepahaman pertukaran informasi dengan Kedutaan Besar Iran.',
        body: [
            'Pengurus Pusat Serikat Media Siber Indonesia (SMSI) resmi menandatangani naskah kerja sama strategis dengan perwakilan Kedutaan Besar Republik Islam Iran di Jakarta.',
            'Kerja sama ini mencakup pertukaran konten jurnalistik, program magang reporter siber, serta penyelenggaraan seminar internasional terkait literasi media dan lanskap geopolitik dunia.',
            'Ketua Umum SMSI menyatakan bahwa kolaborasi ini menjadi langkah konkret bagi media siber anggota SMSI, termasuk CuplikCom, untuk menyajikan informasi internasional yang berimbang langsung dari sumber primer.'
        ]
    },
    {
        id: 20,
        t: 'Polindra Terapkan Teknologi IoT untuk Dukung Pengelolaan Sampah Berbasis Data',
        c: 'Iptek',
        d: '2026-09-29',
        v: 3120,
        author: 'Hasan Ayih',
        loc: 'Indramayu',
        tags: ['Iptek', 'Polindra', 'IoT', 'Smart City'],
        lead: 'Tim peneliti Politeknik Negeri Indramayu menciptakan tempat sampah pintar berbasis sensor Internet of Things (IoT) untuk optimalisasi rute armada kebersihan.',
        body: [
            'Karya inovatif kembali dilahirkan oleh sivitas akademika Politeknik Negeri Indramayu (Polindra) melalui pengembangan sistem smart waste management berbasis IoT.',
            'Bak sampah pintar ini dilengkapi sensor ultrasonik dan modul mikrokontroler yang mengirimkan data volume sampah secara waktu-nyata (real-time) ke dasbor dinas lingkungan hidup.',
            'Dengan data tersebut, rute penjemputan truk sampah dapat dioptimasi sehingga menghemat konsumsi bahan bakar armada dan mencegah penumpukan sampah liar di titik padat penduduk.'
        ]
    },
    {
        id: 21,
        t: 'Kunjungan IWO Kota Tegal di Biliard 101: Membangun Citra Positif Olahraga Bola Sodok',
        c: 'Gaya Hidup',
        d: '2026-09-28',
        v: 1540,
        author: 'Wurdiyanto',
        loc: 'Tegal',
        tags: ['Gaya Hidup', 'Olahraga', 'IWO Tegal', 'Biliar'],
        lead: 'Ikatan Wartawan Online (IWO) Tegal mendorong transformasi biliar dari arena hiburan semata menjadi cabang olahraga prestasi yang ramah generasi muda.',
        body: [
            'Jajaran pengurus Ikatan Wartawan Online (IWO) Kota Tegal melakukan kunjungan silaturahmi ke pusat latihan olahraga biliar 101 Steve.',
            'Pertemuan ini membahas sinergi publikasi dalam rangka menghapus stigma negatif dan mempromosikan biliar sebagai cabang olahraga resmi yang melatih konsentrasi, strategi, dan sportivitas.',
            'Pihak pengelola pusat biliar menyambut hangat dukungan media dan berencana menggelar turnamen antar-jurnalis serta pembinaan atlet junior se-Karesidenan Pekalongan.'
        ]
    },
    {
        id: 22,
        t: 'Ada 17 Kadis Kosong, Lucky Hakim-Syaefudin Langsung Benahi Birokrasi di 100 Hari Pertama',
        c: 'Politik',
        d: '2026-09-27',
        v: 6240,
        author: 'Dalani',
        loc: 'Indramayu',
        tags: ['Politik', 'Pilkada', 'Birokrasi', 'Indramayu'],
        lead: 'Mengisi kekosongan belasan posisi Kepala Dinas dan merombak tata kelola birokrasi menjadi prioritas utama pemerintahan baru Indramayu.',
        body: [
            'Bupati dan Wakil Bupati Indramayu terpilih, Lucky Hakim dan Syaefudin, bergerak cepat memetakan pekerjaan rumah krusial di lingkungan birokrasi Pemkab Indramayu.',
            'Tercatat sebanyak 17 jabatan eselon II setingkat Kepala Dinas dan Kepala Badan saat ini masih berstatus pelaksana tugas (Plt).',
            'Tim transisi memastikan mekanisme seleksi terbuka (open bidding) berbasis meritokrasi akan segera digelar agar posisi strategis tersebut diisi oleh pejabat yang berintegritas dan kompeten di bidangnya.'
        ]
    },
    {
        id: 23,
        t: 'Dituduh Jual Beli Jabatan, Tim Transisi Lucky-Sae Tegaskan: Itu Hoax dan Fitnah Keji',
        c: 'Politik',
        d: '2026-09-26',
        v: 4780,
        author: 'Dalani',
        loc: 'Indramayu',
        tags: ['Politik', 'Klarifikasi', 'Hoax', 'Indramayu'],
        lead: 'Beredarnya isu jual beli kursi jabatan direspons tegas oleh tim transisi sebagai fitnah murahan yang bertujuan memperkeruh stabilitas daerah.',
        body: [
            'Juru bicara tim transisi Lucky Hakim-Syaefudin membantah keras isu dan rumor liar di media sosial yang menuduh adanya transaksi mahar jabatan.',
            '"Kami tegaskan bahwa isu tersebut 100 persen adalah hoax dan fitnah keji yang tidak berdasar. Komitmen bupati terpilih adalah mewujudkan pemerintahan yang bersih dan melayani tanpa setoran mahar satu rupiah pun," tegasnya.',
            'Pihaknya meminta aparat penegak hukum menindak akun-akun provokatif penyebar informasi bohong dan mengimbau ASN agar tetap fokus bekerja melayani rakyat.'
        ]
    },
    {
        id: 24,
        t: 'Pemerintah Tetapkan Prosedur Penggantian Penerima Bantuan Pangan Beras Periode 2026',
        c: 'Ekonomi',
        d: '2026-09-29',
        v: 3870,
        author: 'Ahmad Hanafi',
        loc: 'Jakarta',
        tags: ['Ekonomi', 'Bantuan Pangan', 'Kemensos', 'Beras'],
        lead: 'Mekanisme musyawarah desa (Musdes) menjadi syarat mutlak dalam penggantian data penerima manfaat beras yang telah meninggal dunia atau pindah domisili.',
        body: [
            'Badan Pangan Nasional (Bapanas) bersama Kementerian Sosial menerbitkan petunjuk teknis terbaru terkait verifikasi dan validasi Keluarga Penerima Manfaat (KPM) bantuan pangan cadangan beras pemerintah.',
            'Pemerintah desa diberikan kewenangan untuk mengganti KPM yang tidak lagi memenuhi syarat melalui berita acara Musdes yang transparan.',
            'Langkah ini diambil agar bantuan pangan bersumber dari APBN benar-benar dinikmati oleh masyarakat paling membutuhkan secara merata dan akuntabel.'
        ]
    },
    {
        id: 25,
        t: 'Shin Tae-yong Racik Formasi Baru Timnas Indonesia Jelang Babak Krusial Kualifikasi Piala Dunia 2026',
        c: 'Bola',
        d: '2026-10-01',
        v: 7890,
        author: 'Haris Afandi',
        loc: 'Jakarta',
        tags: ['Timnas', 'Piala Dunia 2026', 'Shin Tae-yong', 'Garuda'],
        lead: 'Soliditas kombinasi pemain muda liga domestik dan pemain diaspora makin padu dalam sesi pemusatan latihan skuad Garuda.',
        body: [
            'Pelatih kepala Timnas Indonesia, Shin Tae-yong, mematangkan skema taktikal baru menjelang duel penentu di putaran ketiga Kualifikasi Piala Dunia 2026 Zona Asia.',
            'Fokus latihan difokuskan pada transisi bertahan ke menyerang secara kilat serta pemanfaatan situasi bola mati (set piece).',
            'Dukungan puluhan ribu suporter fanatik di stadion utama dipastikan akan menjadi suntikan energi ekstra bagi Jay Idzes dan kawan-kawan untuk merebut poin maksimal.'
        ]
    },
    {
        id: 26,
        t: 'Para Juara 4 Wilayah Bersaing Adu Kekuatan di Bupati Cup 2026, Panggung Terbaik Bola Voli Lamsel',
        c: 'Bola',
        d: '2026-09-30',
        v: 2430,
        author: 'M Ali Alnavian',
        loc: 'Lampung Selatan',
        tags: ['Bola Voli', 'Bupati Cup', 'Lampung Selatan', 'Olahraga'],
        lead: 'Turnamen akbar bola voli antar-kecamatan se-Kabupaten Lampung Selatan menyuguhkan pertarungan sengit para atlet berbakat daerah.',
        body: [
            'GOR Kalianda menjadi saksi antusiasme ribuan penonton dalam babak perempat final turnamen bola voli bergengsi Bupati Cup 2026.',
            'Sebanyak 16 tim putra dan putri terbaik yang lolos dari seleksi 4 wilayah bersaing memperebutkan piala bergilir dan total hadiah puluhan juta rupiah.',
            'Ketua PBVSI setempat menyebut turnamen ini menjadi ajang scouting penting untuk menjaring talenta atlet muda yang akan dipersiapkan menuju Porprov Lampung mendatang.'
        ]
    },
    {
        id: 27,
        t: 'Profil Ali Ma\'nawi: Nahkoda di Balik Transformasi CuplikCom Sebagai Media Siber Kritis Pantura',
        c: 'Profil',
        d: '2026-10-01',
        v: 4150,
        author: 'Redaksi CMC',
        loc: 'Indramayu',
        tags: ['Profil', 'Ali Ma\'nawi', 'CuplikCom', 'Jurnalisme'],
        lead: 'Membangun media siber independen sejak tahun 2009 dengan visi menghadirkan berita yang unik, kritis, solutif, dan menggelitik bagi nurani publik.',
        body: [
            'Di tengah riuh rendah arus informasi digital dan dominasi konglomerasi media ibu kota, nama Ali Ma\'nawi lekat dengan konsistensi jurnalisme akar rumput di kawasan pesisir Jawa Barat.',
            'Mengawali CuplikCom di bawah naungan PT Cuplik Media Center (CMC), Ali bertekad memberikan ruang bersuara bagi masyarakat pelosok desa, kaum buruh, petani, dan guru honorer yang kerap luput dari sorotan media arus utama.',
            'Dengan kepemimpinan yang egaliter dan dedikasi pada Kode Etik Jurnalistik, CuplikCom terus bertransformasi menjadi salah satu media siber terpercaya yang kini menjadi anggota Serikat Media Siber Indonesia (SMSI).'
        ]
    },
    {
        id: 28,
        t: 'Diduga Peras Perangkat Desa Rp3 Juta, Dua Pria Mengaku Wartawan Diamankan Polisi',
        c: 'Hukum',
        d: '2026-09-28',
        v: 5410,
        author: 'Daman',
        loc: 'Indramayu',
        tags: ['Hukum', 'Kriminal', 'Polres Indramayu', 'Perangkat Desa'],
        lead: 'Polisi mengingatkan agar aparat desa tidak ragu melapor dan menolak segala bentuk intimidasi dari oknum tak bertanggung jawab yang mencoreng profesi pers.',
        body: [
            'Aparat Satreskrim Polres Indramayu mengamankan dua orang pria berinisial S (42) dan W (38) setelah tertangkap tangan melakukan pemerasan terhadap sekretaris desa.',
            'Modus pelaku adalah mengancam akan memberitakan dugaan penyelewengan dana bantuan jika korban tidak menyerahkan uang tunai sebesar Rp3 juta.',
            'Kapolres mengimbau seluruh kuwu dan pamong desa untuk tidak takut menolak pemerasan dan selalu mengedepankan hak jawab serta pelaporan resmi ke jalur hukum.'
        ]
    },
    {
        id: 29,
        t: 'Dampak Eskalasi Geopolitik Timur Tengah Terhadap Rantai Pasok Energi dan Pangan Global',
        c: 'Luar Negeri',
        d: '2026-09-27',
        v: 3180,
        author: 'Karina JM',
        loc: 'Internasional',
        tags: ['Luar Negeri', 'Geopolitik', 'Ekonomi Dunia', 'Energi'],
        lead: 'Ketegangan militer di jalur pelayaran strategis Selat Hormuz memicu kekhawatiran lonjakan inflasi dan biaya logistik antar-benua.',
        body: [
            'Situasi keamanan yang memanas di kawasan Timur Tengah menimbulkan efek domino terhadap stabilitas ekonomi global.',
            'Harga minyak mentah acuan Brent dan WTI tercatat mengalami fluktuasi tajam seiring risiko gangguan kapal tanker di jalur maritim internasional.',
            'Pengamat ekonomi menyarankan negara-negara berkembang, termasuk Indonesia, untuk memperkuat ketahanan cadangan pangan domestik dan diversifikasi sumber energi baru terbarukan guna meredam imported inflation.'
        ]
    },
    {
        id: 30,
        t: 'Karang Taruna Got Talent 2026 Buka Panggung bagi Talenta Muda Lampung Selatan',
        c: 'Ragam',
        d: '2026-09-29',
        v: 1940,
        author: 'Ismail',
        loc: 'Lampung Selatan',
        tags: ['Karang Taruna', 'Pemuda', 'Seni Musik', 'Lampung Selatan'],
        lead: 'Ajang kreasi seni musik, tari kreasi daerah, dan pertunjukan modern menjadi wadah positif bagi remaja untuk menyalurkan bakat kreatif.',
        body: [
            'Ratusan pemuda dari berbagai penjuru Lampung Selatan memadati panggung terbuka dalam festival bergengsi Karang Taruna Got Talent 2026.',
            'Acara ini menampilkan aneka perlombaan mulai dari band akustik, solo song lagu daerah, tari kontemporer, hingga stand up comedy bernuansa kearifan lokal.',
            'Bupati Lampung Selatan dalam sambutannya menyatakan kebanggaan atas inisiatif generasi muda dan menjanjikan beasiswa pembinaan seni bagi para pemenang lomba.'
        ]
    }
].map((item, idx) => ({
    ...item,
    tone: T[idx % T.length],
    readTime: Math.max(2, Math.ceil((item.body.join(' ').split(' ').length) / 180))
}));

const V = [
    {
        id: 'v1',
        t: 'ALAMATE ANAK SHOLEH VOC.MUTIK NIDA | THE BEST OF LIVE MUSIC NEW CUPLIKA',
        yt: 'dQw4w9WgXcQ',
        date: '2026-10-01',
        dur: '06:45',
        views: 8940
    },
    {
        id: 'v2',
        t: 'Layakkah Bupati Lucky Hakim ke Jepang Disanksi? Ini Kata Anggota DPRD Indramayu',
        yt: '',
        date: '2026-10-02',
        dur: '08:12',
        views: 12400
    },
    {
        id: 'v3',
        t: 'Baguna PDI Perjuangan Cabang Jakpus Buka Dapur Umum Untuk Korban Banjir',
        yt: '',
        date: '2026-09-30',
        dur: '04:20',
        views: 3100
    },
    {
        id: 'v4',
        t: 'Organ NEW ARIMBI | Wedding Of Hilmi & Indah | Tugu-Sliyeg',
        yt: '',
        date: '2026-09-29',
        dur: '11:35',
        views: 5600
    },
    {
        id: 'v5',
        t: 'LBH DELTA 19 Indramayu Gelar Deklarasi dan Pengukuhan Pengurus',
        yt: '',
        date: '2026-09-28',
        dur: '05:15',
        views: 4200
    },
    {
        id: 'v6',
        t: 'Puskesmas Leuwimunding Majalengka Targetkan 950 Vial Vaksin Dosis Pertama',
        yt: '',
        date: '2026-09-27',
        dur: '03:50',
        views: 2900
    }
];

const POLL = {
    id: 'poll-2026-1',
    q: 'Menurut Anda, sektor prioritas apa yang paling mendesak dibenahi di daerah Anda saat ini?',
    o: [
        'Perbaikan Jalan Poros & Irigasi Pertanian Desa',
        'Kesejahteraan Guru PAUD & Honorer',
        'Peningkatan Layanan Puskesmas & Kesehatan',
        'Bantuan Modal & Akses Pasar Digital UMKM'
    ]
};

const CURHAT = [
    {
        nama: 'Siti Rohimah (Guru PAUD)',
        lokasi: 'Kecamatan Bongas, Indramayu',
        judul: 'Harapan Kami atas Kepastian Insentif Daerah Rp100 Ribu',
        isi: 'Kami mengajar dengan hati dan ikhlas setiap pagi membimbing anak-anak usia dini. Mohon pemkab segera menyelesaikan dasar regulasi agar insentif tidak tertunda lagi.',
        tgl: '2026-10-02'
    },
    {
        nama: 'Kusnan (Petani)',
        lokasi: 'Kecamatan Anjatan, Indramayu',
        judul: 'Terima Kasih atas Akses Jalan Beton Sawah Rancamulya',
        isi: 'Sekarang bawa gabah saat musim panen tidak lagi terperosok lumpur. Semoga jalan poros desa lainnya segera menyusul dibeton.',
        tgl: '2026-10-01'
    },
    {
        nama: 'Rahmat Hidayat (Pemuda Karang Taruna)',
        lokasi: 'Lampung Selatan',
        judul: 'Apresiasi Fitur Unduh Foto Dokumentasi Pemkab via QR Code',
        isi: 'Sangat memudahkan rekan-rekan humas ormas dan warga untuk mengunduh arsip foto kegiatan resmi tanpa perlu menunggu lama.',
        tgl: '2026-09-30'
    }
];

const INFO = {
    redaksi: {
        title: 'Susunan Redaksi CuplikCom',
        content: `
            <div class="redaksi-box">
                <p><strong>PT. Cuplik Media Center (CMC)</strong><br>
                Berdiri sejak 2009 · Legalitas SK Kepmenkumham RI Nomor: <strong>AHU-0039651.AH.01.01.Tahun 2019</strong><br>
                Anggota Resmi <strong>Serikat Media Siber Indonesia (SMSI)</strong></p>

                <hr style="border:0;border-top:1px solid var(--l);margin:20px 0">

                <p><strong>Pemimpin Redaksi / Penanggung Jawab:</strong> Ali Ma'nawi</p>
                <p><strong>Dewan Redaksi:</strong> Khusni Mubarok, Farhan Maksudi, Dewo, Ade Lukman, Mundirun, Rando Gunter, Anan Felicio</p>
                <p><strong>Reporter / Kontributor:</strong> Baebudin, Daman, Farhan Maksudi, Lina Maulidiyah, Bakrodin, Winanto, Maulana Yusuf Rismawan, Gustiawan, Dalani, Hasan Ayih, Ato Susanto, Karina JM, Haris Afandi, Papoh Gupron, Fitriyah Jewellery Farsi, Ahmad Hanafi</p>

                <div class="biro-grid">
                    <div><strong>Biro Indramayu:</strong> Daman, Baebudin, Dulhalil, Adeng Widayah, Marsan, Nurdi, Ato Tolok</div>
                    <div><strong>Biro Majalengka:</strong> Sunarto Aryodinoto, Fatkhul Amin</div>
                    <div><strong>Biro Cirebon Raya:</strong> Ade Hamdani</div>
                    <div><strong>Biro Bandung Raya & Sumedang:</strong> Tb Chep Zulfikar Natanegara</div>
                    <div><strong>Biro Jabodetabek:</strong> Ade Lukman, Muhamad Riko Indrianto, Fanny Nurul Hotimah, Deny Sardika, Nabila Ebivalia</div>
                    <div><strong>Biro Tegal Raya:</strong> Wurdiyanto</div>
                    <div><strong>Biro D.I. Yogyakarta:</strong> Abdan Ghifari Atsqo</div>
                    <div><strong>Biro Lampung:</strong> Ismail, M Ali Alnavian, Zul Halim</div>
                    <div><strong>Biro Bengkulu:</strong> Neni Lestari</div>
                    <div><strong>Biro Jambi:</strong> Muhammad Ichsan</div>
                    <div><strong>Biro Kalimantan:</strong> Rando Gunter, Robi Sanjaya, Mulia Gumi, Regina Nurmitae, Irawan, Budi S Shindunata</div>
                    <div><strong>Biro NTT:</strong> Nur Muhammad Al Amin</div>
                    <div><strong>Biro Papua:</strong> Fajar Ibrahim</div>
                </div>

                <hr style="border:0;border-top:1px solid var(--l);margin:20px 0">

                <p><strong>Penasehat Hukum:</strong><br>
                Kantor Hukum Adi Iwan Mulyawan, SH. dan Rekan<br>
                (Adi Iwan Mulyawan, S.H.; Rustono, S.H.I.; Ayip Yuhadi, S.H.; Jefri Mulyana, S.H.; Ana Mulyana, S.H.)</p>

                <p><strong>Programmer & Designer:</strong> A Lubis Ghozali, M Ali Fikri</p>
                <p><strong>Iklan & Promosi:</strong> Pudin, Ahmad Hasan A</p>
                <p><strong>Administrasi & Keuangan:</strong> Fitriyani, Desi Amaliani</p>

                <div class="kontak-card">
                    <h4>Alamat Kantor Redaksi & Tata Usaha</h4>
                    <p>Jl. Samsu No. 42 Kelurahan Margadadi, Kabupaten Indramayu, Jawa Barat 45211<br>
                    <strong>Telp:</strong> (0234) 7126806 · <strong>CP/WhatsApp:</strong> 087727030115<br>
                    <strong>Email Redaksi:</strong> <a href="mailto:cuplikcom@gmail.com">cuplikcom@gmail.com</a> | <a href="mailto:info@cuplik.com">info@cuplik.com</a><br>
                    <strong>Situs Web Resmi:</strong> <a href="https://www.cuplik.com" target="_blank">www.cuplik.com</a> | <a href="https://www.cuplik.id" target="_blank">www.cuplik.id</a></p>
                </div>
            </div>
        `
    },
    pedoman: {
        title: 'Pedoman Pemberitaan Media Siber',
        content: `
            <div class="legal-doc">
                <p>Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di Indonesia juga merupakan bagian dari kemerdekaan berpendapat, berekspresi, dan pers.</p>
                <p>Media siber memiliki karakter khusus sehingga memerlukan pedoman agar pengelolaannya dapat dilaksanakan secara profesional, memenuhi fungsi, hak, dan kewajibannya sesuai <strong>Undang-Undang Nomor 40 Tahun 1999 tentang Pers</strong> dan Kode Etik Jurnalistik. Untuk itu Dewan Pers bersama organisasi pers dan masyarakat menyusun Pedoman Pemberitaan Media Siber sebagai berikut:</p>

                <h3>1. Ruang Lingkup</h3>
                <p>Media Siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers. Isi Buatan Pengguna (User Generated Content) adalah segala isi yang dibuat dan atau dipublikasikan oleh pengguna media siber.</p>

                <h3>2. Verifikasi dan Keberimbangan Berita</h3>
                <p>Pada prinsipnya setiap berita harus melalui proses verifikasi. Berita yang dapat merugikan pihak lain memerlukan konfirmasi dan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi, keberimbangan, dan asas praduga tak bersalah.</p>

                <h3>3. Isi Buatan Pengguna (User Generated Content)</h3>
                <p>Media siber mewajibkan pengguna untuk mematuhi ketentuan bahwa isi buatan pengguna tidak memuat fitnah, kebencian bermuatan SARA, kekerasan, maupun diskriminasi gender/fisik. Media siber berhak mengedit atau menghapus konten yang melanggar.</p>

                <h3>4. Ralat, Koreksi, dan Hak Jawab</h3>
                <p>Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers dan Kode Etik Jurnalistik, serta wajib ditautkan secara langsung pada berita yang diralat.</p>

                <h3>5. Pencabutan Berita</h3>
                <p>Berita yang sudah dipublikasikan tidak dapat dicabut karena intervensi dari luar, kecuali terkait masa depan anak, SARA, atau putusan khusus Dewan Pers.</p>

                <h3>6. Iklan dan Advertorial</h3>
                <p>Media siber wajib membedakan secara tegas dan jelas antara produk jurnalistik murni dengan konten iklan berbayar (advertorial/sponsored).</p>
                <p><em>(Pedoman ini disahkan Dewan Pers dan Komunitas Pers Nasional di Jakarta).</em></p>
            </div>
        `
    },
    disclaimer: {
        title: 'Pasal Sanggahan (Disclaimer)',
        content: `
            <div class="legal-doc">
                <p>Seluruh layanan dan sajian informasi yang diberikan oleh <strong>cuplikcom</strong> mengikuti aturan main yang berlaku serta tunduk pada ketentuan hukum pers Republik Indonesia.</p>
                <h3>Ketentuan Penggunaan:</h3>
                <ul>
                    <li><strong>cuplikcom</strong> tidak bertanggung jawab atas tidak tersampaikannya data/informasi yang dikirimkan oleh pembaca melalui berbagai saluran komunikasi karena kendala teknis tak terduga.</li>
                    <li><strong>cuplikcom</strong> berhak untuk memuat, tidak memuat, mengedit, mengklarifikasi, dan/atau menghapus data maupun informasi yang disampaikan pembaca demi etika dan hukum.</li>
                    <li>Data dan/atau analisis yang disajikan di <strong>cuplikcom</strong> ditujukan sebagai rujukan informasi publik yang objektif dan edukatif.</li>
                    <li>Kami mengimbau pembaca untuk senantiasa memverifikasi informasi serta tidak menyebarkan konten yang melanggar hak cipta dan norma kesantunan.</li>
                </ul>
            </div>
        `
    },
    iklan: {
        title: 'Info Pemasangan Iklan & Advertorial',
        content: `
            <div class="rate-card-wrap">
                <p>CuplikCom (PT Cuplik Media Center) melayani kemitraan strategis periklanan digital, advertorial institusi/perusahaan, publikasi rilis pers, dan banner promosi dengan jangkauan ratusan ribu pembaca loyal di seluruh Indonesia, khususnya wilayah Jawa Barat, Banten, DKI Jakarta, dan Sumatera Selatan/Lampung.</p>

                <h3 style="margin-top:24px">Tarif Publikasi Artikel / Advertorial</h3>
                <table class="rate-table">
                    <thead>
                        <tr>
                            <th>Jenis Publikasi</th>
                            <th>Posisi / Penempatan</th>
                            <th>Tarif (per Berita)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Headline Utama</strong></td>
                            <td>Tampil di Hero Slider & Halaman Depan Utama</td>
                            <td>Rp 2.500.000</td>
                        </tr>
                        <tr>
                            <td><strong>Headline Topik / Kanal</strong></td>
                            <td>Tampil di Puncak Kanal Kategori Pilihan</td>
                            <td>Rp 1.500.000</td>
                        </tr>
                        <tr>
                            <td><strong>Publikasi Reguler (Non-Headline)</strong></td>
                            <td>Tampil di Berita Terbaru & Pengindeksan Google News</td>
                            <td>Rp 1.000.000</td>
                        </tr>
                        <tr>
                            <td><strong>Liputan Khusus & Video Podcast</strong></td>
                            <td>Produksi Video YouTube CMC + Liputan Artikel Khusus</td>
                            <td>Hubungi Tim Marketing</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style="margin-top:28px">Kontak Pemasaran & Pengiriman Rilis</h3>
                <div class="kontak-card">
                    <p><strong>Pengiriman Berita & Rilis:</strong> <a href="mailto:cuplikcom@gmail.com">cuplikcom@gmail.com</a> / <a href="mailto:redaksi@cuplik.com">redaksi@cuplik.com</a><br>
                    <strong>Info Kerjasama & Iklan:</strong> <a href="mailto:cuplik.info@gmail.com">cuplik.info@gmail.com</a> / <a href="mailto:info@cuplik.com">info@cuplik.com</a><br>
                    <strong>Hotline / WhatsApp Marketing:</strong> 087727030115 / (0234) 7126806</p>
                </div>
            </div>
        `
    }
};
