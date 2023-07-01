import React from "react";

export default function AboutPostDetailComponent() {
  return (
    <div className="container">
      <div className="post__header">
        <p>KVANT</p>
        <h1>Наша миссия</h1>
      </div>
      <div className="post__content">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="ps-block">
              <p style={{ fontSize: "20px" }}>
                расширять бизнес, способствуя формированию и развитию
                цивилизованного рынка в Центральной Азии
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="ps-block">
              <p style={{ fontSize: "20px" }}>
                формировать сплоченную команду высоко квалифицированных
                специалистов
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="ps-block">
              <p style={{ fontSize: "20px" }}>
                обеспечить удовлетворенность каждого клиента, точнее жить народу
                служить
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
