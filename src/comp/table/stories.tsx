import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<React.ComponentPropsWithRef<'table'>> = {
  title: 'Components/Table',
  component: (props) => <table {...props} >
    <thead> <tr> <th>col-h1</th> <th>col-h2</th> <th>col-h3</th> </tr> </thead>
    <tbody> 
      <tr> <td>col-1-1</td> <td>col-2-1</td> <td>col-3-1</td> </tr>
      <tr> <td>col-2-1</td> <td>col-2-2</td> <td>col-2-3</td> </tr>
      <tr> <td>col-3-1</td> <td>col-3-2</td> <td>col-3-3</td> </tr>
      <tr> <td>col-4-1</td> <td>col-4-2</td> <td>col-4-3</td> </tr>
      <tr> <td>col-5-1</td> <td>col-5-2</td> <td>col-5-3</td> </tr>
      <tr> <td>col-6-1</td> <td>col-6-2</td> <td>col-6-3</td> </tr>
    </tbody>
    <tfoot> <tr> <td>col-f1</td> <td>col-f2</td> <td>col-f3</td> </tr> </tfoot>
  </table>,
  args: { },
  argTypes: {}
}
export default meta;

export const Story: StoryObj<typeof meta> = { };
