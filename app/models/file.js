import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
    @attr name;
    @attr type;
    @attr start;
    @attr end;
}
