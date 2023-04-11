import Player from "@/helpers/player";

const PlayerView = ({src}) => {
    return (
        <>
            <div className="border-t py-5 px-14">
                <Player src={src}/>
            </div>
        </>
    )
}

export default PlayerView