import { Season } from '../../interfaces';

export interface SeasonMenuInputProps {
  allSeasonData: Season[] | undefined;
  isLoading: boolean;
  isMenuOpen: boolean;
}

export interface SeasonMenuDispatchProps {
  onClose: () => void;
}

export interface SeasonMenuProps
  extends SeasonMenuDispatchProps, SeasonMenuInputProps {}
