import { assets } from '../../assets/assets'
import './Main.css'

function Main(){
    return(
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Dev.</span></p>
                    <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to visit on an upcoming Road Trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div><div className="card">
                        <p>Briefly summarise this concept: Urban Planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon
                        } alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the read ability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter your prompt'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cupiditate, repellendus reprehenderit corrupti nobis ut!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

