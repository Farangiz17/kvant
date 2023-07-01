import React, { useEffect, useState } from 'react'
import banner from '../../../repository/banner-repository'

export default function HomeAdsContainer() {
    const [ads, setAds] = useState({})

    const DrawAds = async () => {
        const adsPromise = await banner.getMainBanner('ads-banner-images')
        if (adsPromise) {
            setAds(adsPromise)
        }
    }

    useEffect(() => {
        DrawAds()
    }, [])

    const data = {
        "id": 2,
        "key": "ads-banner-images",
        "images": [
            {
                "url": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/10658b26-fb31-4209-b167-269ee3b80376.jpg",
                "width": 390,
                "original": false
            },
            {
                "url": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/d90346b0-1ae8-4c3d-bb2b-e1a7a280490e.jpg",
                "width": 390,
                "original": false
            },
            {
                "url": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/d90346b0-1ae8-4c3d-bb2b-e1a7a280490e.jpg",
                "width": 390,
                "original": false
            }
        ],
        "type": "ContentImage",
        "createdAt": "2023-06-10T14:49:43.941Z",
        "updatedAt": "2023-06-10T14:50:31.041Z"
    }
   
  return (
    <div className='home_ads_container'>
        <div className='section--title'>Категории</div>
      <div className="home_ads-image-group">
      {
        (ads.data) ? ads.data.images.map((item, index) => {
            return <img key={index} src={item.url} alt="ads photo" />
        }):
        <>
        <img src="https://securimag.ma/site/assets/files/3021/img.jpg" alt="image not found" />
        </>
       }
      </div>
    </div>
  )
}
