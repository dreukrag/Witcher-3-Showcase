import axios from "axios";

export const videosStatuses = {
  FETCHING: "FETCHING",
  DONE: "DONE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
};

const initialState = {
  nextPageToken: "",
  items: [],
  videosStatus: videosStatuses.INACTIVE,
};

const getUrl = (pgt = "") => {
  const API_KEY = "AIzaSyA--tq9ulVwEYcThHEW_uAZUIY1nyGpgc0";
  const playlist = "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF";
  const nextPageToken =
    pgt === undefined || pgt === null || pgt === false || pgt === ""
      ? ""
      : `&pageToken=${pgt}`;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlist}&key=${API_KEY}${nextPageToken}`;
  return url;
};
//Action creator
export const fetchVideos = (npt) => {
  return async (dispatch) => {
    const url = getUrl(npt);
    dispatch({ type: videosStatuses.FETCHING });
    try {
      const response = await axios.get(url);
      dispatch({
        type: videosStatuses.DONE,
        payload: {
          items: response.data.items,
          nextPageToken: response.data.nextPageToken,
        },
      });
    } catch (err) {
      dispatch({
        type: videosStatuses.FAILED,
        error: "There was an error while connecting to the server",
      });
    }
  };
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case videosStatuses.FETCHING:
      return {
        ...state, //In case we add more variables later
        videosStatus: videosStatuses.FETCHING,
      };
    case videosStatuses.DONE:
      let items;
      if (state.items.length > 0) {
        items = [...state.items, ...action.payload.items];
      } else {
        items = action.payload.items;
      }
      return {
        ...state, //In case we add more variables later
        videosStatus: videosStatuses.DONE,
        nextPageToken: action.payload.nextPageToken,
        items,
      };
    default:
      return state;
  }
}

export default AuthReducer;
