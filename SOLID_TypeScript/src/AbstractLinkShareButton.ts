import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  
  constructor(public clazz: string, public url: string, public eventHandler: EventHandler) {
    super(clazz, eventHandler);
  }

  abstract createLink(): string;

  createAction(): () => void {
    const link: string = this.createLink();
    return () => window.open(link);
  }
}