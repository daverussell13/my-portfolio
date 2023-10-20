import Image from "@/components/elements/image";

import { differenceInMonths, differenceInYears, format } from "date-fns";
import { BsBuildings as CompanyIcon } from "react-icons/bs";

import { CareerData } from "@/types/career";
import { Card, CardBody } from "@nextui-org/card";

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}: CareerData) => {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = differenceInMonths(endDate, startDate) % 12;

  let durationText = "";
  if (durationYears) {
    durationText += `${durationYears} Year${durationYears > 1 ? "s" : ""}`;
  }
  if (durationMonths) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;
  }

  return (
    <Card
      isBlurred
      className="border-none bg-primary/10 dark:bg-primary/10"
      shadow="sm"
    >
      <CardBody className="py-4 px-6">
        <div className="flex items-center gap-5">
          {logo ? (
            <Image
              src={logo}
              width={55}
              height={55}
              alt={company}
              rounded="rounded"
            />
          ) : (
            <CompanyIcon size={50} />
          )}
          <div className="space-y-1">
            <h6>{position}</h6>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
              <div className="flex items-center gap-1 md:gap-2">
                <a href={link || "#"} target="_blank">
                  <span className="underline cursor-pointer hover:text-dark hover:dark:text-white">
                    {company}
                  </span>
                </a>
                <span>•</span>
                <span>{location}</span>
              </div>
              <div className="flex flex-col md:text-[13px]">
                <div className="flex gap-1">
                  <span>{format(startDate, "MMM yyyy")}</span> -{" "}
                  <span>
                    {end_date ? format(endDate, "MMM yyyy") : "Present"}
                  </span>
                </div>
                <span className="text-neutral-500 dark:text-neutral-500">
                  ~ {durationText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CareerCard;
