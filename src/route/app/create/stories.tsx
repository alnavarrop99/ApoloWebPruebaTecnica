import type { Meta, StoryObj } from '@storybook/react';
import Create, { action } from "./route";
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof Create> = {
  title: 'Page/App/Character/Create',
  component: Create,
  args: {},
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/app/create',
      },
      routing: { path: '/app/create', action, }
    })
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
