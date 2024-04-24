import './Rank.css'
import RankList from '../RankList/RankList'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Rank() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.0.101:3000/allUser')
        .then((res) => {
            setUserData(res.data)
        })
        .catch((err) => console.log(err))
    })

    return (
        <div className="rankingContainer">
            <div className="rank">
                <h1 className='title'>👑 Rank 👑</h1>
                {userData.map((user, idx) => ( 
                    <RankList key={idx} name={user.name} time={user.time}/>
                ))}
            </div>
        </div>
    )
}

export default Rank