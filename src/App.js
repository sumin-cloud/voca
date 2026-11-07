
import Header from './component/Header';
import DataList from './component/DataList';
import Day from './component/Day';
import Empty from './component/Empty';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<DataList/>}>
            
          </Route>
          <Route path='/day/:day' element={<Day/>}>
            
          </Route>
          <Route path='/create_word' element={<CreateWord/>}>
            
          </Route>
           <Route path='/create_day' element={<CreateDay/>}>
            
          </Route>
          <Route path='*' element={<Empty/>}>
            
          </Route>
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
