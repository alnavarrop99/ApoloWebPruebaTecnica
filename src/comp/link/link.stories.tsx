import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<React.ComponentPropsWithRef<'a'>> = {
  title: 'Components/Link',
  component: (props) => <a  {...props} />,
  args: { 
    children: 'link'
  },
  argTypes: {
    className: {
      control: 'inline-check',
      options: ['hover'],
      mapping: {
        'hover': 'link-hover'
      }
    }
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
