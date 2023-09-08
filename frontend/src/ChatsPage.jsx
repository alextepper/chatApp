import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c4bdb534-8844-4d12-9145-78f99d21685c', props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
        </div>
    )
}

export default ChatsPage