
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/seanrattana/Documents/GitHub/mera-web-platform/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/seanrattana/Documents/GitHub/mera-web-platform/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/seanrattana/Documents/GitHub/mera-web-platform/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/seanrattana/Documents/GitHub/mera-web-platform/src/pages/index.js")),
  "component---src-pages-team-js": preferDefault(require("/Users/seanrattana/Documents/GitHub/mera-web-platform/src/pages/team.js"))
}

