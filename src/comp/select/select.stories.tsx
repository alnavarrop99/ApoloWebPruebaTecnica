import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const meta: Meta<React.ComponentPropsWithRef<'select'>> = {
  title: 'Components/Select',
  component: ({className, ...props}) => <select {...props} className={twMerge('w-48', className)}> 
    <option> opt-1 </option>
    <option> opt-2 </option>
    <option> opt-3 </option>
  </select>,
  args: {
    onChange: fn,
  },
  argTypes: {}
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
