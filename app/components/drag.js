import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DragComponent extends Component {
    //file = 'file'
    @tracked isFile = false;
    file = null;
    @action dropItem(event){
        console.log("dropItem");
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        let file = '';
        //console.log("event.dataTransfer.items: " + event.dataTransfer.items);
        
        if(event.dataTransfer.items){
            for(let i = 0; i < event.dataTransfer.items.length; i++){
                if(event.dataTransfer.items[i].kind === 'file'){
                    file = event.dataTransfer.items[i].getAsFile();
                    console.log("1. file " + file.name);
                    console.log("file[0].type ? " + file.type);
                }
            }
            this.file = file;
            this.isFile = true;
        }else{
            for(let i = 0; i < event.dataTransfer.files.length; i++){
                console.log("2. file " + event.dataTransfer.files[i].name);
            }
        }
        console.log("file.name: " + file.name);
        //event.target.appendChild(document.getElementById(data));
    }
    @action dragOver(event){
        console.log("dragOver");
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    @action dragStart(event){
        console.log("Start !");
        let data = event.dataTransfer.setData("text", event.target.id);
    }
    @action test(){
        console.log('test');
        console.log("file.name " + this.file.name);
    }
}
