interface HorizontalBarChartProps {
  bars: Array<{ label: string; points: Array<{ label: string; value: number; }>; }>;
  className?: string;
  numberOfSteps?: number;
  style?: React.CSSProperties;
}