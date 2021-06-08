import { injectClick } from "./inject";
import UI from "../ui/index";
class E2EScreenShot {
  static init: () => void;

  constructor() {
    this.initBtn();
    this.registerEvent();
  }

  initBtn() {
    window.onload = () => {
      UI(this.doSreenshot);
    };
  }

  registerEvent() {
    injectClick(this.eventsCollect);
  }

  eventsCollect(event: BaseEvent) {}

  doSreenshot() {}
}

E2EScreenShot.init = (function () {
  let instance: E2EScreenShot;
  return function () {
    if (!instance) {
      instance = new E2EScreenShot();
    }
    return instance;
  };
})();

export function init() {
  E2EScreenShot.init();
}
