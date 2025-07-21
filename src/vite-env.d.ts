/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_LIMIT: string;
  readonly VITE_DISABLE_EXTERNAL_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}