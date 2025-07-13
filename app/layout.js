import './globals.css'

export const metadata = {
  title: 'Sweet Delights - Coffee & Bakery',
  description: 'Discover the finest coffee and freshly baked pastries at Sweet Delights. Artisan breads, custom cakes, and specialty coffee in a cozy atmosphere.',
  keywords: 'bakery, coffee, cakes, pastries, artisan bread, custom cakes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream">
        {children}
      </body>
    </html>
  )
} 