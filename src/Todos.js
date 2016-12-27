import { extendObservable } from 'mobx';
import _ from 'lodash';

class Todos {
  constructor() {
    extendObservable(this, {
      items: []
    });
  }

  add(item) {
    this.items.push(item);
  }

  delete(item) {
    this.items = this.items.filter((i) => {
      return i !== item;
    })
  }
}

export default Todos;
