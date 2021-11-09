import React from 'react';
import question from "../icons/question.png";
import upload from "../icons/upload.png";
import download from "../icons/download.png";
import logo from "../img/paypal.png";

const TransactionInfo = ({text}) => {

    return (
      <section className='transaction-info'>

              <div className="actions transaction-info__actions">
                  <div className="actions__icon">
                      <img src={question} alt="question"/>
                  </div>
                  <div className="actions__icon">
                      <img src={upload} alt="upload"/>
                  </div>
                  <div className="actions__icon">
                      <img src={download} alt="download"/>
                  </div>
              </div>
              <div className="transaction-info__wrapper">
                  <div className="transaction-info__logo">
                      <img src={logo} alt="PayPal"/>
                  </div>
                  <div className="transaction-info__text">{text}</div>
              </div>

      </section>
    );
};

export default TransactionInfo;