import { Season } from '../../interfaces';

export interface SeasonMenuInputProps {
  allBasicSeasonData: Season[] | undefined;
  isLoading: boolean;
  isMenuOpen: boolean;
}

export interface SeasonMenuDispatchProps {
  onClose: () => void;
}

export interface SeasonMenuProps
  extends SeasonMenuDispatchProps, SeasonMenuInputProps {}
