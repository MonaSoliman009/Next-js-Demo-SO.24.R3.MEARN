import { Roboto } from 'next/font/google'

import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/footer";


const roboto=Roboto({
  weight:'400',
  subsets:['latin'],
  display:'swap'
})


export const metadata = {
  // title: "MEARN Next App",

  title:{
    template:"%s MEARN Next App",
    default:"MEARN Next App"
  },
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <div style={{}}>
        {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );


}
