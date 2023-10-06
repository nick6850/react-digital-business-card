import photo from '../../../src/photo.png'

export default function info() {
    return (
        <div className="info-container">
            <img id='photo' src={photo} alt="My Photo"/>
            <div id="name">Nick Matiushin</div>
            <div id="job">Frontend Developer</div>
            <div className="buttons">
            <a href='mailto:anick6850@gmail.com' id='email-btn'> Email</a><a href='https://github.com/nick6850' id='git-btn'>Github</a>
            </div>
        </div>
    )
}