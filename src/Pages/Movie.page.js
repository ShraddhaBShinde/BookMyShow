import React from "react";
import { BiChevronRight } from "react-icons/bi";
const launchRazorPay = () => {
    let options = {
        key: "rzp_test_jSLNsP1CmupEMd",
        amount: 10000,
        currency: "INR",
        name: "BMS Clone",
        description: "Movie Purchase",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
}

const Movie = () => {
    return(
        <>
        <div className="w-full h-full my-8 ">
            <img className="w-full h-96 absolute " src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" alt="bg"/>
        <div className="flex justify-space-around pt-8 ml-20">
          <img className="w-50 h-80 rounded-xl relative ml-20" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" alt="main"/>
          
          <div>
              <h1 className="text-white text-4xl font-bold pl-12 relative">Spider-Man: No Way Home</h1>
              <div className="flex">
              <h2 className="text-white text-2xl font-bold pl-12 pt-2 relative">91%</h2><h3 className="text-white text-xl pl-2 pt-3 relative">424.7K ratings</h3>
              <BiChevronRight className="relative h-10 w-10 pt-3 text-white"/>
              </div>
              <div className="h-20 w-60 pl-12 pt-2 rounded-md relative">
                  <div className="flex bg-neutral-600 h-20 w-96 pl-2 pt-2 rounded-md relative gap-4">
                      <div>
                      <h2 className="text-white text-xl pl-2">Add your rating & review</h2>
                      <h3 className="text-white text-md pl-2">Your ratings matter</h3>
                      </div>
                      <div className="flex justify-end">
                      <button class="bg-white text-gray-700 text-xl font-bold px-3 mb-4 mt-2 rounded">
                        Rate Now
                      </button>
                      </div>
                  </div>
              </div>

              <div className="h-20 w-60 pl-12 pt-6 relative">
                  <div className="flex bg-neutral-300 h-8 w-96 pl-8 pt-2 relative gap-4">
    
                        <button className="font-bold hover:underline">English</button>
                        <button className="font-bold hover:underline">Hindi</button>
                        <button className="font-bold hover:underline">Kannada</button>
                        <button className="font-bold hover:underline">Telugu</button>
                        <button className="font-bold hover:underline">Tamil</button>
                
                      
                  </div>
              </div>
              <div>
                  <h5 className="text-white text-xl font-bold pl-12 relative">2h 28m •Action,Adventure,Sci-Fi •UA •16 Dec, 2021</h5>
              </div>

              <div className="pl-12 pt-2">
              <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded relative">
        Book Tickets
      </button>
      </div>

          </div>
          </div>
      </div>
      
        </>
    )
};

export default Movie;