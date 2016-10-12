import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  publisher: DS.attr('string'),
  author: DS.attr('string'),
  status: DS.attr('number'),
  owner_id: DS.attr('number'),
  created_at: DS.attr('string')
});
