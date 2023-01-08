<p align="center">
  <a href="https://github.com/kaminskypavel/fullpower-stack">
    <img alt="fullpower-stack" src="./docs/logo.png" width="546">
  </a>
</p>

<p align="center">
  an opinionated stack for building full power web applications  
</p>

  <a href="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml"><img alt="GitHub CI Status" src="https://github.com/kaminskypavel/fullpower-stack/actions/workflows/ci.yml/badge.svg"></a>
  <br/>
  <br/>
  <a href="https://codesandbox.io/p/github/kaminskypavel/fullpower-stack/"><img alt="GitHub CI Status" src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox"></a>
<a href="https://stackblitz.com/github/kaminskypavel/fullpower-stack">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
  />
</a>

</p>

### Introduction

This is a monorepo containing a set of packages that can be used to build full power web applications. It is an opinionated stack that is based on the following principles:

- DX (Developer Experience)
- Speed of iteration

---

## Supported Frameworks

<div>
  <a href="https://nextjs.org/docs"><img alt="" aria-label="Next JS" src="./docs/apps/nextjs.svg" height="90"/></a>
  <span aria-hidden>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://vitejs.dev/guide"><img alt="" aria-label="Vite" src="./docs/apps/vite.svg" height="90"/></a>
  <span aria-hidden>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://remix.run/docs/en/v1"><img alt="" aria-label="Remix" src="./docs/apps/remix.png" height="90"/></a>
  <span aria-hidden>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <a href="https://docs.astro.build/en/getting-started"><img alt="" aria-label="Astro" src="./docs/apps/astro.svg" height="80"/></a>
</div>
all apps are built with the same set of packages and tools (see [workspace packages](./packages.json)
and preconfigured to pick changes from shared packages

---

# [Demo](https://codesandbox.io/p/github/kaminskypavel/fullpower-stack/master?file=%2FREADME.md)

watch the demo app in action on [CodeSandBox](https://codesandbox.io/p/github/kaminskypavel/fullpower-stack/master?file=%2FREADME.md)

### Dev stack

<table>
<tr>
    <th align="center" style="text-align:center;">Type</th>
    <th align="center" style="text-align:center;">Package</th>
    <th align="center" style="text-align:center;">Version</th>

</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Package manager
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="pnpm" href="https://pnpm.io">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/21320719?s=200&v=4" alt="pnpm"/>
                    </br>
                pnpm
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/pnpm">
            <img src="https://img.shields.io/badge/7.14.2-brightgreen" alt="pnpm"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Monorepo manager
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="turbo" href="https://turborepo.org/docs">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" alt="turbo"/>
                    </br>
                turbo
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/turbo">
            <img src="https://img.shields.io/badge/1.6.3-brightgreen" alt="turbo"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        CSS Framework
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="tailwindcss" href="https://tailwindcss.com/docs/installation">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4" alt="tailwindcss"/>
                    </br>
                tailwindcss
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/tailwindcss">
            <img src="https://img.shields.io/badge/3.2.1-brightgreen" alt="tailwindcss"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Test runner
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="vitest" href="https://vitest.dev/">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/95747107?s=200&v=4" alt="vitest"/>
                    </br>
                vitest
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/vitest">
            <img src="https://img.shields.io/badge/0.25.4-brightgreen" alt="vitest"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Testing components
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="@testing-library/react" href="https://testing-library.com/docs/react-testing-library/intro/">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/49996085?s=200&v=4" alt="@testing-library/react"/>
                    </br>
                @testing-library/react
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/@testing-library/react">
            <img src="https://img.shields.io/badge/13.4.0-brightgreen" alt="@testing-library/react"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Component library
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="storybook" href="https://storybook.js.org/docs/react/get-started/introduction">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/22632046?s=200&v=4" alt="storybook"/>
                    </br>
                storybook
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/storybook">
            <img src="https://img.shields.io/badge/7.0.0alpha.54-brightgreen" alt="storybook"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Lint
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="eslint" href="https://eslint.org/docs/user-guide/getting-started">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/6019716?s=200&v=4" alt="eslint"/>
                    </br>
                eslint
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/eslint">
            <img src="https://img.shields.io/badge/7.32.0-yellow" alt="eslint"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Lint
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="husky" href="https://typicode.github.io/husky/">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://res.cloudinary.com/practicaldev/image/fetch/s--3HkALzIp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v67mrvpgrqg19k3ifgll.png" alt="husky"/>
                    </br>
                husky
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/husky">
            <img src="https://img.shields.io/badge/8.0.3-brightgreen" alt="husky"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Lint
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="lint-staged" href="https://github.com/okonet/lint-staged">
            Lint-staged
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/lint-staged">
            <img src="https://img.shields.io/badge/13.1.0-brightgreen" alt="lint-staged"/>
        </a>
    </td>

    
</tr>
<tr style="padding-top:10px;">
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        Lint
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a style="display: inline-flex;align-items: center;padding-top:10px;
    flex-direction: column; font-size:18px" aria-label="prettier" href="https://prettier.io/docs/en/index.html">
            <img style="border-radius:6px;width:50px;height:50px; " src="https://avatars.githubusercontent.com/u/25822731?s=200&v=4" alt="prettier"/>
                    </br>
                prettier
        </a>
    </td>
    <td align="center" style="text-align:center;white-space: nowrap; width: 75.0px; height: 75.0px">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/prettier">
            <img src="https://img.shields.io/badge/2.7.1-brightgreen" alt="prettier"/>
        </a>
    </td>

    
</tr>
</table>

# Install

```
pnpx degit https://github.com/kaminskypavel/fullpower-stack my-app
```

install dependeciens (we use pnpm)

```
pnpm install
```

# Docker

```
pnpm docker:up
```

this will start all docker containers

- Backend-Server -  <http://localhost:4000>
- Vite - <http://localhost:3000>
- Nextjs - <http://localhost:3001>
- Astro - <http://localhost:3002>
- Remix.run - <http://localhost:3003>

### Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/kaminskypavel>
            <img src=https://avatars.githubusercontent.com/u/4253088?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Pavel 'PK' Kaminsky/>
            <br />
            <sub style="font-size:14px"><b>Pavel 'PK' Kaminsky</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/vithano>
            <img src=https://avatars.githubusercontent.com/u/11342649?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=vithano/>
            <br />
            <sub style="font-size:14px"><b>vithano</b></sub>
        </a>
    </td>
