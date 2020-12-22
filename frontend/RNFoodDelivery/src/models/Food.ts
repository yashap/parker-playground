import Restaurant from './Restaurant';

export default interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
  restaurant: Restaurant;
}
