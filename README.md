# typewiz-webpack-demo

Demo of integrating [TypeWiz](https://github.com/urish/typewiz) with [WebPack](https://webpack.js.org/)

## Run Demo

```
yarn
yarn start
```

This will perdiocally discover type information and collect it to a file called `collected-types.json`. The collected type information will also be displayed on screen.

After you stop webpack, run `yarn apply-types`, and you will see the new types added inside `src/main.ts`.
