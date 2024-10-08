import { IconAntdesign, IconBxBrain, IconBxlNodejs, IconBxlReact, IconBxlStripe, IconLanguageTypescript, IconMongodb, IconMui, IconNestjs, IconNextjs, IconOpenAI, IconPostgres, IconSocketdotio } from "@/components/icons";
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
  'PostgreSQL': <IconPostgres />,
  'GPT API': <IconOpenAI />,
  'Vector Database': <IconBxBrain />,
}

export const TechChip: React.FC<Props> = ({ tool }) => {
  return (
    <Chip
      variant="flat"
      color="success"
      startContent={toolMap[tool]}
      className="pl-2"
    >
      {tool}
    </Chip>
  )
}
