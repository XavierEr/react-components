//#region Library imports
import React, { StrictMode } from 'react';
//#endregion

//#region React Component imports
import BarChart from './components/BarChart/BarChart';
//#endregion

import styles from './styles/App.module.scss';

const App: React.FC = (): JSX.Element => {
  const bars = [
    { label: 'First Bar', points: [{ label: 'First Point', value: 388 }] },
    { label: 'Second Bar', points: [{ label: 'First Point', value: 100 }, { label: 'Second Point', value: 200 }] },
    { label: 'Third Bar', points: [{ label: 'First Point', value: 1000 }] },
    { label: 'Fourth Bar', points: [{ label: 'First Point', value: 298 }, { label: 'Second Point', value: 1000 }, { label: 'Third Point', value: 562 }] },
  ];

  return (
    <StrictMode>
      <div className={styles.container}>
        <div className={styles.header}>React Components</div>

        <div className={styles.horizontalBarChart}>
          <BarChart
            bars={bars}
            type='horizontal' />
        </div>
      </div>
    </StrictMode>
  );
}

export default App;