import Header from "../components/Header";
import Main from "../components/Main";
import '../index.css';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
            <Header />
            <Main />
    </div>
  )
}
