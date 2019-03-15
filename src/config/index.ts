const BACKEND_URL = process.env.BACKEND_URL
    || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod';

export const SEASON_DATA_URL =
  process.env.SEASON_DATA_URL || `${BACKEND_URL}/season-data`;
