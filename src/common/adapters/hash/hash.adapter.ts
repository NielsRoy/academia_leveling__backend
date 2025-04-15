export interface HashAdapter {

  hash(data: string): string;
  
  compare(data: string, encrypted: string): boolean;

}