/**
 * Created by Michal on 6/20/2014.
 */
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});