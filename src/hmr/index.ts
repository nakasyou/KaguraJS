interface ExtendImportMeta {
  hot: any
}
type ExtendedImportMeta = ImportMeta & ExtendImportMeta

if ((import.meta as ExtendedImportMeta).hot) {
  (import.meta as ExtendedImportMeta).hot.accept((newModule: any) => {
    if (newModule) {
      console.log('updated: count is now ', newModule)
    }
  })
}
