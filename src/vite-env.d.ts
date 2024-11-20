/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APOLO_API_URL: string ,
  readonly APOLO_STORYBOOK_URL: string ,
}
interface ImportMeta {
   readonly env: ImportMetaEnv
}
