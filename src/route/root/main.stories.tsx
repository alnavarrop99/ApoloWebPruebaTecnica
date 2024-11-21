import type { Meta, StoryObj } from '@storybook/react';
import Main from './main'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<typeof Main> = {
  title: 'Page/Root/Main',
  component: Main,
  args: { children: <Artboard /> },
}
export default meta;

export const Story: StoryObj<typeof meta> = { }

