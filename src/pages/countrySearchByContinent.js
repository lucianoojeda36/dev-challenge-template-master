import React from 'react';
import Card from '../components/card/card';
import Spacer from '../utils/spacer/spacer';
import './countrySearchByContinent.scss';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const GET_COUNTRY = gql`
  query Country {
    countries {
      capital
      code
      currency
      emoji
      emojiU
      name
      native
      phone
      languages {
        code
        name
        native
        rtl
      }
      continent {
        code
        name
      }
    }
  }
`;

const CountrySearchByContinent = () => {
  const [isGroupByContinent, setIsGroupByContinent] = useState(false);
  const [isGroupByLanguage, setIsGroupByLanguage] = useState(false);
  const [countryName, setCountryName] = useState('');

  const { data, loading, error } = useQuery(GET_COUNTRY, {});

  const { countries } = data || {};

  let pattern = new RegExp(`${countryName}`, 'gi');

  var tempData = countryName !== '' && countries.filter(e => e.name.match(pattern));

  const activeClassContinent = isGroupByContinent ? 'active_button' : 'inactive_button';
  const activeClassLanguage = isGroupByLanguage ? 'active_button' : 'inactive_button';

  if (loading) return <ThreeDots color="#2f80ac" height={80} width={80} />;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <header className="header_wrapper">
            <h1 tabIndex={1} className="title">
              Country search
            </h1>
            <h6 tabIndex={2} className="subtitle">
              some random test
            </h6>
          </header>
          <nav className="navigator">
            <label className="input_searchLabel">
              <input
                tabIndex={3}
                className="input_search"
                type="text"
                placeholder="  &#xf002;"
                value={countryName}
                onChange={e => setCountryName(e.target.value)}
              />
            </label>
            <Spacer size={15} />
            <label className="navigator_buttons">
              <h3 tabIndex={4} className="title_buttons">
                Group by:
              </h3>
              <button
                tabIndex={5}
                className={activeClassContinent}
                onClick={() => {
                  setIsGroupByContinent(true);
                  setIsGroupByLanguage(false);
                }}
              >
                Continent
              </button>
              <button
                tabIndex={6}
                className={activeClassLanguage}
                onClick={() => {
                  setIsGroupByContinent(false);
                  setIsGroupByLanguage(true);
                }}
              >
                Language
              </button>
            </label>
          </nav>
          <Spacer size={15} />
          <section tabIndex={7} className="section_card">
            {isGroupByContinent &&
              tempData &&
              tempData.map((e,index) => (
                <div key={index}>
                  <h3 tabIndex={8} className="section_title">
                    {e.continent.name}
                  </h3>
                  <Card dataCountry={e} />
                </div>
              ))}
            {isGroupByLanguage &&
              tempData &&
              tempData.map((e,index) => (
                <div key={index}>
                  <h3 tabIndex={8} className="section_title">
                    {e.languages.length === 1
                      ? e.languages[0].name
                      : e.languages.map((e1, index) => (index === 0 ? `${e1.name}` : ` - ${e1.name}`))}
                  </h3>
                  <Card dataCountry={e} />
                </div>
              ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default CountrySearchByContinent;
