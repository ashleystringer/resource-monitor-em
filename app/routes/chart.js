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
        })
         /*return [
          ['Row', 'Name', {role: 'style'}, 'Start', 'End'],
          ['Function', '__tunable_get_val', '#004777', 1616103695844.892090, 1616103695845.537109],
          ['Function', '__tunable_get_val', '#004777', 1616103695846.103027, 1616103695846.114014]
         ];*/
        
      }
}
