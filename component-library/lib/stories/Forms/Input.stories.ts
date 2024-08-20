import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Forms/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    value: 'Hello, World!',
  }
};

export const Number: Story = {
  args: {
    value: '136428',
    type: 'number'
  }
};


export const Password: Story = {
  args: {
    value: 'super-secret-password',
    type: 'password'
  }
};


export const Date: Story = {
  args: {
    type: 'date'
  }
};

export const DateTimeLocal: Story = {
  args: {
    type: 'datetime-local'
  }
};

export const Time: Story = {
  args: {
    type: 'time'
  }
};

export const Week: Story = {
  args: {
    type: 'week'
  }
};

