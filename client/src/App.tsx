import React, {FC, useContext, useEffect} from 'react';
import { Context } from '.';
import LoginForm from './components/LoginForm';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IUser } from './models/IUser';
import UserService from './service/UserService';
import ProfileForm from './components/ProfileForm';



//function App(){
const App: FC = () => {
  const  {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() =>{
    if(localStorage.getItem('token')){
        store.checkAuth()
    }
  }, [])

  async function getUsers(){
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);

    } catch (e) {
        console.log(e);
    }
  }


  //console.log(store.isAuth);

  if(store.isLoading)
  {
    return (<div>Загрузка ...</div>)
  }

  if(!store.isAuth||!store.user.isActivated){
    return(

      <div style={{minHeight: '85vh', display: 'flex', alignItems: 'center', alignSelf: 'center'}}>
        <div  style={{flexDirection: 'column'}}>
        {/* <h1 style={{textAlign: 'center'}}>My First TypeScript App</h1> */}
        <h3>{store.isAuth ? `Добро пожаловать ${store.user.email}` : 'Войдите в свой аккаунт!'}</h3><br/>
        
        <img src='https://www.polygraph-rubicon.com/img/logo.png' style={{width: '280px', marginBottom: '25px'}} />        
        <LoginForm/>
        </div>
       

      </div>    
      
    )
  }
  

  return (
    <div>
      <div style={{textAlign: 'center'}}>
          {/* <h1 style={{textAlign: 'center'}}>My First TypeScript App</h1> */}
          <img src='https://www.polygraph-rubicon.com/img/logo.png' style={{width: '280px', marginBottom: '25px'}} />
          <h3>{store.isAuth ? `Добро пожаловать ${store.user.email}` : 'Авторизуйтесь в системе!'}</h3>

          <h3>{store.user.isActivated ? `Аккаунт ${store.user.email} уже подтверждён` : 'Сначала активируйте ваш аккаунт!'}</h3>
          <button onClick={() => store.logout()} className="btn btn-outline-primary">Выйти</button><br/><br/>
          <div>
              <button onClick={getUsers} className="btn btn-success">Получить пользователей</button>
          </div><br/>
          {users.map(user =>
            <div key={user.email}>{user.email}</div>  
          )}
      </div>
        <ProfileForm/>
        
    </div>
  );
}

export default observer(App);
