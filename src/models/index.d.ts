import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MoviesDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MoviesDB {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MoviesDB, MoviesDBMetaData>);
  static copyOf(source: MoviesDB, mutator: (draft: MutableModel<MoviesDB, MoviesDBMetaData>) => MutableModel<MoviesDB, MoviesDBMetaData> | void): MoviesDB;
}