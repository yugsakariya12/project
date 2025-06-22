import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "../components/LeftSideBar";
import MainContainer from "../components/MainContainer";
import RightSideBar from "../components/RightSideBar";
import BottomBar from "../components/BottomBar";
// app/layout.jsx
import '../globals.css';


export const metadata = {
  title: "Vibe Zone",
  description: "Next 14 Social Media App",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-amber-900"> 
          <main className="flex flex-row ">
            <div className="">
          <LeftSideBar/></div>
          <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar/>
           </main>
           <BottomBar/>
        </body>
      </html>
    </ClerkProvider>
  );
}