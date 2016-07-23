import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return new Ember.Object({
      googleData: {
        'formatted_address': ''
      },
      address: this.get('googleData.formatted_address')
    });
  },

  setupController(controller, model){
    controller.set('model', model);
  }
});
