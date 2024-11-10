import './JoinUs.css';

function JoinUs() {
  return (
    <div className="join-us-container"data-aos="fade-up">
      <div className="join-us-image">
        <img src="Image/JoinUs.png" alt="Join Us" />
        <div className="join-us-text">Join Us</div>
      </div>
      <div className="join-us-content">
        <h2>Let&apos;s join the QuizApp</h2> {/* Perbaikan tanda kutip */}
        <p>
          Sign Up Now. You can use our platform after registering with us and enjoy the facilities we provide with 90% of the exam questions similar to the UTBK test, by clicking one of the columns below or by calling the number or email listed.Sign Up Now. You can use our platform after registering with us and enjoy the facilities we provide with 90% of the exam questions similar to the UTBK test, by clicking one of the columns below or by calling the number or email listed.
        </p>
        <button className="join-button">Let&apos;s Join</button> {/* Perbaikan tanda kutip */}
      </div>
    </div>
  );
}

export default JoinUs;
