import Player from "@/helpers/player";

const PlayerView = ({src}) => {
    return (
        <>
            <div className="border-t py-10 px-3 lg:px-14">
                <Player src={src}/>
            </div>
        </>
    )
}

export default PlayerView