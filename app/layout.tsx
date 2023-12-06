import '@/app/ui/global.css';
import { Poppins } from 'next/font/google';

// Call Poppins outside of the JSX expression and assign it to a constant
const poppinsFont = Poppins({ weight: ['400'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
