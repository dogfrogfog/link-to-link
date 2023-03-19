import './globals.css'

export const metadata = {
  title: 'Link to link',
  description: '<Service to manage your bio>',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
