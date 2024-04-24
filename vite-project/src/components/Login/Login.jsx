import './Login.css'
import { useEffect, useState} from 'react'
import axios from 'axios'

function Login({login}) {

    const [ name, setName ] = useState('')
    
    const inputHandler = (evt) => {
        setName(evt.target.value)
    }

    const submitHandler = async (evt) => {
        evt.preventDefault()
        localStorage.setItem('name', name)
        axios.post('http://192.168.0.101:3000/user', {
            name: name
        })

        login()
    }
 
    return (
        <div className="body">
            <h1>Study Time</h1>
            <div className='container'>
                <h2>What your name?</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={inputHandler} name='name'/>
                </form>
            </div>
        </div>
    )
}

export default Login