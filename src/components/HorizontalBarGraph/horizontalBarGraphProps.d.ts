export interface HorizontalBarGraphProps {
  bars: Array<{ label: string; points: Array<{ label: string; value: number; }>; }>;
  className?: string;
  numberOfSteps?: number;
  showSteps?: boolean;
  style?: React.CSSProperties;
}