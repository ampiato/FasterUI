import type { Meta, StoryObj } from '@storybook/react';

import { Markdown } from './Markdown';

const meta = {
  title: 'Components/Markdown',
  component: Markdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Markdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    markdown: "# Markdown\n\nThis is a markdown component.",
  }
};
