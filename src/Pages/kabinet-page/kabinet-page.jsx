import './kabinet-page.css';

import React from 'react';
import Preview from '../../Components/preview/preview.js';
import { Link } from 'react-router-dom';

import {RecordModule} from '../../TableModule/record';
import { Record } from '../../ActiveRecords/record';

class KabinetPage extends React.Component {
    state={
        records: {},
        keys: [],
        vets: [],
        users: {},
    }
    componentDidMount() {
        const {userId} = this.props;
        RecordModule.getUserRecords(userId).then(({records, keys}) => this.setState({records, keys}))
        RecordModule.getVetsByRecords(userId).then(({vets, users}) => this.setState({vets, users}))
    }


    handleDelete = () => {
        const {userId} = this.props;
        RecordModule.getUserRecords(userId).then(({records, keys}) => this.setState({records, keys}))
        RecordModule.getVetsByRecords(userId).then(({vets, users}) => this.setState({vets, users}))
    }


    render() {
        const {vets} = this.state;
        const {userId} = this.props;
        return (
            <div className='kabinet'>
                <div>
                    Вы находитесь в личном кабинете
                </div>
                <div>
                    Ниже вы можете увидеть список ваших записей
                </div>
                <div className='zapisi'>
                    {
                        vets.map(([key, date, recordId]) => (
                             <Preview  isKabinet doctor={key} date={date} recordId={recordId} handleDelete={this.handleDelete}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default KabinetPage;