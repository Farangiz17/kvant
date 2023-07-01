import React from "react";

const Data = {
  id: 1,
  key: "small-banner-images",
  images: [
    {
      url: "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/10658b26-fb31-4209-b167-269ee3b80376.jpg",
      width: 390,
      original: false,
    },
    {
      url: "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/d90346b0-1ae8-4c3d-bb2b-e1a7a280490e.jpg",
      width: 390,
      original: false,
    },
  ],
  type: "ContentImage",
  createdAt: "2023-06-04T17:45:23.869Z",
  updatedAt: "2023-06-04T17:45:23.869Z",
};
// props => {data} => data.data.images
export default function BannerItemComponent({ data }) {
  // console.log(data.data, 'banner');
  return (
    <div className="small-banner">
      {data.data &&
        data.data.images.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              alt="small banner photo"
              className="small_banner_photo"
            />
          );
        })}
    </div>
  );
}
