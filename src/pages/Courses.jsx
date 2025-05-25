import { Link, useParams } from 'react-router-dom';
import courseData from '../data/courses.json';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="p-6 text-center">ไม่พบข้อมูลคอร์ส</div>;
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Must Dev Tech</h1>
          <nav className="space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-green-600">หน้าแรก</Link>
            <Link to="/courses" className="text-gray-700 hover:text-green-600">คอร์สทั้งหมด</Link>
            <a href="#" className="text-gray-700 hover:text-green-600">เข้าสู่ระบบ</a>
            <a href="#" className="text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700">สมัครสมาชิก</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
          <img src={course.image} alt="course cover" className="w-full md:w-1/2 rounded-xl shadow" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            {course.price ? (
              <p className="text-green-600 font-bold text-xl">
                ราคา {course.price.toLocaleString()} บาท
                <span className="line-through text-gray-400 text-base ml-2">{course.original.toLocaleString()} บาท</span>
              </p>
            ) : (
              <p className="italic text-gray-400">เปิดสอนเร็ว ๆ นี้</p>
            )}
            {course.price && <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">สมัครเรียนคอร์สนี้</button>}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-4">สิ่งที่คุณจะได้เรียนรู้</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {course.learn && course.learn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {course.target && (
          <>
            <h3 className="text-2xl font-semibold mt-10 mb-4">เหมาะสำหรับ</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {course.target.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {course.content && (
          <>
            <h3 className="text-2xl font-semibold mt-10 mb-4">เนื้อหาคอร์ส</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {course.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; 2025 Must Dev Tech. All rights reserved.
      </footer>
    </div>
  );
}
