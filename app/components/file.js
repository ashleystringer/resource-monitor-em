import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileComponent extends Component {
    @tracked file = null;
    @tracked calls = null;
    @tracked filtered_data = null;

    constructor(...args){
        super(...args);

        this.file = this.args.file;
        this.calls = this.args.calls;
        this.filter_data();
    }
    map_data(){
        let arr = [];

        this.calls.map(data =>{
            arr.push(data);
        });
        return arr;
    }
    filter_data(){
        let arr = this.map_data();
        let data = [];
        console.log(arr);
        for(var index in arr){
            if(arr[index].file == this.file.id){
                data.push(arr[index]);
            }
        }
        console.log(data.length);
        this.filtered_data = data;
        console.log(this.filtered_data);

    }
}
