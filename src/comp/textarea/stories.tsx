import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<React.ComponentPropsWithRef<'textarea'>> = {
  title: 'Components/Textarea',
  component: (props) => <textarea {...props} />,
  args: {
    placeholder: 'texto',
    onChange: fn
  },
  argTypes: {}
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
