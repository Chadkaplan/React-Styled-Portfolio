// Don't need to import react

// text1 and text2 are not good prop names. Lets see if we can come up with a more descriptive name
function ContactItem({ icon, text1, text2, title}) {
  return (
      // Do we need the div within a div? Can we achieve the same goal with one div and some tweak CSS?
      // It may not be possible, I didn't check, but the fewer unnecessary divs we use, the
      // easier it wil be to maintain and is better for screen readers which is helpful for accessibility
        <div className="ContactItem">
            <div className="contact">
                {/* Always strive to be as accessible as possible */}
                <img src={icon} alt="contact icon"/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;
