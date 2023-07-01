import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import {VscCreditCard} from 'react-icons/vsc'
import {SlBubbles} from 'react-icons/sl'
import {TbRotateRectangle} from 'react-icons/tb'

export default function HomeFeaturesComponent() {
  return (
    <div className="features_component">
      <div className="features-item">
        <div className="features-item-icon">
          <HiOutlineRocketLaunch />
        </div>
        <h5 className="features-item-h5">Бесплатная доставка по Ташкенту</h5>
        <p></p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <TbRotateRectangle />
        </div>
        <h5 className="features-item-h5">90 дней возврата</h5>
        <p className="features-item-p">Если товар имеет проблемы</p>
        <p></p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <VscCreditCard />
        </div>
        <h5 className="features-item-h5">Безопасная оплата</h5>
        <p className="features-item-p">100% безопасный платеж</p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <SlBubbles />
        </div>
        <h5 className="features-item-h5">Поддержка 24/7</h5>
        <p className="features-item-p">Специальная поддержка</p>
      </div>
    </div>
  );
}
