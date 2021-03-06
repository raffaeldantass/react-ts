/**
  * Action Types
  */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data Types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
