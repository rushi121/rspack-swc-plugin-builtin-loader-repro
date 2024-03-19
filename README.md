## Repro
```
npm install -g pnpm
```

Run rspack with builtin swc loader and swc plugin
```
npm run build:builtin
```
This will give error "Module parse failed"

If we use swc-loader, things are working fine
```
npm run build
```

If we use don't use swc plugins, things are working fine
```
npm run build:noplugins
```
