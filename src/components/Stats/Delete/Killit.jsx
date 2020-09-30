import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Ko from './Ko';

function Killit({item, setCurrentScreenInKillit, sendPoint}) {

  let desktopOrMobile = '';

  useEffect(() => {
    if (sendPoint === 'xs') {
      desktopOrMobile = 'Statsmobile';
    } else {
      desktopOrMobile = 'allStatsDesktop'
    }
  }, [sendPoint]);

  const [ifKilled, setIfKilled] = useState(false);
    if (!ifKilled) {
      return (
        <div>
          <button onClick={() => setCurrentScreenInKillit(desktopOrMobile)}>Back to stats</button>
          <h2>{item}</h2>
          <p>{item}</p>
          <button onClick={() => setIfKilled(true)}>KILL IT!</button>
      </div>
      );
    } else {
      return (
        <Ko deleteItem={item}
        setCurrentScreenInKo={setCurrentScreenInKillit} />
    );
    }
  }

export default Killit;