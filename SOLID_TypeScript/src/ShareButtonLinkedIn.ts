import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
  
  constructor(public clazz: string, public url: string, public eventHandler: EventHandler) {
    super(clazz, url, eventHandler);
  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}
