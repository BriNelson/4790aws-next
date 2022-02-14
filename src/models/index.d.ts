import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MoviesDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MoviesDB {
  readonly id: string;
  readonly title?: string;
  readonly director?: string;
  readonly runtime?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MoviesDB, MoviesDBMetaData>);
  static copyOf(source: MoviesDB, mutator: (draft: MutableModel<MoviesDB, MoviesDBMetaData>) => MutableModel<MoviesDB, MoviesDBMetaData> | void): MoviesDB;
}