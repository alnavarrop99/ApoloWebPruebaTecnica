import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter, reactRouterOutlet } from 'storybook-addon-remix-react-router'
import Page from './route'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<typeof Page> = {
  title: 'Page/Root',
  component: Page,
  decorators: [withRouter()],
  parameters: { }
}
export default meta;

export const Story: StoryObj<typeof meta> = {
  name: 'Public Root',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/',
      },
      routing: {
        path: '',
        children: reactRouterOutlet({
          path: '/', Component: Artboard, index: true, 
        })
      }
    })
  }
}
export const StoryPrivate: StoryObj<typeof meta> = {
  name: 'Private Root',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/private',
      },
      routing: {
        path: '/',
        children: reactRouterOutlet({
          path: '*', Component: Artboard
        })
      }
    })
  }

}
