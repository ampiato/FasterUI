import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BidEditor } from './BidEditor';

const meta = {
  title: 'PpS/BidEditor',
  component: BidEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onRangeSelect: fn() },
} satisfies Meta<typeof BidEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nHours: 24,
    range: undefined
  },
};
