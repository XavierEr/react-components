//#region Library imports
import React, { StrictMode } from 'react';
//#endregion

//#region React Component imports
//#endregion

import styles from './styles/components/App.module.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <StrictMode>
      <div className={styles.container}>
        <div className={styles.header}>React Components</div>
      </div>
    </StrictMode>
  );
}

export default App;