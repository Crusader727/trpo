import { database } from '../config/Fire.js';

export class User {
    constructor(id, props) {
        if (id && props) {
            database.ref('crusader/user/' + id).set(props);
        }
    }
    static get(id) {
        return database.ref('crusader/user/' + id).once('value').then(data => data.val());
    }
    static getAll() {
        return database.ref('crusader/user').once('value').then(data => data.val());
    }
    static set(id, props) {
        database.ref('crusader/user/' + id).set(props);
    }
}
