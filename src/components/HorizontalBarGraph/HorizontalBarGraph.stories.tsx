//#region Library imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
//#endregion

import HorizontalBarGraph from './HorizontalBarGraph';

export default {
  title: 'Graph/HorizontalBarGraph',
  component: HorizontalBarGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: {
      control: { disable: true },
      description: 'Custom CSS variables',
    },
    numberOfSteps: {
      control: { type: 'number', min: 0, max: 30, step: 1 },
      defaultValue: 4,
      description: 'How any steps to be display on the X axis?'
    },
    showSteps: {
      control: 'boolean',
      defaultValue: false,
      description: 'Is steps on the X axis visible?'
    },
    style: { control: { disable: true } },
  },
} as ComponentMeta<typeof HorizontalBarGraph>;

const Template: ComponentStory<typeof HorizontalBarGraph> = (args) => <HorizontalBarGraph {...args} />;

export const Basic = Template.bind({});

const singlePointBars = [
  { label: 'First Bar', points: [{ label: '', value: 388 }] },
  { label: 'Second Bar', points: [{ label: '', value: 100 }] },
  { label: 'Third Bar', points: [{ label: '', value: 1000 }] },
  { label: 'Fourth Bar', points: [{ label: '', value: 298 }] },
  { label: 'Fifth Bar', points: [{ label: '', value: 250 }] },
  { label: 'Sixth Bar', points: [{ label: '', value: 644 }] },
];

Basic.args = {
  bars: singlePointBars,
};

const multiPointBars = [
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

export const Stacked = Template.bind({});

Stacked.args = {
  bars: multiPointBars,
};