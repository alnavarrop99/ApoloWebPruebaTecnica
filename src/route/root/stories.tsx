import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import Nav from './nav'
import Footer from './footer'
import Main from './main'
import Page from './route'

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
  render: Main
};
export const StoryPage: StoryObj<typeof Page> = { 
  name: 'Page',
  render: Page
};
