import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    onLocationChangeHandler(value){
      console.log('Location changed ', value);
    },
    placeChanged(value) {
      // console.log(value);
      this.set('model.googleData', value);
    },
    done() {
      // this.set('model.address', value.formatted_address);
      // alert(this.get('model.address'));
    }
  }
});
