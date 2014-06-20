/**
 * Created by Michal on 6/20/2014.
 */
window.Todos = Ember.Application.create();


//adapters are responsible for communicating
// with a source of data for your application
//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
