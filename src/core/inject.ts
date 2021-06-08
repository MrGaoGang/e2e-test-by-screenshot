export function injectClick(callback: EventCallback) {
  window.addEventListener("click", (e: any) => {
    const targetEvent = e.target;
    if (targetEvent) {
      callback({
        type: CaptureEventType.CLICK,
        scrollTop: document.documentElement.scrollTop,
        id: targetEvent?.id,
        class: targetEvent?.className,
        dataset: targetEvent?.dataset,
      });
    }
  });
}
