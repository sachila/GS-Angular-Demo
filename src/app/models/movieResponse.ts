import { MovieModel } from './movie-model';

export interface MovieResponse {
  Search: MovieModel[];
  totalResults: string;
  Response: string;
  Error?: string;
}
