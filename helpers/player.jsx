import {useReducer, useRef, useState} from "react";
import styles from 'Styles/Player.module.scss'
import {BsPauseCircleFill, BsPlayCircleFill} from "react-icons/bs";
import {FiSkipBack, FiSkipForward} from "react-icons/fi";
import {AiOutlineSound} from "react-icons/ai";

const SET_PLAY = "SET_PLAY";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
// const SET_DURATION = "SET_DURATION";

const InitialState = {
    play: false,
    currentTime: 100,
    // duration: 0,
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PLAY:
            return {...state, play: action.payload}
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        // case SET_DURATION:
        //     return {...state, duration: action.payload} // this state duration disabled for next update
        default:
            return state
    }
}

const Player = ({src}) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const [duration, setDuration] = useState(0)
    const playerRef = useRef(null)

    const togglePlay = () => {
        (state.play) ? playerRef.current.pause() : playerRef.current.play()
        dispatch({type: SET_PLAY, payload: !state.play})
    }

    const handleCurrentTime = () => dispatch({type: SET_CURRENT_TIME, payload: playerRef.current.currentTime})

    // const handleDuration = () => dispatch({type: SET_DURATION, payload: playerRef.current.duration})
    const handleDuration = () => setDuration(playerRef.current.duration)

    const changedRange = (e) => {
        playerRef.current.currentTime = e.target.value
        dispatch({type: SET_CURRENT_TIME, payload: e.target.value})
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0')
        const seconds = Math.floor(time % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    return (
        <>
            {/* controls */}
            <div className="flex justify-between items-center">
                {/* toggle play and next and back */}
                <div className="flex items-center">
                    {/* back music */}
                    <button className="px-4">
                        <FiSkipBack className="color-gunmetal" size={24}/>
                    </button>
                    {/* toggle music */}
                    <button className="px-4" onClick={togglePlay}>
                        {state.play ? <BsPauseCircleFill className="color-gunmetal" size={27}/> :
                            <BsPlayCircleFill className="color-gunmetal" size={27}/>}
                    </button>
                    {/* next music */}
                    <button className="px-4">
                        <FiSkipForward className="color-gunmetal" size={24}/>
                    </button>
                </div>
                {/*  control sound  */}
                <div className="flex justify-center items-center">
                    <button><AiOutlineSound className="color-gunmetal"/></button>
                    <input type="range"/>
                </div>
            </div>
            {/* time buffer */}
            <div className="flex justify-center items-center w-full">
                {/* current time */}
                <p className="text-xs color-gunmetal pr-4">{formatTime(state.currentTime)}</p>
                {/* change time */}
                <input type="range" min={0} max={duration} value={state.currentTime} onChange={changedRange}
                       className={`${styles.time_buffer} px-10`}/>
                {/* all time */}
                <p className="text-xs color-gunmetal">{formatTime(duration)}</p>
            </div>
            {/* audio player */}
            <audio ref={playerRef} src={src} onTimeUpdate={handleCurrentTime} onLoadedData={handleDuration}/>
        </>
    )
}

export default Player