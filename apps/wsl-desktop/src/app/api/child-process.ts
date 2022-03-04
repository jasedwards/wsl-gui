import { spawn } from 'child_process';
export class ChildProcess {
  private static process: any;
  static start() {
    ChildProcess.process = spawn('wsl.exe', ['-u', 'root']);
  }
  static getProcess() {
    if (!ChildProcess.process) {
      ChildProcess.process = spawn('wsl.exe', ['-u', 'root']);
    }

    return ChildProcess.process;
  }
}
