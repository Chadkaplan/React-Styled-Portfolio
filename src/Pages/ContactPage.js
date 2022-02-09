// No longer needed
// We should try to be consistent with double vs single quote usage. Looks like the rest of the repo uses
// single quote for imports
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
// Clean up imports

function ContactPage() {
  return (
    <div>
      <div className="title">
        {/* Should use a different html element */}
        <title title="About Me" span="About Me" />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="mapEnbed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.78803999958!2d-80.31974316926147!3d26.269990959238328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d905341976e065%3A0x8907b0b59129202b!2sCoral%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1619714501739!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} title="Phone" text1="(954) 552-1022" />
          {/* Consistency makes reading the code easier. Since these lines aren't too long, lets include all in one line */}
          <ContactItem icon={email} title="Email" text1="ChadKaplanDev@gmail.com"/>
          <ContactItem icon={location} title="Address" text1="Coral Springs, Florida"/>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
