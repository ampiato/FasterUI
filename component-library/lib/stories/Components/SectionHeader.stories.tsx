import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    subtitle: 'Section Subtitle',
  }
};


export const NoSubtitle: Story = {
  args: {
    title: 'Section Title',
  }
};


export const WithButton: Story = {
  args: {
    title: 'Section Title',
    subtitle: 'Section Subtitle',
    children: {
      componentType: "Button",
      primary: true,
      label: "Button"
    }
  }
};

