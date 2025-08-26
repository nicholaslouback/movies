export function buildUrl(path: string, params?: Record<string, string | number>) {
  if (!params) return path
  return Object.keys(params).reduce(
    (acc, key) => acc.replace(`:${key}`, String(params[key])),
    path
  )
}