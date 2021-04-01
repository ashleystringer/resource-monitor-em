import Model, { attr } from '@ember-data/model';
import DS from 'ember-blueprint-data';

export default class ChartModel extends Model {
    @attr name;
    @attr type;
    @attr resource_type;
    @attr start;
    @attr end;
}
