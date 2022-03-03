import { spawn, exec } from "child_process";
export class WslProcess {
  static execute(command: string){
    // return spawn('wsl.exe',[...['-u','root', 'docker'],...command.split(' ')]);
    // return spawn('wsl.exe',['-u','root', `docker ${command}`]);
    return exec(`wsl.exe -u root docker ${command}`);
  }

}
