import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter, reactRouterOutlet } from 'storybook-addon-remix-react-router'

import Nav from './nav'
import Footer from './footer'
import Main from './main'
import Page from './route'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<React.ComponentPropsWithRef<'button'>> = {
  title: 'Page/Root',
  component: () => <></>,
}
export default meta;

export const StoryNav: StoryObj<typeof Nav> = {
  name: 'Navigation',
  render: Nav,
  decorators: withRouter(),
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/'
      },
      routing: {
        path: '/'
      }
    })
  }
};
export const StoryFooter: StoryObj<typeof Footer> = {
  name: 'Footer', 
  render: Footer
};
export const StoryMain: StoryObj<typeof Main> = { 
  name: 'Main', 
  render: Main,
  args: { children: <Artboard /> },
  argTypes: { }
};
export const StoryPage: StoryObj<typeof Page> = { 
  name: 'Page',
  render: Page,
  decorators: [withRouter, (Story) => <body className='container min-h-[100dvh] grid grid-rows-cols grid-rows-[min-content,1fr,min-content]'><Story /></body>],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/nav'
      },
      routing: {
        path: '/',
        children: reactRouterOutlet({
          path: '*',
          element: <Artboard className='h-full rounded-none' />,
        }),
      },
    })
  }
};
