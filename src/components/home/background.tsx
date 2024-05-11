import React, {useState} from "react";
import './styles.scss'
import BackgroundVideo from "./background-video";
import { data } from "../../mock/videos";

function Background() {
    const [vidIndex, setVidIndex] = useState(0);

    return (
        <div>
            {data.map((value, index) => {
                return (
                    <BackgroundVideo
                        key={`video-${index}`}
                        visible={index === vidIndex}
                        poster={value.poster}
                        video={value.video}
                        onVideoEnd={() => setVidIndex((idx) => (idx + 1) % data.length)}
                    />
                )
            })}
        </div>
    )
}

export default Background;