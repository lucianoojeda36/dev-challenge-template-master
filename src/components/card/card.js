import React from 'react';
import './card.scss';
import { BiWorld } from 'react-icons/bi';

const Card = ({ dataCountry }) => {
  return (
    <>
      <div className="container_card">
        <label className="flag_label " tabIndex={9}>
          {dataCountry.emoji ? <p className="emoji_card">{dataCountry.emoji}</p> : <BiWorld />}
          <h5 className="title_card">{dataCountry.name ?? 'Sin Dato'}</h5>
        </label>
        <div className="wrapper_flag_label">
          <label className="flag_label " tabIndex={10}>
            <p className="description flexLabel_1">⁕ Capital:</p>
            <p className="description flexLabel_2">{dataCountry.capital ?? 'Sin Dato'}</p>
          </label>
          <label className="flag_label" tabIndex={11}>
            <p className="description flexLabel_1">⁕ Currency:</p>
            <p className="description flexLabel_2">{dataCountry.currency ?? 'Sin Dato'}</p>
          </label>
          <label className="flag_label" tabIndex={12}>
            <p className="description flexLabel_1">⁕ Code:</p>
            <p className="description flexLabel_2">{dataCountry.code ?? 'Sin Dato'}</p>
          </label>
          <label className="flag_label" tabIndex={13}>
            <p className="description flexLabel_1">⁕ Phone:</p>
            <p className="description flexLabel_2">+{dataCountry.phone ?? 'Sin Dato'}</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default Card;
