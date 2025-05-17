export const grantProcess = {
  processType: "GrantApplication",
  processName: "Geran Digitalisasi PMKS - E-dagang & Inventori",
  processKey: "GDPKS_AminahBatik_EcommInv_v1",
  targetAudience:
    "PKS Malaysia (seperti Aminah's Creative Batik) yang ingin mendigitalkan operasi melalui penyelesaian E-dagang & Pengurusan Inventori.",
  description:
    "Peta perjalanan visual langkah demi langkah untuk memohon Geran Padanan Digitalisasi PMKS bagi tujuan peng adoptar an sistem e-dagang dan pengurusan inventori.",
  nodes: [
    {
      id: "NODE_START",
      type: "input",

      data: {
        label:
          "MULA: Permohonan Geran Digitalisasi PMKS\n(Aminah's Creative Batik: E-dagang & Inventori)",
      },
      position: { x: 50, y: 50 },
    },
    {
      id: "NODE_PHASE1_ELIGIBILITY_OVERVIEW",
      type: "default",
      data: {
        label: "Fasa 1: Semakan Kelayakan",
        panelContent: {
          title: "Fasa 1: Semakan Kelayakan Asas Geran",
          mainSummary:
            "Sebelum meneruskan, pastikan perniagaan anda (Aminah's Creative Batik) memenuhi syarat-syarat asas kelayakan Geran Digitalisasi PMKS.",
          detailedPoints: [
            "Status PMKS Malaysia yang sah (Mikro, Kecil atau Sederhana).",
            "Sekurang-kurangnya 60% ekuiti dimiliki oleh warganegara Malaysia.",
            "Telah beroperasi sekurang-kurangnya enam (6) bulan (atau tiga (3) bulan untuk PKS dari Sabah/Sarawak).",
            "Pendapatan tahunan atau bilangan pekerja sepenuh masa mengikut definisi PMKS semasa.",
            "Tidak disenarai hitam oleh mana-mana agensi kewangan atau kerajaan.",
          ],
          actionableSteps: [
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
          relatedDocuments: [
            {
              docId: "doc_guidelines_GDPKS",
              displayName: "Garis Panduan Am Geran Digitalisasi PMKS",
            },
          ],
          aiContextId: "GDPKS_ELIGIBILITY_GENERAL",
        },
      },
      position: { x: 50, y: 180 },
    },
    {
      id: "NODE_PHASE2_TSP_SELECTION",
      type: "default",
      data: {
        label: "Fasa 2: Pemilihan TSP",
        panelContent: {
          title: "Fasa 2: Pemilihan Penyedia Penyelesaian Teknologi (TSP)",
          mainSummary:
            "Pilih Penyedia Penyelesaian Teknologi (TSP) yang sah dan disenaraikan oleh MDEC. Dapatkan sebut harga untuk sistem E-dagang dan Pengurusan Inventori.",
          detailedPoints: [
            "Hanya perbelanjaan dengan TSP yang dilantik oleh MDEC sahaja layak untuk geran ini.",
            "Kenal pasti TSP yang menawarkan penyelesaian E-dagang (cth: pembangunan laman web, integrasi pasaran) DAN/ATAU sistem Pengurusan Inventori.",
            "Minta sekurang-kurangnya satu (1) sebut harga rasmi yang terperinci.",
          ],
          actionableSteps: [
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
          relatedDocuments: [
            {
              docId: "doc_tsp_directory",
              displayName: "Direktori Panel TSP MDEC",
            },
            {
              docId: "doc_sample_tsp_quotation",
              displayName: "Contoh Format Sebut Harga TSP",
            },
          ],
          aiContextId: "GDPKS_TSP_SELECTION_ECOMM_INV",
        },
      },
      position: { x: 50, y: 360 },
    },
    {
      id: "NODE_PHASE3_DOC_PREP_OVERVIEW",
      type: "default",
      data: {
        label: "Fasa 3: Penyediaan Dokumen",
        panelContent: {
          title: "Fasa 3: Penyediaan Dokumen Sokongan Permohonan",
          mainSummary:
            "Kumpulkan dan sediakan semua dokumen yang diperlukan mengikut senarai semak rasmi. Pastikan semua salinan adalah jelas, lengkap dan terkini.",
          detailedPoints: [
            "Setiap dokumen mempunyai kepentingannya untuk mengesahkan maklumat perniagaan dan permohonan.",
            "Susun dokumen dalam format digital (PDF atau imej berkualiti tinggi) untuk muat naik ke portal BSN.",
          ],
          actionableSteps: [
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
          aiContextId: "GDPKS_DOC_PREP_GENERAL",
        },
      },
      position: { x: 50, y: 540 },
    },
    {
      id: "DOC_SSM_CERT_PROFILE",
      type: "aiPoweredNode",
      data: {
        label: "3.1 Sijil SSM & Profil Syarikat",
        panelContent: {
          nodeId: "DOC_SSM_CERT_PROFILE",
          title: "Dokumen 3.1: Sijil Pendaftaran SSM & Profil Syarikat Terkini",
          mainSummary:
            "Sediakan salinan Sijil Pendaftaran Perniagaan dengan Suruhanjaya Syarikat Malaysia (SSM) DAN Profil Syarikat terkini dari MyData SSM atau e-Info SSM.",
          detailedPoints: [
            "Untuk Perniagaan (ROB): Borang D (Sijil Pendaftaran) & Profil Perniagaan.",
            "Untuk Syarikat (ROC): Sijil Pemerbadanan (dahulu Borang 9), Borang 24, Borang 49 & Profil Syarikat.",
            "Untuk Perkongsian Liabiliti Terhad (PLT): Sijil Pendaftaran PLT & Profil Perniagaan.",
            "Profil Syarikat diperlukan untuk maklumat terkini mengenai pemilik dan alamat.",
          ],
          actionableSteps: [
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
          relatedDocuments: [
            {
              docId: "sample_ssm_borang_d",
              displayName: "Contoh Borang D SSM",
            },
            {
              docId: "mydata_ssm_guide",
              displayName: "Panduan Mendapatkan Profil MyData SSM",
            },
          ],
          hasAiAssistance: true,
        },
      },
      position: { x: 350, y: 540 },
    },
    {
      id: "DOC_BANK_STATEMENTS",
      type: "default",
      data: {
        label: "3.2 Penyata Bank",
        panelContent: {
          nodeId: "DOC_BANK_STATEMENTS",
          title: "Dokumen 3.2: Penyata Akaun Bank Syarikat Terkini",
          mainSummary:
            "Salinan penyata akaun bank syarikat bagi dua (2) bulan terkini sebelum tarikh permohonan.",
          detailedPoints: [
            "Penyata mesti menunjukkan nama syarikat (Aminah's Creative Batik), nombor akaun, dan nama bank.",
            "Semua transaksi mestilah jelas dan boleh dibaca.",
            "Hanya penyata akaun semasa syarikat. Akaun peribadi tidak diterima.",
          ],
          actionableSteps: [
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
          aiContextId: "GDPKS_DOC_BANK_STATEMENTS",
        },
      },
      position: { x: 300, y: 700 },
    },
    {
      id: "DOC_DIRECTOR_IC",
      type: "default",
      data: {
        label: "3.3 Salinan KP Pengarah/Pemilik",
        panelContent: {
          nodeId: "DOC_DIRECTOR_IC",
          title: "Dokumen 3.3: Salinan Kad Pengenalan Pengarah/Pemilik",
          mainSummary:
            "Salinan kad pengenalan (depan dan belakang) SEMUA pengarah syarikat atau pemilik perniagaan (bagi Aminah's Creative Batik, ini mungkin Puan Aminah sahaja).",
          detailedPoints: [
            "Pastikan salinan adalah jelas, tidak kabur, dan kedua-dua belah muka surat diimbas.",
            "Untuk bukan warganegara (jika berkaitan dengan struktur pemilikan minoriti), salinan pasport diperlukan.",
          ],
          actionableSteps: [
            {
              step: "Imbas kad pengenalan dengan resolusi yang baik.",
              completed: false,
            },
          ],
          aiContextId: "GDPKS_DOC_DIRECTOR_IC",
        },
      },
      position: { x: 350, y: 780 },
    },
    {
      id: "DOC_TSP_QUOTATION",
      type: "default",
      data: {
        label: "3.4 Sebut Harga TSP",
        panelContent: {
          nodeId: "DOC_TSP_QUOTATION_DETAILS",
          title: "Dokumen 3.4: Sebut Harga Rasmi daripada TSP Pilihan",
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
          aiContextId: "GDPKS_DOC_TSP_QUOTATION",
        },
      },
      position: { x: 350, y: 900 },
    },
    {
      id: "NODE_PHASE4_SUBMISSION_BSN",
      type: "default",
      data: {
        label: "Fasa 4: Permohonan Dalam Talian (BSN)",
        panelContent: {
          nodeId: "ONLINE_SUBMISSION_BSN",
          title: "Fasa 4: Permohonan Dalam Talian melalui Portal BSN",
          mainSummary:
            "Setelah semua dokumen sokongan lengkap, permohonan Geran Digitalisasi PMKS perlu dibuat secara dalam talian (online) melalui portal rasmi Bank Simpanan Nasional (BSN).",
          detailedPoints: [
            "Anda perlu mendaftar akaun di portal BSN (jika belum ada).",
            "Isi borang permohonan dalam talian dengan teliti.",
            "Muat naik semua dokumen sokongan yang telah disediakan dalam format digital (biasanya PDF, JPG).",
          ],
          actionableSteps: [
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
          aiContextId: "GDPKS_SUBMISSION_BSN_PORTAL",
        },
      },
      position: { x: 50, y: 1050 },
    },
    {
      id: "NODE_PHASE5_WAITING_APPROVAL",
      type: "default",
      data: {
        label: "Fasa 5: Penilaian & Keputusan",
        panelContent: {
          nodeId: "WAITING_APPROVAL",
          title: "Fasa 5: Proses Penilaian Permohonan & Notifikasi Keputusan",
          mainSummary:
            "Pihak BSN/agensi berkaitan akan menyemak dan menilai permohonan anda. Tempoh penilaian mungkin berbeza.",
          detailedPoints: [
            "Agensi mungkin menghubungi anda untuk maklumat tambahan jika perlu.",
            "Keputusan (lulus atau gagal) akan dimaklumkan melalui emel atau portal.",
          ],
          actionableSteps: [
            {
              step: "Semak emel dan portal BSN secara berkala untuk status permohonan.",
              completed: false,
            },
          ],
          importantNotes: [
            "Bersabar menunggu keputusan. Hubungi BSN jika tiada maklum balas selepas tempoh yang munasabah.",
          ],
          aiContextId: "GDPKS_WAITING_APPROVAL_PROCESS",
        },
      },
      position: { x: 50, y: 1200 },
    },
    {
      id: "NODE_END",
      type: "output",
      data: {
        label:
          "PROSES PERMOHONAN AWAL SELESAI\n(Seterusnya: Proses Tuntutan jika Lulus)",
      },
      position: { x: 50, y: 1350 },
    },
  ],
  edges: [
    {
      id: "e_START_PHASE1",
      source: "NODE_START",
      target: "NODE_PHASE1_ELIGIBILITY_OVERVIEW",
      animated: true,
    },
    {
      id: "e_PHASE1_PHASE2",
      source: "NODE_PHASE1_ELIGIBILITY_OVERVIEW",
      target: "NODE_PHASE2_TSP_SELECTION",
      label: "Layak? Pilih TSP",
    },
    {
      id: "e_PHASE2_PHASE3",
      source: "NODE_PHASE2_TSP_SELECTION",
      target: "NODE_PHASE3_DOC_PREP_OVERVIEW",
      label: "Dapat Sebut Harga? Sedia Dokumen",
    },
    {
      id: "e_PHASE3_DOCSSM",
      source: "NODE_PHASE3_DOC_PREP_OVERVIEW",
      target: "DOC_SSM_CERT_PROFILE",
      label: "Mula dengan SSM",
    },
    {
      id: "e_DOCSSM_DOCBANK",
      source: "DOC_SSM_CERT_PROFILE",
      target: "DOC_BANK_STATEMENTS",
    },
    {
      id: "e_DOCBANK_DOCIC",
      source: "DOC_BANK_STATEMENTS",
      target: "DOC_DIRECTOR_IC",
    },
    {
      id: "e_DOCIC_DOCTSPQUOTE",
      source: "DOC_DIRECTOR_IC",
      target: "DOC_TSP_QUOTATION",
    },

    // {
    //   id: "e_DOCTSPQUOTE_PHASE4",
    //   source: "DOC_TSP_QUOTATION",
    //   target: "NODE_PHASE4_SUBMISSION_BSN",
    //   label: "Semua Dokumen Lengkap?",
    // }
    {
      id: "e_PHASE3_PHASE4_direct",
      source: "NODE_PHASE3_DOC_PREP_OVERVIEW",
      target: "NODE_PHASE4_SUBMISSION_BSN",
      label: "Hantar Permohonan",
      type: "step",
      markerEnd: { type: "arrowclosed" },
    },
    {
      id: "e_PHASE4_PHASE5",
      source: "NODE_PHASE4_SUBMISSION_BSN",
      target: "NODE_PHASE5_WAITING_APPROVAL",
      label: "Tunggu Keputusan",
    },
    {
      id: "e_PHASE5_END",
      source: "NODE_PHASE5_WAITING_APPROVAL",
      target: "NODE_END",
    },
  ],
};
