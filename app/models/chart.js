import Model from '@ember-data/model';

export default class ChartModel extends Model {
    @attr name;
    @attr type;
    @attr start;
    @attr end;
}
