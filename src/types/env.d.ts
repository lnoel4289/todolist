interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // ajoutez d'autres variables d'environnement ici
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 