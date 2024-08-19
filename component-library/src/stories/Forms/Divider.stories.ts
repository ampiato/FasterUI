import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta = {
  title: 'Forms/Divider',
  component: Divider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};


