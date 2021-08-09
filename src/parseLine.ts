import { CC_CEDICTEntry } from 'types';

const REGEX: RegExp =
  /^(?!#)(%|\u25cb|3C|(QR?)+|T+|(P(A|U|O|K)?)+|(\S+)?\p{sc=Han})+\s+(%|\u25cb|3C|(QR?)+|T+|(P(A|U|O|K)?)+|(\S+)?\p{sc=Han})+\s+\[([^\]]*)\]\s+\/(.*)\/\s*$/gu;

const CC_CEDICT_ENTRY_REGEX = REGEX;

export const matchLine = (
  line: string,
  isTrimmed: boolean = false
): string[] | null => {
  const match = line.match(CC_CEDICT_ENTRY_REGEX);
  if (!!match) {
    return match;
  }
  if (isTrimmed) {
    return null;
  }
  return matchLine(line.trim(), true);
};

export const parseLine = (line: string): CC_CEDICTEntry | null => {
  line = line.trim();
  if (line.startsWith('#') || !Boolean(line)) {
    return null;
  }
  if (!matchLine(line)) {
    return null;
  }
  return {} as CC_CEDICTEntry; // TODO: This logic.
};
