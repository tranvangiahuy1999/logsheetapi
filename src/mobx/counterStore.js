import {observable, action, computed} from 'mobx';

class CounterStore {
  @observable count = 0;

  @action increase() {
    this.count++;
  }

  @action decrease() {
    this.count--;
  }
}

const counterStore = new CounterStore();
export default counterStore;
