import { frontendSkills, backendSkills, toolsSkills } from "../data/skills-data";
import type { Skill } from "../data/skills-data";

interface SkillGridProps {
  skills: Skill[];
}

function SkillGrid({ skills }: SkillGridProps) {
  return (
    <ul className="flex flex-wrap gap-4" aria-label="Skills list">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="cursor-default select-none flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm"
          tabIndex={0}
          aria-label={skill.name}
        >
          <img
            src={skill.iconUrl}
            alt={`${skill.name} logo`}
            width={20}
            height={20}
            loading="lazy"
            className="h-5 w-5"
          />
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
      <h4 className="font-semibold text-gray-800 mb-3">Frontend</h4>
      <SkillGrid skills={frontendSkills} />
      <h4 className="font-semibold text-gray-800 mb-3">Backend</h4>
      <SkillGrid skills={backendSkills} />
      <h4 className="font-semibold text-gray-800 mb-3">Tools</h4>
      <SkillGrid skills={toolsSkills} />
      
    </>
  );
}