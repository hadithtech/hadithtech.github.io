import '../globals.css';
import './dashboard.css';

export const metadata = {
  title: 'Dashboard',
  description: '???',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
