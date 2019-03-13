import {
    SEASON_DATA_URL
} from '././../config';
import { Season, HydratedSeason } from '../interfaces';

const getAllSeasonData = (): Promise<Season[]> => {
  return fetch(SEASON_DATA_URL).then((resp) => resp.json());
};

const getSeasonDataBySeasonIndex = (
  seasonIndex: number
): Promise<HydratedSeason> => {
  return fetch(
      `${SEASON_DATA_URL}/${seasonIndex}`
  ).then((resp) => resp.json());
};

const getCurrentSeasonIndex = (): number => new Date().getUTCMonth();

export {
    getAllSeasonData,
    getCurrentSeasonIndex,
    getSeasonDataBySeasonIndex
};
