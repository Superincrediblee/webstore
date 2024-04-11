import Appbar from '@/component/appbar';
import './globals.css';
import Sidebar from '@/component/sidebar';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Appbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
