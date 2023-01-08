//#region Library imports
import React, { StrictMode } from 'react';
//#endregion

//#region React Component imports
import HorizontalBarChart from './components/HorizontalBarChart/HorizontalBarChart';
//#endregion

import styles from './styles/App.module.scss';

const App: React.FC = (): JSX.Element => {
  const singlePointBars = [
    { label: 'First Bar', points: [{ label: '', value: 388 }] },
    { label: 'Second Bar', points: [{ label: '', value: 100 }] },
    { label: 'Third Bar', points: [{ label: '', value: 1000 }] },
    { label: 'Fourth Bar', points: [{ label: '', value: 298 }] },
    { label: 'Fifth Bar', points: [{ label: '', value: 250 }] },
    { label: 'Sixth Bar', points: [{ label: '', value: 644 }] },
  ];

  const bars = [
    { label: 'First Bar', points: [{ label: 'First Point', value: 388 }] },
    { label: 'Second Bar', points: [{ label: 'First Point', value: 100 }, { label: 'Second Point', value: 200 }] },
    { label: 'Third Bar', points: [{ label: 'First Point', value: 1000 }] },
    { label: 'Fourth Bar', points: [{ label: 'First Point', value: 298 }, { label: 'Second Point', value: 800 }, { label: 'Third Point', value: 562 }] },
    { label: 'Fifth Bar', points: [{ label: 'First Point', value: 100 }, { label: 'Second Point', value: 432 }] },
    {
      label: 'Sixth Bar',
      points: [
        { label: 'First Point', value: 298 },
        { label: 'Second Point', value: 500 },
        { label: 'Third Point', value: 362 },
        { label: 'Forth Point', value: 200 },
      ]
    },
  ];

  return (
    <StrictMode>
      <div className={styles.container}>
        <div className={styles.header}>React Components</div>

        <HorizontalBarChart className={styles.horizontalBarChart} bars={singlePointBars} showSteps={true} />

        <HorizontalBarChart className={styles.horizontalBarChart} bars={bars} />
      </div>
    </StrictMode>
  );
}

export default App;