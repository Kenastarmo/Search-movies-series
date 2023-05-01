export default function reducer(state, action) {
  switch (action.type) {
    case "GET_MOVIES_SUCCESS":
      return { ...state, data: action.payload.Search };
    case "GET_MOVIES_FAIL":
      return { ...state, error: "FAIL" };
    case "CLEAR_MOVIES":
      return { ...state, data: [] };
    case "GET_ONE_MOVIE_SERIE":
      return { ...state, one_movie_serie: action.payload };
    case "CLEAR_ONE_MOVIE_SERIE":
      return { ...state, one_movie_serie: null };
    default:
      return state;
  }
}
