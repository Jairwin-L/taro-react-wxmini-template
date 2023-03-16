export function getPagePreFix(
  page: 'main' | 'mine' | 'address' | 'collection' | 'change-password',
) {
  return `pages/${page}/index`;
}
