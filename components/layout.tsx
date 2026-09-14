import Header from './header';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] pb-12">{children}</main>
      <Footer />
    </>
  );
}