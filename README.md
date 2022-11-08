
<p align="center">
  <a href="https://github.com/kaminskypavel/fullpower-stack">
    <img alt="fullpower-stack" src="./docs/logo.png" width="546">
  </a>
</p>

<p align="center">
  an opinionated stack for building full power web applications  
</p>

<p align="center">
  <a href="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml"><img alt="GitHub CI Status" src="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml/badge.svg"></a>
</p>

### Intorduction

This is a monorepo containing a set of packages that can be used to build full power web applications. It is an opinionated stack that is based on the following principles:

- DX (Developer Experience)
- Speed of iteration

---

## Supported Frameroks

<br/>

[<img src="./docs/apps/nextjs.svg" height="90">](./apps/nextjs/) [<img src="./docs/apps/vite.svg" height="90">](./apps/vite/) [<img src="./docs/apps/remix.png" height="90">](./apps/remix/)

all apps are built with the same set of packages and tools (see [workspace packages](./packages.json)
and preconfigured to pick changes from shared packages

---

### Dev Tool (WIP)

| Framework                   | FullPower Stack                                                                                                                                                                                | Implemented | Version            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| Package Manager             | ![image](https://user-images.githubusercontent.com/4253088/196271039-0b998d0d-5867-47bf-a627-e36825175aeb.png) [pnpm](https://pnpm.io/)                                                        | ✅          | \*                 |
| Monorepo                    | <img src="https://user-images.githubusercontent.com/4253088/196269627-8da367d0-5e1a-40a6-b261-d0f4e00498c1.png" height="40">[Turborepo](https://turborepo.org/docs)                            | ✅          | 1.4.0              |
| Frontend (Framework)        | <img src="https://user-images.githubusercontent.com/4253088/196269841-32444c2d-7798-471d-8c7d-455323680297.png" width="100vw" height="40">[Nextjs](https://nextjs.org/docs/getting-started)    | ✅          | 12                 |
| Frontend (css)              | ![image](https://user-images.githubusercontent.com/4253088/196271439-de4d436c-fb47-4a7e-84a6-fcc01d86026b.png)[Tailwindcss](https://tailwindcss.com/docs/installation)                         | ✅          | 3.1.8              |
| Server-Client Communication | tRPC                                                                                                                                                                                           |✅ | 10.0.0
| Backend                     | express                                                                                                                                                                                        | ✅ |4.18.2
| ORM                         | prisma                                                                                                                                                                                         |
| Testing (Framework)         | ![image](https://user-images.githubusercontent.com/4253088/196270525-cea1d088-d329-4dba-879d-5e48ef779544.png)[vitest](https://vitest.dev/)                                                    | ✅          | 0.24.3             |
| Testing (Components)        | ![image](https://user-images.githubusercontent.com/4253088/196271647-0265eca3-61e4-44c2-8641-fabdb07e875f.png)[testing-library](https://testing-library.com/docs/react-testing-library/intro/) | ✅          | 13.4.0             |
| Testing (Components)        | ~~[Storybook]~~ [waiting on release of version 7](https://storybook.js.org/blog/first-class-vite-support-in-storybook/)                                                                        | ⚠️          | ~~7.0.0-alpha.38~~ |
| Testing (Components)        | ![image](https://user-images.githubusercontent.com/4253088/196270689-6216be78-82a5-4800-b3ee-81fe47792360.png)[ladle](https://ladle.dev/docs/)                                                 | ✅          | 2.4.4              |
| Testing (Mocking)           | MSW                                                                                                                                                                                            |
| Lint                        | eslint+ prettier                                                                                                                                                                               | ✅
| Git                         | lint-staged + husky                                                                                                                                                                            | ✅
| CI                          | Github Actions                                                                                                                                                                                 | ✅

### Optional Testing : Wallaby.js

_Wallaby.js: Select Configuration > Automatic Configuration \<closest project in mono-repo\>_

### Todo

- consider moving to Rome tools [Link1](https://twitter.com/sebmck/status/1589987087780302848) [Link2](https://rome.tools/blog/2022/11/08/rome-10.html)

- maybe add a PWA support for [Vite](https://vite-pwa-org.netlify.app/guide/)
