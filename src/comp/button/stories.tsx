import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<React.ComponentPropsWithRef<'button'>> = {
  title: 'Components/Button',
  component: (props) => <button {...props} />,
  args: {
    children: 'button',
    onClick: fn
  },
  argTypes: {
    className: {
      control: 'inline-radio',
      options: ['outline', 'link', 'btn'] as const,
      mapping: {
        'outline': 'btn-outline',
        'link': 'btn-link',
        'btn': undefined
      }
    }
  }
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
