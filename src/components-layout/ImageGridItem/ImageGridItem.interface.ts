export interface IImageGridItem {
  id: string;
  name: string;
  imageUrlSmall: string;
  skipAnimation?: boolean;
  onClick?: (itemId: string) => void;
}
