import { Action } from 'redux';

export const GO_TO_WEB_VERSION = 'GO_TO_WEB_VERSION';
export function goToWebVersion(): Action {
  return {
    type: GO_TO_WEB_VERSION
  };
}
