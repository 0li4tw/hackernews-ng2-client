/* tslint:disable */

export const STORIES: any = {
  20137264: {
    'by': 'ciconia',
    'descendants': 28,
    'id': 20137264,
    'kids': [20138268, 20137596, 20137611, 20137584, 20138306, 20137755, 20137369],
    'score': 159,
    'time': 1560057376,
    'title': 'The Open Source Seed Initiative',
    'type': 'story',
    'url': 'https://osseeds.org/'
  },
  20138110: {
    'by': 'notlukesky',
    'descendants': 12,
    'id': 20138110,
    'kids': [20138405, 20138490, 20138318, 20138298, 20138403, 20138265],
    'score': 15,
    'time': 1560071659,
    'title': 'Xiaomi explains more about how its under-screen camera actually works',
    'type': 'story',
    'url': 'https://www.theverge.com/circuitbreaker/2019/6/5/18654365/xiaomi-camera-under-screen-no-notch-transparent-display-technology'
  },
  20137550: {
    'by': 'pizza',
    'descendants': 12,
    'id': 20137550,
    'kids': [20138277, 20138321],
    'score': 43,
    'time': 1560061962,
    'title': 'Total cholesterol and all-cause mortality – a study among 13M adults',
    'type': 'story',
    'url': 'https://www.nature.com/articles/s41598-018-38461-y'
  }
};

export function findStoryById(id: number) {
  return STORIES[id];
}
