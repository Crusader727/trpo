import './main-page.css';

import React from 'react';
import Preview from '../../Components/preview/preview.js';
import { Link } from 'react-router-dom';
import {UserModule} from '../../TableModule/user';

const doctor = {
    name: 'Доктор виноградова',
    specialty: 'Трахер',
    phone: '92131231231',
    img: 'https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5ba367359202e100a9d71fd6_5ba3698b42ef5c00af0db044/scale_1200',
}


class MainPage extends React.Component {
    state = {
        doctors: {},
        ids: []
    }
    componentDidMount() {
        UserModule.getAllVeterenarians().then(({vets, ids}) => this.setState({doctors: vets, ids}))
    }

    render() {
        const {doctors, ids} = this.state;
        return (
            <div className='main'>
                <div className='katalog'>
                    {ids.map((key, i) => (
                        <Preview id={key} key={i} doctor={doctors[key]} userId={this.props.userId}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default MainPage;
