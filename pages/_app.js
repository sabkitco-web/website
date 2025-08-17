import "@/styles/globals.css";
import { Overpass } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});


export default function App({ Component, pageProps }) {
  return  <main className={overpass.className}>
      <Component {...pageProps} />
      <ToastContainer/>
    </main>;
}
