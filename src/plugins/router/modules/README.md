# Name convention for route modules
Needs for loading correct order of the routes.

| mask                   | regex                |
|------------------------|----------------------|
| `{priority}_{name}.js` | `/\/\d{2}_\S+\.js$/` |

```
// Good (these routes will be loaded):

00_app.js
00_auth.js
01_applications.js
02_application.campaigns.js
02_application.creatives.js
02_application.promos.js
02_application.traders.js
99_fallback.js
```

```
// Bad (these routes will not be loaded):

00-app.js
00.app.js
00,app.js
100app.js
app.js
```
