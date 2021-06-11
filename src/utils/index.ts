export function getSelector(target: Element): string {
  const id = target.id;

  if (id) {
    // 如果为数字的话需要使用属性选择器
    if (/^[0-9]+/.test(id)) {
      return `[id='${id}']`;
    }
    return `#${id}`;
  }
  const classes = [].slice.call(target.classList);
  if (classes.length > 0)
    if (target.parentElement)
      return getSelector(target.parentElement) + " ." + classes.join(".") + " ";

  if (target.parentElement) {
    return getSelector(target.parentElement) + target.tagName.toLowerCase();
  } else {
    return target.tagName.toLowerCase();
  }
}
