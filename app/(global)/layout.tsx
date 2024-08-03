import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/navigation/header";

export default function GlobalLayout({ children }: {
    children: React.ReactNode;
  }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
