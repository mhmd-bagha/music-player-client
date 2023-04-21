import {useCallback, useEffect, useReducer, useRef} from "react";
import styles from 'Styles/Player.module.scss'
import {FiSkipBack, FiSkipForward} from "react-icons/fi";
import {CiPause1, CiPlay1, CiShare1, CiVolume, CiVolumeHigh, CiVolumeMute} from "react-icons/ci";
import {RiPlayListLine} from "react-icons/ri";
import {useGlobalContext} from "@/context/store";

const SET_PLAY = "SET_PLAY";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
const SET_DURATION = "SET_DURATION";
const SET_STATUS_VOLUME = "SET_STATUS_VOLUME";
const SET_VOLUME = "SET_VOLUME";

const InitialState = {
    play: false, currentTime: 0, duration: 0, statusVolume: true, volume: 0.5
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
        case SET_VOLUME:
            return {...state, volume: action.payload}
        default:
            return state
    }
}

const Player = () => {
    const {songSrc: src, songPlay} = useGlobalContext()
    const [state, dispatch] = useReducer(reducer, InitialState)
    const playerRef = useRef(null)
    const volumeRef = useRef(null)
    const defaultStepVolume = 0.02

    const existSongSrc = () => src === ''

    const togglePlay = () => {
        (state.play) ? playerRef.current.pause() : playerRef.current.play()
        dispatch({type: SET_PLAY, payload: !state.play})
    }

    const playSongFromContext = useCallback(() => {
        if (songPlay) togglePlay()
    }, [songPlay])

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
        const currentVolume = parseFloat(volumeRef.current.value)
        changeVolumeState(currentVolume)
    }

    const changeVolumeState = (volume) => {
        volume = parseFloat(volume)
        playerRef.current.volume = volume
        if (volume === 0) {
            pauseAudio()
            // change status volume to true/false
            dispatch({type: SET_STATUS_VOLUME, payload: false})
        } else {
            dispatch({type: SET_STATUS_VOLUME, payload: true})
        }
        dispatch({type: SET_VOLUME, payload: volume})
    }

    const increaseVolume = () => {
        let volume = parseFloat(volumeRef.current.value)
        volume = ((volume + defaultStepVolume < 1) ? volume + defaultStepVolume : 1).toFixed(2)
        changeVolumeState(volume)
    }

    const decreaseVolume = () => {
        let volume = parseFloat(volumeRef.current.value)
        volume = ((volume - defaultStepVolume < 0) ? 0 : volume - defaultStepVolume).toFixed(2)
        changeVolumeState(volume)
    }

    useEffect(() => {
        handleDuration()
        playSongFromContext()
    }, [playSongFromContext])

    return (
        <>
            <div className="grid grid-cols-1">
                {/* controls */}
                <div className="flex justify-between items-center mb-5">
                    {/* play list, share song */}
                    <div className="flex items-center gap-5">
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
                    <div className="flex items-center gap-5">
                        {/* back music */}
                        <button>
                            <FiSkipBack className="color-gunmetal" size={24}/>
                        </button>

                        {/* toggle music */}
                        <button onClick={togglePlay} disabled={existSongSrc()}>
                            {state.play ? <CiPause1 className="color-gunmetal" size={27}/> :
                                <CiPlay1 className="color-gunmetal" size={27}/>}
                        </button>

                        {/* next music */}
                        <button>
                            <FiSkipForward className="color-gunmetal" size={24}/>
                        </button>
                    </div>
                    {/*  control sound  */}
                    <div className="flex items-center gap-5 hidden lg:flex col-span-2">
                        <button className="sound_button" onClick={decreaseVolume}>
                            {!state.statusVolume ?
                                <CiVolumeMute size={19} className="color-gunmetal"/> :
                                <CiVolume size={19} className="color-gunmetal"/>}
                        </button>
                        <input ref={volumeRef} type="range" className={styles.buffer_range_bar} min={0} max={1}
                               step={defaultStepVolume}
                               onChange={updateVolume} value={state.volume}/>
                        <button className="sound_button" onClick={increaseVolume}>
                            <CiVolumeHigh size={19} className="color-gunmetal"/>
                        </button>
                    </div>
                </div>
                {/* time buffer */}
                <div className="flex justify-center items-center w-full gap-5">
                    {/* current time */}
                    <p className="text-xs color-gunmetal pr-4">{formatTime(state.currentTime)}</p>
                    {/* change time */}
                    <input type="range" min={0} max={state.duration} value={state.currentTime} onChange={changedRange}
                           className={styles.buffer_range_bar} disabled={existSongSrc()}/>
                    {/* all time */}
                    <p className="text-xs color-gunmetal">{formatTime(existSongSrc() ? 0 : state.duration)}</p>
                </div>
            </div>
            {/* audio player */}
            <audio ref={playerRef} src={src} onTimeUpdate={handleCurrentTime} onEnded={pauseAudio}
                   onLoadedData={handleDuration}/>
        </>
    )
}

export default Player