import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MoviesDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MoviesDB {
  readonly id: string;
  readonly poster?: string | null;
  readonly title?: string | null;
  readonly us_rating?: string | null;
  readonly trailer?: string | null;
  readonly trailer_thumbnail?: string | null;
  readonly backdrop?: string | null;
  readonly plot_overview?: string | null;
  readonly year?: number | null;
  readonly runtime_minutes?: number | null;
  readonly sources?: (string | null)[] | null;
  readonly generes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MoviesDB, MoviesDBMetaData>);
  static copyOf(source: MoviesDB, mutator: (draft: MutableModel<MoviesDB, MoviesDBMetaData>) => MutableModel<MoviesDB, MoviesDBMetaData> | void): MoviesDB;
}