import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'
import Nav from './nav'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<typeof Nav> = {
  title: 'Page/Root/Nav',
  component: Nav,
  decorators: [withRouter(), (Story) => <div><Story /><Artboard /></div>],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/'
      },
      routing: {
        path: '*'
      }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
