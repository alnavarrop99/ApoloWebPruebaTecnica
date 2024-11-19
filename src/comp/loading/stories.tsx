import type { Meta, StoryObj } from '@storybook/react';
import Loading from "./loading";

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  args: {
    variant: 'spinner'
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',

      },
      options: ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity'],
    }
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
