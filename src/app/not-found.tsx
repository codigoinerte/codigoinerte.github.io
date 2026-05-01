import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '1rem', color: '#fff', background: '#0f172a' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 700, margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.25rem' }}>Página no encontrada</p>
      <Link href="/" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Volver al inicio
      </Link>
    </div>
  )
}
