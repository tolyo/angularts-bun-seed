export type Child =
  | string
  | number
  | boolean
  | null
  | undefined
  | { toString(): string };

function normalizeChildren(children: any): Child[] {
  if (children == null) return [];
  return Array.isArray(children) ? children : [children];
}

export function jsx(type: any, props: any) {
  const children = normalizeChildren(props?.children);
  const attrs = Object.entries(props || {})
    .filter(([key]) => key !== "children")
    .map(([key, val]) => ` ${key}="${String(val)}"`)
    .join("");

  const inner = children
    .map((c) =>
      typeof c === "string" ? c : c?.toString?.() ?? ""
    )
    .join("");

  return `<${type}${attrs}>${inner}</${type}>`;
}

export const jsxs = jsx;

// Required dev-only transform:
export function jsxDEV(
  type: any,
  props: any,
  key: any,
  isStaticChildren: boolean,
  source: any,
  self: any
) {
  // ignore DEV-only params — just call jsx normally
  return jsx(type, props);
}

export const Fragment = (props: any) => props.children?.toString?.() ?? "";
