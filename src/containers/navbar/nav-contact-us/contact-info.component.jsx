import React from "react";

export default function ContactInfoComponent() {
  return (
    <div>
      <div className="contact-info__header">
        <h3>Свяжитесь с нами</h3>
      </div>
      <div className="contact-info__content">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Свяжитесь напрямую</h4>
              <p>
                <a href="#">admin@kvant.uz</a>
                <span>(+998) 999 99 99</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Главный офис</h4>
              <p>
                <span>753P+JF2, Tashkent, Uzbekistan</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Работать с нами</h4>
              <p>
                <span>Отправьте свое резюме на нашу электронную почту:</span>
                <a href="#">career@kvant.com</a>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Обслуживание клиентов</h4>
              <p>
                <a href="#">cutsomer@kvant.com</a>
                <span>(+998) 999 99 99</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Связи со СМИ</h4>
              <p>
                <a href="#">media@kvant.com</a>
                <span>(+998) 999 99 99</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
            <div className="block--contact-info">
              <h4>Служба поддержки</h4>
              <p>
                <a href="#">support@kvant.com</a>
                <span>(+998) 999 99 99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
