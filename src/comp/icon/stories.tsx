import type { Meta, StoryObj } from '@storybook/react';
import Icon, { list } from "./icon";

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: 'sign-in',
    trigger: 'click',
    delay: 3
  },
  argTypes: {
    name: {
      control: 'inline-radio',
      options: list
    },
    trigger: {
      control: 'inline-radio',
      options: ['click', 'hover', 'always']
    },
    delay: {
      control: 'number',
    }
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
export const WithButton: StoryObj<typeof meta> = {
  render: (props) => <button onClick={() => window.dispatchEvent(new Event('onIconPlay' satisfies keyof WindowEventMap, { bubbles: true, cancelable: true }))}> <Icon {...props} /> button </button> 
}
