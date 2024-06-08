import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import html from '../../assets/html-light.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript.svg';
import nodejs from '../../assets/nodejs-icon.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwindcss.svg';
import java from '../../assets/java.svg';
import redux from '../../assets/redux.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import bootstrap from '../../assets/bootstrap.svg';
import jenkins from '../../assets/jenkins.svg';
import docker from '../../assets/docker.svg';
import jfrog from '../../assets/jfrog.svg';
import sonarqube from '../../assets/sonarqube.svg';
import kubernates from '../../assets/kubernetes.svg';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={javascript} skill="JavaScript" />
        <SkillList src={nodejs} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={tailwind} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={redux} skill="Redux" />
        <SkillList src={github} skill="Github" />
        <SkillList src={git} skill="Git" />
        <SkillList src={java} skill="Java" />
        <SkillList src={bootstrap} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={jenkins} skill="Jenkins" />
        <SkillList src={docker} skill="Docker" />
        <SkillList src={jfrog} skill="Jfrog" />
        <SkillList src={sonarqube} skill="Sonarqube" />
        <SkillList src={kubernates} skill="Kubernates" />
      </div>

    </section>
  );
}

export default Skills;
