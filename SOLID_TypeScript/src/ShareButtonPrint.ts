import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonPrint extends AbstractShareButton {
  
  constructor(public clazz: string, public eventHandler: EventHandler) {
    super(clazz, eventHandler);
  }

  createAction(): () => void {
    return () => window.print();
  }
}