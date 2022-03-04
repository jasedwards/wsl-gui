interface Window {
  api:{
    getImages: ()=>void;
    getContainers: ()=> void;
    electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => void;
    stopStartContainer: (containerId: string, action: string) => void;
  }
}
