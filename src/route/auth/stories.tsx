import type { Meta, StoryObj } from '@storybook/react';
import Auth from "./route";
import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import Main from '../root/main';
import * as route from '~/route'

const meta: Meta<typeof Auth> = {
  title: 'Page/Auth',
  component: Auth,
  args: {},
  argTypes: {},
  decorators: [withRouter, (Story) => <Main className='h-[90dvh]'><Story /></Main>],
    parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/auth',
      },
      routing: reactRouterOutlets([
        { path: '/auth' },
        { path: '/auth/login', action: route['auth/login'].action },
        { path: '/auth/sigin', action: route['auth/logout'].action },
      ]) ,
    })
  }
}
export default meta;

export const StoryAuth: StoryObj<typeof meta> = {
  name: 'Story'
};

