import { useState, useEffect } from 'react';
import Login from './Login/Login';
import axios from 'axios'
import TimePage from './TimePage/TimePage';

export default function StudyTime () {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({})

    // 새로고침 했을떄 로컬스토리지에 name 없으면 false 있으면 login
    useEffect(() => {
        const storedName = localStorage.getItem('name');
        setIsLogin(storedName !== null);

        if(storedName !== null) {
            axios.get('http://192.168.0.101:3000/user', {
                name: storedName
            })
            .then(res => setUser(res.data))
        }

    }, []);

    const login = () => {
        setIsLogin(true);
    }


    

    return (
        <div>
            {isLogin ? <TimePage /> : <Login login={login}/>}
        </div>
    )
}
