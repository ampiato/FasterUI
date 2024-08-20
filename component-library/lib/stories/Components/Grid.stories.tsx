import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 3,
    children: [
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "Bars3Icon" },
      { componentType: "Icon", name: "Bars3Icon" },
    ]

  }
};
