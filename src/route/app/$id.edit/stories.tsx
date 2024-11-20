import type { Meta, StoryObj } from '@storybook/react';
import EditById, { loader, action } from "./route";
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof EditById> = {
  title: 'Page/App/Edit',
  component: EditById,
  args: {},
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/app/3/edit',
        pathParams: {
          'id': 3
        }
      },
      routing: { path: '/app/:id/edit', loader, action }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
