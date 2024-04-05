"use client";

import { ConfigProvider } from "antd";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Ass Test</title>
      </head>
      <body>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
