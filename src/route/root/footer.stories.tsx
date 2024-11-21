import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'
import { Footer, PrivateFooter } from './footer'
import { twMerge } from 'tailwind-merge';

const Artboard = ({ className }: Pick<React.ComponentPropsWithRef<'div'>, 'className'>) => <div className={twMerge('artboard phone-1 artboard-demo !w-full !h-[100dvh]', className)}>320×568</div>

const meta: Meta<typeof Footer> = {
  title: 'Page/Root/Footer',
  component: Footer,
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

export const Story: StoryObj<typeof meta> = {
  name: 'Footer',
};

export const StoryPrivateFooter: StoryObj<typeof PrivateFooter> = {
  name: 'Private Footer',
  render: PrivateFooter,
  decorators: [ (Story) => <div> <Artboard /> <Story /></div> ]
};

