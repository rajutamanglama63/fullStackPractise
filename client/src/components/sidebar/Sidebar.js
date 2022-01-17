import './sidebar.css'
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons'
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">
                        <RssFeed className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Feed</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Chat className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Chats</span>
                    </li>
                    <li className="sidebar_list_item">
                        <PlayCircleFilledOutlined className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Videos</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Group className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Groups</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Bookmark className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Bookmarks</span>
                    </li>
                    <li className="sidebar_list_item">
                        <HelpOutline className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Questions</span>
                    </li>
                    <li className="sidebar_list_item">
                        <WorkOutline className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Jobs</span>
                    </li>
                    <li className="sidebar_list_item">
                        <Event className="sidebar_icon" />
                        <span className="sidebar_list_item_name">Event</span>
                    </li>
                    <li className="sidebar_list_item">
                        <School className="sidebar_icon" />
                        <span className="sidebar_list_item_name">School</span>
                    </li>
                </ul>
                <button className="sidebar_btn">show more</button>
                <hr className="sidebar_hr" />
                <ul className="sidebar_friend_list">
                    {Users.map((user) => (
                        <CloseFriend key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
