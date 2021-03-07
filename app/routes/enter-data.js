import Route from '@ember/routing/route';

export default class EnterDataRoute extends Route {
    async model(){
        console.log("model in enter-data route");
    }
}
