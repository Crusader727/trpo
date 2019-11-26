import { Record } from '../ActiveRecords/record'
import { User } from '../ActiveRecords/user'


export class RecordModuleClass {
    getRecord(id) {
        return Record.get(id);
    }
    createRecord(props) {
        return new Record(props);
    }
    getUserRecords(userId) {
        return Record.getAll()
            .then(recs => this.filterObject(recs, (val) => val.userId === userId))
            .then(recs => ({ records: recs, keys: Object.keys(recs) }))
    }
    getVetsByRecords(userId) {
        return this.getUserRecords(userId).then(({ records, keys }) => {
            return User.getAll().then(us => {
                return ({ vets: Object.values(records).map(key => [us[key.vetId], key.date, this.getKeyByValue(records, key)]) });
            })
        })
    }
    delete(id) {
        Record.delete(id);
    }
    filterObject(obj, predicate) {
        var result = {}, key;
        // ---------------^---- as noted by @CMS, 
        //      always declare variables with the "var" keyword

        for (key in obj) {
            if (obj.hasOwnProperty(key) && predicate(obj[key])) {
                result[key] = obj[key];
            }
        }

        return result;
    };
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

export const RecordModule = new RecordModuleClass();
