import { CC_CEDICTEntry } from "types";

export const CC_CEDICT_ENTRY_REGEX: RegExp =
  /^(?!(# ?))(\S+)\s+(\S+)\s+\[([^\]]*)\]\s+\/(.*)\/\s*$/us;

export const matchLine = (line: string): RegExpMatchArray | null => 
  CC_CEDICT_ENTRY_REGEX.exec(line.trim());

export const parseLine = (line: string): CC_CEDICTEntry | null => {
  const match = matchLine(line);
  if (!match) return null;

  return {
    traditional: match[2] as string,
    simplified: match[3] as string,
    pinyin: match[4]!.replace(/u:/, 'ü'),
    definitions: match[5]!.split('/')
  };
};
