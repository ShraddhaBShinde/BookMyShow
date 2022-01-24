import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

const EventsCard = (props) => {
    return (
        <>
        <div className="w-60 h-50 px-2 m-4 justify-between">
            <img
            className ="w-50 h-50 rounded-xl justify-between"
            src={props.src}
            alt="Event Card"
            />
        </div>
        </>
    );
};
const EventCardSlider = () => {
    const EventImage = [
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321134-cyenbesvak-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00320278-ubeckqhvrg-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321166-ahwsldknhz-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315989-sngmfdgayk-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321093-xszyzjxdph-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321612-dflbehcppy-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319615-wqzmyxlges-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00126114-mgxdwhpbbh-portrait.jpg",
    ];



    return (
        <>
        <div className="events">
        <Carousel itemPosition={consts.BETWEEN} itemsToShow={4} showDots={false} >
            {EventImage.map((image)=> (
                <EventsCard src={image}/>
            ))}
        </Carousel>
        </div>
        </>
    )
};

export default EventCardSlider;