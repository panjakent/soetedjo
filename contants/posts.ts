export type Posts = {
  id: number
  menu: string[]
  title: string
  type: 'article' | 'video' | 'image'
  cover?: string
  whoShare: string
  author: string
  content: string[] | string
  source?: string
}

export const POSTS: Posts[] = [
  {
    id: 1,
    source:
      'https://www.netralnews.com/revolusi-ai-tak-terbendung-runtuhnya-sistem-lama-era-baru-dimulai/R1k5R0FHQ2o5elVHdUVNQkVEVHAzUT09',
    menu: ['knowledge'],
    type: 'article',
    title:
      'Revolusi AI Tak Terbendung: Runtuhnya Sistem Lama, Era Baru Dimulai',
    // cover: '/assets/unnamed.jpg',
    whoShare: 'Didik Widyantoro',
    author: 'Panji, Nazaruli',
    content: [
      'JAKARTA, NETRALNEWS.COM – Dunia saat ini sedang mengalami perubahan besar-besaran, salah satunya karena perkembangan teknologi kecerdasan buatan atau Artificial Intelligence (AI).',
      'Tapi AI yang dibahas di sini bukan cuma chatbot atau alat bantu pekerjaan sehari-hari, bukan. Teknologi ini sekarang benar-benar jadi kekuatan besar yang mampu mengguncang sistem lama dan membentuk era ekonomi baru.',
      'Hal itu disampaikan oleh pengusaha sekaligus YouTuber terkenal, Mardigu Wowiek Prasetyo, atau yang akrab disapa Bossman Mardigu, dalam salah satu video di kanal YouTube pribadinya yang dipantau netralnews.com, Selasa, 18 Maret 2025.',
      'Menurut Mardigu, perubahan besar dalam ekonomi dunia ini sebenarnya bukan hal baru. Ia bilang, setiap 150 tahun, dunia mengalami pergeseran ekonomi besar.',
      '“Pada akhir abad ke-19, Rockefeller, J.P. Morgan, dan Carnegie menjadi raksasa karena industri minyak dan perbankan. Sebelumnya, di era 1750-an, Rothschild dan Grosvenor membangun sistem keuangan global. Sekarang, giliran AI yang mengambil alih,” ujar Bossman Mardigu.',
      'Era AI: Awal Perubahan Besar',
      'Mardigu meyakini bahwa periode antara 2020 hingga 2040 adalah fase awal dari perubahan besar dalam struktur ekonomi global. Lalu setelah tahun 2045, AI diprediksi bakal mendominasi banyak sektor, mulai dari industri, perdagangan, sampai kehidupan sehari-hari.',
      'Tanda-tanda pergeseran ini, lanjutnya, sudah mulai kelihatan dari langkah strategis perusahaan-perusahaan teknologi besar yang mulai mengubah arah bisnis mereka.',
      'Sebagai contoh, Mardigu menyoroti keputusan Apple yang membatalkan proyek mobil listrik berbasis baterai dan hidrogen, lalu memilih fokus mengembangkan AI.',
      '“Begitu AI mulai mengguncang dunia, Apple langsung putar haluan. Ini bukan keputusan kecil, melainkan pergeseran besar yang akan mempengaruhi arah ekonomi global,” tegasnya.',
      'Begitu juga Meta, induk dari Facebook, Instagram, dan WhatsApp, yang kini mulai menerapkan strategi monetisasi baru berkat kecanggihan AI dalam membaca dan menargetkan perilaku pengguna.',
      '“Facebook sudah bisa menghasilkan uang seperti YouTube, dan Instagram segera menyusul. Ini semua berkat AI,” katanya.',
      'AI: Pekerja Super yang Tak Mengenal Lelah',
      'Mardigu menjelaskan, AI saat ini bukan sekadar chatbot seperti ChatGPT, tapi sudah jadi mesin super yang kemampuannya menyerupai manusia dengan IQ setara 200, punya memori besar, dan bisa bekerja 24 jam non-stop.',
      '“AI bisa menganalisis interaksi sosial media, mempelajari data puluhan tahun, dan membuat strategi yang tak bisa ditandingi manusia,” paparnya.',
      'Ia juga menambahkan, sekarang AI sudah bisa mengelola akun media sosial secara otomatis, mulai dari membuat konten, membalas komentar, sampai berinteraksi langsung dengan audiens, semua tanpa campur tangan manusia. Hal ini, menurut Mardigu, bisa jadi ancaman serius untuk pekerjaan di sektor digital.',
      '“Tim media sosial akan banyak kehilangan pekerjaan. AI bisa lakukan semuanya lebih cepat dan tepat,” imbuhnya.',
      'Kaya Baru dari AI, Tapi Hati-Hati Ketergantungan Luar Negeri',
      'Lebih lanjut, Mardigu memprediksi akan muncul miliarder-miliarder baru dari sektor AI, sebagaimana sebelumnya terjadi di industri minyak, perbankan, dan teknologi digital.',
      'Namun, ia juga memberi peringatan soal bahaya ketergantungan pada AI buatan luar negeri seperti ChatGPT atau DeepSeek.',
      '“Kalau kita cuma jadi pengguna, kekayaan akan lari ke luar negeri. Tapi kalau kita bisa kembangkan AI lokal, maka kita yang akan diuntungkan,” jelasnya.',
      'Revolusi yang Sudah Terjadi',
      'Sebagai penutup, Mardigu menegaskan bahwa revolusi AI bukan hal yang akan datang, melainkan sudah terjadi sekarang.',
      '“Teknologi berkembang sangat cepat, perusahaan besar sudah berubah arah, pekerjaan mulai digantikan. AI akan ambil alih, mau tidak mau,” tandasnya.',
      'Ia pun mengajak masyarakat, khususnya para pelaku usaha dan pemerintah, untuk segera beradaptasi.',
      '“Siapa yang bisa memanfaatkan AI sekarang, bisa jadi pemimpin di ekonomi baru. Kalau cuma jadi penonton, kita akan tertinggal,” pungkas Mardigu.',
    ],
  },
  {
    id: 2,
    source: 'https://www.youtube.com/watch?v=2BX3I8hafOQ',
    menu: ['knowledge'],
    type: 'video',
    title: '10 Kebiasaan BURUK yang Merusak Otak Anda\n',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: 'https://www.youtube.com/watch?v=2BX3I8hafOQ',
  },
  {
    id: 3,
    // source: 'xxx',
    menu: ['knowledge'],
    type: 'article',
    title: 'Albert Einstein, Tokyo 1922',
    cover: '/assets/posts-image/post-3-1.jpeg',
    whoShare: 'Didik Widyantoro',
    author: 'anon',
    content: [
      'Fakta Menarik Pada suatu hari di tahun 1922, Albert Eintein pernah berkunjung ke Tokyo, Jepang. Sesampainya di Hotel, Albert Einstein bingung karena ia tak punya uang untuk memberikan Tip kepada pelayan Hotel yang telah membawakan kopernya.',

      'Sebagai gantinya, Albert Einstein mengambil secarcik kertas tertanda Imperial Hotel Tokyo. Kemudian menuliskan Teori Kebahagiaan',

      'Diberikanlah kertas itu kepada si pelayan hotel dan Albert Eintein mengatakan, kertas itu akan bernilai mahal suatu hari nanti.',

      'Benar saja, selembar "Teori Kebahagiaan Einstein" itu terjual seharga 20 miliar rupiah dalam lelang tahun 2017 lalu. Adalah cucu si pelayan Hotel yang berhak mendapatkan uangnya.',

      '"Hidup damai dan sederhana jauh lebih membahagiakan dari pada mengejar Kesuksesan berbalut kegelisahan terus menerus"',

      'Albert Einstein, Tokyo 1922',
    ],
  },
  {
    id: 4,
    // source: 'xxx',
    menu: ['knowledge', 'islam'],
    type: 'article',
    title: 'Kebahagiaan sesuai Ajaran Islam',
    // cover: '/assets/posts-image/post-3-1.jpeg',
    whoShare: 'Didik Widyantoro',
    author: 'anon',
    content: [
      'Kebahagiaan sesuai Ajaran Islam :',

      'Cara Meraih Kebahagiaan,',
      " Al-Qur'an sebagai pedoman hidup umat Islam tidak hanya mengajarkan tentang aturan dan moral, tetapi juga memberikan petunjuk mengenai cara meraih kebahagiaan sejati. Dalam berbagai ayat, Al-Qur'an menekankan bahwa kebahagiaan dapat diperoleh dengan mendekat kepada Yang Maha Pencipta.",

      "Berikut ini adalah beberapa cara untuk meraih kebahagiaan menurut Al-Qur'an :",

      '1. Sabar dan Bersikap Positif',
      'Sabar adalah salah satu kunci utama dalam meraih kebahagiaan karena mengajarkan seseorang untuk tetap tenang dan berserah diri kepada Allah dalam menghadapi ujian hidup. Dengan kesabaran, hati menjadi lebih damai, sehingga seseorang dapat menjalani hidup dengan penuh keikhlasan dan mendapatkan pahala serta ridha Allah SWT.',

      'Dalam surat Al-Baqarah ayat 155-156, Allah berfirman :',

      'وَلَنَبْلُوَنَّكُم بِشَىْءٍ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ وَبَشِّرِ ٱلصَّٰبِرِينَ ٱلَّذِينَ إِذَآ أَصَٰبَتْهُم مُّصِيبَةٌ قَالُوٓا۟ إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ',

      "\"Dan sungguh akan Kami berikan cobaan kepadamu, dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa dan buah-buahan. Dan berikanlah berita gembira kepada orang-orang yang sabar. (yaitu) orang-orang yang apabila ditimpa musibah, mereka mengucapkan, 'Innaa lillahi wa innaa ilaihi raaji'uu'. (QS. Al Baqarah: 155-156)\"",

      '2. Selalu Bersyukur',
      'Bersyukur merupakan kunci kebahagiaan karena dengan mensyukuri segala nikmat yang diberikan Allah, seseorang akan merasa cukup dan lebih tenang dalam menjalani hidup. Sikap syukur juga mendatangkan berkah serta ketenteraman hati, sehingga kebahagiaan tidak bergantung pada materi atau keadaan duniawi semata.',

      'Dalam Surat Ibrahim ayat 7 Allah SWT berfirman :',

      'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِى لَشَدِيدٌ',

      '"Dan (ingatlah) ketika Tuhanmu memaklumkan, \'Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), maka pasti azab-Ku sangat berat." (QS. Ibrahim: 07)',

      '3. Selalu Mengingat Allah',
      'Selalu mengingat Allah juga merupakan kunci kebahagiaan karena hati akan menjadi tenang dan dipenuhi keberkahan dalam setiap aspek kehidupan.',

      "Sesuai dengan Firman Allah dalam surat Ar-Ra'd ayat 28 :",

      'الَّذِيْنَ اٰمَنُوْا وَتَطْمَىِٕنُّ قُلُوْبُهُمْ بِذِكْرِ اللّٰهِ ۗ اَلَا بِذِكْرِ اللّٰهِ تَطْمَىِٕنُّ الْقُلُوْبُ ۗ',

      '(yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.',
    ],
  },
  {
    id: 5,
    source: 'https://www.youtube.com/watch?v=ScsjYOFcNoo',
    menu: ['inspiration', 'islam'],
    type: 'video',
    title:
      'LAKUKAN 6 HAL INI, PASTI BISNISMU SUKSES : CARA BISNIS ALA ABDURRAHMAN BIN AUF',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: 'https://www.youtube.com/watch?v=ScsjYOFcNoo',
  },
  {
    id: 6,
    source: 'https://www.youtube.com/watch?v=_XWHpSr11Ks',
    menu: ['islam'],
    type: 'video',
    title:
      '3 PESAN NABI MUHAMMAD SEBAGAI PENOLONG KEHIDUPAN | Ustadz Muhammad Nuzul Dzikri',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: 'https://www.youtube.com/watch?v=_XWHpSr11Ks',
  },
  {
    id: 7,
    source: 'http://youtube.com/watch?v=ukec-XRW0r8',
    menu: ['islam'],
    type: 'video',
    title:
      'Cara Kaya Abdurrahman Bin Auf, Sahabat Nabi Yang Ingin Jadi Miskin Tapi Semakin Tambah Kaya',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: 'http://youtube.com/watch?v=ukec-XRW0r8',
  },
  {
    id: 8,
    // source: 'xxx',
    menu: ['education'],
    type: 'article',
    title: 'Kepemimpinan',
    whoShare: 'Didik Widyantoro',
    cover: '/assets/posts-image/2.jpeg',
    author: 'anon',
    content: [
      'Kepemimpinan bukan soal siapa yang paling keras suaranya atau siapa yang paling ditakuti, melainkan siapa yang paling mampu membangkitkan potensi orang-orang di sekitarnya.',

      'Dalam lingkungan kerja yang otoriter, bawahan cenderung menahan ide, menyembunyikan masalah, dan hanya melakukan apa yang diperintahkan. Mereka tidak merasa aman untuk berbicara, apalagi untuk berpikir kritis.',
      'Di sinilah letak kegagalan kepemimpinan yang otoriter.',

      'Ketika seorang pemimpin lebih fokus untuk menunjukkan kekuasaan daripada menciptakan ruang aman untuk berdiskusi, maka organisasi akan kehilangan inovasi, kehilangan keberanian, dan pada akhirnya kehilangan arah.',

      'Sebaliknya, pemimpin yang baik adalah mereka yang bisa membangun kepercayaan dan memberi ruang bagi tim untuk tumbuh, salah, belajar, dan berbagi ide tanpa rasa takut.',

      'Kepemimpinan sejati bukanlah tentang dikagumi atau ditakuti, tetapi tentang menciptakan budaya yang mendukung semua orang untuk berpikir bersama, bukan hanya bekerja demi perintah.',

      'Pemimpin sejati tidak mencari pengikut yang patuh, tapi menciptakan pemimpin-pemimpin baru.',
    ],
  },
  {
    id: 9,
    // source: 'http://youtube.com/watch?v=ukec-XRW0r8',
    menu: ['education'],
    type: 'article',
    title: 'Kutipan John Dewey',
    whoShare: 'Didik Widyantoro',
    cover: '/assets/posts-image/3.jpeg',
    author: 'anon',
    content: [
      'Kutipan John Dewey ini menegaskan bahwa pendidikan harus lebih dari sekadar alat untuk mendapatkan pekerjaan - ia harus mempersiapkan individu untuk kehidupan yang utuh.',

      'Pendidikan bukan hanya keterampilan teknis - Sekolah tidak boleh hanya melatih anak-anak untuk pasar kerja, tetapi juga membentuk karakter, kreativitas, dan pemikiran kritis.',

      'Menyiapkan untuk kehidupan - Anak-anak perlu belajar bagaimana berpikir, beradaptasi, berkomunikasi, dan memahami dunia di sekitar mereka.',

      'Pendidikan sebagai proses seumur hidup - Belajar bukan hanya soal mendapatkan ijazah, tetapi bagaimana terus berkembang sebagai individu dan warga yang bertanggung jawab.',

      'Pendidikan yang ideal tidak hanya mencetak pekerja, tetapi juga manusia yang mampu menghadapi kehidupan dengan bijak.',
    ],
  },
  {
    id: 10,
    source: 'https://www.youtube.com/watch?v=GZETnoGmGQI',
    menu: ['health'],
    type: 'video',
    title: 'Hami berdoa buat Uyut Tedjo',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: 'https://www.youtube.com/watch?v=GZETnoGmGQI',
  },
  {
    id: 11,
    source: '',
    menu: ['creation'],
    type: 'image',
    title: 'Hami Lagi Menggambar pakai aplikasi paint',
    whoShare: 'Didik Widyantoro',
    author: '',
    content: [
      '/assets/posts-image/hami-1.jpeg',
      '/assets/posts-image/hami-2.jpeg',
      '/assets/posts-image/hami-3.jpeg',
    ],
  },
]
