import { ContainerItemComponent } from './container-item.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContainerStates } from '@wsl-gui/models';
import { CanActionPipe } from '../can-action.pipe';

export default {
  title: 'containers / container item',
  component: ContainerItemComponent,
  decorators:[
    moduleMetadata({
      declarations: [ContainerItemComponent, CanActionPipe]
    })
  ]
} as Meta<ContainerItemComponent>;

const Template: Story<ContainerItemComponent> = (args: ContainerItemComponent) => ({
  props:args
});

export const Primary = Template.bind({});
Primary.args = {
  container: {
    Command: '',
    CreatedAt: '',
    ID: '1',
    Image: '',
    Labels: '',
    LocalVolumes: '',
    Mounts: '',
    Names: 'Item 1',
    Networks: 'bridge',
    Ports: '',
    RunningFor: '3 days',
    Size: '13gb',
    State: ContainerStates.Running,
    Status: 'Up For 3 Days',
  }
}
