import { CanActionPipe } from './can-action.pipe';
import { ContainerStates } from '@wsl-gui/models';

describe('CanActionPipe', () => {
  const pipe = new CanActionPipe();
  const run = (state: ContainerStates, expected: boolean[]) => {
    const actions = ['start', 'restart', 'stop', 'pause', 'unpause'];
    for (let i = 0; i < actions.length; i++) {
      expect(pipe.transform(actions[i], state)).toBe(expected[i]);
    }
  };
  it('returns correct results for Created', () => {
    run(ContainerStates.Created, [true, false, false, false, false]);
  });

  it('returns correct results for Restarting', () => {
    run(ContainerStates.Restarting, [false, true, true, true, false]);
  });

  it('returns correct results for Running', () => {
    run(ContainerStates.Running, [false, true, true, true, false]);
  });

  it('returns correct results for Removing', () => {
    run(ContainerStates.Removing, [false, false, false, false, false]);
  });

  it('returns correct results for Paused', () => {
    run(ContainerStates.Paused, [false, true, true, false, true]);
  });

  it('returns correct results for Exited', () => {
    run(ContainerStates.Exited, [true, false, false, false, false]);
  });

  it('returns correct results for Dead', () => {
    run(ContainerStates.Dead, [false, false, false, false, false]);
  });
});
