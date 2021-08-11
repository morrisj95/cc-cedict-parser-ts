import { CC_CEDICTEntry } from '../src/types';
import { cedictIntroSet } from './testData';
import { matchLine, parseLine } from '../src/parse';

describe('line parser', () => {
  describe('::matchLine', () => {
    describe('on the intro set sample:', () => {
      cedictIntroSet.forEach((entry) => {
        it(`accepts: ${entry}`, () => {
          expect(!!matchLine(entry)).toBe(true);
        });
      });
    });
  });

  describe('::parseLine', () => {
    describe('on the intro set sample', () => {
      cedictIntroSet.forEach((entry) => {
        it(`returns an entry for: ${entry}`, () => {
          const testResult: CC_CEDICTEntry = <CC_CEDICTEntry>parseLine(entry);
          expect(!!testResult).toBe(true);
          expect(typeof testResult.traditional).toEqual('string');
          expect(typeof testResult.simplified).toEqual('string');

          expect(typeof testResult.pinyin).toEqual('string');
          expect(testResult.pinyin.match(/\S/)).not.toBeNull();

          expect(Array.isArray(testResult.definitions)).toBe(true);
          expect(typeof testResult.definitions[0]).toEqual('string');
        });
      });
    });
  });
});
