// Thanks to the new jsx-transform that react-scripts is already making available to you,
// you no longer need to import react
// Cleaning up old code is helpful for maintainability
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            {/*
                I'm guessing you originally were using your custom Title component but just haven't updated the jsx?
                You should only have one title element per document, and it should live in the <head>, not body
                https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
            */}
            <title title="About Me" span="About Me" />
            <ImageSection />
            {/*
              Same here with the title element. Lets change to another element
              Also, for consistency, we should pass string props with double quotes instead of using {''}
            */}
            <title title="My Skills" span="My Skills" />
            <div className="skillsContainer">
                <SkillsSection skill="Javascript" width="100%"/>
                <SkillsSection skill="Typescript" width="100%"/>
                <SkillsSection skill="React Js" width="100%"/>
                <SkillsSection skill="Node Js" width="100%"/>
                <SkillsSection skill="Web Design" width="100%"/>
                <SkillsSection skill="UI/UX Design" width="100%" />
            </div>
            {/* Same here with the title element. Lets change to another element */}
            <title title="Services" span="Services" />
            <div className="servives-container">
                {/*
                  Refactoring to send text as a child. See ServicesSection component for reasoning
                */}
                <ServicesSection image={design} title="Front-End">
                  Can design aesthetic front-end applications with intuitive UI/UX design.
                </ServicesSection>
                <ServicesSection image={intelligence} title="Back-End">
                  Implementation of SQL and NoSQL databases such as Firebase, MongoDB, and DynamoDB.
                </ServicesSection>
            </div>

        </div>
    )
}

export default AboutPage;
