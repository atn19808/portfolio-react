import SocialIcon from "./SocialIcon";
function Contact() {
  return (
    <div id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <span className="mb-4 text-base font-medium sm:text-2xl lg:mb-0 lg:text-4xl">
              atn1908@gmail.com
            </span>
            <a
              className="btn PrimaryBtn"
              href="mailto:atn1908@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </div>
        </div>
        <SocialIcon />
      </div>
    </div>
  );
}

export default Contact;
