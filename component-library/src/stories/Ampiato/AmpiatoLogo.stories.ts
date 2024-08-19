import type { Meta, StoryObj } from '@storybook/react';
import { AmpiatoLogo } from './AmpiatoLogo';

const meta = {
  title: 'Ampiato/AmpiatoLogo',
  component: AmpiatoLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AmpiatoLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
