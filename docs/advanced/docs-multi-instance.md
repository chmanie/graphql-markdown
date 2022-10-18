---
pagination_prev: null
pagination_next: null
---

# Docs multi-instance

In this use case, you have multiple sets of documentation (a.k.a. [Docs Multi-instance](https://docusaurus.io/docs/docs-multi-instance)), then you need to add a reference to `sidebar-schema.js` into the dedicated instance of `@docusaurus/plugin-content-docs`:

```js
plugins: [
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "api",
      path: "api",
      routeBasePath: "api",
      sidebarPath: require.resolve("./api/sidebar-schema.js"),
      // ... other options
    },
  ],
],
```