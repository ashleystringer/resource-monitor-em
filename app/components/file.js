import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileComponent extends Component {
    @tracked file = null;
    @tracked calls = null;

    constructor(...args){
        super(...args);
        console.log(this.args.data);
        //this.filter_data();
    }
    filter_data(){
        let data = null;
        
    }
}
