import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.books.com',
  namespace: 'api/v1'
});
