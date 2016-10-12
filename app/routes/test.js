import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    let controller = this.controllerFor('index');

    controller.set('currentlyLoading', false);
  },

  model() {
    return {
      books: this.get('store').findAll('book'),
    };
  },

  afterModel() {

  },

  actions: {
    loading() {
      console.log('ddd');
    }
  }
});
