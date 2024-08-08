import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    return(
    <div style={{height: '100vh'}}>
        <PrettyChatWindow 
        projectId="fb303024-d7ed-41b5-a1fb-ce29674c6e74"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
);
}

export default ChatsPage