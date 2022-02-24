import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './components/context/About';
import Courses from './Courses';
import {Container} from 'react-bootstrap';
import NotFound from './NotFound';
import ClassCompDetail from './ClassCompDetail';
import FunctionalEffect from './FunctionalEffect';
import FormReg from './Form';
import ToDo from './ToDo';
import ToDoAssg from './ToDoAssg';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import GitHubIssues from './GitHubIssues';
import RefClass from './RefClass';
import RefState from './RefState';
import HookReducer from './components/hooks/HookReducer';
import HookMemo from './HookMemo';
import HookMisc from './HookMisc';
import AssgPomodoro from './components/assignments/AssgPomodoro';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DataApp from './DataApp';

function App() {
    const menu1 = 'Home';
    const menu2 = 'About';
    const menu3 = 'Course';
    const companyname = 'Newton School';
    return (
        <BrowserRouter>
            <div className="App" >
                <DataApp>
                    <Container className="app-container bg-light">
                        <Header menuitem1={menu1} menuitem2={menu2} menuitem3={menu3}/>

                        <Routes>
                            <Route path="/about" element={<About />}/>
                            <Route path="/about/:param1" element={<About />}/>
                            <Route path="/github/:pagenum" element={<GitHubIssues />}/>
                            <Route path="/courses" element={<Courses />}/>
                            <Route path="/home" element={<Main companyName = {companyname}/>}/>
                            <Route path="/classcompdetail" element= {<ClassCompDetail />} />
                            <Route path="/functionaleffect" element= {<FunctionalEffect />} />
                            <Route path="/form" element= {<FormReg />} />
                            <Route path="/todo" element= {<ToDo />} />
                            <Route path="/todoassg" element= {<ToDoAssg />} />
                            <Route path="/hoc1" element= {<Comp1 />} />
                            <Route path="/hoc2" element= {<Comp2 />} />
                            <Route path="/ref" element= {<RefClass />} />
                            <Route path="/ref2" element= {<RefState />} />
                            <Route path="/assg" element= {<Main companyName = {companyname}/>} />
                            <Route path="assg">
                                <Route path="todo1" element= {<ToDo />} />
                                <Route path="todo2" element= {<ToDoAssg />} />
                            </Route>
                            <Route path="/hookreducer" element= {<HookReducer />} />
                            <Route path="/hookmemo" element= {<HookMemo />} />
                            <Route path="/hookmisc" element= {<HookMisc />} />
                            <Route path="/assgpomodoro" element= {<AssgPomodoro />} />
                            <Route path="/" element={<Main companyName = {companyname}/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                        <Footer/>
                    </Container>
                </DataApp>
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