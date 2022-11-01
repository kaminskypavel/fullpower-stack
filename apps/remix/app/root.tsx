import styles from "./styles/app.css"

import {
  Links,
  LiveReload,
  Outlet,
} from "@remix-run/react";

export function links() {
  return [{rel: "stylesheet", href: styles}]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}