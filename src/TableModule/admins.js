import { Admins } from '../ActiveRecords/admins'

export class AdminsModuleClass {
    isAdmin(id) {
        return Admins.get(id).then((u) => u && u.isAdmin);
    }
}

export const AdminsModule = new AdminsModuleClass();
