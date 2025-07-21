export const NODE_DIMENSIONS = {
  ROW_HEIGHT: 24, // Regular row height
  PARENT_HEIGHT: 36, // Height for parent nodes
} as const;

export const SUPPORTED_LIMIT = +(import.meta.env.VITE_NODE_LIMIT as string);
