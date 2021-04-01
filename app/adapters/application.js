import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = 'http://localhost:8080';
    namespace = 'api';
}
