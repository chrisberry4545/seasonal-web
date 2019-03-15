import {
    SEASON_DATA_URL
} from '././../config';
import { BaseSeason, HydratedSeason } from '@chrisb-dev/seasonal-shared';

const getAllSeasonData = (): Promise<BaseSeason[]> => {
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
