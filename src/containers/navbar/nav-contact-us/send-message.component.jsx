import React from 'react'

export default function SendMessageComponent() {
  return (
    <div className='contact-from-container'>
        <form action="/" method='get' className='form--conatct-us'>
            <h3>Отправить нам сообщение</h3>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                        <input type="text" className='from-control--input' placeholder='ФИО *' data-listener-added_bed0cf8c="true" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                        <input type="text" className='from-control--input' placeholder='Электронная почта *' data-listener-added_bed0cf8c="true" />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <textarea  rows="5" placeholder='Что хотите обсудить?' className='form-control__textaria'></textarea>
                    </div>
                </div>
            </div>
            <div className="form-group submit">
                <button className='info-from__btn'>Отправить</button>
            </div>
        </form>
    </div>
  )
}
