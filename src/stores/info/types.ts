export interface IWord {
  word: string;
  phonetic: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
  license: ILicense;
  sourceUrls: string[];
}

export interface ILicense {
  name: string;
  url: string;
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface IDefinition {
  definition: string;
  synonyms: any[];
  example: string;
  antonyms: string[];
}

export interface IPhonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: ILicense;
}

export interface IErrorData {
  message: string;
  resolution: string;
  title: string;
}
