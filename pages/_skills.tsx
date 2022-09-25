import styles from "../styles/Skills.module.css";
import {IndividualSkill, Skills} from "../types/cvData";
import {FunctionComponent} from "react";

interface Props {
    skills: Skills
}

const SkillsComponent: FunctionComponent<Props> = ({skills}) => (
    <div className={styles.skillsContainer}>
        <h2>SKILLS</h2>
        <div className={styles.skill}>
            <h3>Programming Languages:&nbsp;</h3>
            {getSkillElement(skills.programmingLanguages)}
        </div>
        <div className={styles.skill}>
            <h3>Frameworks and Tools:&nbsp;</h3>
            {getSkillElement(skills.frameworks)}
        </div>
        <div className={styles.skill}>
            <h3>Databases:&nbsp;</h3>
            {getSkillElement(skills.databases)}
        </div>
        <div className={styles.skill}>
            <h3>Languages:&nbsp;</h3>
            {getSkillElement(skills.languages)}
        </div>
    </div>
);

const getSkillElement = (individualSkills: Array<IndividualSkill> = []): Array<JSX.Element> => {
    const levelsMap = new Map<string, Array<string>>();
    const levelsArr: Array<[string, Array<string>]> = [];

    individualSkills.forEach((individualSkill) => {
        const existingLevel = levelsMap.get(individualSkill.level) ?? [];
        existingLevel.push(individualSkill.name);
        levelsMap.set(individualSkill.level, existingLevel);
    });

    levelsMap.forEach((names, level) => {
        levelsArr.push([level, names]);
    });

    levelsArr.sort(levelSorter);

    return levelsArr.map((level) => levelJoiner(level));
};

const levelJoiner = (level: [string, Array<string>]): JSX.Element => (
    <>
        <span className={styles.skillLevel}>{level[0]}:</span>
        <span>&nbsp;{level[1].join(", ")};&nbsp;</span>
    </>
)

const levelSorter = (a: [string, string[]], b: [string, string[]]) =>
    getSkillLevelPriority(b[0]) < getSkillLevelPriority(a[0])
        ? 1 : -1

const getSkillLevelPriority = (level: string): number => {
    const defaultPriority = 4;
    const priorities: Record<string, number> = {
        "advanced": 1,
        "intermediate": 2,
        "basic": 3,
    };

    return priorities[level.toLowerCase()] ?? defaultPriority;
}

export default SkillsComponent;
