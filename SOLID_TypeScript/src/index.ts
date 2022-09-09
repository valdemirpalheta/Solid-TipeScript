import AbstractShareButton from './AbstractShareButton';
import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';
import EventHandler from './EventHandler';

const link: string = "https://www.youtube.com/channel/UCzbwqfapmLt3nIh62pyKkbw";
const eventHandler: EventHandler = new DOMEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(".btn-twitter", link, eventHandler);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(".btn-facebook", link, eventHandler);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedIn(".btn-linkedin", link, eventHandler);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(".btn-print", eventHandler);
print.bind();
