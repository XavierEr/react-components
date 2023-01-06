//#region Library imports
import React, {
  useMemo,
} from 'react';
//#endregion

//#region Helper imports
import { clsx } from '../../helpers/clsx';
//#endregion

import styles from './BarChart.module.scss';

const BarChart: React.FC<BarChartProps> = ({
  bars,
  className,
  style,
  type,
}): JSX.Element => {
  const highestPoint = useMemo<number>(() => {
    if (bars.length > 0) {
      return bars.reduce<number>((accumulator, currentBar) => {
        const sumOfPoints = currentBar.points.reduce((accumulator, currentPoint) => accumulator + currentPoint.value, 0);

        if (accumulator < sumOfPoints) {
          return sumOfPoints;
        }
        return accumulator;
      }, 0);
    }
    return 0;
  }, [bars]);

  return (
    <div
      className={clsx(
        styles.container,
        type === 'horizontal' && styles.horizontal,
        type === 'vertical' && styles.vertical,
        className)}
      style={style}>

      <div className={styles.barLabels}>
        {bars.map(bar => <div>
          <div className={styles.barLabel}>{bar.label}</div>
        </div>)}
      </div>

      <div className={styles.barContainers}>
        {bars.map(bar => {
          return (
            <div className={styles.barContainer}>
              {bar.points.map((point, index) => {
                const pointPercentage = point.value / highestPoint * 100;

                return (
                  <div
                    className={clsx(styles.bar, styles[`color${index % 5}`])}
                    style={{ width: `${pointPercentage}%` }}>
                    <div className={styles.labelContainer}>
                      {!!point.label ? <div className={styles.label} title={point.label}>{point.label}</div> : null}
                      <div className={styles.value} title={point.value.toString()}>{point.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BarChart;