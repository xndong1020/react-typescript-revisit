import instance from '../utils/axios'

// interface ActionObj {
//   type: string;
//   payload?: any;
// }



export const fetchRepositoryAsync =  (searchTerm: string) => {
   return async (dispatch: any) => {
    try {
      const res = await instance.get(`search?text=${searchTerm}`)
      dispatch({ type: "FETCH_PACKAGE_SUCCESS", payload: { res }} )
     } catch (err) {
      dispatch({  type: "FETCH_PACKAGE_FAILED", payload: { error: err }} )
     }
   }
}