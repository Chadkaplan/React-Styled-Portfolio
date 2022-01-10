// Dont need to import React
function SkillsSection({ skill, progress, width }) {
    // Not sure how possible it is since I haven't tested it out, but may be worth looking into
    // whether we can remove a couple of these divs and instead tweak our css to get the layout we want
    // Too many divs gets difficult to maintain over time. Its just a lot of potentially unnecessary DOM elements
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            {/*
                              Nice little shortcut for when the key name matches the name of the variable your using as the value.
                              Also, typo in class name
                            */}
                            <div className="inner-pregress" style={{ width }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;
