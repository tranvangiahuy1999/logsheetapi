import Realm from 'realm';

import {ITEM_SCHEMA} from '../constant/index';

export const ItemSchema = {
  name: ITEM_SCHEMA,
  primaryKey: 'key',
  properties: {
    key: {type: 'int', default: 0}, //primary key
    type: 'string',
    content: 'string',
  },
};

export const databaseOptions = {
  path: 'itemList.realm',
  schema: [ItemSchema],
};

export const insertNewItem = newItem =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        const results = realm.objects(ITEM_SCHEMA).sorted('key');
        const key =
          results.length > 0 ? results[results.length - 1].key + 1 : 1;
        realm.write(() => realm.create(ITEM_SCHEMA, {...newItem, key}));
        resolve(newItem);
      })
      .catch(error => reject(error));
  });

export const updateItem = Item =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingItem = realm.objectForPrimaryKey(ITEM_SCHEMA, Item.id);
          updatingItem.name = Item.name;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteItem = ItemID =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingItem = realm.objectForPrimaryKey(ITEM_SCHEMA, ItemID);
          realm.delete(deletingItem);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const deleteAllItem = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.deleteAll(ITEM_SCHEMA);
          resolve();
        });
        // let allItemLists = realm.objects(ITEMLIST_SCHEMA);
      })
      .catch(e => reject(e));
  });

export const queryAllItem = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allItems = realm.objects(ITEM_SCHEMA);
          resolve(allItems);
        });
      })
      .catch(e => reject(e));
  });

export default new Realm(databaseOptions);
