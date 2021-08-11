import { matchLine, parseLine } from '../src/parse';

describe('line parser', () => {
  describe('::matchLine', () => {
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

    it('replaces u: with umlaut u', () => {
      expect(
        parseLine('三氯氰胺 三氯氰胺 [san1 lu:4 qing2 an4] /melamine C3H6N6/')
          ?.pinyin
      ).toBe('san1 lü4 qing2 an4');
    });
  });
});
