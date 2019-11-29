import { database } from '../config/Fire.js';

export class Admins {
    constructor(props) {
        database.ref('crusader/admins').push().set(props);
    }
    static get(id) {
        return database.ref('crusader/admins/' + id).once('value').then(data => data.val());
    }
}
