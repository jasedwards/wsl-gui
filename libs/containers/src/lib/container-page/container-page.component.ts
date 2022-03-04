import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DockerService } from '@wsl-gui/facades';
import { ContainerInfo } from '@wsl-gui/models';

@Component({
  selector: 'wsl-gui-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {
  data: ContainerInfo[] = [];
  loading = true;
  constructor(private service: DockerService, private cd: ChangeDetectorRef) { }

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

  action(id: string, action: string){
    this.loading = true;
    this.cd.detectChanges();
    this.service.performContainerAction(id, action).subscribe(_ => {
      this.getList();
    })
  }
}
