import { Season } from '../../interfaces';

export interface SeasonMenuInputProps {
  allBasicSeasonData: Season[] | undefined;
  currentSeasonIndex: number;
  isLoading: boolean;
  isMenuOpen: boolean;
}

export interface SeasonMenuDispatchProps {
  onClose: () => void;
  onSeasonSelected: (seasonIndex: number) => void;
}

export interface SeasonMenuProps
  extends SeasonMenuDispatchProps, SeasonMenuInputProps {}
