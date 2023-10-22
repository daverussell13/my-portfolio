import { LuDownload as DownloadIcon } from "react-icons/lu";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import cn from "@/libs/cn";

interface DownloadCvButtonProps {
  className?: string;
}

const DownloadCvButton = ({ className }: DownloadCvButtonProps) => {
  return (
    <Button
      target="_blank"
      href="https://drive.google.com/drive/folders/1zKIOJ_bF7Y-2MKfSpOy2uzuLfnEEWGpP?usp=share_link"
      as={Link}
      color="primary"
      className={cn("font-semibold", className)}
      startContent={<DownloadIcon />}
    >
      Download CV
    </Button>
  );
};

export default DownloadCvButton;
