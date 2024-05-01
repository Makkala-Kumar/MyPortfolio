import React from 'react';
import './SkillsTools.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const SkillsTools = () => {
    return (
        <div className="about-section">
            <div className="about-title">
        <h1>Skills and Tools</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
            <div className="skills-tools">
                <div className="skills-tool">
                    <h1>SKILLS</h1>
                    <p><ul>
                        <li>Communication</li>
                        <li>Problem-solving</li>
                        <li>Story Telling</li>
                    </ul></p>
                </div>
                <hr/>
                <div className="skills-tool">
                    <h1>TOOLS</h1>
                    <p><ul>
                        <li>Excel</li>
                        <li>SQL</li>
                        <li>Tableau</li>
                    </ul></p>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default SkillsTools;
