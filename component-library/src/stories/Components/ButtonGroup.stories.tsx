import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Button 1", href: "#" },
      { label: "Button 2", href: "#" },
      { label: "Button 3", href: "#" },
    ]
  }
};

export const Selected: Story = {
  args: {
    items: [
      { label: "Button 1", href: "#", isActive: true },
      { label: "Button 2", href: "#" },
      { label: "Button 3", href: "#", isActive: true },
    ]
  }
};
