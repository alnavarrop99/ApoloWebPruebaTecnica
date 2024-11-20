import type { Meta, StoryObj } from '@storybook/react';
import GetById, { loader } from "./route";
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import Main from '~/route/root/main';

const meta: Meta<typeof GetById> = {
  title: 'Page/App/Get',
  component: GetById,
  args: {},
  argTypes: {},
  decorators: [withRouter, (Story) => <Main className='h-[100dvh]'><Story /></Main>],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/3',
        pathParams: {
          'id': 3
        }
      },
      routing: {
        path: ':id',
        loader
      }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
