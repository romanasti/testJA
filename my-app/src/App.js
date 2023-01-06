import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import FormHeader from './components/Form/FormHeader';
import FormFooter from './components/Form/FormFooter';
import FormContent from './components/Form/FormContent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Content />
        <Footer />
        <div>
          <Routes>
            <Route exact path='/formhead' element={<FormHeader />} />
            <Route exact path='/formfoot' element={<FormFooter />} />
            <Route exact path='/formcont' element={<FormContent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
