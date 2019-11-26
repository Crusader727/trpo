import { User } from '../ActiveRecords/user'

export class UserModuleClass {
    getUser(id) {
        return User.get(id);
    }
    createUser(id, props) {
        return new User(id, props);
    }
    getAllVeterenarians() {
        return User.getAll().then(val => ({vets: val, ids: Object.keys(val)}));
    }
}

export const UserModule = new UserModuleClass();
