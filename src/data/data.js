export const grantProcessSteps = [
  {
    id: "NODE_START",
    title: "MULA: Permohonan Geran Digitalisasi PMKS",
    connections: ["node1"],
    completed: false,
    number: 0,
  },
  {
    id: "node1",
    number: 1,
    title: "Fasa 1: Semakan Kelayakan",
    mainSummary:
      "Sebelum meneruskan, pastikan perniagaan anda (Aminah's Creative Batik) memenuhi syarat-syarat asas kelayakan Geran Digitalisasi PMKS.",
    detailedPoints: [
      "Status PMKS Malaysia yang sah (Mikro, Kecil atau Sederhana).",
      "Sekurang-kurangnya 60% ekuiti dimiliki oleh warganegara Malaysia.",
      "Telah beroperasi sekurang-kurangnya enam (6) bulan (atau tiga (3) bulan untuk PKS dari Sabah/Sarawak).",
      "Pendapatan tahunan atau bilangan pekerja sepenuh masa mengikut definisi PMKS semasa.",
      "Tidak disenarai hitam oleh mana-mana agensi kewangan atau kerajaan.",
    ],
    details: [
      {
        step: "Rujuk Garis Panduan Rasmi Terkini (BSN/MDEC)",
        completed: false,
        link: "#placeholder_official_guidelines_url",
      },
      {
        step: "Gunakan Alat Semakan Kelayakan Dalam Talian (jika ada)",
        completed: false,
        link: "#placeholder_eligibility_checker_tool",
      },
    ],
    importantNotes: [
      "Syarat kelayakan boleh dikemas kini oleh pihak penganjur.",
      "Setiap PKS hanya layak menerima geran ini sekali sahaja.",
    ],
    connections: ["node2"],
    completed: false,
  },
  {
    id: "node2",
    number: 2,
    title: "Fasa 2: Pemilihan TSP",
    mainSummary:
      "Pilih Penyedia Penyelesaian Teknologi (TSP) yang sah dan disenaraikan oleh MDEC. Dapatkan sebut harga untuk sistem E-dagang dan Pengurusan Inventori.",
    detailedPoints: [
      "Hanya perbelanjaan dengan TSP yang dilantik oleh MDEC sahaja layak untuk geran ini.",
      "Kenal pasti TSP yang menawarkan penyelesaian E-dagang (cth: pembangunan laman web, integrasi pasaran) DAN/ATAU sistem Pengurusan Inventori.",
      "Minta sekurang-kurangnya satu (1) sebut harga rasmi yang terperinci.",
    ],
    details: [
      {
        step: "Semak Senarai Panel TSP di Portal MDEC",
        completed: false,
        link: "#placeholder_mdec_tsp_list_url",
      },
      {
        step: "Hubungi beberapa TSP untuk perbincangan & demonstrasi (jika perlu).",
        completed: false,
      },
      {
        step: "Minta Sebut Harga Rasmi (Pastikan merangkumi skop untuk E-dagang & Inventori).",
        completed: false,
      },
    ],
    importantNotes: [
      "Geran adalah 50% padanan atau sehingga RM5,000, yang mana lebih rendah, bagi setiap PKS.",
      "Pilih TSP yang mempunyai reputasi baik dan memahami keperluan Aminah's Creative Batik.",
    ],
    connections: ["node3"],
    completed: false,
  },
  {
    id: "node3",
    number: 3,
    title: "Fasa 3: Penyediaan Dokumen",
    connections: ["node4"],
    completed: false,
    mainSummary:
      "Kumpulkan dan sediakan semua dokumen yang diperlukan mengikut senarai semak rasmi. Pastikan semua salinan adalah jelas, lengkap dan terkini.",
    detailedPoints: [
      "Setiap dokumen mempunyai kepentingannya untuk mengesahkan maklumat perniagaan dan permohonan.",
      "Susun dokumen dalam format digital (PDF atau imej berkualiti tinggi) untuk muat naik ke portal BSN.",
    ],
    details: [
      {
        step: "Buat senarai semak dokumen peribadi berdasarkan panduan rasmi.",
        completed: false,
      },
      {
        step: "Imbas (scan) semua dokumen fizikal kepada format digital.",
        completed: false,
      },
      {
        step: "Namakan fail digital dengan jelas (cth: AminahBatik_SSM_Cert.pdf).",
        completed: false,
      },
    ],
    importantNotes: [
      "Dokumen yang tidak lengkap atau tidak jelas boleh menyebabkan kelewatan atau penolakan permohonan.",
    ],
    nestedSteps: [
      {
        id: "node31",
        number: 3.1,
        title: "3.1 Sijil SSM & Profil Syarikat",
        mainSummary:
          "Sediakan salinan Sijil Pendaftaran Perniagaan dengan Suruhanjaya Syarikat Malaysia (SSM) DAN Profil Syarikat terkini dari MyData SSM atau e-Info SSM.",
        detailedPoints: [
          "Untuk Perniagaan (ROB): Borang D (Sijil Pendaftaran) & Profil Perniagaan.",
          "Untuk Syarikat (ROC): Sijil Pemerbadanan (dahulu Borang 9), Borang 24, Borang 49 & Profil Syarikat.",
          "Untuk Perkongsian Liabiliti Terhad (PLT): Sijil Pendaftaran PLT & Profil Perniagaan.",
          "Profil Syarikat diperlukan untuk maklumat terkini mengenai pemilik dan alamat.",
        ],
        details: [
          {
            step: "Dapatkan Profil Syarikat terkini dari portal MyData SSM.",
            completed: false,
            link: "https://www.mydata-ssm.com.my/",
          },
          {
            step: "Pastikan semua halaman Sijil SSM diimbas sepenuhnya.",
            completed: false,
          },
        ],
        importantNotes: [
          "Pastikan Sijil SSM belum tamat tempoh dan masih sah.",
          "Nama syarikat pada sijil SSM mesti sama dengan nama pada akaun bank dan sebut harga TSP.",
        ],
        connections: ["node32"],
        completed: false,
      },
      {
        id: "node32",
        number: 3.2,
        title: "3.2 Penyata Bank",
        mainSummary:
          "Salinan penyata akaun bank syarikat bagi dua (2) bulan terkini sebelum tarikh permohonan.",
        detailedPoints: [
          "Penyata mesti menunjukkan nama syarikat (Aminah's Creative Batik), nombor akaun, dan nama bank.",
          "Semua transaksi mestilah jelas dan boleh dibaca.",
          "Hanya penyata akaun semasa syarikat. Akaun peribadi tidak diterima.",
        ],
        details: [
          {
            step: "Muat turun e-penyata dari perbankan internet syarikat.",
            completed: false,
          },
          {
            step: "Pastikan kedua-dua bulan adalah berturutan dan yang paling terkini.",
            completed: false,
          },
        ],
        importantNotes: [
          "Baki akaun bukan faktor utama, tetapi transaksi aktif menunjukkan perniagaan yang berjalan.",
        ],
        connections: ["node33"],
        completed: false,
      },
      {
        id: "node33",
        number: 3.3,
        title: "3.3 Salinan KP Pengarah/Pemilik",
        mainSummary:
          "Salinan kad pengenalan (depan dan belakang) SEMUA pengarah syarikat atau pemilik perniagaan (bagi Aminah's Creative Batik, ini mungkin Puan Aminah sahaja).",
        detailedPoints: [
          "Pastikan salinan adalah jelas, tidak kabur, dan kedua-dua belah muka surat diimbas.",
          "Untuk bukan warganegara (jika berkaitan dengan struktur pemilikan minoriti), salinan pasport diperlukan.",
        ],
        details: [
          {
            step: "Imbas kad pengenalan dengan resolusi yang baik.",
            completed: false,
          },
        ],
        connections: ["node34"],
        completed: false,
      },
      {
        id: "node34",
        number: 3.4,
        title: "3.4 Sebut Harga TSP",
        mainSummary:
          "Sebut harga yang lengkap dan rasmi daripada Penyedia Penyelesaian Teknologi (TSP) yang telah dipilih oleh Aminah's Creative Batik untuk sistem E-dagang dan Pengurusan Inventori.",
        detailedPoints: [
          "Sebut harga mesti atas nama syarikat TSP yang sah dan ditujukan kepada Aminah's Creative Batik.",
          "Nyatakan dengan jelas skop kerja, perincian kos setiap item/modul (E-dagang, Inventori), jumlah keseluruhan, dan tempoh sah sebut harga.",
          "Sertakan nombor pendaftaran TSP dengan MDEC (jika ada pada sebut harga).",
        ],
        details: [
          {
            step: "Semak semula sebut harga untuk memastikan semua maklumat lengkap sebelum dimuat naik.",
            completed: false,
          },
        ],
        importantNotes: [
          "Ini adalah dokumen penting untuk justifikasi jumlah geran yang dipohon.",
        ],
        //   connections: ["NODE_PHASE4_SUBMISSION_BSN"],
        completed: false,
      },
    ],
  },
  {
    id: "node4",
    number: 4,
    title: "Fasa 4: Permohonan Dalam Talian (BSN)",
    mainSummary:
      "Setelah semua dokumen sokongan lengkap, permohonan Geran Digitalisasi PMKS perlu dibuat secara dalam talian (online) melalui portal rasmi Bank Simpanan Nasional (BSN).",
    detailedPoints: [
      "Anda perlu mendaftar akaun di portal BSN (jika belum ada).",
      "Isi borang permohonan dalam talian dengan teliti.",
      "Muat naik semua dokumen sokongan yang telah disediakan dalam format digital (biasanya PDF, JPG).",
    ],
    details: [
      {
        step: "Sediakan semua fail digital dokumen sebelum memulakan proses permohonan dalam talian.",
        completed: false,
      },
      {
        step: "Layari portal BSN yang betul untuk permohonan geran.",
        completed: false,
        link: "#placeholder_bsn_application_portal",
      },
      {
        step: "Simpan nombor rujukan permohonan setelah berjaya dihantar.",
        completed: false,
      },
    ],
    importantNotes: [
      "Proses dalam talian mungkin mengambil masa, pastikan sambungan internet stabil.",
      "Semak semula semua maklumat yang diisi untuk mengelakkan kesilapan.",
    ],
    connections: ["node5"],
    completed: false,
  },
  {
    id: "node5",
    number: 5,
    title: "Fasa 5: Penilaian & Keputusan",
    mainSummary:
      "Pihak BSN/agensi berkaitan akan menyemak dan menilai permohonan anda. Tempoh penilaian mungkin berbeza.",
    detailedPoints: [
      "Agensi mungkin menghubungi anda untuk maklumat tambahan jika perlu.",
      "Keputusan (lulus atau gagal) akan dimaklumkan melalui emel atau portal.",
    ],
    details: [
      {
        step: "Semak emel dan portal BSN secara berkala untuk status permohonan.",
        completed: false,
      },
    ],
    connections: ["NODE_END"],
    completed: false,
  },
  {
    id: "NODE_END",
    title: "PROSES PERMOHONAN AWAL SELESAI",

    connections: [],
    completed: false,
  },
];
