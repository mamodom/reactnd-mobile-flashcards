import { State } from '../reducers';

export type Hash<T> = {
  [key: string]: T;
};

export type MapStateToPropsType<StateProp = any> = {
  (state: State): StateProp;
};
