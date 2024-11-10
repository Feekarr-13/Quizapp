import { useState } from 'react';

const QuizApp = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Selected option: ${selectedOption}`);
  };

  return (
    <div style={{ width: '60%', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Penalaran Umum</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
        <ol style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="a"
                checked={selectedOption === 'a'}
                onChange={handleOptionChange}
              />
              Pewarna industri tekstil tidak menimbulkan limbah.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="b"
                checked={selectedOption === 'b'}
                onChange={handleOptionChange}
              />
              Pewarna industri tekstil belum aman terhadap lingkungan.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="c"
                checked={selectedOption === 'c'}
                onChange={handleOptionChange}
              />
              Pewarna industri tekstil memiliki permasalahan dalam bahan baku.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="d"
                checked={selectedOption === 'd'}
                onChange={handleOptionChange}
              />
              Pewarna industri tekstil menimbulkan limbah, tetapi tidak berbahaya.
            </label>
          </li>
        </ol>
      </div>

      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <p>
          Penelitian mengungkapkan tertawa merupakan fenomena sosial yang dapat menular ke orang lain. Seorang psikolog mengungkapkan manusia 30 kali lebih mudah tertawa dengan orang lain daripada sendirian. Manusia juga lebih rentan terhadap suara tawa daripada suara negatif, hal ini menjadi alasan mengapa seseorang secara tidak sadar tersenyum saat melihat orang lain tertawa.
        </p>
        <p style={{ fontSize: '12px', textAlign: 'right' }}>(diadaptasi dari detik.com)</p>
      </div>

      <p>5. Berdasarkan informasi pada teks di atas, simpulan yang PALING DIDUKUNG adalah ....</p>

      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
        <ol style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="e"
                checked={selectedOption === 'e'}
                onChange={handleOptionChange}
              />
              Program acara komedi sering memutar rekaman suara tertawa agar penonton ikut tertawa.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="f"
                checked={selectedOption === 'f'}
                onChange={handleOptionChange}
              />
              Melihat hal lucu sendirian lebih mudah membuat tertawa daripada melihat bersama.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="g"
                checked={selectedOption === 'g'}
                onChange={handleOptionChange}
              />
              Seseorang yang tertawa akan diiringi dengan orang-orang yang melihatnya.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="h"
                checked={selectedOption === 'h'}
                onChange={handleOptionChange}
              />
              Seseorang tertawa ketika menonton hal yang lucu walaupun sendirian.
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="option"
                value="i"
                checked={selectedOption === 'i'}
                onChange={handleOptionChange}
              />
              Tertawa dapat membuat bahagia dan terhindar dari stres.
            </label>
          </li>
        </ol>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>5/30 Soal</p>
        <button onClick={handleSubmit} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
