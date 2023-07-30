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
          <Route path='/' element={<Home />} />
          <Route path='/converter' element={<Converter />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/addcourses' element={<AddCourses />} />
          <Route path='/addcourseviajson' element={<AddCourseViaJson />} />
          <Route path ='/viewcourse/:courseid' element={<ViewCourse />} />
          <Route path='/editcourse/:courseid' element={<EditCourse />} />
          <Route path='/deletecourse/:courseid' element={<DeleteCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

