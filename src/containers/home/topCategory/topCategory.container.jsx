import React, { useState, useEffect } from 'react'
import TopCategoryComponent from './topCategory.component'
import Category from '../../../repository/category-repository'

export default function TopCategoryContainer() {

    const [topCategory, setTopCategory] = useState([])

    const DrawTopCategory = async () => {
        const topCatProm = await Category.getCategory('categories')
        if (topCatProm) {
            setTopCategory(topCatProm)
        }
    }

    useEffect(() => {
       DrawTopCategory()
    }, []);

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
          },
          {
              "id": 16,
              "title": "Строй инструменты",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/eeb2403e-13c0-4cb2-a466-0cf62ae53c56.webp",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/d53f91cc-5893-4ef8-8e41-db517f3f7564.webp",
              "parentId": null,
              "isBanner": false,
              "children": [
                  {
                      "id": 28,
                      "title": "Бензиновый инструменты",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 29,
                      "title": "Воздушные инструменты",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 30,
                      "title": "Оборудование для металь",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 31,
                      "title": "Проче",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 32,
                      "title": "Ручной инструменты",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 33,
                      "title": "Электроинструменты",
                      "image": null,
                      "icon": null,
                      "parentId": 16,
                      "isBanner": false,
                      "children": []
                  }
              ]
          },
          {
              "id": 11,
              "title": "Насос Водяной",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/52e1c5ec-7181-4a53-8009-616709720133.jpg",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/4608f674-d277-456e-a72c-c9b07f9ea681.jpg",
              "parentId": null,
              "isBanner": false,
              "children": [
                  {
                      "id": 19,
                      "title": "Шланг",
                      "image": null,
                      "icon": null,
                      "parentId": 11,
                      "isBanner": false,
                      "children": []
                  }
              ]
          },
          {
              "id": 13,
              "title": "Прицепы",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/03afa809-9c4b-492a-8592-98523304d23b.png",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/75fd66a8-1531-408c-bdbd-97c7018fea0c.png",
              "parentId": null,
              "isBanner": false,
              "children": [
                  {
                      "id": 23,
                      "title": "Прицепы для генераторов",
                      "image": null,
                      "icon": null,
                      "parentId": 13,
                      "isBanner": false,
                      "children": []
                  }
              ]
          },
          {
              "id": 15,
              "title": "Стабилизатор",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/4c3b5f51-c37b-4958-8012-5484a0fa4624.jpeg",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/d09f11de-1871-46c8-ac1b-44785e6757cf.jpeg",
              "parentId": null,
              "isBanner": false,
              "children": [
                  {
                      "id": 34,
                      "title": "Стабилизатор однофазный",
                      "image": null,
                      "icon": null,
                      "parentId": 15,
                      "isBanner": false,
                      "children": []
                  }
              ]
          },
          {
              "id": 10,
              "title": "Генератор",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/89e9e6b7-e023-49c4-809c-f88855e7ec58.webp",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/a5d40045-6033-49ae-a1b8-e0dee6f0b634.webp",
              "parentId": null,
              "isBanner": true,
              "children": [
                  {
                      "id": 17,
                      "title": "Бензиновый генератор",
                      "image": null,
                      "icon": null,
                      "parentId": 10,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 18,
                      "title": "Дизельный генератор",
                      "image": null,
                      "icon": null,
                      "parentId": 10,
                      "isBanner": false,
                      "children": []
                  }
              ]
          },
          {
              "id": 12,
              "title": "Оборудования",
              "image": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/92d8f905-a06e-4a7f-ad88-0c8a6b9731b5.webp",
              "icon": "https://eu2.contabostorage.com/58ce315d623a4212847cf7e848a72942:kvanttest/8ed75151-315a-48f8-871b-c1330412ceeb.webp",
              "parentId": null,
              "isBanner": true,
              "children": [
                  {
                      "id": 20,
                      "title": "Воздушные инструменты",
                      "image": null,
                      "icon": null,
                      "parentId": 12,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 21,
                      "title": "Воздушные оборудование",
                      "image": null,
                      "icon": null,
                      "parentId": 12,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 22,
                      "title": "Оборудования для автомойки",
                      "image": null,
                      "icon": null,
                      "parentId": 12,
                      "isBanner": false,
                      "children": []
                  },
                  {
                      "id": 35,
                      "title": "Стабилизатор однофазный 22",
                      "image": null,
                      "icon": null,
                      "parentId": 12,
                      "isBanner": false,
                      "children": []
                  }
              ]
          }
      ]

  return (
    <div className='top-category-container'>
        <TopCategoryComponent data={topCategory}/>
    </div>
  )
}


