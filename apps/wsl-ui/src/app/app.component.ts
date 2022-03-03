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
  constructor(public service: DockerService, private cd: ChangeDetectorRef) {
  }

  private getList(){
    this.service.getContainers().subscribe(val => {
      this.data = val;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
    this.getList();
  }

  stop(id: string){
    this.service.stopContainer(id).subscribe(_ => {
      this.getList();
    })
  }
}
