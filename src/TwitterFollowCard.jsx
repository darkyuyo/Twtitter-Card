import {useState} from "react"
import PropTypes from 'prop-types';

export function TwitterFollowCard({formatUserName,userName, name}) {
    const [isFollowing, setIsFollowing]=useState(false)
    const text=isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName=isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    const handleClick=()=>setIsFollowing(!isFollowing)
    return(
    <article className="tw-followCard">
        <header className="tw-followCard-header">
        <img alt="El avatar"src="https://i.pinimg.com/200x150/7b/5c/20/7b5c20f2e315a884d3d0eec3c73702eb.jpg" className="tw-followCard-avatar"/>
        <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
        </header>
        <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
        </aside>
    </article>
    )
}

TwitterFollowCard.propTypes = {
    formatUserName: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
