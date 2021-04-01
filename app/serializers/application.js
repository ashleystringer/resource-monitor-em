import JSONAPISerializer from '@ember-data/serializer/json-api';
import DS from 'ember-data';
import RESTSerializer from '@ember-data/serializer/rest';
import MongoDB from 'ember-blueprint-data/mixins/serializers/mongodb';

/*export default class ApplicationSerializer extends JSONAPISerializer {
    primaryKey = '_id';
}*/
export default DS.RESTSerializer.extend (MongoDB, {
    primaryKey: '_id'
});
