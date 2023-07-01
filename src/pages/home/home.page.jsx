import React from "react";
import HomeBannerContainer from "../../containers/home/banners/home.banner.container";
import HomeFeaturesContainer from "../../containers/home/features/home.features.container";
import HomeAdsContainer from "../../containers/home/ads/home.ads.container";
import TopCategoryContainer from "../../containers/home/topCategory/topCategory.container";
import GeneratorContainer from "../../containers/home/generator/generator.container";
import BrendsContainer from "../../containers/home/brends/brends.container";

export default function HomePage() {
  return (
    <div>
      <HomeBannerContainer />
      <HomeFeaturesContainer />
      <HomeAdsContainer />
      <TopCategoryContainer />
      <GeneratorContainer/>
      <BrendsContainer/>
    </div>
  );
}
