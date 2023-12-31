import { CAREER_LIST } from "@/constants/career";
import { HiOutlineBriefcase as BriefcaseIcon } from "react-icons/hi";

import SectionHeading from "@/components/elements/section-heading";
import SectionSubHeading from "@/components/elements/section-subheading";
import CareerCard from "@/components/home/career-card";

const Career = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Career"
          icon={<BriefcaseIcon className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My working and organizational experience
          </p>
        </SectionSubHeading>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {CAREER_LIST.map((data, index) => {
          return <CareerCard key={index} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Career;
