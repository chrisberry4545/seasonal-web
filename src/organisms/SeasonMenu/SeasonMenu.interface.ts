import { HydratedSeason } from '@chrisb-dev/seasonal-shared';

export interface SeasonMenuInputProps {
  allBasicSeasonData: HydratedSeason[] | undefined;
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
