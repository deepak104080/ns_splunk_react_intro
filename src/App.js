import './css/App.css';
import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Launchpad from './Launchpad';
import Fees from './Fees';
import {Container} from 'react-bootstrap';
import NotFound from './NotFound';

function App() {
    const menu1 = 'Home';
    const menu2 = 'About';
    const menu3 = 'Contact';
    const companyname = 'Newton School';
    return (
        <BrowserRouter>
            <div className="App" >
                <Container className="bg-info">
                {/* <div className="container bg-info"> */}
                {/* </div> */}
                    <Header menuitem1={menu1} menuitem2={menu2} menuitem3={menu3}/>
                    


                    <Routes>
                        <Route path="/launchpad" element={<Launchpad />}/>
                        <Route path="/fees" element={<Fees />}/>
                        <Route path="/home" element={<Main companyName = {companyname}/>}/>
                        <Route path="/" element={<Main companyName = {companyname}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>




                    <Footer/>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;

// State and Props - varibales - Object
// State - maintain varibale state inside a component - update - not read only - mutable
// props - used to transfer data to child component - no update - read only - immutable


// git clone <link>
// +
// npm install

// npm start

// =
// npm create-
// npm start

// npm init - blank project