export type CC_CEDICTEntry = {
  traditional: string;
  simplified: string;
  pinyin: string;
  definitions: string[];
};

export interface GzipExtractionSpec {
  tmpFs?: string;
  dstFs?: string;
  deleteTmpGzip?: boolean;
}

export interface FetchCedictSpec extends GzipExtractionSpec {
  unzip?: boolean;
  url?: string;
}

export interface LoadCedictSpec extends FetchCedictSpec {
  deleteTxtFile: boolean;
}
