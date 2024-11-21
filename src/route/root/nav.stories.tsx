import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'
import Nav from './nav'

const meta: Meta<typeof Nav> = {
  title: 'Page/Root/Nav',
  component: Nav,
  decorators: [withRouter()],
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
