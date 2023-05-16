import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
    return(
    <>
    <div className="content-wrapper">
        <Header />  
        <Outlet />
    </div>
    <Footer />
    </>
    )
}

export default App