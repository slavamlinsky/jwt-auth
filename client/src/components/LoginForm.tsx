import React, { FC, useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context);

  return (
    <div className="container">
        <div className="row justify-content-md-center">          
          <div className="col-md text-center">
            <input className='form-control'
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
                required
            /><br/>
            <input className='form-control'
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
                required
            /><br/>
            <button onClick={() => store.login(email, password)} className="btn btn-primary">
                Войти
            </button><br/><br/>
            <button onClick={() => store.registration(email, password)} className="btn btn-success">
                Регистрация
            </button><br/><br/>
            <a href='/forgot'>Забыли пароль?</a>
            </div>
        </div>
    </div>
    
  )
}

export default observer(LoginForm);
