import type { Meta, StoryObj } from '@storybook/react';
import GetById, { loader } from "./route";
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof GetById> = {
  title: 'Page/App/Character/GetById',
  component: GetById,
  args: {},
  argTypes: {},
  decorators: [withRouter],
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
