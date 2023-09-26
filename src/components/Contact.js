import SocialIcon from "./SocialIcon";
import FixSocialIcon from "./FixSocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>your_email@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        {/* <FixSocialIcon /> */}
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;