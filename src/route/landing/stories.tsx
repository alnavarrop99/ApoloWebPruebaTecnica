import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'
import Landing, { loader } from './route'
import Main from '../root/main';

const meta: Meta<React.ComponentPropsWithRef<'button'>> = {
  title: 'Page/Landing',
  component: Landing,
}
export default meta;

export const Story: StoryObj<typeof Landing> = {
  render: Landing,
  args: { },
  argTypes: { },
  decorators: [withRouter, (Story) => <Main className='h-[100dvh]'><Story /></Main>],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/'
      },
      routing: {
        path: '/', loader
      }
    })
  }
};
