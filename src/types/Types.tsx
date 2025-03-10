export interface initialStateType {
  isLoading: boolean;
  error: boolean;
  data: dataType[];
  search:dataType[]
  genre: string[];
  personalData:dataType;
}
export interface initialData {
  page: number;
  results: dataType[];
}
export interface dataType {
  genre: string[];
  imageurl: string[];
  imdbid: string;
  imdbrating: number;
  released: number;
  synopsis: string;
  title: string;
  type: string;
}
export interface actionsType{

    payload: dataType;
    type: string;

}
