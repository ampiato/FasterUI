import type { Meta, StoryObj } from '@storybook/react';

import { PropertyCard } from './PropertyCard';

const meta = {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Property Title',
    keyValuePairs: [
      {key: "Key 1", value: "Value 1"},
      {key: "Key 2", value: "Value 2"},
      {key: "Key 3", value: "Value 3"},
    ]
  }
};

export const Condensed: Story = {
  args: {
    title: 'Property Title',
    keyValuePairs: [
      {key: "Key 1", value: "Value 1"},
      {key: "Key 2", value: "Value 2"},
      {key: "Key 3", value: "Value 3"},
    ],
    condensed: true
  }
};

export const NoProperties: Story = {
  args: {
    title: 'Property Title',
  }
};


export const Active: Story = {
  args: {
    title: 'Property Title',
    isActive: true,
    keyValuePairs: [
      {key: "Key 1", value: "Value 1"},
      {key: "Key 2", value: "Value 2"},
      {key: "Key 3", value: "Value 3"},
    ],
  }
};


export const Link: Story = {
  args: {
    title: 'Property Title',
    href: "#",
    keyValuePairs: [
      {key: "Key 1", value: "Value 1"},
      {key: "Key 2", value: "Value 2"},
      {key: "Key 3", value: "Value 3"},
    ],
  }
};


export const ActiveLink: Story = {
  args: {
    title: 'Property Title',
    href: "#",
    isActive: true,
    keyValuePairs: [
      {key: "Key 1", value: "Value 1"},
      {key: "Key 2", value: "Value 2"},
      {key: "Key 3", value: "Value 3"},
    ],
  }
};

