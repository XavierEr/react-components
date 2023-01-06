interface BarChartProps {
  bars: Array<{ label: string; points: Array<{ label: string; value: number; }>; }>;
  className?: string;
  style?: React.CSSProperties;
  type: 'horizontal' | 'vertical';
}