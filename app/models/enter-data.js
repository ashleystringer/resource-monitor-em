import Model, { attr } from '@ember-data/model';

export default class EnterDataModel extends Model {
    @attr name;
    @attr type;
    @attr start;
    @attr end;
}
