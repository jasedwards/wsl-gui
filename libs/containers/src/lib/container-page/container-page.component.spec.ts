import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPageComponent } from './container-page.component';
import { ContainerItemComponent } from '../container-item/container-item.component';
import { CanActionPipe } from '../can-action.pipe';
import { NglSpinnersModule } from 'ng-lightning';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ContainerStates } from '@wsl-gui/models';
import { DockerService } from '@wsl-gui/facades';
import { provideMockStore } from '@ngrx/store/testing';

describe('ContainerPageComponent', () => {
  let component: ContainerPageComponent;
  let fixture: ComponentFixture<ContainerPageComponent>;

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
      ]);
    }

    performContainerAction(id: string, action: string): Observable<string> {
      return of(id);
    }

    getSettings() {
      return Promise.resolve();
    }

    get settings() {
      return { refresh: 0.5 };
    }
  }

  const containerState = {
    Loading: false,
    Containers: [
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
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, NglSpinnersModule],
      declarations: [
        ContainerPageComponent,
        ContainerItemComponent,
        CanActionPipe,
      ],
      providers: [
        { provide: DockerService, useClass: MockDockerService },
        provideMockStore({ initialState: containerState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
