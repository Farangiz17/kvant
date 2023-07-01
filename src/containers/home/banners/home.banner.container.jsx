import React, { useEffect, useState } from "react";
import BannerComponent from "../banners/banner.component";
import banner from '../../../repository/banner-repository'
import BannerItemComponent from "../banners/banner_item.component";

export default function HomeBannerContainer() {

const [bannerDataMain, setBannerDataMain] = useState({})
const [bannerDataSmall, setBannerDataSmall] = useState({})

const DrawBannerMain = async () => {
  const bannerPromies = await banner.getMainBanner("main-banner-images");
  if(bannerPromies){
    setBannerDataMain(bannerPromies)
  }
}

const DrawBannerSmall = async () => {
  const bannerPromies = await banner.getMainBanner("small-banner-images");
  if(bannerPromies){
    setBannerDataSmall(bannerPromies)
  }
}

useEffect(() => {
  DrawBannerMain()
  DrawBannerSmall()
}, [])
console.log(bannerDataMain, 'main banner');
  return (
    <div className="banner_container">
      <div className="banner_container-parent">
      <div className="banner">
        <BannerComponent data={bannerDataMain} />
      </div>
      <div className="banner_item">
        <BannerItemComponent data={bannerDataSmall} />
      </div>
      </div>
    </div>
  );
}
