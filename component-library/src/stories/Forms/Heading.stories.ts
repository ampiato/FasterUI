import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
  title: 'Forms/Heading',
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    title: "Heading",
    level: 1
  }
};


export const H2: Story = {
  args: {
    title: "Heading",
    level: 2
  }
};


export const H3: Story = {
  args: {
    title: "Heading",
    level: 3
  }
};


export const H4: Story = {
  args: {
    title: "Heading",
    level: 4
  }
};


export const H5: Story = {
  args: {
    title: "Heading",
    level: 5
  }
};


export const H6: Story = {
  args: {
    title: "Heading",
    level: 6
  }
};


