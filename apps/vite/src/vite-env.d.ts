/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DOCKER: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
