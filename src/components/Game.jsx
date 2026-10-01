import './Game.css'
import React, { useState } from 'react'

function Game() {
  const [emoji, setEmoji] = useState('🚓')
  let emojis = ['😀', '🚀', '🎉', '🐱', '🍕', '🌍', '🎸', '🚗', '💡', '🔥', '🌟', '🍀', '🍉', '🍦', '🥑', '🍩', '🍺', '🎨', '🎮', '👾', '🧸', '💎', '🔮', '❤️', '👑', '🎩', '👟', '🕶', '📱', '💻', '⌚️', '📷', '📚', '✏️', '📬', '📦', '🔑', '🛠', '⚔️', '🛡', '🏹', '⚓️', '🎈', '🎁', '🎊', '🧧', '🧸', '🎐', '🎏', '🪄', '🧿', '🩹', '🩺', '🩸', '🧬', '🦠', '🔬', '🔭', '📡', '🧪', '🪐', '🌈', '☀️', '🌤', '⛅️', '🌥', '☁️', '🌦', '🌧', '⛈', '🌩', '🌨', '❄️', '☃️', '⛄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '🫧', '☂️', '☔️', '⚡️', '☄️', '💥', '🔥', '🌟', '✨', '⚡️', '☄️', '💥', '🔥', '🌟', '✨', '⚡️', '☄️', '💥']
  function sortear() {
    let i = Math.floor(Math.random() * 10)
    setEmoji(emojis[i])
  }
  return (
    <div className="game">

      <button className='btn-emoji' onClick={sortear}>
        <p  className="p-emoji">{emoji}</p>
      </button>
    </div>
  )
}

export default Game