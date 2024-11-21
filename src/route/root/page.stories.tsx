import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter, reactRouterOutlet } from 'storybook-addon-remix-react-router'
import Page from './route'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<typeof Page> = {
  title: 'Page/Root',
  component: Page,
  decorators: [withRouter()],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/',
        pathParams: {
          '*': 'outlet'
        }
      },
      routing: {
        path: '/',
        children: reactRouterOutlet({
          path: ':*', Component: Artboard
        })
      }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = {}
