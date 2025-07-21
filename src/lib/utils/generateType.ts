import { type FileFormat, TypeLanguage } from "../../enums/file.enum";
import { contentToJson } from "./jsonAdapter";

export const generateType = async (input: string, format: FileFormat, output: TypeLanguage) => {
  // Type generation functionality is not available due to missing dependencies
  console.warn("Type generation is not available - missing dependencies");
  return "Type generation is not available";
};
