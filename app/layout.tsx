import React from 'react';
import './globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="w-full min-h-screen p-5 bg-root md:p-10 box-border">
          {children}
        </body>
      </html>
    )
  }