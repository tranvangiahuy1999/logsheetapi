import Realm from 'realm';

import {NEWS_SCHEMA} from '../constant/index';

export const NewsSchema = {
  name: NEWS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'int', default: 0}, //primary key
    like: {type: 'int', default: 0},
    author: {type: 'string', indexed: true},
    image: 'string',
    type: 'string',
    title: {type: 'string', indexed: true},
    description: 'string',
    source: 'string',
    time: 'date',
  },
};

export const databaseOptions = {
  path: 'newsList.realm',
  schema: [NewsSchema],
};

export const addNews = newNews =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        const results = realm.objects(NEWS_SCHEMA).sorted('id');
        const id = results.length > 0 ? results[results.length - 1].id + 1 : 1;
        realm.write(() => {
          realm.create(NEWS_SCHEMA, {...newNews, id});
          resolve(newNews);
        });
      })
      .catch(e => reject(e));
  });

export const relatedNews = news =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let relatedNews = realm
            .objects(NEWS_SCHEMA)
            .filtered(`type=${news.type}`);
          resolve(relatedNews);
        });
      })
      .catch(e => reject(e));
  });

// export const slideshowNews = () =>
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//       realm.write(() => {realm});
//     });
//   });
