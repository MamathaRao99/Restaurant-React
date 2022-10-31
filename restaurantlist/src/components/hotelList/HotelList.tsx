import React from "react";
import "./hotelList.css";
const HotelList = () => {
  const hotelListArr: any = [
    {
      id: "1",
      restaurantName: "Planet Cafe",
      cuisine: "Sandwiches",
      img: "anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
      address: "5.3 km Manipal, Karnataka ",
      ratings: "8.3",
    },
    {
      id: "2",
      restaurantName: "LX Brasserie",
      img: "chad-montano-MqT0asuoIcU-unsplash.jpg",
      cuisine: "Indian",
      address: "Ramakrishna Lodge (Mosque Road), Udupi",
      ratings: "7.0",
    },
    {
      id: "3",
      restaurantName: "hotel raj",
      img: "chad-montano-MqT0asuoIcU-unsplash.jpg",
      cuisine: "Biriyani",
      address: "Ramakrishna Lodge (Mosque Road), Udupi",
      ratings: "4.0",
    },
    {
      id: "4",
      restaurantName: "Manipal inn",
      img: "chad-montano-MqT0asuoIcU-unsplash.jpg",
      cuisine: "Multi",
      address: "Ramakrishna Lodge (Mosque Road), Udupi",
      ratings: "8.0",
    },
  ];
  hotelListArr.push({
    id: "5",
    restaurantName: "Manipal inn",
    img: "chad-montano-MqT0asuoIcU-unsplash.jpg",
    cuisine: "Multi",
    address: "Ramakrishna Lodge (Mosque Road), Udupi",
    ratings: "8.0",
  });
  localStorage.setItem("REST", JSON.stringify(hotelListArr));
  const retData: any = JSON.parse(localStorage.getItem("REST") || "[]");
  console.log("retData", retData);
  // const rn: any = ["planet cafe", "LX Brasserie"];
  // const rid: any = ["1", "2"];
  // const rimg: any = [
  //   "anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
  //   "chad-montano-MqT0asuoIcU-unsplash.jpg",
  // ];
  // const rc: any = ["Sandwiches", "Indian"];
  // const ra: any = [
  //   "5.3 km Manipal, Karnataka ",
  //   "Ramakrishna Lodge (Mosque Road), Udupi",
  // ];
  // const rr: any = ["8.3", "7.0"];

  // localStorage.setItem("restName", JSON.stringify(rn));
  // localStorage.setItem("restId", JSON.stringify(rid));
  // localStorage.setItem("restImage", JSON.stringify(rimg));
  // localStorage.setItem("restCuisine", JSON.stringify(rc));
  // localStorage.setItem("restAddress", JSON.stringify(ra));
  // localStorage.setItem("restRating", JSON.stringify(rr));

  // const retrievedrn: any = JSON.parse(localStorage.getItem("restName") || "[]");
  // const retrievedAdd: any = JSON.parse(
  //   localStorage.getItem("restAddress") || "[]"
  // );

  return (
    // <div className="listDiv">
    //   {hotelListArr.map((element: any, i: any) => {
    //     return (
    //       <div className="eachHotel">
    //         <div className="hotelImage">
    //           <img
    //             src={require(`../../assets/${hotelListArr[i].img}`)}
    //             alt="img"
    //             className="hotelImg"
    //           />
    //         </div>
    //         <div className="restaurantDetails">
    //           <p>
    //             <span>{hotelListArr[i].id}.</span>
    //             {hotelListArr[i].restaurantName}
    //           </p>
    //           <p>{hotelListArr[i].cuisine}</p>
    //           <p>{hotelListArr[i].address}</p>
    //         </div>
    //         <div className="ratings">{hotelListArr[i].ratings}</div>
    //       </div>
    //     );
    //   })}
    // </div>

    <div className="listDiv">
      {retData.map((element: any, i: any) => {
        return (
          <div className="eachHotel">
            <div className="hotelImage">
              <img
                src={require(`../../assets/${retData[i].img}`)}
                alt="img"
                className="hotelImg"
              />
            </div>
            <div className="restaurantDetails">
              <p>
                <span>{retData[i].id}.</span>
                {retData[i].restaurantName}
              </p>
              <p>{retData[i].cuisine}</p>
              <p>{retData[i].address}</p>
            </div>
            <div className="ratings">{retData[i].ratings}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelList;
