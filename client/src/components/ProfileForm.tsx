import React, { FC, useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const ProfileForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context);

  return (
    <div className="container">
        <div className="row justify-content-md-center">          
        <div className="modal-content">
    <div className="modal-header">
        <h4 className="modal-title">Редактирование профайла</h4>
        <button type="button" className="close">×</button>
    </div>
    <div className="modal-body text-left">
        <form>
            <div className="form-group">
                <label>Тип клиента</label>
                <select className="form-control form-control-sm" name="profileType">
                    <option value="LEGAL_ENTITY">Юридическое лицо</option>
                    <option value="INDIVIDUAL">Физическое лицо</option>
                </select>
            </div>
            <div className="form-group">
                <label>Тип клиента: </label>
                <input className='form-check-input' type="radio" id="profileType1" name="profileType" value="INDIVIDUAL" style={{margin: '0.375em .625em'}} />
                    <label className='form-check-label' htmlFor="profileType1">Физическое лицо</label>
                <input className='form-check-input' type="radio" id="profileType2" name="profileType" value="LEGAL_ENTITY" style={{margin: '0.375em .625em'}} />
                    <label className='form-check-label' htmlFor="profileType2">Юридическое лицо</label>
            </div>
            <div className="form-group">
                <label>Фамилия</label>
                <input className="form-control form-control-sm" name="lastName" value=""/>
                    <div className="form-text text-muted">Можно использовать латиницу и кириллицу. Пробелы запрещены. Кол-во символов 2 – 20.</div>
            </div>
            <div className="form-group">
                <label>Имя</label>
                <input className="form-control form-control-sm" name="firstName" value=""/>
                    <div className="form-text text-muted">Можно использовать латиницу и кириллицу. Пробелы запрещены. Кол-во символов 1 – 20.</div>
            </div>
            <div className="form-group">
                <label>Пол</label>
                <select className="form-control" name="gender">
                    <option value="MALE">Мужской</option>
                    <option value="FEMALE">Женский</option>
                </select>
            </div>
            <div className="form-group">
                <label>Логин</label>
                <input className="form-control form-control-sm" disabled name="login" value=""/>
                    <div className="form-text text-muted">Логин является уникальным идентификатором в Системе и его нельзя будет изменить в будущем. Можно использовать латиницу, цифры, точки, знак «@». Пробелы запрещены. Кол-во символов: 7 – 20.</div>
            </div>
            <div className="form-group">
                <label>Язык</label>
                <select className="form-control form-control-sm" name="defaultLanguage">
                    <option value="ru_RU">Русский</option>
                    <option value="en_US">English</option>
                    <option value="uk_UA">Український</option>
                    <option value="cs_CZ">Česky</option>
                </select>
            </div>
            <hr/>
            <div className="form-group">
                <label>Email&nbsp;<small className="text-muted">(Опционально)</small></label>
                <input className="form-control form-control-sm" name="email" value=""/>
            </div>
            <div className="form-group">
                <label>Skype&nbsp;<small className="text-muted">(Опционально)</small></label>
                <input className="form-control form-control-sm" name="skype" value=""/>
            </div>
            <div className="form-group">
                <label>Телефон&nbsp;<small className="text-muted">(Опционально)</small></label>
                <input className="form-control form-control-sm" name="phone" value=""/>                
            </div>
            <div className="form-group"><label>Дополнительная информация&nbsp;<small className="text-muted">(Опционально)</small></label>
                <textarea className="form-control form-control-sm" name="additionalInfo"></textarea>
            </div>
        </form>
    </div>
    <div className="modal-footer">
        <button className="btn btn-primary  btn-sm">Сохранить профиль</button>
    </div>
</div>
          
        </div>
    </div>
    
  )
}



export default observer(ProfileForm);
