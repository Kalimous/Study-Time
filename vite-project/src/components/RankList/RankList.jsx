import './RankList.css'
import formating from '../../../../asset'

function RankList({name, time}) {

    const {hour, minute, second} = time

    return (
        <div className="list">
            <div className="listContainer">
                <figure>
                    <img className="userIcon" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000" alt="" />
                </figure>
                <div className="active">
                    <h2>Active</h2>
                </div>
            </div>
            <div className="userInfo">
                <h2 className='userName'>{name}</h2>
                <h2 className='time'>
                    {formating(hour)} : {formating(minute)} : {formating(second)}
                </h2>
            </div>
            
        </div>
    )
}

export default RankList