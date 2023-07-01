import React from 'react'

export default function NewsletterComponent() {
  return (
    <div className='row blank--row'>
      <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="form__left">
          <h3>Newsletter</h3>
          <p>Subcribe to get information about products and coupons</p>
        </div>
      </div>
      <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="form__right">
          <div className="form-group--nest">
            <input type="email" placeholder='Email address' className='form-control--nest' />
            <button className='info-from__btn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
