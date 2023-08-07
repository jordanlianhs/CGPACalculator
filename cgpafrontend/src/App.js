import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddCourse from './courses/AddCourse';
import AddCourses from './courses/AddCourses';
import EditCourse from './courses/EditCourse';
import ViewCourse from './courses/ViewCourse';
import DeleteCourse from './courses/DeleteCourse';
import Converter from './courses/Converter';
import AddCourseViaJson from './courses/AddCourseViaJson';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/CGPACalculator' element={<Home />} />
          <Route path='/CGPACalculator/converter' element={<Converter />} />
          <Route path='/CGPACalculator/addcourse' element={<AddCourse />} />
          <Route path='/CGPACalculator/addcourses' element={<AddCourses />} />
          <Route path='/CGPACalculator/addcourseviajson' element={<AddCourseViaJson />} />
          <Route path ='/CGPACalculator/viewcourse/:courseid' element={<ViewCourse />} />
          <Route path='/CGPACalculator/editcourse/:courseid' element={<EditCourse />} />
          <Route path='/CGPACalculator/deletecourse/:courseid' element={<DeleteCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

