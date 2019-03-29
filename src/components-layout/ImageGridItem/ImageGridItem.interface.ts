export interface IImageGridItem {
  id: string;
  name: string;
  imageUrlSmall: string;
  onClick?: (itemId: string) => void;
}
