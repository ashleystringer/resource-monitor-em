import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class ChartRoute extends Route {

  @service store;

    async model () {
        //const data = this.store.findAll('files');
        //console.log(data);
        /*return [
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ];*/
        /*return [  
          ['Year', 'A', 'B', 'C'],
          ['2010', 1000, 2000, 1400],
          ['2011', 2000, 1240, 3179],
          ['2012', 1590, 2004, 1850]
        ];*/
        
        return [
          ['Row', 'Name', {role: 'style'}, 'Start', 'End'],
          ['Function', "__tunable_get_val", '#004777', 1614133668846230, 1614133668846879],
          ['Function', "__tunable_get_val", '#004777', 1614133668847445, 1614133668847455],
          ['Function', "__tunable_get_val", '#004777', 1614133668847902, 1614133668847913],
          ['Function', "__tunable_get_val", '#004777', 1614133668848125, 1614133668848136],
          ['Function', "__tunable_get_val", '#004777', 1614133668849344, 1614133668849450],
          ['Function', "__tunable_get_val", '#004777', 1614133668849728, 1614133668849738],
          ['Function', "calloc", '#39A9DB', 1614133668856108, 1614133668856108],
          ['Function', "malloc", '#39A9DB', 1614133668856720, 1614133668857154],
          ['Function', "calloc", '#39A9DB', 1614133668875288, 1614133668875288],
          ['Function', "malloc", '#39A9DB', 1614133668875299, 1614133668875516],
          ['Function', "malloc", '#39A9DB', 1614133668882003, 1614133668882014],
          ['Function', "__tunable_get_val", '#004777', 1614133668898227, 1614133668898237],
          ['Function', "malloc", '#39A9DB', 1614133668903113, 1614133668903123],
          ['Function', "malloc", '#39A9DB', 1614133668909163, 1614133668909174],
          ['Function', "malloc", '#39A9DB', 1614133668909521, 1614133668909532]
        ]
        
      }
}
