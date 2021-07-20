import './App.css';
import { getInfo as fetchCall } from './Components/Functions'

import StudentList from './Components/StudentList';
import Wrapper from './Components/UI/Wrapper';



function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className='mainContent'>

          <StudentList fetchCall={fetchCall} />

        </div>
      </Wrapper>
    </div>
  );
}

export default App;
