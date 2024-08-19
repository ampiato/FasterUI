import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from './FlexBox';

const meta = {
  title: 'Components/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    dir: 'horizontal',
    gap: 4,
    children: [
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "BellIcon" },
      { componentType: "Icon", name: "CalendarIcon" },
      { componentType: "Icon", name: "ChartPieIcon" },
      { componentType: "Icon", name: "ChevronDownIcon" },
    ]
  }
};

export const Vertical: Story = {
  args: {
    dir: 'vertical',
    gap: 4,
    children: [
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "BellIcon" },
      { componentType: "Icon", name: "CalendarIcon" },
      { componentType: "Icon", name: "ChartPieIcon" },
      { componentType: "Icon", name: "ChevronDownIcon" },
    ]
  }
};
