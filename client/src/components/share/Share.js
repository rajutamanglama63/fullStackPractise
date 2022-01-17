import './share.css'
import {PermMedia, Label,Room, EmojiEmotions} from '@material-ui/icons'

const Share = () => {
    return (
        <div>
            <div className="share">
                <div className="share_wrapper">
                    <div className="share_top">
                        <img src="/assets/person/1.jpg" alt="shareImg" className="share_profile_image" />
                        <input className="input_field" placeholder="what's in your mind?" type="text" />
                    </div>
                    <hr className="share_hr" />
                    <div className="share_bottom">
                        <div className="share_options">
                            <div className="share_option">
                                <PermMedia className="share_icon" htmlColor="tomato" />
                                <span className="share_option_text">photos and videos</span>
                            </div>
                            <div className="share_option">
                                <Label className="share_icon" htmlColor="blue" />
                                <span className="share_option_text">tag</span>
                            </div>
                            <div className="share_option">
                                <Room className="share_icon" htmlColor="green" />
                                <span className="share_option_text">location</span>
                            </div>
                            <div className="share_option">
                                <EmojiEmotions className="share_icon" htmlColor="goldenrod" />
                                <span className="share_option_text">feelings</span>
                            </div>
                        </div>
                        <button className="share_option_btn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share
