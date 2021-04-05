import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileChartComponent extends Component {
    @tracked chart_data = null;
    @tracked array_data = null;
    constructor(...args){
        super(...args);

        this.chart_data = this.args.data;
        this.array_data = this.format_data();
        
        console.log(this.array_data);
    }
    format_data(){
        console.log("format_data method");
        let data = ['Row', 'Name', {role: 'style'}, 'Start', 'End'];
        let arr = [];
    
        let data_array;
        this.chart_data.map(data =>{
            let data_color = this.find_color(data.resource);
            data_array = ["Function", data.name, data_color, data.start, data.end];
            arr.push(data_array);
        });
        arr.splice(0, 0, data);
        return arr;
    }
    find_color(resource_type){
        let color = null;
        switch(resource_type){
            case "CPU":
                color = "#004777"
                break;
            case "MEMORY":
                color = "#39A9DB"
                break;
            case "NETWORK":
                color = "#FFCB11"
                break;
            case "DISK":
                color = "#9EBA03"
                break;
            case "I/O":
                color = "#D30000";
                break;
        }
        return color;
    }
}
