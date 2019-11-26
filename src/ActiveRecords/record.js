import { database } from '../config/Fire.js';

export class Record {
    constructor(props) {
        database.ref('crusader/record').push().set(props);
    }
    static get(id) {
        return database.ref('crusader/record/' + id).once('value').then(data => data.val());
    }
    static getAll() {
        return database.ref('crusader/record').once('value').then(data => data.val());
    }
    static set(id, props) {
        database.ref('crusader/record/' + id).set(props);
    }
    static delete(id) {
        database.ref('crusader/record/' + id ).remove();
    }
}
