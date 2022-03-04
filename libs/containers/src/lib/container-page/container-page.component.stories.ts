import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ContainerStates } from '@wsl-gui/models';
import { CanActionPipe } from '../can-action.pipe';
import { ContainerItemComponent } from '../container-item/container-item.component';
import { ContainerPageComponent } from './container-page.component';
import { Observable, of } from 'rxjs';
import { DockerService } from '../../../../facades/src';
class MockDockerService {
  getContainers() {
    return of([
      {
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
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '2',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '3',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Restarting,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '4',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Exited,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '5',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '6',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '7',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '8',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
      {
        Command: '',
        CreatedAt: '',
        ID: '9',
        Image: '',
        Labels: '',
        LocalVolumes: '',
        Mounts: '',
        Names: 'Item 2',
        Networks: 'bridge',
        Ports: '',
        RunningFor: '3 days',
        Size: '13gb',
        State: ContainerStates.Paused,
        Status: 'Up For 3 Days',
      },
    ]);
  }

  performContainerAction(id: string, action: string): Observable<string> {
    return of(id);
  }
}

export default {
  title: 'containers / container page',
  component: ContainerPageComponent,
  decorators:[
    moduleMetadata({
      declarations: [ContainerItemComponent, CanActionPipe, ContainerPageComponent],
      providers: [{provide: DockerService, useClass: MockDockerService}]
    })
  ]
} as Meta<ContainerPageComponent>;

const Template: Story<ContainerPageComponent> = (args: ContainerPageComponent) => ({
  props:args
});

export const Primary = Template.bind({});
Primary.args = {
}
