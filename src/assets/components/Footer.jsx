import telegram from '../../../src/telegram_logo.png'
import instagram from '../../../src/instagram_logo.webp'

export default function footer() {
    return(
        <div className="logos">
            <a href="https://t.me/nickmatiushin">
            <img src={telegram} alt="telegram-logo"/></a>
            <a href="https://www.instagram.com/loveburbon/">
            <img src={instagram} alt="instagram-logo"/></a>
        </div>
    )
}