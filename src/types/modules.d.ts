declare module 'jq-web' {
  const jq: {
    promised: any;
  };
  export default jq;
}

declare module 'reaflow/dist/layout/useLayout' {
  export const useLayout: any;
  export type ElkRoot = any;
}

declare module 'reaflow/dist/layout/elkLayout' {
  export const elkLayout: any;
  export type CanvasDirection = any;
}