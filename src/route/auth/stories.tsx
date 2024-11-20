import type { Meta, StoryObj } from '@storybook/react';
import Auth from "./route";
import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import Main from '../root/main';

import { 'auth/login' as login,  'auth/logout' as sigin, app, root } from '~/route'

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
        { path: '/app', Component: app.default },
        { path: '/root', Component: root.default },
        { path: '/auth/login', action: login.action },
        { path: '/auth/sigin', action: sigin.action },
      ]) ,
    })
  }
}
export default meta;

export const StoryAuth: StoryObj<typeof meta> = {
  name: 'Story'
};

