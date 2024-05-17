import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const TemplateCard = ({ title, imgSrc }: { title: string; imgSrc: string }) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={imgSrc}
          width={450}
          height={450}
          priority
          alt="template-image"
          className=" border overflow-hidden rounded-md size-fit object-cover transition-all hover:scale-105"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
