import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail'; // ✅ เพิ่มเข้ามา

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:id" element={<CourseDetail />} /> {/* ✅ เพิ่ม route นี้ */}
    </Routes>
  );
}
