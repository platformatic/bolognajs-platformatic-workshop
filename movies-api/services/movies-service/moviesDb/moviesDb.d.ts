import { type FastifyReply, type FastifyPluginAsync } from 'fastify'

declare namespace moviesDb {
  export interface MoviesDb {
    getMovies(req?: GetMoviesRequest): Promise<GetMoviesResponses>;
    createMovie(req?: CreateMovieRequest): Promise<CreateMovieResponses>;
    updateMovies(req?: UpdateMoviesRequest): Promise<UpdateMoviesResponses>;
    getMovieById(req?: GetMovieByIdRequest): Promise<GetMovieByIdResponses>;
    updateMovie(req?: UpdateMovieRequest): Promise<UpdateMovieResponses>;
    deleteMovies(req?: DeleteMoviesRequest): Promise<DeleteMoviesResponses>;
    getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  }
  export interface MoviesDbOptions {
    url: string
  }
  export const moviesDb: MoviesDbPlugin;
  export { moviesDb as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export interface GetMoviesRequest {
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

  export interface GetMoviesResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type GetMoviesResponses = 
    Array<GetMoviesResponseOK>

  export interface CreateMovieRequest {
    'id'?: number;
    'title': string;
  }

  export interface CreateMovieResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type CreateMovieResponses = 
    CreateMovieResponseOK

  export interface UpdateMoviesRequest {
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

  export interface UpdateMoviesResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type UpdateMoviesResponses = 
    Array<UpdateMoviesResponseOK>

  export interface GetMovieByIdRequest {
    'fields'?: Array<'id' | 'title'>;
    'id': number;
  }

  export interface GetMovieByIdResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type GetMovieByIdResponses = 
    GetMovieByIdResponseOK

  export interface UpdateMovieRequest {
    'fields'?: Array<'id' | 'title'>;
    'id': number;
    'title': string;
  }

  export interface UpdateMovieResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type UpdateMovieResponses = 
    UpdateMovieResponseOK

  export interface DeleteMoviesRequest {
    'fields'?: Array<'id' | 'title'>;
    'id': number;
  }

  export interface DeleteMoviesResponseOK {
    'id': number | null;
    'title': string | null;
  }

  type DeleteMoviesResponses = 
    DeleteMoviesResponseOK

  export interface GetExampleRequest {
  }

  export interface GetExampleResponseOK {
  }

  type GetExampleResponses = 
    GetExampleResponseOK

}

type MoviesDbPlugin = FastifyPluginAsync<NonNullable<moviesDb.MoviesDbOptions>>

declare module 'fastify' {
  interface ConfigureMoviesDb {
    getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureMoviesDb(opts: ConfigureMoviesDb): unknown
  }

  interface FastifyRequest {
    'moviesDb': moviesDb.MoviesDb;
  }
}

declare function moviesDb(...params: Parameters<MoviesDbPlugin>): ReturnType<MoviesDbPlugin>;
export = moviesDb;
