import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'fb303024-d7ed-41b5-a1fb-ce29674c6e74', props.user.username, props.user.secret
    );
    return(
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
);
}

export default ChatsPage