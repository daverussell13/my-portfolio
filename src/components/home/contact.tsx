import { SOCIAL_MEDIA } from "@/constants/menu";

import { BiSolidContact } from "react-icons/bi";

import SectionHeading from "@/components/elements/section-heading";
import SectionSubHeading from "@/components/elements/section-subheading";
import ContactButton, {
  ContactButtonType,
} from "@/components/home/contact-button";

const Contact = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Contact"
          icon={<BiSolidContact size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            Feel free to get in touch with me from the social media provided
            below
          </p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        {SOCIAL_MEDIA.map((item, index: number) => (
          <ContactButton
            link={item.href}
            key={index}
            icon={item.icon}
            type={item.title as ContactButtonType}
          >
            {item?.title}
          </ContactButton>
        ))}
      </div>
    </div>
  );
};

export default Contact;
