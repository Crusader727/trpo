import './preview.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { RecordModule } from '../../TableModule/record';
import Button from '../../Components/button/button';


class Preview extends React.Component {
    state = {
        makeRecord: false,
        date: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { id, doctor: { img, speciality, name, phone, price }, isKabinet, userId, date, recordId, handleDelete } = this.props;

        return (
            <div>
                <div className='preview'>
                    <div>
                        <img width={250} height={250} src={img}></img>
                    </div>
                    <div className='preview-description'>
                        <div>
                            <span>Имя: </span>
                            {name}
                        </div>
                        {date && (
                            <div className={'preview-date'}>
                                <span>Дата записи: </span>
                                {date}
                            </div>
                        )}
                        <div>
                            <span>Специальность: </span>
                            {speciality}
                        </div>
                        <div>
                            <span>Номер телефона: </span>
                            {phone}
                        </div>
                        <div>
                            <span>Цена услуги: </span>
                            {price}
                        </div>

                    </div>
                    {isKabinet && recordId && (
                        < div className="delete-button">
                            <Button
                                onClick={() => {
                                    RecordModule.delete(recordId);
                                    handleDelete();
                                }}
                                type="blue"
                                text="Удалить запись к врачу"
                            />
                        </div>
                    )}
                    {userId && !isKabinet && (<div>
                        <Button type='blue' text=' Записаться на прием' onClick={() => this.setState({ makeRecord: !this.state.makeRecord })} />

                        {this.state.makeRecord && (<div>
                            <input value={this.state.date}
                                onChange={this.handleChange}
                                type='date'
                                name='date'
                                className='date'
                                placeholder='Введите время приема'
                            />
                        </div>)}
                        {this.state.date !== '' && (
                            <button onClick={() => {
                                RecordModule.createRecord({ date: this.state.date, userId, vetId: id })
                                // setTimeout(() => {document.location.reload(true);}, 500)

                            }}>
                                Подтвердить
                            </button>
                        )
                        }
                    </div>)}
                </div>
            </div>

        );
    }
}

export default Preview;
