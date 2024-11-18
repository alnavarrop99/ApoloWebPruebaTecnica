import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<React.ComponentPropsWithRef<'input'>> = {
  title: 'Components/Input',
  component: (props) => <input {...props} type='text' />,
  args: {
    placeholder: 'text',
    onChange: fn
  },
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
