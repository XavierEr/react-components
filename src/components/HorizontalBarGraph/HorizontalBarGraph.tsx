//#region Library imports
import React, {
  useCallback,
  useMemo,
} from 'react';
//#endregion

//#region Type imports
//#endregion

//#region Helper imports
import { clsx } from '../../helpers/clsx';
//#endregion

import styles from './HorizontalBarGraph.module.scss';

const HorizontalBarGraph: React.FC<HorizontalBarGraphProps> = ({
  bars,
  className,
  numberOfSteps = 4,
  showSteps = false,
  style,
}): JSX.Element => {

  const roundUpToNearestNumber = useCallback<(value: number, nearestNumber: number) => number>((value: number, nearestNumber: number) => {
    return Math.ceil(value / nearestNumber) * nearestNumber;
  }, []);

  const highestPoint = useMemo<number>(() => {
    if (bars.length > 0) {
      return bars.reduce<number>((accumulator, currentBar) => {
        const sumOfPoints = currentBar.points.reduce<number>((accumulator, currentPoint) => accumulator + currentPoint.value, 0);

        if (accumulator < sumOfPoints) {
          // return sumOfPoints;
          // return roundUpToNearestNumber(sumOfPoints, Number('1'.padEnd(sumOfPoints.toString().length, '0')));
          return roundUpToNearestNumber(sumOfPoints, Number('1'.padEnd(sumOfPoints.toString().length - 1, '0')));
        }
        return accumulator;
      }, 0);
    }
    return 0;
  }, [bars]);

  return (
    <div className={clsx(styles.container, className)} style={style}>

      <div className={styles.barLabels}>
        {bars.map(bar => <div key={bar.label}>
          <div className={styles.barLabel}>{bar.label}</div>
        </div>)}
      </div >

      <div className={styles.barContainers}>
        {bars.map(bar => {
          return (
            <div key={bar.label} className={styles.barContainer}>
              {bar.points.map((point, index) => {
                const pointPercentage = point.value / highestPoint * 100;

                return (
                  <div key={point.label} className={clsx(styles.bar, styles[`color${index % 5}`])} style={{ width: `${pointPercentage}%` }}>
                    <div className={styles.labelContainer}>
                      {!!point.label ? <div className={styles.label} title={point.label}>{point.label}</div> : null}
                      <div className={styles.value} title={point.value.toString()}>{point.value}</div>
                    </div>
                  </div>
                );
              })}

              {!showSteps && bar.points.length > 1 ? <div className={styles.totalLabel}>
                {bar.points.reduce<number>((accumulator, currentPoint) => accumulator + currentPoint.value, 0)}
              </div> : null}
            </div>
          );
        })}

        {showSteps && [...Array(Math.max(numberOfSteps, 0)).keys()].map((value: number) => {
          const step = (value + 1) / numberOfSteps;

          return (
            <div key={value} className={styles.step} style={{ left: `${step * 100}%` }}>
              <div className={styles.label}>{Math.trunc(step * highestPoint)}</div>
            </div>
          );
        })}
      </div>

    </div >
  );
}

export default HorizontalBarGraph;