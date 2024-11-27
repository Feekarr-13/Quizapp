import { useState, useEffect, useRef } from "react";

import "./QuizSection.css";


function QuizSection() {
  const [questions] = useState([
    {
      id: 1,
      text: "Teks berikut digunakan untuk menjawab soal nomor 1 dan 2!",
      question: "Kemampuan membaca, menulis, dan berbicara yang baik akan membuka berbagai peluang dan pengalaman dalam kehidupan. Orang tua memiliki peran dalam membentuk kemampuan tersebut pada anak. Beberapa peran yang dapat dilakukan orang tua antara lain membiasakan anak membaca buku sejak dini, menyediakan permainan yang mendukung pembelajaran, dan menggunakan teknologi dengan bijak. Meningkatkan kemampuan-kemampuan tersebut memberikan pondasi yang kokoh untuk keberhasilan pendidikan dan kesuksesan anak di masa depan.",
      quizSection: "Berdasarkan informasi pada teks di atas, simpulan yang PALING BENAR adalah ....",
      options: [
        "A. Orang tua memiliki peran penting untuk keberhasilan pendidikan dan kesuksesan anak di masa depan.",
        "B. Kemampuan membaca, menulis, dan berbicara pada anak dapat dibiasakan orang tua saat usia sekolah.",
        "C. Membiasakan anak membaca buku sejak dini dapat membuat anak mendapatkan kesuksesan saat usia sekolah.",
        "D. Penggunaan teknologi dapat meningkatkan kemampuan membaca, menulis, dan berbicara yang baik pada anak.",
        "E. Menyediakan permainan bagi anak dapat memberikan pondasi yang kokoh untuk keberhasilan pendidikan dan kesuksesan anak di masa depan."
      ],
      answer: "A. Orang tua memiliki peran penting untuk keberhasilan pendidikan dan kesuksesan anak di masa depan."
    },
    {
      id: 2,
      question: "Berdasarkan informasi pada teks di atas, jika kemampuan membaca, menulis, dan berbicara pada anak baik, apa yang PALING MUNGKIN terjadi?",
      options: [
        "A. Orang tua memiliki peran terhadap perkembangan anaknya.",
        "B. Membuka berbagai peluang dan pengalaman dalam kehidupan.",
        "C. Memberikan pondasi yang kokoh untuk keberhasilan pendidikan dan kesuksesan anak di masa depan.",
        "D. Anak dibiasakan membaca buku sejak dini, disediakan permainan yang mendukung pembelajaran, dan menggunakan teknologi dengan bijak.",
        "E. Anak sudah terbiasa membaca buku sejak dini, melakukan permainan yang mendukung pembelajaran, dan menggunakan teknologi dengan bijak."
      ],
      answer: "B. Membuka berbagai peluang dan pengalaman dalam kehidupan."
    },
    {
      id: 3,
      text: "Teks berikut digunakan untuk menjawab soal nomor 3 dan 4!",
      question: "Kepedulian terhadap lingkungan semakin meningkat di berbagai sektor industri, termasuk industri tekstil. Industri tekstil memiliki permasalahan dalam lingkungan dari sisi bahan baku dan proses pewarnaan. Proses perwarnaan industri tekstil dapat menimbulkan limbah jika digunakan tidak sesuai kebutuhan. Selain itu, proses pewarnaan pakaian diharapkan menggunakan pewarna alami.",
      quizSection: "Berdasarkan informasi pada teks di atas, simpulan yang PALING BENAR adalah ....",
      options: [
        "A. Industri batik masih menggunakan pewarna sintetik.",
        "B. Pewarna alami berpotensi dapat dijadikan pewarna tekstil.",
        "C. Industri tekstil menggunakan pewarna sintetik tanpa adanya pengukuran.",
        "D. Industri tekstil baru menyadari perlunya kepedulian terhadap lingkungan.",
        "E. Bahan baku dan proses pewarnaan industri tekstil menyumbang limbah terbesar."
      ],
      answer: "B. Pewarna alami berpotensi dapat dijadikan pewarna tekstil."
    },
    {
      id: 4,
      question: "Berdasarkan informasi pada teks di atas, jika industri tekstil menggunakan pewarna alami namun digunakan tidak sesuai kebutuhan, apa yang PALING MUNGKIN terjadi?",
      options: [
        "A. Pewarna industri tekstil menimbulkan limbah.",
        "B. Pewarna industri tekstil tidak menimbulkan limbah.",
        "C. Pewarna industri tekstil belum aman terhadap lingkungan.",
        "D. Pewarna industri tekstil memiliki permasalahan dalam bahan baku.",
        "E. Pewarna industri tekstil menimbulkan limbah, tetapi tidak berbahaya."
      ],
      answer: "A. Pewarna industri tekstil menimbulkan limbah."
    },
    {
      id: 5,
      question: "Penelitian mengungkapkan tertawa merupakan fenomena sosial yang dapat menular ke orang lain. Seorang psikolog mengungkapkan manusia 30 kali lebih mudah tertawa dengan orang lain daripada sendirian. Manusia juga lebih rentan terhadap suara tawa daripada suara negatif, hal ini menjadi alasan mengapa seseorang secara tidak sadar tersenyum saat melihat orang lain tertawa.",
      quizSection: "Berdasarkan informasi pada teks di atas, simpulan yang PALING DIDUKUNG adalah ....",
      options: [
        "A. Program acara komedi sering memutar rekaman suara tertawa agar penonton ikut tertawa.",
        "B. Melihat hal lucu sendirian lebih mudah membuat tertawa daripada melihat bersamaan.",
        "C. Seorang yang tertawa akan dianggap merendahkan orang yang melihatnya.",
        "D. Seseorang tertawa ketika menonton hal yang lucu walaupun sendirian.",
        "E. Tertawa dapat membuat bahagia dan terhindar dari stres."
      ],
      answer: "A. Program acara komedi sering memutar rekaman suara tertawa agar penonton ikut tertawa.",
    },
    {
      id: 6,
      text: "Asupan air sangat penting bagi tubuh. Penelitian menemukan bahwa asupan air yang cukup memengaruhi fisiologi kulit, seperti kulit tampak lebih terhidrasi. Asupan air dikatakan cukup apabila seseorang mengonsumsi air sebanyak 2 liter per hari. Selain itu, peningkatan asupan air dapat meningkatkan hidrasi lapisan luar kulit. Namun, kulit yang terhidrasi tidak dapat mencegah timbulnya keriput.",
      question: "Berdasarkan informasi pada teks di atas, DUA simpulan yang PALING DIDUKUNG adalah ....",
      statements: [
        "i. Seseorang yang rutin mengonsumsi air putih 2 liter per hari akan membuat kulitnya lebih terhidrasi.",
        "ii. Peningkatan hidrasi lapisan luar kulit terjadi jika seseorang mengonsumsi air putih sebanyak 2 liter per hari.",
        "iii. Keriput pada kulit dapat dicegah dengan rutin mengonsumsi air putih 2 liter per hari.",
        "iv. Mengonsumsi air lebih dari 2 liter per hari tidak memiliki dampak signifikan pada tubuh.",
        "v. Asupan air lebih dari 2 liter per hari tidak dapat mencegah keriput pada kulit."
      ],
      options: [
        "A. Pernyataan i dan iv",
        "B. Pernyataan ii dan iii",
        "C. Pernyataan iv dan v",
        "D. Pernyataan i dan iii",
        "E. Pernyataan ii dan iv"
      ],
      answer: "A. Pernyataan i dan iv"
    },
    {
      id: 7,
      text: "Buah mengkudu (Morinda citrifolia) berpotensi menurunkan tekanan darah tinggi. Senyawa prexeronin dalam mengkudu dapat mengontrol tekanan darah pada jaringan pembuluh darah endotel. Selain itu, senyawa scopoletin dalam mengkudu dapat melebarkan pembuluh darah dan menurunkan beban pompa jantung. Buah mengkudu juga memiliki kandungan zar aktif berupa xeronine yang memiliki efek diuretik. Ketika volume cairan tubuh menurun maka tekanan saraf tepi ikut menurun sehingga tekanan darah menurun.",
      question: "Berdasarkan informasi pada teks di atas, DUA simpulan yang PALING DIDUKUNG adalah ....",
      statements: [
        "i. Buah mengkudu memiliki khasiat menurunkan tekanan darah tinggi lebih besar daripada obat penurun tekanan darah.",
        "ii. Khasiat buah mengkudu hilang ketika dikonsumsi dengan cara dibuat jus.",
        "iii. Buah mengkudu tidak dapat dikonsumsi penderita diabetes karena membuat sering buang air kecil.",
        "iv. Mengonsumsi buah yang mengandung senyawa xeronine dapat membuat sering buang air kecil.",
        "v. Obat penurun tekanan darah tinggi dapat dibuat dari ekstrak buah mengkudu."
      ],
      options: [
        "A. Pernyataan i dan iv",
        "B. Pernyataan ii dan iii",
        "C. Pernyataan iii dan iv",
        "D. Pernyataan iv dan v",
        "E. Pernyataan iii dan iv"
      ],
      answer: "C. Pernyataan i dan iv"
    },
    {
      id: 8,
      question: "Mengonsumsi kudapan di malam hari identik membuat berat badan meningkat dan berpotensi diabetes. Banyak orang menghindarinya dan rela tidur dalam keadaan lapar. Namun menurut penelitian, mengonsumsi makanan berprotein tinggi di malam hari dapat membantu menjaga kadar glukosa darah tetap stabil sepanjang malam. Beberapa makanan yang dapat dikonsumsi di malam hari antara lain apel, roti gandum, dan alpukat.",
      quizSection: "Berdasarkan informasi pada teks di atas, asumsi yang PALING MUNGKIN mendasari teks tersebut adalah ....",
      options: [
        "A. Mengonsumsi kudapan di malam hari lebih baik dengan makanan berprotein tinggi.",
        "B. Apel, roti gandum, dan alpukat dapat membantu menjaga kadar glukosa darah tetap stabil sepanjang malam.",
        "C. Mengonsumsi kudapan di malam hari tidak selalu memberikan dampak negatif asalkan dengan makanan yang tepat.",
        "D. Mengonsumsi apel, roti gandum, dan alpukat di malam hari dapat membuat berat badan meningkat dan berpotensi diabetes.",
        "E. Mengonsumsi makanan berprotein tinggi di malam hari tidak dapat membuat berat badan meningkat dan berpotensi diabetes."
      ],
      answer: "C. Mengonsumsi kudapan di malam hari tidak selalu memberikan dampak negatif asalkan dengan makanan yang tepat."
    },
    {
      id: 9,
      question: "Fenomena iklim El Nino yang melanda Indonesia mendatangkan kekhawatiran. Ancaman kekeringan hingga krisis pangan menjadi dampak yang terus mengintai. Untuk mengatasi fenomena ini, pemerintah membangun 223 bendungan dengan total volume air 6,7 miliar kubik dan volume pemanfaatan air sebesar 4,37 miliar kubik. Dengan infrastruktur penunjang ketersediaan air ini, beberapa daerah terhindar dari gagal panen.",
      quizSection: "Berdasarkan informasi pada teks di atas, asumsi yang PALING MUNGKIN mendasari teks tersebut adalah ....",
      options: [
        "A. Ancaman kekeringan dan krisis pangan mengintai akibat iklim El Nino.",
        "B. Fenomena iklim El Nino tidak berdampak pada gagal panen di beberapa daerah.",
        "C. Dampak fenomena iklim El Nino dapat dihindari dengan pembangunan bendungan.",
        "D. Pembangunan bendungan dapat menghindari gagal panen di seluruh daerah terdampak El Nino.",
        "E. Pemerintah seharusnya mengantisipasi dampak El Nino lebih cepat agar tidak terjadi gagal panen."
      ],
      answer: "C. Dampak fenomena iklim El Nino dapat dihindari dengan pembangunan bendungan."
    },
    {
      id: 10,
      question: "Menurut penelitian, sekitar 60-80% perbedaan tinggi badan seseorang ditentukan oleh faktor genetik, sedangkan 20-40% dipengaruhi oleh faktor lingkungan terutama nutrisi. Namun, penelitian lain menyebutkan faktor genetik sangat rendah memengaruhi tinggi badan ketika masih anak-anak. Sebaliknya, pengaruh faktor lingkungan pada saat anak-anak sangat besar. Ketika seseorang memiliki faktor genetik yang kurang, dapat diatasi dengan memaksimalkan faktor lingkungan. Kebutuhan nutrisi yang tercukupi dengan baik, terutama kalsium, dapat membantu pertumbuhan tulang. Selain itu, pertumbuhan tinggi badan dapat dimaksimalkan dengan melakukan olahraga teratur, tidur cukup, dan menjaga kesehatan.",
      quizSection: "Berdasarkan informasi pada teks di atas, asumsi yang PALING MUNGKIN mendasari teks tersebut adalah ....",
      options: [
        "A. Pengaruh faktor lingkungan lebih tinggi daripada faktor genetik pada usia anak-anak.",
        "B. Untuk memaksimalkan pertumbuhan tinggi badan perlu melakukan olahraga teratur, tidur cukup, dan menjaga kesehatan.",
        "C. Pertumbuhan tinggi badan seseorang dipengaruhi oleh faktor genetik sekitar 60-80% dan faktor lingkungan sekitar 20-40%.",
        "D. Kekurangan faktor genetik tinggi badan dapat diatasi dengan kebutuhan nutrisi yang tercukupi dengan baik pada saat masih anak-anak.",
        "E. Kebutuhan nutrisi yang tercukupi dengan baik, melakukan olahraga teratur, tidur cukup, dan menjaga kesehatan dapat memaksimalkan pertumbuhan tinggi badan."
      ],
      answer: "A. Pengaruh faktor lingkungan lebih tinggi daripada faktor genetik pada usia anak-anak."
    },
    {
      id: 11,
      question: "Aktivitas lari merupakan olahraga yang biasa dilakukan di luar ruangan dan berhubungan dengan udara sekitar. Polusi udara dapat berdampak berbahaya bagi yang melakukan olahraga lari. Partikel polusi dapat masuk ke dalam paru-paru dan berpotensi menyebabkan infeksi pernapasan, seperti pneumonia dan asma. Selain itu, saat seseorang berlari, ia akan menghirup lebih banyak udara sehingga semakin banyak polusi yang terhirup.",
      quizSection: "Berdasarkan informasi pada teks di atas, jika seseorang berlari di udara yang terdapat polusi, apa yang PALING MUNGKIN?",
      options: [
        "A. Dapat mengalami infeksi pernapasan.",
        "B. Semakin banyak terpapar partikel debu.",
        "C. Lebih mudah mengalami sakit pernapasan.",
        "D. Hasil yang didapatkan dari lari tidak optimal.",
        "E. Partikel polusi yang terhirup semakin banyak."
      ],
      answer: "A. Dapat mengalami infeksi pernapasan."
    },
    {
      id: 12,
      question: "Kasus obesitas di Indonesia meningkat signifikan dalam 10 tahun terakhir, dari 10,5% pada 2007 menjadi 21,8% pada 2018. Menurut Kemenkes, kasus obesitas di Indonesia merupakan masalah multifaktor yang dipengaruhi peningkatan asupan energi, perubahan pola makan dari tradisional ke modern, urbanisasi, dan penurunan aktivitas fisik. Obesitas ini berpotensi menjadi penyebab terjadi penyakit kardiovaskular dan diabetes.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan berikut yang MEMPERKUAT Kemenkes adalah ....",
      options: [
        "A. Terjadi kasus obesitas pada anak-anak.",
        "B. Penyakit kardiovaskular banyak terjadi pada usia lanjut.",
        "C. Masyarakat sudah semakin sadar dengan asupan gizi sehari-hari.",
        "D. Ruang terbuka hijau baik di perkotaan maupun pedesaan masih minim.",
        "E. Konsumsi makanan cepat saji (fast food) di daerah perkotaan meningkat."
      ],
      answer: "E. Konsumsi makanan cepat saji (fast food) di daerah perkotaan meningkat."
    },
    {
      id: 13,
      question: "Kertas : Pensil = ... : ....",
      options: [
        "A. Meja : Kursi",
        "B. Roda : Mobil",
        "C. Bendera : Upacara",
        "D. Komputer : Desain",
        "E. Kalender : Tanggal"
      ],
      answer: "B. Roda : Mobil"
    },
    {
      id: 14,
      question: "Barat Daya : Timur Laut = .... : ....",
      options: [
        "A. Utara : Timur",
        "B. Barat : Selatan",
        "C. Selatan : Barat",
        "D. Barat Daya : Timur",
        "E. Tenggara : Barat Laut"
      ],
      answer: "B. Barat : Selatan"
    },
    {
      id: 15,
      text: "Perhatikan dua pernyataan berikut!",
      statements: [
        "(1) Desa Suka Makmur sedang di landa banjir.",
        "(2) Sawah di Desa Suka Maju mengalami kerusakan akibat air yang melimpah."
      ],
      question: "Manakah di bawah ini yang menggambarkan hubungan pernyataan (1) dan (2)?",
      options: [
        "A. Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
        "B. Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
        "C. Pernyataan (1) dan (2) adalah penyebab, namun tidak saling berhubungan.",
        "D. Pernyataan (1) dan (2) adalah akibat dari penyebab yang tidak saling berhubungan.",
        "E. Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama."
      ],
      answer: "A. Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat."
    },
    {
      id: 16,
      text: "Perhatikan dua pernyataan berikut!",
      statements: [
        "(1) Banyak sapi yang mati secara tiba-tiba.",
        "(2) Seorang warga terjangkit penyakit antraks."
      ],
      question: "Manakah di bawah ini yang menggambarkan hubungan pernyataan (1) dan (2)?",
      options: [
        "A. Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
        "B. Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
        "C. Pernyataan (1) dan (2) adalah penyebab, namun tidak saling berhubungan.",
        "D. Pernyataan (1) dan (2) adalah akibat dari penyebab yang tidak saling berhubungan.",
        "E. Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama."
      ],
      answer: "A. Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat."
    },
    {
      id: 17,
      text: "Perhatikan dua pernyataan berikut!",
      statements: [
        "(1) Kota A mengalami gempa.",
        "(2) Kota A sering mengalami kemacetan parah."
      ],
      question: "Manakah di bawah ini yang menggambarkan hubungan pernyataan (1) dan (2)?",
      options: [
        "A. Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
        "B. Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
        "C. Pernyataan (1) dan (2) adalah penyebab, namun tidak saling berhubungan.",
        "D. Pernyataan (1) dan (2) adalah akibat dari penyebab yang tidak saling berhubungan.",
        "E. Pernyataan (1) dan (2) adalah akibat dari suatu penyebab yang sama."
      ],
      answer: "C. Pernyataan (1) dan (2) adalah penyebab, namun tidak saling berhubungan."
    },
    {
      id: 18,
      question: "Jumlah kunjungan wisatawan nusantara di Pulau Jawa mengalami kenaikan. Kenaikan jumlah wisatawan ini menimbulkan kenaikan penumpang moda transportasi. Hasil survei Badan Pusat Statistik (BPS) mencatat terjadi kenaikan penumpang di seluruh moda transportasi pada Juni 2023. Jika dibandingkan dengan bulan yang sama di tahun sebelumnya, kenaikan tertinggi terjadi pada moda transportasi angkutan udara dengan persentase 139,86%.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan yang PALING MUNGKIN menjadi sebab adalah ....",
      options: [
        "A. Biaya moda transportasi angkutan udara mengalami penurunan.",
        "B. Moda transportasi angkutan udara lebih cepat daripada angkutan lain.",
        "C. Moda transportasi angkutan udara lebih aman daripada angkutan lain.",
        "D. Tempat wisata yang dikunjungi wisatawan lebih dekat dengan bandara udara.",
        "E. Bulan Juni 2023 bertepatan dengan libur sekolah, sedangkan untuk tahun lalu tidak."
      ],
      answer: "E. Bulan Juni 2023 bertepatan dengan libur sekolah, sedangkan untuk tahun lalu tidak."
    },
    {
      id: 19,
      question: "Pertumbuhan ekonomi Indonesia pada kuartal II 2023 mencapai 5,17% secara tahunan (year on year). Pertumbuhan di atas 5% ini merupakan pencapaian selama tujuh kuartal berturut-turut. Pertumbuhan ekonomi ini dipicu konsumsi rumah tangga yang tumbuh positif. Hal tersebut didorong adanya perayaan keagamaan, seperti idul fitri dan idul adha.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan yang PALING MUNGKIN menjadi sebab adalah ....",
      options: [
        "A. Peningkatan konsumsi rumah tangga didorong kenaikan harga bahan pokok.",
        "B. Adanya idul fitri dan idul adha membuat masyarakat lebih banyak berbelanja.",
        "C. Harga bahan bakar minyak yang stabil membuat harga barang tidak meningkat.",
        "D. Adanya pertumbuhan ekonomi membuat masyarakat mampu membeli kebutuhan pokoknya.",
        "E. Subsidi pemerintah untuk masyarakat kurang mampu membuat konsumsi rumah tangga meningkat."
      ],
      answer: "B. Adanya idul fitri dan idul adha membuat masyarakat lebih banyak berbelanja."
    },
    {
      id: 20,
      question: "Jumlah kendaraan listrik di Indonesia semakin bertambah setiap tahun. Kondisi tersebut seiring mulai banyaknya model mobil listrik yang dipasarkan di Tanah Air. Namun, bagi masyarakat yang hendak menggunakan kendaraan listrik, terdapat beberapa hal yang perlu diperhatikan. Hal tersebut mengenai kondisi baterai yang tidak boleh habis total ketika digunakan. Kalau baterai sampai nol persen maka usia pakai akan turun drastis dan tidak bisa diisi daya hingga 100 persen.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan yang PALING MUNGKIN menjadi akibat adalah ....",
      options: [
        "A. Komponen baterai kendaraan listrik yang sensitif membuat harga kendaraan listrik masih tinggi.",
        "B. Sebelum bepergian dengan kendaraan listrik, pengguna mengisi daya kendaraannya terlebih dahulu.",
        "C. Banyak kendaraan listrik yang mengalami kerusakan akibat tidak memperhatikan kondisi baterainya.",
        "D. Stasiun pengisian kendaraan listrik umum belum banyak sehingga banyak mobil listrik kehabisan daya di perjalanan.",
        "E. Banyaknya model mobil listrik membuat pengguna tidak memperhatikan kemampuan baterai mobil yang akan dibeli."
      ],
      answer: "C. Banyak kendaraan listrik yang mengalami kerusakan akibat tidak memperhatikan kondisi baterainya."
    },
    {
      id: 21,
      question: "Kesenjangan sosial merupakan kondisi terdapat perbedaan mencolok antara masyarakat kelas atas dan bawah pada kemampuan finansial. Kesenjangan sosial ini terjadinya akibat minimnya lapangan pekerjaan. Kesenjangan sosial dapat menimbulkan meningkatnya kriminalitas dan konflik sosial masyarakat.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan sebab akibat yang PALING MUNGKIN adalah ....",
      options: [
        "A. Kesenjangan sosial yang meningkat menyebabkan minimnya lapangan pekerjaan.",
        "B. Kriminalitas dan konflik sosial masyarakat dipengaruhi oleh semakin banyaknya masyarakat kelas atas.",
        "C. Semakin meningkatnya pengangguran akan meningkatkan kriminalitas dan konflik sosial masyarakat.",
        "D. Kesenjangan sosial yang meningkat di masyarakat membuat banyak masyarakat kelas bawah merasa tidak percaya diri.",
        "E. Perbedaan mencolok antara masyarakat kelas atas dan bawah menimbulkan minimnya kriminalitas dan konflik sosial masyarakat."
      ],
      answer: "C. Semakin meningkatnya pengangguran akan meningkatkan kriminalitas dan konflik sosial masyarakat."
    },
    {
      id: 22,
      question: "Kualitas udara di Jakarta berada pada zona merah atau tidak sehat. Konsentrasi PM 2.5 di Jakarta saat ini 16,6 kali lebih tinggi dari panduan kualitas udara tahunan WHO. Beberapa usaha yang akan dilakukan pemerintah dalam menanggulangi kualitas udara ini antara lain memperbanyak ruang terbuka hijau dan penggunaan energi bersih.",
      quizSection: "Berdasarkan informasi pada teks di atas, pernyataan sebab akibat yang PALING MUNGKIN adalah ....",
      options: [
        "A. Sedikitnya ruang terbuka hijau dan penggunaan energi bersih di Jakarta memengaruhi kualitas udara.",
        "B. Kualitas udara yang tidak sehat membuat banyak masyarakat memakai masker saat di luar ruangan.",
        "C. Kualitas udara di Jakarta yang tidak sehat disebabkan standar konsentrasi PM 2.5 berdasarkan WHO terlalu rendah.",
        "D. Banyak masyarakat Jakarta mengalami gangguan pernapasan karena tidak memakai masker saat di luar ruangan.",
        "E. Tidak seriusnya pemerintah menangani kualitas udara di Jakarta dipengaruhi kondisi kualitas udara yang naik turun."
      ],
      answer: "A. Sedikitnya ruang terbuka hijau dan penggunaan energi bersih di Jakarta memengaruhi kualitas udara."
    },
    {
      id: 23,
      question: "Istilah Frugal living menjadi tren di media sosial. Jika diterjemahkan secara bahasa dapat berarti gaya hidup hemat atau gaya hidup sederhana. Namun, frugal living secara konsep dapat membantu pengguna mencapai kebebasan finansial. Seperti dua sisi mata uang, menerapkan frugal living berlawanan dengan gaya hidup konsumtif. Frugal living ini berkenaan dengan prioritas belanja. Sebagai contoh, seseorang akan meninggalkan pengeluaran yang tidak terlalu penting.",
      quizSection: "Berdasarkan informasi pada teks di atas, jika gaya hidup seseorang seperti dua sisi mata uang dengan gaya hidup konsumtif, apa yang PALING MUNGKIN?",
      options: [
        "A. Orang tersebut menerapkan frugal living.",
        "B. Orang tersebut menerapkan prioritas belanja.",
        "C. Orang tersebut mencapai kebebasan finansial.",
        "D. Orang tersebut menerapkan gaya hidup sederhana.",
        "E. Orang tersebut akan meninggalkan pengeluaran yang tidak terlalu penting."
      ],
      answer: "A. Orang tersebut menerapkan frugal living."
    },
    {
      id: 24,
      question: "Semua siswa berprestasi mengikuti perlombaan Kompetisi Sains Nasional (KSN). Tidak ada siswa kelas 10 yang mengikuti perlombaan Kompetisi Sains Nasional (KSN).",
      quizSection: "Simpulan yang tepat adalah ....",
      options: [
        "A. Semua siswa kelas 10 tidak ada yang berprestasi.",
        "B. Sebagian siswa kelas 10 tidak ada yang berprestasi.",
        "C. Sebagian siswa kelas 10 berprestasi, namun tidak diikutsertakan.",
        "D. Siswa kelas 11 dan 12 yang berprestasi mengikuti perlombaan Kompetisi Sains Nasional (KSN).",
        "E. Semua siswa berprestasi kelas 10 baru diterima sekolah sehingga tidak mengikuti perlombaan Kompetisi Sains Nasional (KSN)."
      ],
      answer: "A. Semua siswa kelas 10 tidak ada yang berprestasi."
    },
    {
      id: 25,
      question: "Beberapa siswa SMA mengambil peminatan soshum. Semua yang mengambil peminatan soshum merupakan siswa yang pandai berbicara.",
      quizSection: "Berdasarkan dua pernyataan di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Beberapa siswa SMA tidak pandai berbicara.",
        "B. Beberapa siswa yang pandai berbicara bukan siswa SMA.",
        "C. Beberapa siswa yang bukan siswa SMA pandai berbicara.",
        "D. Beberapa siswa yang pandai berbicara merupakan siswa SMA.",
        "E. Beberapa yang mengambil peminatan soshum bukan siswa SMA."
      ],
      answer: "D. Beberapa siswa yang pandai berbicara merupakan siswa SMA."
    },
    {
      id: 26,
      question: "Tidak satu pun kendaraan pengangkut muatan lulus uji emisi. Beberapa kendaraan keluaran tahun ini lulus uji emisi.",
      quizSection: "Berdasarkan dua pernyataan di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Semua kendaraan keluaran tahun ini harus lulus uji emisi.",
        "B. Semua kendaraan pengangkut muatan bukan keluaran tahun ini.",
        "C. Beberapa kelulusan uji emisi diberikan kepada kendaraan keluaran tahun ini.",
        "D. Beberapa kendaraan pengangkut muatan bukan kendaraan keluaran tahun ini.",
        "E. Beberapa kendaraan keluaran tahun ini bukan kendaraan pengangkut muatan."
      ],
      answer: "E. Beberapa kendaraan keluaran tahun ini bukan kendaraan pengangkut muatan."
    },
    {
      id: 27,
      question: "Semua negara yang berada di kawasan berdekatan memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya. Beberapa negara yang memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya digunakan untuk kerja sama dalam bidang keamanan.",
      quizSection: "Berdasarkan dua pernyataan di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Sebagian negara yang berada di kawasan berdekatan digunakan untuk kerja sama dalam bidang keamanan.",
        "B. Sebagian negara yang berada di kawasan berdekatan memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya.",
        "C. Sebagian negara yang memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya tidak berada di kawasan berdekatan.",
        "D. Sebagian negara memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya tidak digunakan untuk kerja sama dalam bidang keamanan.",
        "E. Sebagian negara yang memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya tidak digunakan untuk kerja sama dalam bidang keamanan negara."
      ],
      answer: "B. Sebagian negara yang berada di kawasan berdekatan memiliki hubungan kerja sama dengan kondisi wilayah sebagai pemesatunya."
    },
    {
      id: 28,
      question: "Semua siswa kelas 12 yang berprestasi dapat mengikuti Seleksi Nasional Berdasarkan Prestasi (SNBP) PTN. Sebagian siswa yang dapat mengikuti Seleksi Nasional Berdasarkan Prestasi (SNBP) PTN diterima di PTN pilihannya.",
      quizSection: "Berdasarkan dua pernyataan di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Semua siswa yang diterima di PTN pilihannya mengikuti SNBP.",
        "B. Sebagian siswa yang mengikuti SNBP diterima di PTN pilihannnya.",
        "C. Sebagian siswa kelas 12 yang berprestasi diterima di PTN pilihannya.",
        "D. Sebagian siswa kelas 12 yang berprestasi tidak dapat mengikuti SNBP.",
        "E. Semua siswa kelas 12 yang berprestasi tidak diterima di PTN pilihannya."
      ],
      answer: "C. Sebagian siswa kelas 12 yang berprestasi diterima di PTN pilihannya."
    },
    {
      id: 29,
      question: "Ekstrak daun jambu air dapat dijadikan sabun tangan karena mengandung saponin. Penggunaan bahan alami ini dapat mengurangi penggunaan bahan Sodium Lauryl Sulfate (SLS). Semua sabun mengandung SLS sebagai bahan pembersihnya. Namun, sekarang beberapa bahan pembersih sabun sudah digantikan oleh bahan alami, seperti saponin pada ekstrak daun jambu air. Dengan penggunaan bahan alami ini diharapkan dapat mengurangi pencemaran lingkungan.",
      quizSection: "Berdasarkan informasi pada teks di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Sebagian saponin pada ekstrak daun jambu air dapat menggantikan kandungan SLS pada sabun.",
        "B. Sebagian SLS pada sabun tidak digantikan oleh bahan alami, seperti saponin pada ekstrak daun jambu air.",
        "C. Semua SLS pada sabun sudah digantikan oleh bahan alami, seperti saponin pada ekstrak daun jambu air.",
        "D. Sebagian SLS pada sabun sudah digantikan oleh bahan alami, seperti saponin pada ekstrak daun jambu air.",
        "E. Sebagian ekstrak daun jambu air mengandung saponin yang dapat menggantikan kandungan SLS pada sabun."
      ],
      answer: "D. Sebagian SLS pada sabun sudah digantikan oleh bahan alami, seperti saponin pada ekstrak daun jambu air."
    },
    {
      id: 30,
      question: "Semua manusia membutuhkan satu sama lain sehingga terbentuk kelompok sosial antara individu. Kelompok sosial ini saling hidup bersama dan saling ketergantungan satu dengan yang lain. Sebagian kelompok sosial antara individu yang terbentuk saling timbal balik dan saling memengaruhi satu sama lain. Faktor pembentukan kelompok sosial ini tergantung pada kedekatan dan kesamaan satu dengan yang lain.",
      quizSection: "Berdasarkan informasi pada teks di atas, simpulan yang paling tepat adalah ....",
      options: [
        "A. Sebagian manusia membutuhkan satu sama lain sehingga terbentuk kelompok sosial antara individu.",
        "B. Sebagian manusia membutuhkan satu sama lain sehingga terbentuk saling timbal balik dan saling memengaruhi.",
        "C. Sebagian hubungan saling timbal balik dan saling memengaruhi satu sama lain membentuk kelompok sosial.",
        "D. Sebagian kelompok sosial antara individu manusia membutuhkan satu sama lain untuk mencapai tujuan bersama.",
        "E. Sebagian manusia membutuhkan satu sama lain sehingga terbentuk saling timbal balik dan saling memengaruhi untuk mencapai tujuan bersama."
      ],
      answer: "A. Sebagian manusia membutuhkan satu sama lain sehingga terbentuk kelompok sosial antara individu."
    },

    //penalaran umum//
  {
    id: 1,
    text: "Bacalah teks berikut!",
    question: "(1) Setiap hari Minggu digelar sebuah lapak yang merupakan tempat belajar bahasa isyarat Indonesia atau Bisindo di kawasan Bunderan Hotel Indonesia, Jakarta. (2) Phieter, penanggung jawab program belajar ini, mengatakan bahwa kaum tunarungu/tuli sering mendapat perlakuan diskriminatif karena ketidaktersediaan akses terhadap bahasa isyarat. (3) Keterbatasan akses bahasa tersebut merupakan kendala utama kaum tunarungu/tuli dalam mencapai kehidupan yang sejahtera. (4) Mereka sering tidak dilibatkan dalam kegiatan-kegiatan sosial karena hambatan komunikasi dengan orang lain. (5) Dengan adanya program belajar Bisindo tersebut, masyarakat umum diharapkan dapat mengetahui dan menghargai hak berbahasa kaum tunarungu/tuli.",
    quizSection: "Kata beragam nonformal pada paragraf tersebut terdapat pada kalimat....",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4",
      "E. 5"
    ],
    "answer": "A. 1"
  },
  {
    id: 2,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 2-5!",
    question: "(1) Tubuh cenderung kekurangan asupan nutrisi seimbang kala Ramadan, termasuk vitamin, mineral, dan serat. (2) Untuk itu, Anda bisa meminum suplemen vitamin apabila merasa asupan vitamin tak mencukupi dari makanan seperti sayuran dan buah-buahan. (3) “Tetap dianjurkan sumbernya adalah dari makanan yang kita konsumsi, makanya disarankan tetap mengonsumsi gizi seimbang, buah sayur yang cukup selama buka dan sahur,” ujar Certified Nutrition and Wellness Consultant dari Universitas Indonesia, Mochamad Aldis Ruslialdi. (4) “Namun, kalau susah, bisa salah satunya dibantu suplemen. Jadi, suplemen boleh-boleh saja, tetapi tidak harus,” tambahnya. (5) Hal senada diungkapkan Ketua Umum Perkumpulan Dokter Pengembang Obat Tradisional dan Jamu Indonesia (PDPOTJI), Inggrid Tania. (6) Dia mengatakan secara umum suplemen vitamin dan mineral selama Ramadan dan pandemi Covid-19 dibutuhkan untuk membangunkan kebugaran dan imunitas. (7) Suplemen yang direkomendasikan, antara lain, vitamin B kompleks, vitamin C, vitamin D3, mineral seng, dan herbal imunomodulator yang umum lebih minimal efek samping karena berasal dari bahan alami, seperti ekstrak Echinacea pupurea, jamur Cordyceps Militaris, dan zinc picolinate. (8) Waktu yang tepat untuk minum suplemen selama Ramadan, Tania menyarankan sebaiknya sehabis makan berbuka maupun sahur. (9) “Karena ada beberapa mikronutrien yang akan lebih optimal diserap dengan dampingan dari nutrisi lain, misalnya, vitamin A, D, E, K yang optimal diserap saat kita mengonsumsi cukup lemak sehat atau zat besi yang lebih optimal diserap saat kita mengonsumsi vitamin C,” tuturnya. (10) Untuk memudahkan, Tania mencotohkan suplemen vitamin D3, misalnya, bisa diminum setelah berbuka, suplemen herbal imunomodulator sebelum makan sahur, lalu suplemen vitamin B kompleks, vitamin C, dan seng setelah makan sahur. (11) Khusus imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu. (12) Hal ini untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
    quizSection: "Kalimat yang tidak logis pada teks tersebut tampak pada kalimat....",
    options: [
      "A. kalimat (3)",
      "B. kalimat (4)",
      "C. kalimat (5)",
      "D. kalimat (6)",
      "E. kalimat (7)"
    ],
    "answer": "A. kalimat (3)"
  },
  {
    id: 3,
    question: "Gagasan utama yang tepat pada paragraf 2 adalah….",
    options: [
      "A. Waktu untuk mengonsumsi suplemen selama Ramadan",
      "B.	Suplemen sebagai pendamping makanan saat Ramadan",
      "C.	Mengonsumsi suplemen harus dibarengi nutrisi lain", 
      "D.	Manfaat mengonsumsi suplemen selama Ramadan", 
      "E.	Kurangnya asupan nutrisi selama puasa Ramadan ",
      ],
    answer: "A. Waktu untuk mengonsumsi suplemen selama Ramadan",
  },

  {
    id: 4,
    question: "Penggabungan yang tepat untuk kalimat (11) dan (12) teks tersebut adalah....",
    options: [
      "A. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu meskipun menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
      "B. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu karena menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
      "C. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
      "D. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu, seperti menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini.",
      "E. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu bila menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini."
    ],
    answer: "C. Khusus untuk imunomodulator, Anda bisa mengonsumsinya setiap hari antara 8—16 minggu dengan jeda dua minggu untuk menghindari kemungkinan timbulnya efek samping walaupun belum ada bukti kuat mengenai hal ini."
  },
  {
    id: 5,
    question: "Hubungan yang tampak pada kalimat (11) dan (12) adalah....",
    options: [
      "A. sebab akibat",
      "B. pertentangan",
      "C. perluasan",
      "D. tujuan",
      "E. waktu"
    ],
    answer: "A. sebab akibat"
  },
  {
    id: 6,
    question: "Usaha pembangunan berencana yang pada umumnya dilakukan oleh hampir semua negara yang sedang berkembang itu memang bertujuan untuk meningkatkan kemakmuran serta mengejar kemajuan teknologi dan ilmu pengetahuan.",
    quizSection: "Gagasan utama kalimat di atas adalah ...",
    options: [
      "A. Usaha pembangunan berencana dilakukan oleh hampir semua negara.",
      "B. Usaha pembangunan berencana memang bertujuan.",
      "C. Usaha pembangunan berencana bertujuan meningkatkan kemakmuran.",
      "D. Usaha pembangunan berencana mengejar kemajuan teknologi dan ilmu pengetahuan.",
      "E. Usaha pembangunan berencana di hampir semua negara yang sedang berkembang."
    ],
    answer: "C. Usaha pembangunan berencana bertujuan meningkatkan kemakmuran."
  },
  {
    id: 7,
    text: "Bacalah paragraf berikut!",
    question: "Gunungan yang terbuat dari berbagai buah-buahan dan sayur-sayuran diarak sepanjang jalan. Gunungan itu pun akhirnya sampai di alun-alun di depan keraton. Prosesi diakhiri dengan perebutan isi gunungan oleh masyarakat yang hadir di tempat itu.",
    quizSection: "Prosesi dalam paragraf tersebut berarti ....",
    options: [
      "A. proses acara",
      "B. arak-arakan",
      "C. kegiatan",
      "D. upacara",
      "E. perjalanan"
    ],
    answer: "D. upacara"
  },
  {
    id: 8,
    text: "Bacalah paragraf berikut!",
    question: "Ketika para pejuang kemerdekaan muncul, bahasa Melayu menjadi pilihan dalam berkomunikasi. Media massa juga menggunakan bahasa ini. Tokoh-tokoh pergerakan kemudian mengenalkan istilah bahasa Indonesia. Pada Februari 1926 wartawan Mohammad Tabrani sudah menulis tentang perlunya bahasa Indonesia–bukan bahasa Melayu–sebagai perekat negara dan bangsa yang dicita-citakan bersama. “Agar orang yang berbahasa selain Melayu tidak merasa dijajah oleh bahasa Melayu, maka gunakan saja bahasa Indonesia,” begitu pernyataan dalam tulisannya di koran Hindia Baroe.",
    quizSection: "Kata perekat dalam paragraf di atas dapat diganti dengan kata-kata berikut, kecuali ....",
    options: [
      "A. pelekap",
      "B. pengikat",
      "C. pelekat",
      "D. perapat",
      "E. pelengket"
    ],
    answer: "C. pelekat"
  },
  {
    id: 9,
    question: "Penggunaan huruf kapital dalam kalimat berikut salah, kecuali....",
    options: [
      "A. Untuk menjadi Kepala Daerah, sejumlah persyaratan harus dipenuhi.",
      "B. Saat ini Registrasi Haji harus dilakukan jauh sebelumnya.",
      "C. aku dilahirkan pada tahun 1990 di Wilayah Indonesia Timur.",
      "D. Hai, Sahabat, apa kabarmu?",
      "E. Kita harus menyayangi Ibu dan Bapak kita yang mengasuh kita sejak bayi."
    ],
    answer: "A. Untuk menjadi Kepala Daerah, sejumlah persyaratan harus dipenuhi."
  },
  {
    id: 10,
    text: "Bacalah kalimat-kalimat berikut!",
    question: "Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi. Adanya kemudahan ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
    quizSection: "Ide kedua kalimat di atas dapat digabung menjadi satu. Kalimat yang paling tepat sebagai penggabungan ide kedua kalimat itu adalah....",
    options: [
      "A. Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi dan kemudahan ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
      "B. Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi karena adanya persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
      "C. Pada saat ini persaingan di antara perusahaan pembayaran dalam bentuk perang harga mempermudah masyarakat untuk memiliki kendaraan pribadi.",
      "D. Makin dipermudahnya masyarakat untuk memiliki kendaraan pribadi pada saat ini tidak lepas dari persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga.",
      "E. Perang harga di antara perusahaan pembayaran yang memudahkan masyarakat untuk semakin memiliki kendaraan pribadi sendiri tidak lepas dari persaingan pada saat ini."
    ],
    answer: "B. Pada saat ini masyarakat semakin dipermudah untuk memiliki kendaraan pribadi karena adanya persaingan di antara perusahaan pembayaran yang sering mengadakan perang harga."
  },
  {
    id: 11,
    text: "Bacalah paragraf berikut!",
    question: "Formosa adalah nama lain Taiwan dalam bahasa Portugis yang berarti ’pulau cantik’. Nama itu disematkan bukan tanpa alasan. Kecantikan alamnya menggaung ke berbagai penjuru dunia. Salah satunya adalah Alishan yang membuat seseorang berada di atas awan ketika datang ke sana. Selain itu, ada pula Danau Sun Moon. Danau itu merupakan danau terbesar di Taiwan.",
    quizSection: "Kalimat yang dapat melanjutkan paragraf tersebut adalah ...",
    options: [
      "A. Tidak ada orang di Taiwan yang tidak mengetahui danau yang terkenal indah itu.",
      "B. Banyak wisatawan mendatangi daerah perkotaan Taiwan.",
      "C. Keindahan alam Taiwan memang mengundang banyak wisatawan.",
      "D. Keindahan Taiwan dapat pula dijumpai pula di daerah perkotaan, misalnya di Taipei.",
      "E. Pemerintah Taiwan berusaha meningkatkan pendapatan dari sektor pariwisata."
    ],
    answer: "C. Keindahan alam Taiwan memang mengundang banyak wisatawan."
  },
  {
    id: 12,
    text: "Bacalah kalimat berikut!",
    question: "Peta bahasa ini yang merupakan peta yang menunjukkan data inventarisasi bahasa daerah di Indonesia serta wilayah persebarannya, kata Kepala Pusat Bahasa Depdiknas di sela-sela gladi bersih pameran pendidikan di Sasana Budaya Ganesha Institut Teknologi Bandung.",
    quizSection: "Kalimat tersebut tidak efektif. Kalimat tersebut dapat menjadi efektif jika diperbaiki dengan cara ...",
    options: [
      "A. mengubah kata inventarisasi dengan inventaris.",
      "B. menambah -lah pada kata ini.",
      "C. mengubah kata persebarannya dengan penyebarannya.",
      "D. mengganti kata gladi bersih dengan gladi resik.",
      "E. mengganti kata di sela-sela dengan di tengah-tengah."
    ],
    answer: "A. mengubah kata inventarisasi dengan inventaris."
  },
  {
    id: 13,
    question: "Dalam rapat itu diputuskan tiga hal pokok, yaitu perbaikan mutu produk, meningkatnya frekuensi iklan, dan pemasaran yang lebih gencar.",
    quizSection: "Kalimat tersebut bukan kalimat yang baku karena....",
    options: [
      "A. Kesalahan penulisan tanda koma sesudah iklan",
      "B. Kesalahan penggunaan kata dalam",
      "C. Penggunaan kata frekuensi yang mubazir",
      "D. Kesalahan penggunaan kata dan",
      "E. Penggunaan kata meningkatnya yang tidak paralel dengan kata yang lain"
    ],
    answer: "E. Penggunaan kata meningkatnya yang tidak paralel dengan kata yang lain"
  },
  {
    id: 14,
    text: "Bacalah paragraf berikut!",
    question: "(1) “Anak adalah kehidupan karena hidup, sesungguhnya, dimulai dari kandungan.” (2) Itulah kalimat yang sesuai untuk mengisahkan perjalanan hidup Deinara Adinda. (3) Wanita ini menyisiri pelosok-pelosok desa untuk meningkatkan gizi dan nutrisi ibu hamil. (4) Kemampuannya membaca medan sehingga sebuah solusi yang nyata terlahir.",
    quizSection: "Kata berimbuhan yang terdapat pada paragraf di atas memiliki makna kiasan, kecuali….",
    options: [
      "A. kandungan pada kalimat (1)",
      "B. perjalanan pada kalimat (2)",
      "C. menyisiri pada kalimat (3)",
      "D. terlahir pada kalimat (4)",
      "E. membaca pada kalimat (4)"
    ],
    answer: "A. kandungan pada kalimat (1)"
  },
  {
    id: 15,
    text: "Bacalah paragraf berikut!",
    question: "(1) Kecuali madu yang sudah lebih dahulu dikenal, pemasaran komoditas hutan Sumbawa lainnya masih terbatas. (2) Pengolahannya pun masih sederhana. (3) Biji kemiri yang telah dikupas langsung dijual, sedangkan biji kemiri yang pecah dibuang. (4) Selanjutnya, setelah program internet masuk desa, warga pun belajar cara mengolah biji kemiri supaya mempunyai nilai tambah. (5) Misalnya, kemiri dapat diolah menjadi minyak yang harga jualnya jauh lebih menguntungkan ketimbang menjual biji mentah.",
    quizSection: "Kata ragam nonformal dalam paragraf di atas adalah....",
    options: [
      "A. kecuali pada kalimat (1)",
      "B. sedangkan pada kalimat (3)",
      "C. supaya pada kalimat (4)",
      "D. misalnya pada kalimat (5)",
      "E. ketimbang pada kalimat (5)"
    ],
    answer: "A. kecuali pada kalimat (1)"
  },
  {
    id: 16,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 16—20!",
    question: "(1) Kota Labuan Bajo sebagai pusat ibu kota Kabupaten Manggarai Barat, memiliki sejumlah objek wisata yang layak dikunjungi. (2) Di antaranya adalah pesisir-pesisir pantai di Labuan Bajo yang memiliki keunikan keunikan dengan pantai pasir putihnya, mulai dari Pantai Pede, Pantai Gorontalo, sampai pantai di utara Kota Labuan Bajo. (3) Salah satu pantai yang selalu dikunjungi wisatawan asing dan domestik untuk berjemur dan mandi adalah Pantai Pasir Waecicu. (4) Menikmati senja di pantai ini sangatlah menyenangkan. (5) Namun, dapat dikatakan hampir semua pesisir pantai di Labuan Bajo sangat baik sebagai tempat untuk menikmati matahari terbenam. (6) Selain itu, banyak tempat yang ditawarkan oleh pemerintah Kabupaten Manggarai Barat untuk dikunjungi wisatawan. (7) Hal ini terlihat dengan banyak hotel berbintang dan guest house di sepanjang Pantai Gorontalo sampai bagian pesisir utara. (8) Karena hal-hal tersebut, kunjungan wisatawan dalam dan luar negeri ke Manggarai Barat makin meningkat. (9) Jumlah hotel dan restoran di Kota Labuan Bajo pun terus meningkat karena sejumlah investor asing dan dalam negeri menanamkan modalnya di kota ini. (10) Nama Labuan Bajo pun semakin mendunia.",
    quizSection: "Penggunaan tanda baca yang salah terdapat pada kalimat....",
    options: [
      "A. (1)",
      "B. (2)",
      "C. (5)",
      "D. (6)",
      "E. (8)"
    ],
    answer: "B. (2)"
  },
  {
    id: 17,
    question: "Apa gagasan utama pada kalimat (9)?",
    options: [
      "A. Pertumbuhan hotel dan restoran di Labuan Bajo.",
      "B. Jumlah hotel dan restoran terus meningkat.",
      "C. Investor asing menanamkan modal.",
      "D. Investor dalam negeri menanamkan modal.",
      "E. Jumlah hotel terus bertambah karena investor."
    ],
    answer: "B. Jumlah hotel dan restoran terus meningkat."
  },
  {
    id: 18,
    question: "Kunjungan wisatawan dalam dan luar negeri ke Manggarai meningkat karena ....",
    options: [
      "A. pertumbuhan hotel dan restoran serta sejumlah investor asing dan dalam negeri yang menanamkan modalnya",
      "B. semua pesisir di pantai sudah dipadati oleh hotel-hotel berbintang untuk wisatawan dalam dan luar negeri",
      "C. adanya keunikan-keunikan pesisir pantai dan tempat-tempat untuk menikmati matahari terbenam",
      "D. adanya Pantai Pasir Waecicu yang selalu dikunjungi wisatawan asing dan dalam negeri untuk berjemur dan mandi",
      "E. banyak tempat yang ditawarkan oleh pemerintah Kabupaten Manggarai Barat untuk dikunjungi wisatawan"
    ],
    answer: "A. pertumbuhan hotel dan restoran serta sejumlah investor asing dan dalam negeri yang menanamkan modalnya"
  },
  {
    id: 19,
    question: "Makna kata keunikan pada kalimat (2) bacaan di atas adalah ....",
    options: [
      "A. ‘keunggulan’",
      "B. ‘kekhasan’",
      "C. ‘keanehan’",
      "D. ‘kekhususan’",
      "E. ‘keistimewaan’"
    ],
    answer: "B. ‘kekhasan’"
  },
  {
    id: 20,
    text: "Cermati paragraf berikut!",
    question: "Di Indonesia pertanian organik mulai populer di era 80-an. Dimana gerakan revolusi hijau yang digagas pemerintah sejak pada akhir tahun 70-an mulai menunjukkan dampak negatifnya. Penggunaan pupuk dan obat-obatan kimia dituduh sebagai pemicu kerusakan lingkungan pertanian dan kesehatan manusia.",
    quizSection: "Perbaikan kalimat yang dicetak miring sehingga menjadi efektif adalah....",
    options: [
      "A. Karena gerakan revolusi hijau yang digagas pemerintah sejak pada akhir tahun 70-an mulai menunjukkan dampak negatifnya.",
      "B. Dimana gerakan revolusi hijau yang digagas pemerintah sejak pada akhir tahun 70-an mulai menunjukkan dampak negatif.",
      "C. Gerakan revolusi hijau yang digagas pemerintah pada akhir tahun 70-an mulai menunjukkan dampak negatifnya.",
      "D. Sehingga gerakan revolusi hijau yang digagas pemerintah sejak pada akhir tahun 70-an mulai menunjukkan dampak negatifnya.",
      "E. Gerakan revolusi hijau yang digagas pemerintah sejak pada akhir tahun 70-an mulai menunjukkan dampak negatifnya."
    ],
    answer: "C. Gerakan revolusi hijau yang digagas pemerintah pada akhir tahun 70-an mulai menunjukkan dampak negatifnya."
  },

  // Pemahaman baca dan menulis
  {
    id: 1,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 1—3!",
    question: "(1) Limbah medis dan sampah plastik meningkat secara drastis selama pandemi Covid-19. (2) Penggunaan masker, sarung tangan, dan alat pelindung diri (APD) sekali pakai memicu peningkatan limbah dan sampah. (3) Berdasarkan data historis, sebanyak 75% masker sekali pakai dan sampah lain terkait pandemi yang akan berakhir di tempat pembuangan sampah akhir (TPA). (4) Sementara itu, sebagian lainnya mencemari lingkungan, berserakan di jalan-jalan, selokan, dan sungai. (5) Perilaku masyarakat yang tidak bertanggung jawab memicu krisis lingkungan. (6) Program Lingkungan PBB United Nation Environment Programme (UNEP) menyebutkan bahwa limbah dan sampah ini tidak hanya memicu pada kerusakan lingkungan, tetapi juga merugikan sektor pariwisata dan perikanan dengan kerugian mencapai 40 miliar dolar. (7) Oleh karena itu, pemerintah….",
    quizSection: "Kalimat (3) perlu disempurnakan dengan cara….",
    options: [
      "A. mengganti kata berdasarkan dengan berdasar",
      "B. mengganti kata terkait dengan berkaitan",
      "C. menghilangkan kata yang",
      "D. menghilangkan kata akan",
      "E. menambah kata dari setelah 75%"
    ],
    answer: "A. mengganti kata berdasarkan dengan berdasar"
  },
  {
    id: 2,
    text: "Kata yang harus dihilangkan pada kalimat (6) adalah….",
    options: [
      "A. Bahwa",
      "B. Hanya",
      "C. Pada",
      "D. Tetapi",
      "E. Mencapai"
    ],
    answer: "A. Bahwa"
  },
  {
    id: 3,
    text: "Pernyataan yang paling tepat untuk melengkapi kalimat (7) adalah….",
    options: [
      "A. Selayaknya menanggulangi peningkatan limbah dan sampah",
      "B. Perlu menyediakan dana penangan limbah dan sampah medis",
      "C. Harus memberi sanksi kepada masyarakat yang membuang sampah",
      "D. Seharusnya menangani kerusakan lingkungan akibat sampah dan limbah",
      "E. Seharusnya membuat peraturan tentang pembuangan sampah dan limbah"
    ],
    answer: "D. Seharusnya menangani kerusakan lingkungan akibat sampah dan limbah"
  },
  {
    id: 4,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 4—7!",
    question: "(1) Bercerita sebagai metode untuk mendidik sebenarnya sudah lama dipraktikkan. (2) Kitab-kitab suci agama apa pun berisi kisah-kisah untuk membimbing umat manusia. (3) Indonesia sebenarnya kaya dengan budaya bercerita atau mendongeng yang berisi ajaran-ajaran yang baik. (4) Cerita rakyat (….) sangatlah banyak. (5) Berbagai penelitian memperlihatkan bahwa cerita atau dongeng dapat memengaruhi karakter suatu bangsa. (6) Hilangnya budaya bercerita atau mendongeng di dunia pendidikan, baik pendidikan di rumah maupun di sekolah, menyebabkan terjadinya berbagai hal negatif, seperti tawuran antarpemuda dan korupsi. (7) Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana. (8) Diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kemerosotan mental dan karakter bangsa tersebut.",
    quizSection: "Kata yang paling tepat menggantikan kata baik dalam kalimat (3) adalah….",
    options: [
      "A. luhur",
      "B. tinggi",
      "C. tepat",
      "D. bagus",
      "E. benar"
    ],
    answer: "A. luhur"
  },
  {
    id: 5,
    text: "Kalimat manakah yang paling tepat sebagai kalimat inti nomor (6)?",
    options: [
      "A. Hilangnya budaya bercerita menyebabkan terjadinya berbagai hal negatif.",
      "B. Hilangnya budaya bercerita di dunia pendidikan menyebabkan terjadinya berbagai hal negatif.",
      "C. Hilangnya budaya bercerita atau mendongeng di dunia pendidikan, baik di rumah maupun di sekolah, menyebabkan terjadinya berbagai hal negatif.",
      "D. Hilangnya budaya bercerita di rumah maupun di sekolah menyebabkan terjadinya berbagai hal negatif, seperti tawuran antarpemuda dan korupsi.",
      "E. Hilangnya budaya bercerita atau mendongeng di dunia pendidikan menyebabkan terjadinya berbagai hal negatif."
    ],
    answer: "C. Hilangnya budaya bercerita atau mendongeng di dunia pendidikan, baik di rumah maupun di sekolah, menyebabkan terjadinya berbagai hal negatif."
  },
  {
    id: 6,
    text: "Kalimat manakah yang paling efektif sebagai hasil penggabungan kalimat (7) dan (8)?",
    options: [
      "A. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana karena diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kemerosotan mental tersebut.",
      "B. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana sehingga diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kondisi tersebut.",
      "C. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana walaupun diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kemerosotan mental tersebut.",
      "D. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana bahkan diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kondisi tersebut.",
      "E. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana padahal diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kemerosotan mental tersebut."
    ],
    answer: "B. Kemerosotan mental dan karakter bangsa tampak jelas terjadi di mana-mana sehingga diperlukan kerja keras dan upaya semua pihak untuk memperbaiki kondisi tersebut."
  },
  {
    id: 7,
    text: "Pernyataan yang paling tepat untuk melengkapi kalimat (4) adalah….",
    options: [
      "A. yang menunjukkan kearifan lokal berbagai wilayah di Indonesia",
      "B. yang beredar luas di kalangan masyarakat Indonesia",
      "C. yang berasal dari berbagai wilayah di Indonesia",
      "D. yang menggambarkan budaya bangsa Indonesia",
      "E. yang mencerminkan sikap bangsa Indonesia"
    ],
    answer: "C. yang berasal dari berbagai wilayah di Indonesia"
  },
  {
    id: 8,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 8—12!",
    "question": "(1) Kemajuan teknologi tidak dapat dipisahkan dari kehidupan masyarakat. (2) Dengan berbagai informasi yang terjadi di berbagai belahan dunia kini dapat langsung kita ketahui berkat kemajuan teknologi, misalnya melalui smartphone. (3) Kalau dahulu kita mengenal pepatah dunia tak selebar daun kelor, sekarang pepatah itu selayaknya berganti menjadi dunia saat ini selebar daun kelor. (4) Cepatnya akses informasi di berbagai belahan dunia membuat dunia ini seolah semakin sempit. (5) Kita dapat menyaksikan apa yang terjadi di luar negeri dari Indonesia secara langsung. (6) Perubahan yang begitu besar pada kehidupan umat manusia dengan segala peradabannya disebabkan oleh kemajuan teknologi yang tidak dapat kita hindari. (7) Kemajuan teknologi yang semakin dahsyat ini jangan sampai menggeser jati diri kita sebagai manusia. (8) Oleh sebab itu, kita harus melakukan tindakan yang bijaksana terhadap diri kita sendiri, keluarga, dan masyarakat luas.",
    quizSection: "Kalimat yang tidak logis dalam bacaan tersebut adalah….",
    options: [
      "A. Kalimat (1)",
      "B. Kalimat (2)",
      "C. Kalimat (5)",
      "D. Kalimat (6)",
      "E. Kalimat (7)"
    ],
    answer: "D. Kalimat (6)"
  },
  {
    id: 9,
    text: "Kata bijaksana dalam kalimat (8) berasosiasi dengan….",
    options: [
      "A. berbudi",
      "B. bersahaja",
      "C. berakal",
      "D. berperasaan",
      "E. berpengetahuan"
    ],
    answer: "A. berbudi"
  },
  {
    id: 10,
    text: "Kata yang memiliki makna bertingkat dengan kata akses dalam kalimat (4) adalah….",
    options: [
      "A. lorong",
      "B. jalan",
      "C. jaringan",
      "D. saluran",
      "E. fasilitas"
    ],
    answer: "D. saluran"
  },
  {
    id: 11,
    text: "Kata pepatah pada kalimat (3) dalam bacaan tersebut sama maknanya dengan kata….",
    options: [
      "A. ajaran",
      "B. nasihat",
      "C. anjuran",
      "D. petunjuk",
      "E. ungkapan"
    ],
    answer: "E. ungkapan"
  },
  {
    id: 12,
    text: "Kalimat (6) dan (7) dalam bacaan tersebut mengandung hubungan….",
    options: [
      "A. perluasan",
      "B. penambahan",
      "C. penegasan",
      "D. penghubungan",
      "E. perincian"
    ],
    answer: "C. penegasan"
  },
  {
    id: 13,
    text: "Perhatikan teks berikut untuk menjawab soal nomor 13—17!",
    question: "(1) Produksi sampah yang meningkat tanpa adanya penanganan lebih lanjut akan mengakibatkan permasalahan yang serius. (2) Permasalahan sampah berkaitan dengan masalah kebersihan, lingkungan yang rusak, dan masyarakat yang tidak disiplin sehingga seringkali menimbulkan konflik. (3) Salah satu bentuk kesalahan dalam mengelola sampah adalah penimbunan sampah yang semakin besar dan bertahan dengan waktu yang lama. (4) Permasalahan sampah disebabkan oleh lambatnya waktu dekomposisi dari timbunan sampah, khususnya sampah plastik. (5) Permasalahan sampah plastik dapat ditanggulangi dengan beberapa cara. (6) Satu di antaranya adalah dengan proses daur ulang sampah plastik. (7) Untuk dijadikan biji plastik yang bernilai ekonomi, sampah plastik diolah dengan cara yang sangat sederhana. (8) Nilai ekonomi sampah plastik di sebuah ibu kota provinsi pada tahun 2016 dapat mencapai lebih dari dua miliar rupiah.",
    quizSection: "Perumpamaan dalam bacaan tersebut terdapat pada kalimat….",
    options: [
      "A. (1)",
      "B. (3)",
      "C. (4)",
      "D. (7)",
      "E. (8)"
    ],
    answer: "B. (3)"
  },
  {
    id: 14,
    text: "Apabila gagasan pada bacaan tersebut dipisahkan menjadi dua paragraf, pengelompokan kalimatnya adalah….",
    options: [
      "A. (1-2) dan (3-4-5-6-7-8)",
      "B. (1-2-3) dan (4-5-6-7-8)",
      "C. (1-2-3-4) dan (5-6-7-8)",
      "D. (1-2-3-4-5) dan (6-7-8)",
      "E. (1-2-3-4-5-6) dan (7-8)"
    ],
    answer: "C. (1-2-3-4) dan (5-6-7-8)"
  },
  {
    id: 15,
    text: "Bentuk ke-an pada kata kesalahan dalam kalimat (3) mempunyai kesamaan makna dengan bentuk ke-an dalam kalimat….",
    options: [
      "A. Dia ketinggalan kereta api ke Jakarta karena terlambat bangun tidur.",
      "B. Dia menjaga keseimbangan hidupnya dengan olahraga dan diet teratur.",
      "C. Pada ketinggian 3.000 meter di atas permukaan laut, desa tersebut sangat dingin.",
      "D. Dia memiliki kemampuan untuk membangun rumah di kawasan mewah.",
      "E. Baju anak itu kekecilan karena pertumbuhan tubuhnya sangat cepat."
    ],
    answer: "B. Dia menjaga keseimbangan hidupnya dengan olahraga dan diet teratur."
  },
  {
    id: 16,
    text: "Kelompok kata masalah kebersihan, lingkungan yang rusak, dan masyarakat yang tidak disiplin pada kalimat (2) dapat disempurnakan menjadi….",
    options: [
      "A. masalah kebersihan, lingkungan menjadi rusak, dan ketidaksiplinan masyarakat",
      "B. permasalahan kebersihan, dirusaknya lingkungan, dan ketidakdisiplinan masyarakat",
      "C. kebersihan yang bermasalah, lingkungan yang rusak, dan masyarakat tidak disiplin",
      "D. masalah kebersihan, kerusakan lingkungan, dan ketidakdisiplinan masyarakat",
      "E. kebersihan bermasalah, lingkungan dirusak, dan masyarakat tidak disiplin"
    ],
    answer: "D. masalah kebersihan, kerusakan lingkungan, dan ketidakdisiplinan masyarakat"
  },
  {
    id: 17,
    text: "Kelompok kata yang berpasangan tetap dalam bacaan tersebut adalah…",
    options: [
      "A. produksi sampah (kalimat 1)",
      "B. sampah plastik (kalimat 4)",
      "C. daur ulang (kalimat 6)",
      "D. biji plastik (kalimat 7)",
      "E. nilai ekonomi (kalimat 8)"
    ],
    answer: "C. daur ulang (kalimat 6)"
  },
  {
    id: 18,
    text: "Bacalah kutipan teks berikut!",
    question: "(1) Budaya generasi muda pada setiap zaman berbeda. (2) Pada era 90-an, banyak generasi muda yang menghabiskan waktunya dengan nongkrong sambil memperbincangkan musik, bertukar kaset, serta membuat rekaman tangga lagu sesuai selera. (3) Hiburan utama yang ditawarkan di kafe-kafe juga tidak lepas dari kehadiran musik. (4) Zaman sekarang, walaupun tidak bisa lepas dari musik, gaya hidup generasi milenial berbeda. (5) Kafe-kafe di Jakarta, hadir bagai studio foto yang didominasi oleh perbincangan tentang cara memunculkan foto atraktif di media sosial. (6) Salah satu hal yang mengubah gaya hidup tersebut adalah internet. (7) Internet mengubah kebiasaan. (8) Layar ponsel semakin akrab dengan generasi yang asyik dengan teknologi. (9) Pengalaman visual semakin matang. (10) Penampilan luar pun menjadi hal pokok.",
    quizSection: "Kata tersebut pada kalimat (6) merujuk pada….",
    options: [
      "A. membuat rekaman tangga lagu",
      "B. dominasi musik",
      "C. generasi muda",
      "D. generasi musik",
      "E. foto atraktif di media sosial"
    ],
    answer: "C. generasi muda"
  },
  {
    id: 19,
    text: "(1) Sebelum tidur, kita membutuhkan tiga puluh menit sampai satu jam untuk mengistirahatkan pikiran dari beban aktivitas. (2) Ada beberapa macam kegiatan yang terbukti manjur mengistirahatkan pikiran, yaitu membaca buku, meminum susu hangat, dan melakukan hal repetitif seperti menghitung domba, tetapi tidak dengan bermain gawai. (3) Mengirim pesan, mengunggah sesuatu di media sosial, atau mengecek surel malah akan menyalakan sistem saraf emosional yang ada dalam tubuh kita. (4) Selain itu, cahaya biru dari layar gawai dapat berdampak buruk. (5) Berdasarkan penelitian, cahaya ini dapat menekan sekresi hormon melatonin yang berfungsi mengatur pola tidur.",
    quizSection: "Kalimat manakah yang seharusnya mengakhiri teks di atas?",
    options: [
      "A. Gawai membuat kita kurang dapat mengontrol stres dan berdampak pada kesehatan.",
      "B. Tanpa tidur cukup, tubuh menjadi kurang produktif.",
      "C. Pada sistem normal, tubuh memiliki siklus proses fisiologis dan biologis.",
      "D. Padahal, kebiasaan online menjelang tidur terlihat menyenangkan.",
      "E. Akibatnya, setelah bermain gawai, kita malah akan sulit tidur."
    ],
    answer: "E. Akibatnya, setelah bermain gawai, kita malah akan sulit tidur."
  },
  {
    id: 20,
    text: "Cermati kedua teks berikut!",
    question: "Teks A: Menteri Perhubungan, Budi Karya Sumadi, mengaku kecewa dan prihatin dengan terjadinya aksi vandalisme kereta MRT di Depo Lebak Bulus, Jakarta Selatan. Menhub meminta pihak kepolisian mengejar pelaku vandalisme terhadap kereta MRT. “Terus terang saya tak habis berpikir kok bisa seorang Warga Negara Indonesia melakukan aksi coret-coret. Apalagi MRT adalah kebanggaan kita bersama yang seharusnya bisa dijaga dan ini untuk kebutuhan kita semua,” kata Menhub Budi Karya kepada pers usai melepas ribuan peserta lomba lari “10 K Hubrun 2018”, di Jakarta, Ahad (23/9). Teks B: Menhub berharap kejadian tersebut yang pertama dan terakhir. Ia juga meminta lokasi depo ditingkatkan keamanannya dan masyarakat yang tidak berkepentingan dilarang masuk. Diduga pelaku aksi vandalisme tersebut masuk ke lokasi Depo Lebak Bulus dengan memanjat dan melompati dinding.",
    quizSection: "Apa simpulan kedua teks di atas?",
    options: [
      "A. Menhub menyerahkan kasus vandalisme MRT ini kepada pihak kepolisian untuk mencari dan menangkap pelakunya.",
      "B. Menhub meminta lokasi depo ditingkatkan keamanannya dan masyarakat yang mencoba masuk harus ditangkap.",
      "C. Menhub kecewa atas tindakan vandalisme MRT dan meminta kepolisian menangkap pelaku.",
      "D. Menteri Perhubungan, Budi Karya Sumadi, mengaku kecewa dan prihatin dengan terjadinya aksi vandalisme kereta MRT.",
      "E. Menteri Perhubungan, Budi Karya Sumadi, mengutuk adanya aksi vandalisme yang dilakukan di rangkaian MRT."
    ],
    answer: "C. Menhub kecewa atas tindakan vandalisme MRT dan meminta kepolisian menangkap pelaku."
  }
]
);
 
const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(2700);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questionsPerPage = 5;
  const quizContainerRef = useRef(null); // Referensi untuk kontainer kuis

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
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke bagian paling atas
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
    <div className="quiz-section" ref={quizContainerRef}>
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
            <h2>TES POTENSI SKOLASTIK</h2>
            <div className="timer">Timer: {formatTime(timer)}</div>
          </div>
          <div className="quiz-content">
            {currentQuestions.map((q, index) => (
              <div key={q.id} className="question-block">
              {q.statements && (
                <ul>
                  {q.statements.map((statement, idx) => {
                    console.log(statement); // Debugging
                    return <li key={idx}>{statement}</li>;
                  })}
                </ul>
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
};

export default QuizSection;