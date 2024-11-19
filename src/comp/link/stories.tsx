import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<React.ComponentPropsWithRef<'a'>> = {
  title: 'Components/Link',
  component: (props) => <a  {...props} />,
  args: { 
    children: 'link'
  },
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
