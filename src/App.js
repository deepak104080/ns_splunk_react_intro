import './css/App.css';
import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import {Container} from 'react-bootstrap';

function App() {
    const menu1 = 'Home';
    const menu2 = 'About';
    const menu3 = 'Contact';
    const companyname = 'Newton School';
    return (
        <div className="App" >
            <Container className="bg-info">
                <Header menuitem1={menu1} menuitem2={menu2} menuitem3={menu3}/>
                <Main companyName = {companyname}/>
                <Footer/>
            {/* <div className="container bg-info"> */}
            {/* </div> */}
            </Container>
        </div>
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