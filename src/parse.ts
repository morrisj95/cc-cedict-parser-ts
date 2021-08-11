import { CC_CEDICTEntry } from 'types';

const CC_CEDICT_ENTRY_REGEX: RegExp =
  /^(?!#)\S+\s+\S+\s+\[([^\]]*)\]\s+\/.*\/\s*$/gu;

export const matchLine = (
  line: string,
  isTrimmed: boolean = false
): string[] | null => {
  const match = line.match(CC_CEDICT_ENTRY_REGEX);
  if (match) return match;
  if (isTrimmed) return null;
  return matchLine(line.trim(), true);
};

export const parseLine = (line: string): CC_CEDICTEntry | null => {
  line = line.trim();
  if (!matchLine(line, true)) return null;
  const [traditional, simplified, ...rest]: string[] = line.split(' ');
  const [pinyin, english] = (() => {
    let p = rest[0]!.substring(1);
    if (p.endsWith(']')) p = p.slice(0, -1);
    else {
      let i = 1;
      while (!rest[i]!.endsWith(']')) {
        p += ` ${rest[i]}`;
        i++;
      }
      p += ` ${rest[i]!.slice(0, -1)}`;
      p = p.replace(/u:/, 'ü');
    }
    return [p, <string[]>line.split('/').slice(1, -1)];
  })();
  return {
    traditional: <string>traditional,
    simplified: <string>simplified,
    pinyin: <string>pinyin,
    definitions: <string[]>english,
  };
};
