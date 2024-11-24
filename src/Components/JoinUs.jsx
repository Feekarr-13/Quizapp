import './JoinUs.css';

function JoinUs() {
  return (
    <div className="join-us-container" data-aos="fade-up">
      <div className="join-us-image">
        <img src="Image/JoinUs.png" alt="Join Us" />
        <div className="join-us-text">Join Us</div>
      </div>
      <div className="join-us-content">
        <div className="join-us-title">
          <h2>Join Us</h2> {/* Judul yang ingin diatur font-nya */}
          <p>
            Sign Up Now. You can use our platform after registering with us and enjoy the facilities we provide with 90% of the exam questions similar to the UTBK test. Click one of the columns below or contact us via the provided number or email.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6281234567890&text=Hello,%20I%20would%20like%20to%20join!"
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
        >
          Let&apos;s Join
        </a>
      </div>
    </div>
  );
}

export default JoinUs;
