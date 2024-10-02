"use client"

import { X } from "@phosphor-icons/react"
import YouTube from "react-youtube"
import { useState } from "react"

const videoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideoPlayer}
            className="text-color-primary float-right bg-color-secondary mb-1 hover:bg-color-accent transition-all"><X size={28} color="#f72626" weight="bold" /></button>
            <YouTube 
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            onError={() => alert ("Video is broken, please try another. ")}
            />
        </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
   

}

export default videoPlayer