// reaction.js
const Reaction = {
  createElement: (tag, props, ...children) => {
    const elem = document.createElement(tag);
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.startsWith("on") && typeof value === "function") {
          elem.addEventListener(attrName.substring(2).toLowerCase(), value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      }
      elem.appendChild(child);
    }
    return elem;
  },
};
export default Reaction;
