import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

const OnlineEventsCard = (props) => {
    return (
        <>
        <div className="w-60 h-50 px-2 m-4 justify-between">
            <img
            className ="w-50 h-50 rounded-xl justify-between"
            src={props.src}
            alt="Online Event Card"
            />
        </div>
        </>
    );
};
const OnlineEventCardSlider = () => {
    const OnlineEventImage = [
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321289-ytemntvppg-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-bnvfftrcnu-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321307-guphvphlty-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319586-adgjgvzznn-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEZlYg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145818-hbakuphvea-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321199-njjsacrjna-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00139232-yfyfgauaek-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321502-pjuapbdqcj-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321141-tuaaycejga-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145684-zjaylnhmhb-portrait.jpg",
    ];



    return (
        <>
        <div className="onlineevents">
        <Carousel itemPosition={consts.BETWEEN} itemsToShow={4} showDots={false} >
            {OnlineEventImage.map((image)=> (
                <OnlineEventsCard src={image}/>
            ))}
        </Carousel>
        </div>
        </>
    )
};

export default OnlineEventCardSlider;