import { IconAntdesign, IconBxlNodejs, IconBxlReact, IconBxlStripe, IconLanguageTypescript, IconMongodb, IconMui, IconNestjs, IconNextjs, IconSocketdotio } from "@/components/icons";
import { TechTool } from "@/types"
import { Chip } from "@nextui-org/react";
import React from "react";

interface Props {
  tool: TechTool;
}

const toolMap: Record<TechTool, React.ReactNode> = {
  'Typescript': <IconLanguageTypescript />,
  'React': <IconBxlReact />,
  'NextJS': <IconNextjs />,
  'NestJS': <IconNestjs />,
  'NodeJS': <IconBxlNodejs />,
  'MongoDB': <IconMongodb />,
  'MUI': <IconMui />,
  'Antd': <IconAntdesign />,
  'Sockets': <IconSocketdotio />,
  'Stripe': <IconBxlStripe />,
}

export const TechChip: React.FC<Props> = ({ tool }) => {
  return (
    <Chip
      // variant="faded"
      variant="shadow"
      // color="secondary"
      color="success"
      startContent={toolMap[tool]}
      className="pl-2"
    >
      {tool}
    </Chip>
  )
}
