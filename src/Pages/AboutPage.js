import React from 'react'
// import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} width={'100%'}/>
                <SkillsSection skill={'Typescript'} width={'100%'}/>
                <SkillsSection skill={'React Js'} width={'100%'}/>
                <SkillsSection skill={'Node Js'} width={'100%'}/>
                <SkillsSection skill={'Web Design'} width={'100%'}/>
                <SkillsSection skill={'UI/UX Design'} width={'100%'} />
            </div>

            <title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Front-End'} 
                text={'Can design aesthetic front-end applications with intuitive UI/UX design.'}
                />
                <ServicesSection image={intelligence} title={'Back-End'} 
                text={'Implementation of SQL and NoSQL databases such as Firebase, MongoDB, and DynamoDB.'}
                />
            </div>

        </div>
    )
}

export default AboutPage;
