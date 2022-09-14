import { Store } from '../models/store';
import { landScapeImages, storeImages } from './images';

export const mockStores: Store[] = [
  {
    id: 'mockStore1',
    banner: landScapeImages[0],
    logo: storeImages[0],
    name: 'mockStore1',
    description: 'mock description for store 1',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'mockStore2',
    banner: landScapeImages[1],
    logo: storeImages[1],
    name: 'mockStore2',
    description: 'mock description for store 2',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'mockStore3',
    banner: landScapeImages[2],
    logo: storeImages[2],
    name: 'mockStore3',
    description: 'mock description for store 3',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];
