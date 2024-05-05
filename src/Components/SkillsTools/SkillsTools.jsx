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
                        <li>Data Analysis</li>
                        <li>Data Visualization</li>
                        <li>Advanced Excel</li>
                        <li>Problem-solving</li>
                        <li>Story Telling</li>
                    </ul></p>
                </div>
                <hr/>
                <div className="skills-tool">
                    <h1>TOOLS</h1>
                    <p><ul>
                        <li>Excel, Google Sheets</li>
                        <li>MySQL, Microsoft SQL</li>
                        <li>Tableau</li>
                        <li>Power BI</li>
                        <li>Python</li>
                        <li>HTML, CSS, JS</li>
                        <li>React JS</li>
                    </ul></p>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default SkillsTools;
