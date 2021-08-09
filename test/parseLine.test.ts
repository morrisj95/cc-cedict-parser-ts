import { cedictIntroSet } from './testData';
import { matchLine, parseLine } from '../src/parseLine';

describe('line parser', () => {
  describe('::matchLine', () => {
    describe('on the intro set sample:', () => {
      cedictIntroSet.forEach((entry) => {
        it(`accepts ${entry}`, () => {
          expect(!!matchLine(entry)).toBe(true);
        });
      });
    });

    describe('desired rejections', () => {
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
          const testResult = parseLine(entry);
          expect(!!testResult).toBe(true);
          expect(testResult).toEqual({}); // TODO: It returns empty right now
        });
      });
    });
  });
});
