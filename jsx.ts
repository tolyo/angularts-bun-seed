export function jsx(tag: any, props: any) {
    let { children = [] } = props ?? {};
    if (!Array.isArray(children)) children = [children];
  
    const attrs = Object.entries(props || {})
      .filter(([key]) => key !== "children")
      .map(([key, value]) => ` ${key}="${String(value)}"`)
      .join("");
  
    const inner = children
      .map((child: any) =>
        typeof child === "string" ? child : child?.toString?.() ?? ""
      )
      .join("");
  
    return `<${tag}${attrs}>${inner}</${tag}>`;
  }
  
  export const jsxs = jsx; // required for TSX transform
  export const Fragment = ({ children }: any) => children.join("");
  