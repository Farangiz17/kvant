import React, { useState, useEffect } from "react";
import GeneratorComponent from "./generator.component";
import generatorBase from "../../../repository/category-repository";

export default function GeneratorContainer() {
  const [generator, setGenerator] = useState([]);

  const DrawGenerator = async () => {
    const genPromise = await generatorBase.getHomeBannersWithProducts();
    if (genPromise.data) {
      getProductsByCategory(genPromise.data);
    }
  };

  useEffect(() => {
    DrawGenerator();
  }, []);

  function getProductsByCategory(data) {
    for (let i = 0; i < data.length; i++) {
      generatorBase.getProductsByCategory(data[i].id).then((ress) => {
        data[i].product = ress.data.data;
      });
    }
    setTimeout(() => {
      setGenerator(data);
    }, 2000);
  }


  return (
    <div className="generator-container">
      {generator.length > 0 ? (
        generator.map((item, index) => {
          return (
            <GeneratorComponent
              key={index}
              title={item.title}
              data={item.product}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
