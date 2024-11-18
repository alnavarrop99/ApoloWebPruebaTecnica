import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { twMerge } from 'tailwind-merge';

const meta: Meta<React.ComponentPropsWithRef<'input'>> = {
  title: 'Components/Range',
  component: ({className, ...props}) => <input type='range' {...props} className={twMerge('max-w-[16rem]', className)} />,
  args: { 
    defaultValue: 25,
    step: 25,
    min: 0,
    max: 100,
    onChange: fn
  },
  argTypes: {}
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
