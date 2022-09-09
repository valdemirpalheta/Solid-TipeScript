import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
  
  constructor(public clazz: string, public eventHandler: EventHandler) { }

  abstract createAction(): () => void;

  bind(): void {
    const action: () => void = this.createAction();
    this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
  }
}