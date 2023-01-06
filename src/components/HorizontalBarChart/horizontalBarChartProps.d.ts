interface HorizontalBarChartProps {
  bars: Array<{ label: string; points: Array<{ label: string; value: number; }>; }>;
  className?: string;
  style?: React.CSSProperties;
}