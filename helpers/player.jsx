import {useEffect, useReducer, useRef, useState} from "react";
import styles from 'Styles/Player.module.scss'
import {FiSkipBack, FiSkipForward} from "react-icons/fi";
import {CiPause1, CiPlay1, CiShare1, CiVolume, CiVolumeHigh, CiVolumeMute} from "react-icons/ci";
import {RiPlayListLine} from "react-icons/ri";

const SET_PLAY = "SET_PLAY";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
const SET_DURATION = "SET_DURATION";
const SET_STATUS_VOLUME = "SET_STATUS_VOLUME";

const InitialState = {
    play: false, currentTime: 0, duration: 0, statusVolume: true
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PLAY:
            return {...state, play: action.payload}
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case SET_DURATION:
            return {...state, duration: action.payload}
        case SET_STATUS_VOLUME:
            return {...state, statusVolume: action.payload}
        default:
            return state
    }
}

const Player = ({src}) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const playerRef = useRef(null)
    const volumeRef = useRef(null)

    const togglePlay = () => {
        (state.play) ? playerRef.current.pause() : playerRef.current.play()
        dispatch({type: SET_PLAY, payload: !state.play})
    }

    const pauseAudio = () => {
        playerRef.current.pause()
        dispatch({type: SET_PLAY, payload: false})
    }

    const handleCurrentTime = () => dispatch({type: SET_CURRENT_TIME, payload: playerRef.current.currentTime})

    const handleDuration = () => dispatch({type: SET_DURATION, payload: playerRef.current.duration})

    const changedRange = (e) => {
        playerRef.current.currentTime = e.target.value
        dispatch({type: SET_CURRENT_TIME, payload: e.target.value})
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0')
        const seconds = Math.floor(time % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    const updateVolume = () => {
        const currentVolume = volumeRef.current.value
        playerRef.current.volume = currentVolume

        if (currentVolume === '0') {
            pauseAudio()
            // change status volume to true/false
            dispatch({type: SET_STATUS_VOLUME, payload: !state.statusVolume})
        }
    }

    useEffect(() => {
        handleDuration()
    }, [])

    return (
        <>
            {/* controls */}
            <div className="flex justify-between items-center mb-5">
                {/* play list, share song */}
                <div className="flex">
                    {/* playlist */}
                    <button className="">
                        <RiPlayListLine size={24} className="color-gunmetal"/>
                    </button>
                    {/* share song */}
                    <button className="">
                        <CiShare1 size={24} className="color-gunmetal"/>
                    </button>
                </div>
                {/* toggle play and next and back */}
                <div className="flex items-center">
                    {/* back music */}
                    <button className="back_music">
                        <FiSkipBack className="color-gunmetal" size={24}/>
                    </button>

                    {/* toggle music */}
                    <button className="toggle_music" onClick={togglePlay}>
                        {state.play ? <CiPause1 className="color-gunmetal" size={27}/> :
                            <CiPlay1 className="color-gunmetal" size={27}/>}
                    </button>

                    {/* next music */}
                    <button className="next_music">
                        <FiSkipForward className="color-gunmetal" size={24}/>
                    </button>
                </div>
                {/*  control sound  */}
                <div className="flex gap-5 items-center">
                    <button className="sound_button">
                        {state.statusVolume ?
                            <CiVolumeMute size={19} className="color-gunmetal"/> :
                            <CiVolume size={19} className="color-gunmetal"/>}
                    </button>
                    <input ref={volumeRef} type="range" className={styles.buffer_range_bar} min={0} max={1}
                           step='0.02'
                           onChange={updateVolume}/>
                    <button className="sound_button"><CiVolumeHigh size={19} className="color-gunmetal"/></button>
                </div>
            </div>
            {/* time buffer */}
            <div className="flex justify-center items-center w-full">
                {/* current time */}
                <p className="text-xs color-gunmetal pr-4">{formatTime(state.currentTime)}</p>
                {/* change time */}
                <input type="range" min={0} max={state.duration} value={state.currentTime} onChange={changedRange}
                       className={styles.buffer_range_bar}/>
                {/* all time */}
                <p className="text-xs color-gunmetal">{formatTime(state.duration)}</p>
            </div>
            {/* audio player */}
            <audio ref={playerRef} src={src} onTimeUpdate={handleCurrentTime} onLoadedData={handleDuration}/>
        </>
    )
}

export default Player