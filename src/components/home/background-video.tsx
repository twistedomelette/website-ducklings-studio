import React from "react";
import './styles.scss'

type Props = {
    visible: boolean;
    poster: string;
    video: string;
    onVideoEnd: Function;
};

function BackgroundVideo(props: Props) {
    return (
        <video className="background-video"
               style={{ display: props.visible? "block" : "none" }}
               playsInline muted autoPlay loop
               poster={props.poster}
               onSeeked={() => props.onVideoEnd()}
        >
            <source src={props.video} type="video/webm" />
            <source src={props.video} type="video/mp4" />
            <source src={props.video} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    )
}

export default BackgroundVideo;