import { CC_CEDICTEntry } from 'types';
import { CC_CEDICT_ENTRY_REGEX } from './constants'

export const matchLine = (line: string): RegExpMatchArray | null => 
  CC_CEDICT_ENTRY_REGEX.exec(line.trim());

export const parseLine = (line: string): CC_CEDICTEntry | null => {
  const match = matchLine(line);
  if (!match) return null;

  return {
    traditional: match[2]!,
    simplified: match[3]!,
    pinyin: match[4]!.replace(/u:/, 'ü'),
    definitions: match[5]!.split('/')
  };
};
