interface Window {
  api:{
    getImages: ()=>void;
    getContainers: ()=> void;
    electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => void;
    stopContainer: (containerId: string) => void;
  }
}
