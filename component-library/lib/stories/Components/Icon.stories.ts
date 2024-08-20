import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Bars3Icon',
  },
};

