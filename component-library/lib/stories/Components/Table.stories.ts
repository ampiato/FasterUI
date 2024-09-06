import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta = {
  title: 'Components/Table',
  component: Table,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    data: [
      ["Tesla", "Model Y", "$64,950", "Yes"],
      ["Ford", "F-Series", "$33,850", "No"],
      ["Toyota", "Corolla", "$29,600", "No"],
    ],
    columns: ["Make", "Model", "Price", "Electric"],
  }
};


export const Components: Story = {
  args: {
    data: [
      ["Tesla", "Model Y", "$64,950", { componentType: "button"} ],
      ["Ford", "F-Series", "$33,850", "No"],
      ["Toyota", "Corolla", "$29,600", "No"],
    ],
    columns: ["Make", "Model", "Price", "Electric"],
  }
};

