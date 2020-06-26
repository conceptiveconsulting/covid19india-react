import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>


      <div className="link">
        <a
          href="https://github.com/covid19india"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data & Code forked from covid19india.org
        </a>
      </div>


    </footer>
  );
}

export default React.memo(Footer);
