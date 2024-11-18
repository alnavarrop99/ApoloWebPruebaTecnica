import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<React.ComponentPropsWithRef<'input'>> = {
  title: 'Components/Checkbox',
  component: ({ children, ...props }) => <label className='flex place-items-center gap-1'><input {...props} type='checkbox' />{children}</label>,
  args: {
    children: 'checkbox',
    onChange: fn
  },
  argTypes: { }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
