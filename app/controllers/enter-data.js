import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { inject as service } from '@ember/service';

export default class EnterDataController extends Controller {
        //file = 'file'
        @service store;
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
            let i = -1;
            this.file.text().then(text => {
                console.log(text.length);
                console.log(text[16]);
            });
            //console.log("this.file.text(): " + this.file.text());
            //console.log("size " + this.file.stream());
            //console.log("this.model " + this.model);

            //**  How do I go about creating records for each document? **
            //this.store.createRecord('', {});
            /*this.model.save().then(()=>{
                console.log('Successful');
            }, ()=>{
                console.log('Not successful');
            });*/
        }
}
