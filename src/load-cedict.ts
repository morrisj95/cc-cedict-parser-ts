// import fs from 'fs';

// interface CEDictEntry {
//   traditional: string;
//   simplified: string;
//   pinyin: string;
//   definition: string;
// }

// const trim = (line: string) => line.trim();

// const process = (staticLoc: string) => {
//   const data = fs.readFileSync('../../public/cedict_1_0_ts_utf-8_mdbg.txt', {
//     encoding: 'utf-8',
//   });
//   console.log('file loaded. Parsing...');
//   const dictLines: string[] = data
//     .toString()
//     .split('\n')
//     .map(trim)
//     .filter((line) => Boolean(line));
// };

// export {};
