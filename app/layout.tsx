import React from 'react';
import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="w-full min-h-screen px-10 py-10 bg-root">
          {children}
        </body>
      </html>
    )
  }