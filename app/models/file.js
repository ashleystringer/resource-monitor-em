import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
    @attr filename;
    @attr realname;
    @attr timestamp;
}
