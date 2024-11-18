import type { Meta, StoryObj } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

const meta: Meta<React.ComponentPropsWithRef<'progress'>> = {
  title: 'Components/Progress',
  component: ({ className, ...props }) => <progress {...props} className={twMerge('w-[10rem]', className)} />,
  args: {
    value: 50,
    max: 100,
  },
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
export const Indeterminate: typeof Story = {
  args: {
    value: undefined
  }
}
