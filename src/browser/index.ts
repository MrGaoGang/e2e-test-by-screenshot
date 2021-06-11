import { BaseEvent, UICaseInfo } from "../types/index";
import { injectClick } from "./inject";
import UI, { save } from "./ui";
const nowPage = () => location.origin + location.pathname;
class EventCollect {
  static init: () => void;
  caseInfo: UICaseInfo;
  constructor() {
    this.caseInfo = [];
    this.registerEvent();
  }

  pushEventToCase(event: BaseEvent) {
    const page = nowPage();
    const has = this.caseInfo.filter((ele) => ele.page === page);
    if (has.length === 0) {
      this.caseInfo.push({
        page: page,
        events: [event],
      });
      return;
    }

    has[0].events.push(event);
  }

  exportCases() {
    // 创建隐藏的可下载链接
    var eleLink = document.createElement("a");
    eleLink.download = "cases.json";
    eleLink.style.display = "none";    
    // 字符内容转变成blob地址
    var blob = new Blob([JSON.stringify(this.caseInfo)]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    this.caseInfo = [];

  }

  registerEvent() {
    window.onload = () => {
      UI(() => {
        this.pushEventToCase({
          type: "SCREENSHOT",
          scrollTop: document.documentElement.scrollTop,
          selector: "",
        });
      });
      save(this.exportCases.bind(this));
      this.caseInfo.push({
        page: nowPage(),
        events: [],
      });
    };
    injectClick((event: BaseEvent) => {
      this.pushEventToCase(event);
    });
  }
}

EventCollect.init = (function () {
  let instance: EventCollect;
  return function () {
    if (!instance) {
      instance = new EventCollect();
    }
    return instance;
  };
})();

EventCollect.init();
