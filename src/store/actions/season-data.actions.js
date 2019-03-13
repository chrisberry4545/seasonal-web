export const SET_SEASON_DATA_START = 'SET_SEASON_DATA_START';
export function setSeasonDataStart() {
  return {
    type: SET_SEASON_DATA_START,
  }
}

export const SET_SEASON_DATA_SUCCESS = 'SET_SEASON_DATA_SUCCESS';
export function setSeasonDataSuccess(seasonData) {
  return {
    seasonData,
    type: SET_SEASON_DATA_SUCCESS,
  }
}
