// export const grantProcessSteps = [
//   {
//     id: "NODE_START",
//     title: "MULA: Permohonan Geran Digitalisasi PMKS",
//     connections: ["node1"],
//     completed: false,
//   },
//   {
//     id: "node1",
//     title: "Fasa 1: Semakan Kelayakan",
//     mainSummary:
//       "Sebelum meneruskan, pastikan perniagaan anda (Aminah's Creative Batik) memenuhi syarat-syarat asas kelayakan Geran Digitalisasi PMKS.",
//     detailedPoints: [
//       "Status PMKS Malaysia yang sah (Mikro, Kecil atau Sederhana).",
//       "Sekurang-kurangnya 60% ekuiti dimiliki oleh warganegara Malaysia.",
//       "Telah beroperasi sekurang-kurangnya enam (6) bulan (atau tiga (3) bulan untuk PKS dari Sabah/Sarawak).",
//       "Pendapatan tahunan atau bilangan pekerja sepenuh masa mengikut definisi PMKS semasa.",
//       "Tidak disenarai hitam oleh mana-mana agensi kewangan atau kerajaan.",
//     ],
//     details: [
//       {
//         step: "Rujuk Garis Panduan Rasmi Terkini (BSN/MDEC)",
//         completed: false,
//         link: "#placeholder_official_guidelines_url",
//       },
//       {
//         step: "Gunakan Alat Semakan Kelayakan Dalam Talian (jika ada)",
//         completed: false,
//         link: "#placeholder_eligibility_checker_tool",
//       },
//     ],
//     connections: ["node2"],
//     completed: false,
//   },
//   {
//     id: "node2",
//     title: "Fasa 2: Pemilihan TSP",
//     mainSummary:
//       "Pilih Penyedia Penyelesaian Teknologi (TSP) yang sah dan disenaraikan oleh MDEC. Dapatkan sebut harga untuk sistem E-dagang dan Pengurusan Inventori.",
//     detailedPoints: [
//       "Hanya perbelanjaan dengan TSP yang dilantik oleh MDEC sahaja layak untuk geran ini.",
//       "Kenal pasti TSP yang menawarkan penyelesaian E-dagang (cth: pembangunan laman web, integrasi pasaran) DAN/ATAU sistem Pengurusan Inventori.",
//       "Minta sekurang-kurangnya satu (1) sebut harga rasmi yang terperinci.",
//     ],
//     details: [
//       {
//         step: "Semak Senarai Panel TSP di Portal MDEC",
//         completed: false,
//         link: "#placeholder_mdec_tsp_list_url",
//       },
//       {
//         step: "Hubungi beberapa TSP untuk perbincangan & demonstrasi (jika perlu).",
//         completed: false,
//       },
//       {
//         step: "Minta Sebut Harga Rasmi (Pastikan merangkumi skop untuk E-dagang & Inventori).",
//         completed: false,
//       },
//     ],
//     connections: ["node3"],
//     completed: false,
//   },
//   {
//     id: "node3",
//     title: "Fasa 3: Penyediaan Dokumen",
//     connections: ["node4"],
//     completed: false,
//     mainSummary:
//       "Kumpulkan dan sediakan semua dokumen yang diperlukan mengikut senarai semak rasmi. Pastikan semua salinan adalah jelas, lengkap dan terkini.",
//     detailedPoints: [
//       "Setiap dokumen mempunyai kepentingannya untuk mengesahkan maklumat perniagaan dan permohonan.",
//       "Susun dokumen dalam format digital (PDF atau imej berkualiti tinggi) untuk muat naik ke portal BSN.",
//     ],
//     details: [
//       {
//         step: "Buat senarai semak dokumen peribadi berdasarkan panduan rasmi.",
//         completed: false,
//       },
//       {
//         step: "Imbas (scan) semua dokumen fizikal kepada format digital.",
//         completed: false,
//       },
//       {
//         step: "Namakan fail digital dengan jelas (cth: AminahBatik_SSM_Cert.pdf).",
//         completed: false,
//       },
//     ],
//     nestedSteps: [
//       {
//         id: "node31",
//         title: "3.1 Sijil SSM & Profil Syarikat",
//         mainSummary:
//           "Sediakan salinan Sijil Pendaftaran Perniagaan dengan Suruhanjaya Syarikat Malaysia (SSM) DAN Profil Syarikat terkini dari MyData SSM atau e-Info SSM.",
//         detailedPoints: [
//           "Untuk Perniagaan (ROB): Borang D (Sijil Pendaftaran) & Profil Perniagaan.",
//           "Untuk Syarikat (ROC): Sijil Pemerbadanan (dahulu Borang 9), Borang 24, Borang 49 & Profil Syarikat.",
//           "Untuk Perkongsian Liabiliti Terhad (PLT): Sijil Pendaftaran PLT & Profil Perniagaan.",
//           "Profil Syarikat diperlukan untuk maklumat terkini mengenai pemilik dan alamat.",
//         ],
//         details: [
//           {
//             step: "Dapatkan Profil Syarikat terkini dari portal MyData SSM.",
//             completed: false,
//             link: "https://www.mydata-ssm.com.my/",
//           },
//           {
//             step: "Pastikan semua halaman Sijil SSM diimbas sepenuhnya.",
//             completed: false,
//           },
//         ],
//         connections: ["node32"],
//         completed: false,
//       },
//       {
//         id: "node32",
//         title: "3.2 Penyata Bank",
//         mainSummary:
//           "Salinan penyata akaun bank syarikat bagi dua (2) bulan terkini sebelum tarikh permohonan.",
//         detailedPoints: [
//           "Penyata mesti menunjukkan nama syarikat (Aminah's Creative Batik), nombor akaun, dan nama bank.",
//           "Semua transaksi mestilah jelas dan boleh dibaca.",
//           "Hanya penyata akaun semasa syarikat. Akaun peribadi tidak diterima.",
//         ],
//         details: [
//           {
//             step: "Muat turun e-penyata dari perbankan internet syarikat.",
//             completed: false,
//           },
//           {
//             step: "Pastikan kedua-dua bulan adalah berturutan dan yang paling terkini.",
//             completed: false,
//           },
//         ],
//         importantNotes: [
//           "Baki akaun bukan faktor utama, tetapi transaksi aktif menunjukkan perniagaan yang berjalan.",
//         ],
//         connections: ["node33"],
//         completed: false,
//       },
//       {
//         id: "node33",
//         title: "3.3 Salinan KP Pengarah/Pemilik",
//         mainSummary:
//           "Salinan kad pengenalan (depan dan belakang) SEMUA pengarah syarikat atau pemilik perniagaan (bagi Aminah's Creative Batik, ini mungkin Puan Aminah sahaja).",
//         detailedPoints: [
//           "Pastikan salinan adalah jelas, tidak kabur, dan kedua-dua belah muka surat diimbas.",
//           "Untuk bukan warganegara (jika berkaitan dengan struktur pemilikan minoriti), salinan pasport diperlukan.",
//         ],
//         details: [
//           {
//             step: "Imbas kad pengenalan dengan resolusi yang baik.",
//             completed: false,
//           },
//         ],
//         connections: ["node34"],
//         completed: false,
//       },
//       {
//         id: "node34",
//         title: "3.4 Sebut Harga TSP",
//         mainSummary:
//           "Sebut harga yang lengkap dan rasmi daripada Penyedia Penyelesaian Teknologi (TSP) yang telah dipilih oleh Aminah's Creative Batik untuk sistem E-dagang dan Pengurusan Inventori.",
//         detailedPoints: [
//           "Sebut harga mesti atas nama syarikat TSP yang sah dan ditujukan kepada Aminah's Creative Batik.",
//           "Nyatakan dengan jelas skop kerja, perincian kos setiap item/modul (E-dagang, Inventori), jumlah keseluruhan, dan tempoh sah sebut harga.",
//           "Sertakan nombor pendaftaran TSP dengan MDEC (jika ada pada sebut harga).",
//         ],
//         details: [
//           {
//             step: "Semak semula sebut harga untuk memastikan semua maklumat lengkap sebelum dimuat naik.",
//             completed: false,
//           },
//         ],
//         //   connections: ["NODE_PHASE4_SUBMISSION_BSN"],
//         completed: false,
//       },
//     ],
//   },
//   {
//     id: "node4",
//     title: "Fasa 4: Permohonan Dalam Talian (BSN)",
//     mainSummary:
//       "Setelah semua dokumen sokongan lengkap, permohonan Geran Digitalisasi PMKS perlu dibuat secara dalam talian (online) melalui portal rasmi Bank Simpanan Nasional (BSN).",
//     detailedPoints: [
//       "Anda perlu mendaftar akaun di portal BSN (jika belum ada).",
//       "Isi borang permohonan dalam talian dengan teliti.",
//       "Muat naik semua dokumen sokongan yang telah disediakan dalam format digital (biasanya PDF, JPG).",
//     ],
//     details: [
//       {
//         step: "Sediakan semua fail digital dokumen sebelum memulakan proses permohonan dalam talian.",
//         completed: false,
//       },
//       {
//         step: "Layari portal BSN yang betul untuk permohonan geran.",
//         completed: false,
//         link: "#placeholder_bsn_application_portal",
//       },
//       {
//         step: "Simpan nombor rujukan permohonan setelah berjaya dihantar.",
//         completed: false,
//       },
//     ],

//     connections: ["node5"],
//     completed: false,
//   },
//   {
//     id: "node5",
//     title: "Fasa 5: Penilaian & Keputusan",
//     mainSummary:
//       "Pihak BSN/agensi berkaitan akan menyemak dan menilai permohonan anda. Tempoh penilaian mungkin berbeza.",
//     detailedPoints: [
//       "Agensi mungkin menghubungi anda untuk maklumat tambahan jika perlu.",
//       "Keputusan (lulus atau gagal) akan dimaklumkan melalui emel atau portal.",
//     ],
//     details: [
//       {
//         step: "Semak emel dan portal BSN secara berkala untuk status permohonan.",
//         completed: false,
//       },
//     ],
//     connections: ["NODE_END"],
//     completed: false,
//   },
//   {
//     id: "NODE_END",
//     title: "PROSES PERMOHONAN AWAL SELESAI",

//     connections: [],
//     completed: false,
//   },
// ];

export const fnbLicenseProcessSteps = [
  {
    id: "NODE_START",
    title: "MULA: Permohonan Lesen Perniagaan F&B (Restoran/Kafe)",
    connections: ["node1_fb"],
    completed: false,
  },
  {
    id: "node1_fb",
    title: "Fasa 1: Penyelidikan Awal & Perancangan",
    mainSummary:
      "Sebelum memulakan apa-apa, fahami jenis lesen yang diperlukan untuk perniagaan F&B anda. Kesilapan di peringkat ini boleh menyebabkan kelewatan dan kos tambahan.",
    detailedPoints: [
      "Kenal pasti jenis perniagaan F&B (restoran, kafe, kiosk, katering, food truck). Keperluan lesen berbeza.",
      "Selidik keperluan lesen khusus dari Pihak Berkuasa Tempatan (PBT) di lokasi perniagaan (cth: DBKL, MBPJ, MPK). Setiap PBT mungkin ada sedikit perbezaan.",
      "Fahami keperluan asas dari Kementerian Kesihatan Malaysia (KKM) berkaitan premis makanan dan pengendalian makanan.",
      "Pertimbangkan keperluan lesen lain seperti Lesen Papan Tanda, Lesen Muzik (MAC P), dan jika berkaitan, Lesen Minuman Keras.",
      "Jika merancang untuk mendapatkan sijil Halal, fahami proses permohonan dari JAKIM/MAIN.",
    ],
    details: [
      {
        step: "Lawati laman web atau pejabat PBT pilihan anda untuk mendapatkan senarai semak lesen perniagaan F&B.",
        completed: false,
        link: "#placeholder_pbt_website_url", // Example: https://elesen.dbkl.gov.my/
      },
      {
        step: "Rujuk portal rasmi KKM untuk Garis Panduan Premis Makanan Bersih dan Selamat.",
        completed: false,
        link: "#placeholder_kkm_food_safety_guidelines_url", // Example: https://www.moh.gov.my/index.php/pages/view/160
      },
      {
        step: "Pertimbangkan untuk mendapatkan khidmat nasihat dari perunding perniagaan jika proses terlalu rumit.",
        completed: false,
      },
    ],
    connections: ["node2_fb"],
    completed: false,
  },
  {
    id: "node2_fb",
    title: "Fasa 2: Pendaftaran Perniagaan & Akaun Bank",
    mainSummary:
      "Daftarkan entiti perniagaan anda dengan Suruhanjaya Syarikat Malaysia (SSM) dan buka akaun bank perniagaan.",
    detailedPoints: [
      "Pilih struktur perniagaan yang sesuai (Milikan Tunggal, Perkongsian, Sdn Bhd).",
      "Lengkapkan pendaftaran perniagaan melalui portal MySSM atau di kaunter SSM.",
      "Buka akaun bank semasa atas nama perniagaan.",
    ],
    details: [
      {
        step: "Daftar atau perbaharui pendaftaran perniagaan di portal MySSM.",
        completed: false,
        link: "https://www.ssm.com.my/",
      },
      {
        step: "Sediakan dokumen SSM untuk membuka akaun bank perniagaan.",
        completed: false,
      },
    ],
    connections: ["node3"],
    completed: false,
  },
  {
    id: "node3",
    title: "Fasa 3: Pemilihan & Kelulusan Premis",
    mainSummary:
      "Pilih lokasi premis yang strategik dan sesuai dengan jenis perniagaan F&B. Dapatkan kelulusan awal atau nasihat dari PBT mengenai kesesuaian premis sebelum menandatangani perjanjian sewa atau membuat ubah suai besar.",
    detailedPoints: [
      "Pastikan premis mematuhi syarat pengezonan PBT untuk perniagaan makanan.",
      "Dapatkan pelan lantai premis dan rancang susun atur (dapur, ruang makan, tandas, stor).",
      "Jika ubah suai diperlukan, lantik kontraktor dan dapatkan kelulusan pelan ubah suai dari PBT.",
      "Pastikan premis mempunyai ciri-ciri keselamatan kebakaran asas yang mungkin diperlukan untuk sokongan Jabatan Bomba dan Penyelamat.",
    ],
    details: [
      {
        step: "Berunding dengan Jabatan Perancangan PBT mengenai kesesuaian zon premis.",
        completed: false,
      },
      {
        step: "Sediakan pelan ubah suai (jika perlu) untuk dikemukakan kepada PBT.",
        completed: false,
      },
      {
        step: "Semak keperluan asas keselamatan kebakaran dari Jabatan Bomba dan Penyelamat Malaysia.",
        completed: false,
        link: "#placeholder_bomba_guidelines_url", // Example: https://www.bomba.gov.my
      },
    ],
    connections: ["node4_fb"],
    completed: false,
  },
  {
    id: "node4_fb",
    title: "Fasa 4: Permohonan Lesen Utama (PBT & KKM)",
    mainSummary:
      "Ini adalah fasa kritikal di mana anda memohon lesen utama untuk operasi perniagaan F&B, iaitu Lesen Premis Perniagaan dari PBT dan memenuhi keperluan KKM.",
    detailedPoints: [
      "Semua pengendali makanan WAJIB menghadiri Kursus Pengendali Makanan yang diiktiraf KKM.",
      "Pekerja juga perlu mendapatkan suntikan Anti-Tifoid.",
      "Premis perlu mematuhi piawaian kebersihan dan reka bentuk yang ditetapkan oleh KKM (akan diperiksa).",
      "Dokumen sokongan untuk lesen PBT biasanya termasuk salinan SSM, salinan KP, pelan lantai, gambar premis, surat sokongan (jika ada), dan sijil Kursus Pengendali Makanan.",
    ],
    details: [
      {
        step: "Daftar semua kakitangan untuk Kursus Pengendali Makanan.",
        completed: false,
        link: "#placeholder_kkm_food_handler_course_list", // Example: Search "senarai sekolah latihan pengendali makanan diiktiraf KKM"
      },
      {
        step: "Pastikan semua pengendali makanan menerima suntikan Anti-Tifoid.",
        completed: false,
      },
      {
        step: "Kemukakan permohonan Lesen Premis Perniagaan dan Lesen Papan Tanda (jika serentak) ke PBT.",
        completed: false,
        link: "#placeholder_pbt_elesen_portal", // Link to specific PBT's e-licensing portal
      },
      {
        step: "Bersedia untuk pemeriksaan premis oleh pegawai PBT dan KKM.",
        completed: false,
      },
    ],
    nestedSteps: [
      {
        id: "node41_fb",
        title: "4.1 Dokumen Permohonan Lesen Premis PBT",
        mainSummary:
          "Kumpulkan semua dokumen yang diperlukan oleh PBT untuk permohonan lesen premis.",
        detailedPoints: [
          "Salinan Sijil Pendaftaran Perniagaan SSM.",
          "Salinan Kad Pengenalan semua pemilik/pengarah.",
          "Salinan Perjanjian Sewa Premis atau Bukti Pemilikan.",
          "Pelan Lantai Premis (yang diluluskan jika ada ubah suai).",
          "Gambar Premis (luar dan dalam).",
          "Salinan Sijil Kursus Pengendali Makanan bagi semua pengendali makanan.",
          "Salinan Rekod Suntikan Anti-Tifoid.",
          "Surat sokongan dari Jabatan Bomba (bergantung kepada saiz dan jenis premis).",
          "Resit bayaran cukai taksiran terkini premis.",
        ],
        details: [
          {
            step: "Buat senarai semak dokumen PBT dan pastikan semua lengkap.",
            completed: false,
          },
        ],
        connections: ["node42_fb"],
        completed: false,
      },
      {
        id: "node42_fb",
        title: "4.2 Keperluan KKM: Kursus Pengendali Makanan & Suntikan",
        mainSummary:
          "Pastikan semua individu yang terlibat dalam pengendalian makanan mematuhi keperluan KKM.",
        detailedPoints: [
          "KKM mewajibkan semua pengendali makanan (tukang masak, pelayan, pencuci pinggan, pemilik yang terlibat) memiliki Sijil Kursus Pengendali Makanan.",
          "Suntikan pencegahan tifoid adalah mandatori.",
          "Amalan kebersihan diri dan premis yang tinggi perlu sentiasa dijaga.",
        ],
        details: [
          {
            step: "Jadualkan kakitangan untuk menghadiri kursus di Sekolah Latihan Pengendali Makanan (SLPM) yang diiktiraf.",
            completed: false,
          },
          {
            step: "Dapatkan suntikan dari klinik atau hospital yang bertauliah.",
            completed: false,
          },
        ],
        completed: false,
      },
    ],
    connections: ["node5_fb"],
    completed: false,
  },
  {
    id: "node5_fb",
    title: "Fasa 5: Lesen Tambahan & Perakuan Sokongan (Jika Berkaitan)",
    mainSummary:
      "Bergantung pada konsep perniagaan F&B anda, lesen atau perakuan tambahan mungkin diperlukan.",
    detailedPoints: [
      "Lesen Papan Tanda: Biasanya dimohon bersama atau selepas lesen premis diluluskan oleh PBT.",
      "Sijil Halal (JAKIM/MAIN): Proses yang berasingan dan terperinci jika menyasarkan pasaran Muslim.",
      "Lesen Muzik (Music Authors' Copyright Protection - MACP): Jika memainkan muzik berhak cipta di premis.",
      "Lesen Minuman Keras: Jika menjual minuman beralkohol (proses ketat dan berbeza mengikut negeri/PBT).",
    ],
    details: [
      {
        step: "Mohon Lesen Papan Tanda dari PBT dengan reka bentuk yang mematuhi garis panduan.",
        completed: false,
      },
      {
        step: "Jika memohon Halal, rujuk portal MyEHalal JAKIM.",
        completed: false,
        link: "https://www.halal.gov.my/v4/",
      },
      {
        step: "Hubungi MACP Berhad untuk permohonan lesen muzik.",
        completed: false,
        link: "https://www.macp.com.my/",
      },
    ],
    connections: ["node6_fb"],
    completed: false,
  },
  {
    id: "node6_fb",
    title: "Fasa 6: Pemeriksaan Premis & Kelulusan Akhir",
    mainSummary:
      "Pihak berkuasa (PBT, KKM, Bomba jika berkaitan) akan menjalankan pemeriksaan di premis anda untuk memastikan pematuhan terhadap semua syarat dan peraturan.",
    detailedPoints: [
      "Pemeriksaan PBT: Fokus pada pematuhan pelan bangunan, kebersihan umum, sistem pembuangan sisa.",
      "Pemeriksaan KKM (Bahagian Keselamatan dan Kualiti Makanan): Fokus pada kebersihan premis, pengendalian makanan, storan, suhu makanan, ketiadaan makhluk perosak, tandas.",
      "Pemeriksaan Bomba: Fokus pada kelengkapan keselamatan kebakaran (alat pemadam api, laluan kecemasan, lampu kecemasan).",
      "Pastikan semua sijil (Kursus Pengendali Makanan, suntikan) dipamerkan atau sedia untuk ditunjukkan.",
    ],
    details: [
      {
        step: "Sediakan premis untuk pemeriksaan berdasarkan senarai semak dari setiap agensi.",
        completed: false,
      },
      {
        step: "Ambil tindakan pembetulan segera jika ada teguran atau arahan penambahbaikan.",
        completed: false,
      },
    ],
    connections: ["node7_fb"],
    completed: false,
  },
  {
    id: "node7_fb",
    title: "Fasa 7: Penerimaan Lesen & Mula Operasi",
    mainSummary:
      "Setelah semua pemeriksaan berjaya dan bayaran lesen dijelaskan, anda akan menerima lesen-lesen yang dipohon. Perniagaan F&B anda kini sedia untuk beroperasi secara sah.",
    detailedPoints: [
      "Pamerkan lesen perniagaan dan lain-lain sijil yang berkaitan di lokasi yang mudah dilihat di premis.",
      "Fahami syarat-syarat pembaharuan lesen (biasanya tahunan) dan tarikh luput.",
      "Sentiasa patuhi amalan kebersihan dan keselamatan makanan sepanjang operasi.",
    ],
    details: [
      {
        step: "Buat bayaran penuh untuk semua lesen yang diluluskan.",
        completed: false,
      },
      {
        step: "Pamerkan lesen di premis mengikut arahan PBT.",
        completed: false,
      },
      {
        step: "Tetapkan peringatan untuk pembaharuan lesen tahunan.",
        completed: false,
      },
    ],
    connections: ["NODE_END_FB"],
    completed: false,
  },
  {
    id: "NODE_END_FB",
    title: "PROSES PERMOHONAN LESEN F&B SELESAI & OPERASI BOLEH BERMULA",
    connections: [],
    completed: false,
  },
];

