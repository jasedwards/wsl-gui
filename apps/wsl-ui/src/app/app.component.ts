import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DockerService } from './docker.service';
import { ContainerInfo } from '@wsl-gui/models';

@Component({
  selector: 'wsl-gui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'wsl-ui';
  data: ContainerInfo[];
  loading = true;
  constructor(public service: DockerService, private cd: ChangeDetectorRef) {
  }

  private getList(){
    this.service.getContainers().subscribe(val => {
      this.data = val;
      this.loading = false;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
    this.getList();
  }

  stopStart(id: string, action: string){
    this.loading = true;
    this.cd.detectChanges();
    this.service.stopStartContainer(id, action).subscribe(_ => {
      this.getList();
    })
  }
}
