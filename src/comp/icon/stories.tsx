import type { Meta, StoryObj } from '@storybook/react';
import Icon, { list } from "./icon";

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: 'sign-in',
  },
  argTypes: {
    name: {
      control: 'inline-radio',
      options: list
    }
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
