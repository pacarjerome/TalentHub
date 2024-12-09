// Menampilkan bagian tertentu berdasarkan ID
function showSection(sectionId) {
    document.querySelectorAll('.container > div').forEach(section => {
        section.classList.add('hidden'); // Menyembunyikan semua bagian
    });

    document.getElementById(sectionId).classList.remove('hidden'); // Menampilkan bagian yang dipilih

    // Muat soal jika bagian quiz yang diminta
    if (sectionId === 'quiz') {
        loadQuiz();  // Memuat soal quiz saat bagian quiz ditampilkan
    }
}

// Menyembunyikan bagian tertentu berdasarkan ID
function hideSection(sectionId) {
    document.getElementById(sectionId).classList.add('hidden');
}

// Menampilkan kembali halaman utama
function goBack() {
    // Sembunyikan semua bagian lain
    document.getElementById('info').classList.add('hidden');
    document.getElementById('quiz').classList.add('hidden');

    // Tampilkan halaman utama
    document.getElementById('home').classList.remove('hidden');
}

// Data soal quiz
const quizQuestions = [
    {
        question: "Alasan utama Anda ingin bergabung dengan organisasi?",
        options: {
            a: "Berkontribusi memenuhi kebutuhan mahasiswa matematika, mengembangkan kepemimpinan, dan mempererat hubungan antar mahasiswa.",
            b: "Mendalami topik akademik, meningkatkan kemampuan, dan berkolaborasi dengan mahasiswa se-minat.",
            c: "Memahami agama Islam lebih dalam dan terlibat dalam kegiatan sosial bermanfaat.",
            d: "Mengembangkan keterampilan jurnalistik dan berkontribusi dalam informasi kegiatan kampus.",
            e: "Mendekatkan diri pada alam dan berperan dalam pelestarian lingkungan.",
            f: "Mengeksplorasi minat bakat dan potensi diri di berbagai bidang selain akademik.",
            g: "Terlibat dalam kegiatan untuk mahasiswa umum, memajukan universitas, dan memperluas jaringan.",
            h: "Memahami agama lebih dalam dan berkontribusi dalam kegiatan sosial untuk masyarakat."
        }
    },
    {
        question: "Bagaimana Anda biasanya bekerja dalam tim?",
        options: {
            a: "Membangun komunikasi efektif, mendukung anggota, dan memastikan program berjalan lancar.",
            b: "Mengedepankan analisis, diskusi terstruktur, dan pembagian tugas sesuai keahlian.",
            c: "Mengutamakan rasa saling menghargai, mendukung, dan menciptakan suasana kerja yang Islami.",
            d: "Bekerja kolaboratif, terbuka pada ide baru, dan menerima kritik membangun.",
            e: "Semangat gotong royong, menjadi pendengar baik, dan membantu menyelesaikan masalah.",
            f: "Beradaptasi dengan cabang minat bakat, mendukung anggota, dan menjaga semangat tim.",
            g: "Mengutamakan koordinasi strategis, berbagi ide, dan mendukung pencapaian tujuan bersama.",
            h: "Bekerja dengan sabar, empati, dan menciptakan semangat kebersamaan untuk tujuan sosial-keagamaan.",

        }
    },
    {
        question: "Apa yang biasanya Anda lakukan jika terjadi konflik di dalam tim?",
        options: {
            a: "Menjadi penengah adil, mendengarkan pendapat, dan mencari solusi saling menguntungkan untuk fokus pada tujuan bersama.",
            b: "Menggunakan pendekatan logis, memahami masalah, dan mendiskusikan solusi berbasis data.",
            c: "Mengedepankan musyawarah dan saling memaafkan, dengan fokus pada nilai kebersamaan.",
            d: "Mengadakan diskusi terbuka untuk transparansi dan komunikasi dalam mengatasi masalah.",
            e: "Mengutamakan kerja sama dan pengertian, mencari titik tengah yang diterima semua pihak.",
            f: "Memfasilitasi dialog, memahami sudut pandang, dan menemukan solusi inklusif.",
            g: "Menjadi mediator netral, menyelesaikan masalah secara profesional dengan visi organisasi.",
            h: "Bermusyawarah dengan tenang, mengutamakan nilai keagamaan untuk menyelesaikan konflik damai.",
            
        }
    },
    {
        question: "Jika Anda memiliki jadwal yang padat, bagaimana Anda mengatur prioritas?",
        options: {
            a: "Mengutamakan program berdampak langsung pada warga matematika, menyusun jadwal berdasarkan urgensi, dan menjaga komunikasi tim.",
            b: "Memprioritaskan tugas mendesak terkait akademik, membuat daftar berdasarkan urgensi dan dampak.",
            c: "Menyisihkan waktu untuk kegiatan sosial-keagamaan, mengatur keseimbangan antara akademik dan kontribusi sosial.",
            d: "Membuat to-do list dan memecah pekerjaan besar menjadi tugas kecil yang mudah dikelola.",
            e: "Menyediakan waktu khusus untuk kegiatan luar ruangan agar tetap maksimal berkontribusi.",
            f: "Membagi waktu antara minat bakat dan akademik, serta menjaga komunikasi lancar dengan anggota UKM.",
            g: "Memprioritaskan tugas berdampak besar bagi mahasiswa dan universitas, menyusun prioritas, dan berbagi tugas dengan tim.",
            h: "Memfokuskan waktu untuk kegiatan mendesak atau bernilai keagamaan tinggi, menjaga keseimbangan dengan menjadwalkan waktu khusus.",
          
        }
    },
    {
        question: "Bagaimana Anda lebih suka berkontribusi di organisasi?",
        options: {
            a: "Aktif merancang program kerja dan berbagi ide untuk meningkatkan kebersamaan warga matematika.",
            b: "Berkontribusi dalam bidang akademik melalui analisis dan solusi matematika terapan.",
            c: "Terlibat dalam kegiatan sosial-keagamaan untuk memberi manfaat bagi anggota dan masyarakat.",
            d: "Menyampaikan informasi jelas, membantu perencanaan, dan mengevaluasi konten publikasi.",
            e: "Aktif di kegiatan alam, berkontribusi menjaga kelestarian dan membangun kerja sama tim.",
            f: "Mengembangkan potensi diri melalui minat bakat dan membantu teman menggali kemampuan mereka.",
            g: "Mengkoordinasikan program kerja mahasiswa dan terlibat dalam pengambilan keputusan strategis.",
            h: "Mengorganisir kegiatan keagamaan untuk memberikan manfaat berdasarkan ajaran agama.",
               
        }
    },
    {
        question: "Nilai apa yang paling penting bagi Anda dalam sebuah organisasi?",
        options: {
            a: "Kerja sama dan kebersamaan untuk menjalankan program yang bermanfaat bagi semua.",
            b: "Kedisiplinan dan keilmuan untuk hasil maksimal dan pengembangan pengetahuan.",
            c: "Keislaman dan kebersamaan untuk menciptakan suasana positif dan berdampak baik.",
            d: "Transparansi dan tanggung jawab untuk menyampaikan informasi dengan jujur dan berkualitas.",
            e: "Kerja tim dan pelestarian alam untuk sukses dalam kegiatan lingkungan.",
            f: "Kreativitas dan keberagaman untuk memperkaya pengalaman organisasi.",
            g: "Kepemimpinan adil dan inklusif untuk menciptakan suasana positif dan mendorong kontribusi.",
            h: "Keikhlasan dan pengabdian untuk memberi manfaat dengan penuh kebaikan.",   
            
        }
    },
    {
        question: "Bagaimana Anda biasanya menghadapi tekanan dalam menjalankan tugas organisasi?",
        options: {
            a: "Dalam menghadapi tekanan, saya biasanya mencoba untuk tetap tenang dan mengatur prioritas dengan baik. Saya akan memecah tugas besar menjadi bagian-bagian kecil yang lebih mudah dikelola dan berkomunikasi dengan tim untuk membagi beban kerja. Dengan kerjasama tim, tekanan bisa lebih mudah dihadapi.", 
            b: "Saya biasanya menghadapi tekanan dengan cara fokus pada solusi dan bukan masalahnya. Saya akan mencoba untuk tetap objektif dalam menyelesaikan tugas, terutama yang membutuhkan ketelitian. Selain itu, saya juga mengatur waktu secara efisien agar tugas bisa diselesaikan dengan baik meski di bawah tekanan.",
            c: "Jika menghadapi tekanan, saya akan mencoba untuk tetap sabar dan berdoa agar diberikan ketenangan dalam menghadapi masalah. Saya juga akan mencari dukungan dari sesama anggota, berbagi perasaan, dan mencari solusi bersama agar bisa menyelesaikan tugas dengan baik tanpa terbebani.",
            d: "Saya biasanya menghadapi tekanan dengan cara tetap menjaga komunikasi terbuka dengan tim. Jika pekerjaan semakin menumpuk, saya akan berusaha mengatur waktu dengan baik dan memastikan bahwa setiap anggota bertanggung jawab atas tugasnya. Saya juga mencoba untuk tetap tenang dan memprioritaskan kualitas dalam pekerjaan.",
            e: "Untuk menghadapi tekanan, saya akan menjaga komunikasi dan memberi semangat pada teman-teman agar kita bisa tetap solid menghadapi tantangan bersama.",
            f: "Ketika menghadapi tekanan, saya biasanya mencoba untuk tetap positif dan mencari cara untuk menyeimbangkan tugas akademik dan kegiatan lainnya. Saya akan menyusun jadwal dengan jelas dan berkomunikasi dengan anggota untuk mendukung satu sama lain agar beban tugas tidak terlalu berat.",
            g: "Jika saya merasa tertekan, saya akan berusaha untuk tetap berpikir strategis dan mengelola waktu dengan baik. Saya juga akan berbicara dengan rekan-rekan tim untuk mencari cara agar tugas-tugas yang berat bisa dibagi dengan merata dan mengurangi tekanan bagi semua pihak.",
            h: "Jika saya merasa tertekan, saya akan berusaha untuk tetap berpikir strategis dan mengelola waktu dengan baik. Saya juga akan berbicara dengan rekan-rekan tim untuk mencari cara agar tugas-tugas yang berat bisa dibagi dengan merata dan mengurangi tekanan bagi semua pihak.",
   
        }
    },
    {
        question: "Jika Anda menjadi pemimpin organisasi, apa gaya kepemimpinan yang Anda pilih?",
        options: {
            a: "Tetap tenang, mengatur prioritas, memecah tugas besar, dan berkomunikasi dengan tim.",
            b: "Fokus pada solusi, objektif, dan mengatur waktu dengan efisien.",
            c: "Tetap sabar, berdoa, mencari dukungan, dan mencari solusi bersama.",
            d: "Menjaga komunikasi terbuka, mengatur waktu, dan memprioritaskan kualitas.",
            e: "Menjaga komunikasi dan memberi semangat pada teman-teman agar solid.",
            f: "Tetap positif, menyusun jadwal, dan mendukung satu sama lain untuk meringankan beban.",
            g: "Berpikir strategis, mengelola waktu, dan membagi tugas secara merata.",
            h: "Saya akan berusaha untuk tetap menjaga keseimbangan antara tugas dan waktu pribadi. Saya akan mencari cara untuk mengurangi stres, seperti dengan melakukan aktivitas yang menenangkan, dan tetap berfokus pada penyelesaian tugas dengan cara yang terstruktur dan efisien.",
             
        }
    },
    {
        question: "Bagaimana reaksi Anda jika menerima kritik atas pekerjaan Anda?",
        options: {
            a: "Saya akan menerimanya dengan sikap terbuka dan introspektif. Saya akan melihat kritik tersebut sebagai peluang untuk berkembang dan memperbaiki kinerja saya, baik dalam melaksanakan program kerja atau berinteraksi dengan anggota. Kritik konstruktif adalah hal yang saya hargai karena dapat membantu meningkatkan hasil kerja tim.",
            b: "Saya akan memandangnya sebagai kesempatan untuk memperbaiki cara kerja saya dalam riset atau pengembangan. Kritik yang membangun bisa membantu saya lebih fokus dalam pekerjaan akademik. Saya akan mendengarkan dengan hati-hati dan mencari solusi untuk meningkatkan kualitas hasil kerja saya.",
            c: "Saya akan menganggapnya sebagai bagian dari proses untuk memperbaiki diri. Kritik di organisasi ini sering kali berkaitan dengan pendekatan saya dalam kegiatan keislaman atau sosial, dan saya akan mengambilnya dengan lapang dada untuk menjadi pemimpin yang lebih baik dan lebih memahami kebutuhan anggota.",
            d: "Kritik adalah cara yang baik untuk memastikan bahwa informasi yang disampaikan akurat dan jelas. Saya akan menanggapi kritik dengan sikap profesional, dan mencoba untuk menyesuaikan agar lebih sesuai dengan standar yang diharapkan.",
            e: "Saya akan menerima dengan terbuka, karena ini adalah kesempatan untuk memperbaiki cara kerja atau organisasi kegiatan. Mengingat banyaknya kegiatan alam yang melibatkan fisik dan mental, kritik bisa membantu saya untuk lebih efisien dan fokus dalam perencanaan dan pelaksanaan kegiatan.",
            f: "Saya akan menyikapinya dengan positif. Kritik akan saya jadikan sebagai peluang untuk meningkatkan diri dan membuat kegiatan lebih bermanfaat bagi anggota. Saya akan berusaha untuk lebih terbuka dengan anggota agar mereka merasa nyaman memberi masukan yang konstruktif.",
            g: "Saya akan melihatnya sebagai sarana untuk perbaikan dan pengembangan kepemimpinan saya. Kritik dapat memberikan perspektif baru tentang bagaimana meningkatkan pelayanan kepada mahasiswa. Saya akan mendengarkan kritik tersebut secara objektif, berdiskusi dengan rekan-rekan tim, dan mencari solusi terbaik untuk ke depannya.",
            h: "Saya akan menerima dengan hati terbuka dan berusaha mengambil hikmah dari kritik tersebut. Dalam konteks keagamaan, kritik sering kali terkait dengan bagaimana saya menjalankan prinsip-prinsip agama, dan saya akan menggunakannya untuk memperbaiki diri serta memberi teladan yang lebih baik bagi anggota organisasi.",
   
        }
    },
    {
        question: "Ketika Anda menghadapi perubahan mendadak dalam organisasi, apa yang akan Anda lakukan?",
        options: {
            a: "Menerima kritik dengan sikap terbuka dan introspektif untuk memperbaiki diri dan kinerja.",
            b: "Melihat kritik sebagai kesempatan untuk memperbaiki cara kerja dalam riset atau pengembangan akademik.",
            c: "Menganggap kritik sebagai bagian dari proses untuk memperbaiki diri, terutama dalam kegiatan keislaman atau sosial.",
            d: "Menanggapi kritik secara profesional dan menyesuaikan dengan standar yang diharapkan.",
            e: "Menerima kritik terbuka untuk meningkatkan efisiensi dalam kegiatan alam yang melibatkan fisik dan mental.",
            f: "Menyikapi kritik secara positif untuk meningkatkan diri dan membuat kegiatan lebih bermanfaat.",
            g: "Melihat kritik sebagai sarana untuk perbaikan dan pengembangan kepemimpinan dalam melayani mahasiswa.",
            h: "Menerima kritik dengan hati terbuka dan mengambil hikmah, terutama dalam konteks keagamaan untuk memberi teladan yang lebih baik.",
             
        }
    },
];

// Memuat soal secara dinamis
function loadQuiz() {
    const form = document.getElementById('quizForm');
    form.innerHTML = ""; // Reset form quiz sebelum memuat soal

    quizQuestions.forEach((quiz, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${quiz.question}</p>`;

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        for (const [key, value] of Object.entries(quiz.options)) {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${index}" value="${key}" class="quiz-option"> ${value}`;
            optionsDiv.appendChild(label);
        }
        questionDiv.appendChild(optionsDiv);
        form.appendChild(questionDiv);
    });

    // Tambahkan tombol submit
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Lihat Hasil";
    submitBtn.classList.add('btn');
    submitBtn.type = "button";
    submitBtn.onclick = calculateResult;
    form.appendChild(submitBtn);
}

// Menghitung hasil quiz berdasarkan organisasi yang paling banyak dipilih
function calculateResult() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    const answerCount = {
        HMMath: 0,
        Asmat: 0,
        Kesima: 0,
        Lemma: 0,
        Epsilon: 0,
        UKM: 0,
        "BEM U": 0,
        "Organisasi Keagamaan": 0
    };

    // Map jawaban (a-h) dengan organisasi yang sesuai
    const organizationsMap = {
        a: "HMMath",
        b: "Asmat",
        c: "Kesima",
        d: "Lemma",
        e: "Epsilon",
        f: "UKM",
        g: "BEM U",
        h: "Organisasi Keagamaan"
    };

    // Mengumpulkan jawaban dari setiap soal
    for (let [key, value] of formData.entries()) {
        const org = organizationsMap[value];
        if (org) {
            answerCount[org] += 1;
        }
    }

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h3>Organisasi yang cocok dengan Anda adalah:</h3>";
    for (let [org, count] of Object.entries(answerCount)) {
        if (count > 0) {
            resultDiv.innerHTML += `<p><strong>${org}</strong>: ${count} pilihan</p>`;
        }
    }

    resultDiv.classList.remove('hidden'); // Menampilkan hasil
    document.getElementById('quiz').classList.add('hidden');
    // Menampilkan confetti
    showConfetti();
}
// Fungsi untuk menampilkan confetti
function showConfetti() {
    // Set confetti settings
    const duration = 3 * 1000; // 3 detik
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Menampilkan informasi organisasi
function displayOrganizationInfo() {
    const selectedOrg = document.getElementById('organizationSelect').value;
    const detailsDiv = document.getElementById('organizationDetails');
    detailsDiv.innerHTML = organizationsInfo[selectedOrg] || '<p>Informasi tidak tersedia.</p>';
}
