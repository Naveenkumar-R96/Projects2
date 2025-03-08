import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../contents/UserContext'
const Chat = () => {
  let {input,setInput,prevInput,setPrevInput}=useContext(dataContext)
  return (
    <div className='chat-page'>
      <div className="user">
        <img src="" alt="" />
        <span>{prevInput}</span>
      </div>
      <div className="ai">
        <img src="" alt="" />
        <span>ai</span>
      </div>
    </div>
  )
}

export default Chat
