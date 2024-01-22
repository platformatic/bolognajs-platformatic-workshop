export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export interface GetExampleRequest {
}

export interface GetExampleResponseOK {
}

type GetExampleResponses = 
  GetExampleResponseOK

export interface GetMoviesServiceExampleRequest {
}

export interface GetMoviesServiceExampleResponseOK {
}

type GetMoviesServiceExampleResponses = 
  GetMoviesServiceExampleResponseOK

export interface GetMoviesServiceUpperMoviesRequest {
}

export interface GetMoviesServiceUpperMoviesResponseOK {
}

type GetMoviesServiceUpperMoviesResponses = 
  GetMoviesServiceUpperMoviesResponseOK

export interface MoviesDbGetMoviesRequest {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
}

export interface MoviesDbGetMoviesResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbGetMoviesResponses = 
  Array<MoviesDbGetMoviesResponseOK>

export interface MoviesDbCreateMovieRequest {
  'id'?: number;
  'title': string;
}

export interface MoviesDbCreateMovieResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbCreateMovieResponses = 
  MoviesDbCreateMovieResponseOK

export interface MoviesDbUpdateMoviesRequest {
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
}

export interface MoviesDbUpdateMoviesResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbUpdateMoviesResponses = 
  Array<MoviesDbUpdateMoviesResponseOK>

export interface MoviesDbGetMovieByIdRequest {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export interface MoviesDbGetMovieByIdResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbGetMovieByIdResponses = 
  MoviesDbGetMovieByIdResponseOK

export interface MoviesDbUpdateMovieRequest {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
  'title': string;
}

export interface MoviesDbUpdateMovieResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbUpdateMovieResponses = 
  MoviesDbUpdateMovieResponseOK

export interface MoviesDbDeleteMoviesRequest {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export interface MoviesDbDeleteMoviesResponseOK {
  'id': number | null;
  'title': string | null;
}

type MoviesDbDeleteMoviesResponses = 
  MoviesDbDeleteMoviesResponseOK

export interface GetMoviesDbExampleRequest {
}

export interface GetMoviesDbExampleResponseOK {
}

type GetMoviesDbExampleResponses = 
  GetMoviesDbExampleResponseOK



export interface Api {
  setBaseUrl(newUrl: string) : void;
  getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  getMoviesServiceExample(req?: GetMoviesServiceExampleRequest): Promise<GetMoviesServiceExampleResponses>;
  getMoviesServiceUpperMovies(req?: GetMoviesServiceUpperMoviesRequest): Promise<GetMoviesServiceUpperMoviesResponses>;
  moviesDbGetMovies(req?: MoviesDbGetMoviesRequest): Promise<MoviesDbGetMoviesResponses>;
  moviesDbCreateMovie(req?: MoviesDbCreateMovieRequest): Promise<MoviesDbCreateMovieResponses>;
  moviesDbUpdateMovies(req?: MoviesDbUpdateMoviesRequest): Promise<MoviesDbUpdateMoviesResponses>;
  moviesDbGetMovieById(req?: MoviesDbGetMovieByIdRequest): Promise<MoviesDbGetMovieByIdResponses>;
  moviesDbUpdateMovie(req?: MoviesDbUpdateMovieRequest): Promise<MoviesDbUpdateMovieResponses>;
  moviesDbDeleteMovies(req?: MoviesDbDeleteMoviesRequest): Promise<MoviesDbDeleteMoviesResponses>;
  getMoviesDbExample(req?: GetMoviesDbExampleRequest): Promise<GetMoviesDbExampleResponses>;
}
type PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>
export default function build(url: string): PlatformaticFrontendClient
