import { CC_CEDICTEntry } from '../src/types';
import { cedictIntroSet } from './testData';
import { matchLine, parseLine } from '../src/parseLine';

describe('line parser', () => {
  describe('::matchLine', () => {
    describe('on the intro set sample:', () => {
      cedictIntroSet.forEach((entry) => {
        it(`accepts: ${entry}`, () => {
          expect(!!matchLine(entry)).toBe(true);
        });
      });
    });

    describe('when it should reject', () => {
      const commentTest = '# 你 你 [ni3] /you/';

      it(`rejects commented line: ${commentTest}`, () => {
        expect(matchLine(commentTest)).toBeNull();
      });
    });
  });

  describe('::parseLine', () => {
    it('returns null on trimmed comments', () => {
      expect(parseLine('# 你 你 [ni3] /you/')).toBeNull();
    });

    it('returns null on left-whitespace comments', () => {
      expect(parseLine(' # 你 你 [ni3] /you/')).toBeNull();
    });

    it('returns null on right-whitespace comments', () => {
      expect(parseLine('# 你 你 [ni3] /you/ ')).toBeNull();
    });

    it('returns null on dual-whitespace comments', () => {
      expect(parseLine(' # 你 你 [ni3] /you/ ')).toBeNull();
    });

    it('returns null on empty', () => {
      expect(parseLine('')).toBeNull();
    });

    it('returns null on whitespace', () => {
      expect(parseLine(' ')).toBeNull();
    });

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
