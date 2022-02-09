// Don't need to import React

/**
 * The text prop would likely work a bit better as children
 * Its being used as the child for the p tag, so it would make sense
 * For this component to receive it as a child. Essentially this component is
 * Just a "box" around some text
 * https://reactjs.org/docs/composition-vs-inheritance.html#containment
*/
function ServicesSection({ image, title, children }) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    {/* Always try to include an alt prop */}
                    <img src={image} alt="service"/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
