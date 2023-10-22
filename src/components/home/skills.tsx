import { BiCodeAlt as SkillsIcon } from "react-icons/bi";

import SectionHeading from "@/components/elements/section-heading";
import SectionSubHeading from "@/components/elements/section-subheading";
import Tag from "@/components/elements/tag";

import { SKILL_LIST } from "@/constants/skill";
import { STACK_ICON } from "@/constants/stack";

const Skills = () => {
  const iconSize = 24;
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Skills"
          icon={<SkillsIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            List of technologies that I&apos;ve used in my several projects
          </p>
        </SectionSubHeading>
      </div>
      <div className="flex w-full gap-2 flex-wrap">
        {SKILL_LIST.map((skill, index) => {
          const icon = STACK_ICON[skill];
          return (
            <Tag key={index}>
              {icon}
              <span>{skill}</span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
