 import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  
  constructor(public clazz: string, public url: string, public eventHandler: EventHandler) {
    super(clazz, url, eventHandler);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}