import React, { useState } from 'react'
import GeneratorComponent from '../generator/generator.component'
import Category from '../../../repository/category-repository'
import { useEffect } from 'react'

export default function InstrumentsContainer() {

    const [instrumentData, setInstrumentData] = useState([])

    const DrawInstrument = async () => {
        const instrumentPromise = await Category.getHomeBannersWithProducts()
        if (instrumentPromise) {
            setInstrumentData(instrumentPromise)
        }
    }

    useEffect(()=>{
        DrawInstrument()
    },[])

    const data =  [
        {
            "id": 14,
            "title": "Сельхозтехника",
            "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/6d2915f3-d649-4e48-bb90-5a0c6c6c6251.webp",
            "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/45964bb6-8045-4a3d-a35b-d8847589d4a6.webp",
            "parentId": null,
            "isBanner": false,
            "children": [
                {
                    "id": 24,
                    "title": "Газонокосилка",
                    "image": null,
                    "icon": null,
                    "parentId": 14,
                    "isBanner": false,
                    "children": []
                },
                {
                    "id": 25,
                    "title": "Прочие",
                    "image": null,
                    "icon": null,
                    "parentId": 14,
                    "isBanner": false,
                    "children": []
                },
                {
                    "id": 26,
                    "title": "Сельскохозяйственные оборудования",
                    "image": null,
                    "icon": null,
                    "parentId": 14,
                    "isBanner": false,
                    "children": []
                }
            ]
        }
   ]

   const title = 'Oборудование'

  return (
    <div className='instruments-container'>
        <GeneratorComponent title={title} data={data}/>
    </div>
  )
}
