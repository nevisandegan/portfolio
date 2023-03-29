import { useState, useEffect } from "react";
import { devSkills } from "../../constants/skills.js";
import {Skill} from "./";
const Skills = () => {
  const { htmlSkill, cssSkill, gitSkill, jsSkill, nodeSkill, reactSkill } =
    devSkills;
  const [js, setJs] = useState(0);
  const [nodeJs, setNodeJs] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [css, setCss] = useState(0);
  const [html, setHtml] = useState(0);
  const [git, setGit] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
      setNodeJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 78);
      });
      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });
      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
    }, 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Skill
        name={htmlSkill.name}
        value={html}
        icon={htmlSkill.icon}
        clr={htmlSkill.color}
      />
      <Skill
        name={cssSkill.name}
        value={css}
        icon={cssSkill.icon}
        clr={cssSkill.color}
      />
      <Skill
        name={jsSkill.name}
        value={js}
        icon={jsSkill.icon}
        clr={jsSkill.color}
      />
      <Skill
        name={reactSkill.name}
        value={reactJs}
        icon={reactSkill.icon}
        clr={reactSkill.color}
      />
      <Skill
        name={nodeSkill.name}
        value={nodeJs}
        icon={nodeSkill.icon}
        clr={nodeSkill.color}
      />
      <Skill
        name={gitSkill.name}
        value={git}
        icon={gitSkill.icon}
        clr={gitSkill.color}
      />
    </>
  );
};

export default Skills;
