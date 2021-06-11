import { EventCallback } from "../types/index";
import { getSelector } from "../utils/index";
export function injectClick(callback: EventCallback) {
  window.addEventListener("click", (e: any) => {
    const targetEvent: Element = e.target;    
    if (
      targetEvent &&
      targetEvent.id !== "e2e-test-by-screenshot-btn" &&
      targetEvent.id !== "e2e-test-by-screenshot-export-btn"
    ) {
      callback({
        type: "CLICK",
        scrollTop: document.documentElement.scrollTop,
        selector: getSelector(targetEvent),
      });
    }
  });
}
