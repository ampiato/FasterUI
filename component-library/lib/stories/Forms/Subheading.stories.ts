import type { Meta, StoryObj } from '@storybook/react';

import { Subheading } from './Subheading';

const meta = {
  title: 'Forms/Subheading',
  component: Subheading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Subheading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Subheading",
  }
};
