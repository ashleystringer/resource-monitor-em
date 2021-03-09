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
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let file = '';
            
            if(event.dataTransfer.items){
                for(let i = 0; i < event.dataTransfer.items.length; i++){
                    if(event.dataTransfer.items[i].kind === 'file'){
                        file = event.dataTransfer.items[i].getAsFile();
                    }
                }
                this.file = file;
                this.isFile = true;
            }else{
                for(let i = 0; i < event.dataTransfer.files.length; i++){
                    //console.log("2. file " + event.dataTransfer.files[i].name);
                }
            }
            //event.target.appendChild(document.getElementById(data));
        }
        @action dragOver(event){
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        }
        @action dragStart(event){
            let data = event.dataTransfer.setData("text", event.target.id);
        }
        @action test(){
            console.log("file.name " + this.file.name);
            const filetest = this.file.text().then((text)=>text);
            //console.log(filetest.value);
            //console.log(filetest);
            this.file.text().then((text) => {
                //console.log(text);
                //console.log(text.length);
            });
        }
}
