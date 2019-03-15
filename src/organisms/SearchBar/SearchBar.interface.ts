export interface SearchBarDispatchProps {
  onSearchChanged: (newSearchTerm: string) => void;
}

export interface SearchBarProps extends SearchBarDispatchProps {}
