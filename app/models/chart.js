import Model, { attr } from '@ember-data/model';

export default class ChartModel extends Model {
    @attr name;
    @attr type;
    @attr resource_type;
    @attr start;
    @attr end;
}
