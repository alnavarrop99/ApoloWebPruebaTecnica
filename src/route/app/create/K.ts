import { TReq } from "./action";

export const K: Record< Uppercase<keyof Pick<TReq, 'gender' | 'status'>>, Array<string> > = {
  'GENDER': ['unknown', 'Male', 'Female', 'Genderless'] satisfies Array<TReq['gender']>,
  'STATUS': ['unknown', 'Dead', 'Alive'] satisfies Array<TReq['status']>,
}
