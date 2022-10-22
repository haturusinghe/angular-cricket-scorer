export interface Out {
  isOut: boolean;
  type?: string;
}
export interface Ball {
  runs: number;
  is4: boolean;
  is6: boolean;
  extras: string[];
  Out: Out;
}
