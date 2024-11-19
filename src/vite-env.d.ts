/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APOLO_API_URL: string ,
}
interface ImportMeta {
   readonly env: ImportMetaEnv
}
