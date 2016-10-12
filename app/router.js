import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');

  this.route('book', function() {
    this.route('detail', {path: '/:book_id'});
    this.route('create');
  });

  this.route('test');

  this.route('login');

  this.route('register');

  this.route('profile');

  this.route('search');
});

export default Router;
