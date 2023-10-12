import { HiOutlineBriefcase as BriefcaseIcon } from "react-icons/hi";

import SectionHeading from "@/components/elements/section-heading";
import SectionSubHeading from "@/components/elements/section-subheading";

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
            My professional career journey.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4"></div>
    </section>
  );
};

export default Career;
