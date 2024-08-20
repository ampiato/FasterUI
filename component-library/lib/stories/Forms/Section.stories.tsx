import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';
import { Input } from './Input';

const meta = {
  title: 'Forms/Section',
  component: Section,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    subtitle: 'Section Subtitle',
    children:  <Input aria-label="Organization Name" name="name" defaultValue="Catalyst" />
  }
};



export const WithoutSubsection: Story = {
  args: {
    title: 'Section Title',
    children:  <Input aria-label="Organization Name" name="name" defaultValue="Catalyst" />
  }
};


