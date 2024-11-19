import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<React.ComponentPropsWithRef<'input'>> = {
  title: 'Components/Radio',
  component: ({ children, ...props }) => <label className='flex place-items-center gap-1'><input type='radio' {...props} />{children}</label>,
  args: { 
    children: 'radio',
    onChange: fn
  },
  argTypes: {}
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
