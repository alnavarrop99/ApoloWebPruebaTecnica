import type { Meta, StoryObj } from '@storybook/react';
import All, { loader } from "./route";
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof All> = {
  title: 'Page/App/Character/All',
  component: All,
  args: {},
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/character/',
        searchParams: {
          page: '1'
        }
      },
      routing: {
        path: '/character',
        loader
      }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
