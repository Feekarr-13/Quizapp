import { useState, useEffect, useRef } from "react";

import "./QuizSection.css";


function QuizSection() {
  const [questions] = useState([
    {
      id: 1,
      question: "(1) Setiap hari Minggu digelar sebuah lapak yang merupakan tempat belajar bahasa isyarat Indonesia atau Bisindo di kawasan Bunderan Hotel Indonesia, Jakarta. (2) Phieter, penanggung jawab program belajar ini, mengatakan bahwa kaum tunarungu/tuli sering mendapat perlakuan diskriminatif karena ketidaktersediaan akses terhadap bahasa isyarat. (3) Keterbatasan akses bahasa tersebut merupakan kendala utama kaum tunarungu/tuli dalam mencapai kehidupan yang sejahtera. (4) Mereka sering tidak dilibatkan dalam kegiatan-kegiatan sosial karena hambatan komunikasi dengan orang lain. (5) Dengan adanya program belajar Bisindo tersebut, masyarakat umum diharapkan dapat mengetahui dan menghargai hak berbahasa kaum tunarungu/tuli.",
      quizSection: "Kata beragam nonformal pada paragraf tersebut terdapat pada kalimat….",
      options: [
        "A. 1", 
        "B. 2", 
        "C. 3",
        "D. 4",
        "E. 5"
      ],
      answer: "A. 1"
    },
    {
      id: 2,
      text: "Perhatikan teks berikut untuk menjawab soal nomor 2—5! ",
      quizSection:
        "(1) Tubuh cenderung kekurangan asupan nutrisi seimbang kala Ramadan, termasuk vitamin, mineral, dan serat. (2) Untuk itu, Anda bisa meminum suplemen vitamin apabila merasa asupan vitamin tak mencukupi dari makanan seperti sayuran dan buah-buahan. (3) “Tetap dianjurkan sumbernya adalah dari makanan yang kita konsumsi, makanya disarankan tetap mengonsumsi gizi seimbang, buah sayur yang cukup selama buka dan sahur,” ujar Certified Nutrition and Wellness Consultant dari Universitas Indonesia, Mochamad Aldis Ruslialdi. (4) “Namun, kalau susah, bisa salah satunya dibantu suplemen. Jadi, suplemen boleh-boleh saja, tetapi tidak harus,” tambahnya. (5) Hal senada diungkapkan Ketua Umum Perkumpulan Dokter Pengembang Obat Tradisional dan Jamu Indonesia (PDPOTJI), Inggrid Tania. (6) Dia mengatakan secara umum suplemen vitamin dan mineral selama Ramadan dan pandemi Covid-19 dibutuhkan untuk membangunkan kebugaran dan imunitas. (7) Suplemen yang direkomendasikan, antara lain, vitamin B kompleks, vitamin C, vitamin D3, mineral seng, dan herbal imunomodulator yang umum lebih minimal efek samping karena berasal dari bahan alami, seperti ekstrak Echinacea pupurea, jamur Cordyceps Militaris, dan zinc picolinate. (8) Waktu yang tepat untuk minum suplemen selama Ramadan, Tania menyarankan sebaiknya sehabis makan berbuka maupun sahur. (9) “Karena ada beberapa mikronutrien yang akan lebih optimal diserap dengan dampingan dari nutrisi lain, misalnya, vitamin A, D, E, K yang optimal diserap saat kita mengonsumsi cukup lemak sehat atau zat besi yang lebih optimal diserap saat kita mengonsumsi vitamin C,” tuturnya. (10) Untuk memudahkan, Tania mencotohkan suplemen vitamin D3, misalnya, bisa diminum setelah berbuka, suplemen herbal imunomodulator sebelum makan sahur, lalu suplemen vitamin B kompleks, vitamin C, dan seng setelah makan sahur. (11) Khusus imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu. (12) Hal ini untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
      question: "Kalimat yang tidak logis pada teks tersebut tampak pada kalimat….",
      options: [
        "A. Kalimat (3)",
        "B. Kalimat (4)",
        "C. Kalimat (5)",
        "D. Kalimat (6)",
        "E. Kalimat (7)",
      ],
      answer: "D. Kalimat (6)",
    },
    {
      id: 3,
      question: "Gagasan utama yang tepat pada paragraf 2 adalah….",
      options: [
        "A. Waktu untuk mengonsumsi suplemen selama Ramadan",
        "B.	Suplemen sebagai pendamping makanan saat Ramadan",
        "C.	Mengonsumsi suplemen harus dibarengi nutrisi lain", 
        "D.	Manfaat mengonsumsi suplemen selama Ramadan", 
        "E.	Kurangnya asupan nutrisi selama puasa Ramadan "
        ],
      answer: "A. Waktu untuk mengonsumsi suplemen selama Ramadan",
    },
    {
      id: 4,
      question: "Penggabungan yang tepat untuk kalimat (11) dan (12) teks tersebut adalah… ",
      options: [
        "A.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu meskipun menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini. ",
        "B.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu karena menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini. ", 
        "C.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini. ", 
        "D.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu, seperti menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini. ", 
        "E.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu bila menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini."
      ],
      answer: "C.	Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini. ",
    },
    {
      id: 5,
      question: "Hubungan yang tampak pada kalimat (11) dan (12) adalah…. ",
      options: [
        "A. Sebab akibat",
        "B. Pertentangan", 
        "C. Perluasan", 
        "D. Tujuan", 
        "E. Waktu "
      ],
      answer: "D. Tujuan",
    },
    {
      id: 6,
      question: "Usaha pembangunan berencana yang pada umumnya dilakukan oleh hampir semua negara yang sedang berkembang itu memang bertujuan untuk meningkatkan kemakmuran serta mengejar kemajuan teknologi dan ilmu pengetahuan.",
      quizSection: "Gagasan utama kalimat di atas adalah ... ",
      options: [
        "A.	Usaha pembangunan berencana dilakukan oleh hampir semua negara.", 
        "B.	Usaha pembangunan berencana memang bertujuan. ", 
        "C.	Usaha pembangunan berencana bertujuan meningkatkan kemakmuran.", 
        "D.	Usaha pembangunan berencana mengejar kemajuan teknologi dan ilmu pengetahuan. ",
        "E.	Usaha pembangunan berencana di hampir semua negara yang sedang berkembang."
      ],
      answer: "C.	Usaha pembangunan berencana bertujuan meningkatkan kemakmuran."
    },
    {
      id: 7,
      question: "Gunungan yang terbuat dari berbagai buah-buahan dan sayur-sayuran diarak sepanjang jalan. Gunungan itu pun akhirnya sampai di alun-alun di depan keraton. Prosesi diakhiri dengan perebutan isi gunungan oleh masyarakat yang hadir di tempat itu. ",
      quizSection: "Prosesi dalam paragraf tersebut berarti ....",
      options: [
        "A.	proses acara ", 
        "B.	arak-arakan ", 
        "C.	kegiatan ", 
        "D.	upacara ",
        "E.	perjalanan"
      ],
      answer: "B. arak-arakan"
    },
    {
      id: 8,
      question: "Ketika para pejuang kemerdekaan muncul, bahasa Melayu menjadi pilihan dalam berkomunikasi. Media massa juga menggunakan bahasa ini. Tokoh-tokoh pergerakan kemudian mengenalkan istilah bahasa Indonesia. Pada Februari 1926 wartawan Mohammad Tabrani sudah menulis tentang perlunya bahasa Indonesia–bukan bahasa Melayu–sebagai perekat negara dan bangsa yang dicita-citakan bersama. “Agar orang yang berbahasa selain Melayu tidak merasa dijajah oleh bahasa Melayu, maka gunakan saja bahasa Indonesia,” begitu pernyataan dalam tulisannya di koran Hindia Baroe.  ",
      quizSection: "Kata perekat dalam paragraf di atas dapat diganti dengan kata-kata berikut, kecuali .... ",
      options: [
        "A.	pelekap ", 
        "B. pelekat ", 
        "C.	perapat ", 
        "D.	penguikat ",
        "E.	pelengket"
      ],
      answer: "A. pelekap"
    },
    {
      id: 9,
      question: "Gunungan yang terbuat dari berbagai buah-buahan dan sayur-sayuran diarak sepanjang jalan. Gunungan itu pun akhirnya sampai di alun-alun di depan keraton. Prosesi diakhiri dengan perebutan isi gunungan oleh masyarakat yang hadir di tempat itu. ",
      quizSection: "Penggunaan huruf kapital dalam kalimat berikut salah, kecuali.... ",
      options: [
        "A.	Untuk menjadi Kepala Daerah, sejumlah persyaratan harus dipenuhi.", 
        "B.	Saat ini Registrasi Haji harus dilakukan jauh sebelumnya.", 
        "C.	aku dilahirkan pada tahun 1990 di Wilayah Indonesia Timur. ", 
        "D.	Hai, Sahabat, apa kabarmu?",
        "E.	Kita harus menyayangi Ibu dan Bapak kita yang mengasuh kita sejak bayi."
      ],
      answer: "D. Hai, Sahabat, apa kabarmu?"
    },
    {
      id: 10,
      text: "Bacalah kalimat-kalimat berikut!",
      question:
        "Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi. Adanya kemudahan ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
      quizSection: "Ide kedua kalimat di atas dapat digabung menjadi satu. Kalimat yang paling tepat sebagai penggabungan ide kedua kalimat itu adalah.... ",
      options: [
        "A. Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi dan kemudahan ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
        "B.	Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi karena adanya persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
        "C.	Pada saat ini persaingan di antara perusahaan pembayaran dalam bentuk perang harga mempermudah masyarakat untuk memiliki kendaraan pribadi.",
        "D.	Makin dipermudahnya masyarakat untuk memiliki kendaraan pribadi pada saat ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
        "E.	Perang harga di antara perusahaan pembayaran yang memudahkan masyarakat untuk semakin memiliki kendaraan pribadi sendiri tidak lepas dari persaingan pada saat ini.",
      ],
      answer: "B.	Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi karena adanya persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
    },

  ]);
 
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(2700);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questionsPerPage = 5;
  const quizContainerRef = useRef(null); // Create a ref for the quiz container

  // Timer countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const getAnsweredCount = () => Object.keys(answers).length;

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    // Scroll to the top of the quiz container
    if (quizContainerRef.current) {
      quizContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleFinishQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correctAnswers += 1;
      }
    });
    setScore(correctAnswers);
    setIsFinished(true);
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <div className="quiz-section" ref={quizContainerRef}> {/* Set ref here */}
      {isFinished ? (
        <div className="quiz-result">
          <h2>Quiz Selesai</h2>
          <p>
            Skor Anda: <strong>{score}</strong> dari {questions.length} soal
          </p>
        </div>
      ) : (
        <>
          <div className="quiz-header">
            <h2>Bahasa Indonesia (PPU)</h2>
            <div className="timer">Timer: {formatTime(timer)}</div>
          </div>

          <div className="quiz-content">
            {currentQuestions.map((q, index) => (
              <div key={q.id} className="question-block">
                {q.text && (
                  <p className="question-text">
                    <strong>{q.text}</strong>
                  </p>
                )}
                <p className="question-number">
                  {index + 1 + currentPage * questionsPerPage}. {q.question}
                </p>
                {q.quizSection && (
                  <p className="quiz-section-text">{q.quizSection}</p>
                )}
                <div className="options">
                  {q.options.map((option, i) => (
                    <label key={i} className="option">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleAnswerChange(q.id, option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-navigation">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="nav-button"
            >
              Back
            </button>
            <div className="question-counter">
              {getAnsweredCount()}/{questions.length} Soal
            </div>
            {getAnsweredCount() === questions.length &&
            currentPage === Math.ceil(questions.length / questionsPerPage) - 1 ? (
              <button onClick={handleFinishQuiz} className="finish-button">
                Finish
              </button>
            ) : (
              <button onClick={handleNextPage} className="nav-button">
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizSection;