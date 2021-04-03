import Model, { attr } from '@ember-data/model';

export default class CallModel extends Model {
    @attr name;
    @attr resource;
    @attr start;
    @attr end;
    @attr file;
}
