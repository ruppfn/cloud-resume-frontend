import styles from "../styles/Experience.module.css";
import {Experience} from "../types/_types";
import {FunctionComponent} from "react";

interface Props {
    experience: Array<Experience>;
}

const ExperienceComponent: FunctionComponent<Props> = ({experience}) => (
    <div className={styles.experience}>
        <h2>EXPERIENCE</h2>
        {
            experience.sort(experienceSorter).map((exp) => (
                <div key={exp.id} className={styles.experienceContainer}>
                    <div className={styles.companyName}>
                        <h3>{exp.companyName}, {exp.role}</h3> <span>&mdash; {exp.fromDate} - {exp.toDate}</span>
                    </div>
                    <ul>
                        {
                            exp.achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))
                        }
                    </ul>
                    <div>Tech stack: {exp.techStack.join(', ')}</div>
                </div>
            ))
        }
    </div>
);

const experienceSorter = (a: Experience, b: Experience) => a.id < b.id ? 1 : -1;

export default ExperienceComponent;
