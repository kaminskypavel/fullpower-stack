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

### Dev stack

<table>
<tr>
    <th>Type</th>
    <th>Package</th>
    <th>Version</th>

</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Package manager
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="pnpm" href="https://pnpm.io">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/4253088/196271039-0b998d0d-5867-47bf-a627-e36825175aeb.png"  alt="pnpm"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/pnpm">
            <img src="https://img.shields.io/badge/7.14.2-brightgreen"  alt="pnpm"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Monorepo manager
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="turbo" href="https://turborepo.org/docs">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/4253088/196269627-8da367d0-5e1a-40a6-b261-d0f4e00498c1.png"  alt="turbo"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/turbo">
            <img src="https://img.shields.io/badge/1.6.3-brightgreen"  alt="turbo"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        CSS Framework
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="tailwindcss" href="https://tailwindcss.com/docs/installation">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/4253088/196271439-de4d436c-fb47-4a7e-84a6-fcc01d86026b.png"  alt="tailwindcss"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/tailwindcss">
            <img src="https://img.shields.io/badge/3.2.1-brightgreen"  alt="tailwindcss"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Test runner
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="vitest" href="https://vitest.dev/">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/4253088/196270525-cea1d088-d329-4dba-879d-5e48ef779544.png"  alt="vitest"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/vitest">
            <img src="https://img.shields.io/badge/0.25.3-brightgreen"  alt="vitest"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Testing components
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="@testing-library/react" href="https://testing-library.com/docs/react-testing-library/intro/">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/4253088/196271647-0265eca3-61e4-44c2-8641-fabdb07e875f.png"  alt="@testing-library/react"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/@testing-library/react">
            <img src="https://img.shields.io/badge/13.4.0-brightgreen"  alt="@testing-library/react"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Component library
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="storybook" href="https://storybook.js.org/docs/react/get-started/introduction">
            <img style="width:fit-content; height:50px;" src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png"  alt="storybook"/>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/storybook">
            <img src="https://img.shields.io/badge/7.0.0alpha.54-brightgreen"  alt="storybook"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Lint
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="eslint" href="https://eslint.org/docs/user-guide/getting-started">
            Eslint
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/eslint">
            <img src="https://img.shields.io/badge/7.32.0-yellow"  alt="eslint"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Lint
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="husky" >
            Husky
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/husky">
            <img src="https://img.shields.io/badge/8.0.1-brightgreen"  alt="husky"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Lint
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="lint-staged" >
            Lint-staged
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/lint-staged">
            <img src="https://img.shields.io/badge/13.0.3-brightgreen"  alt="lint-staged"/>
        </a>
    </td>

    
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        Lint
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="prettier" >
            Prettier
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a aria-label="NPM Version" href="https://www.npmjs.com/package/prettier">
            <img src="https://img.shields.io/badge/2.7.1-brightgreen"  alt="prettier"/>
        </a>
    </td>

    
</tr>
</table>

```
pnpx degit https://github.com/kaminskypavel/fullpower-stack my-app
```

install dependeciens (we use pnpm)

```
pnpm install
```


### Todo

- consider moving to Rome tools [Link1](https://twitter.com/sebmck/status/1589987087780302848) [Link2](https://rome.tools/blog/2022/11/08/rome-10.html)

- maybe add a PWA support for [Vite](https://vite-pwa-org.netlify.app/guide/)

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