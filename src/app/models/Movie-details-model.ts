export interface MovieDetailModel {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Poster: string;
  Plot: string;
  Actors: string;
  Ratings: Rating[];
  Director: string;
  Writer: string;
  Genre: string;
  Runtime: string;
  Language: string;
  Awards: string;
}

interface Rating {
  Source: string;
  Value: string;
}
