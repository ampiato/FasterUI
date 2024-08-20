import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DayTimeRange } from './DayTimeRange';

const meta = {
  title: 'PpS/DayTimeRange',
  component: DayTimeRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onRangeSelect: fn() },
} satisfies Meta<typeof DayTimeRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nHours: 24,
    range: undefined
  },
};

export const Baseload: Story = {
  args: {
    nHours: 24,
    range: {hourFrom: 1, hourTo: 24}
  },
};

export const Peak: Story = {
  args: {
    nHours: 24,
    range: {hourFrom: 8, hourTo: 20}
  },
};

export const TwentyFiveHours: Story = {
  args: {
    nHours: 25,
    range: {hourFrom: 1, hourTo: 25}
  },
};

export const TwentyThreeHours: Story = {
  args: {
    nHours: 23,
    range: {hourFrom: 1, hourTo: 23}
  },
};
