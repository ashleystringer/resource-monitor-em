import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ChartRoute extends Route {

  @service store;

    async model () {
         console.log("Model in Chart Route");
         const data = this.store.findAll('file');

         console.log(data);
         //return this.store.findAll('file');

         return Ember.RSVP.hash({
          calls: this.store.findAll('call'),
          files: this.store.findAll('file')
        });
        
      }
}
