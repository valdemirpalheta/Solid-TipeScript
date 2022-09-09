import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {
  addEventListenerToClass(clazz: string, event: string, fn: () => void): void {
    console.log(`[${event} on ${clazz}] => ${fn}`);
    console.log(fn);
  }
}