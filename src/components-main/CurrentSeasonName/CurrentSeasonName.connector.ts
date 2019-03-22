import { connect } from 'react-redux';
import {
  CurrentSeasonName
} from './CurrentSeasonName';
import {
  selectCurrentSeasonName,
  selectIsCurrentSeasonLoading
} from '../../store';
import {
  ICurrentSeasonName
} from './CurrentSeasonName.interface';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ICurrentSeasonName => ({
  currentSeasonName: selectCurrentSeasonName(state),
  isLoading: selectIsCurrentSeasonLoading(state)
});

export const CurrentSeasonNameConnecter = connect(
  mapStateToProps
)(CurrentSeasonName);
