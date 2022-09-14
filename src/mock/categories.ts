import { customIcons } from '../lib/icons';
import { Category } from '../models/category';

export const mockCategories: Category[] = [
  {
    id: 'cat1',
    name: 'Balanceado',
    icon: customIcons.balance
  },
  {
    id: 'cat2',
    name: 'Queso',
    icon: customIcons.cheese
  },
  {
    id: 'cat3',
    name: 'Lacteo',
    icon: customIcons.cow
  },
  {
    id: 'cat4',
    name: 'No GMO',
    icon: customIcons.gtNo
  },
  {
    id: 'cat5',
    name: 'Vegetariano',
    icon: customIcons.leaf
  },
  {
    id: 'cat6',
    name: 'Vegano',
    icon: customIcons.vegan
  },
  {
    id: 'cat7',
    name: 'Ligre de Glutten',
    icon: customIcons.wheatNo
  }
];
