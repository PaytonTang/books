import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      books: this.get('store').findAll('book'),
    };
  }

});
