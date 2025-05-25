import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Must Dev Tech</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">หน้าแรก</Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600 font-medium">คอร์สเรียน</Link>
          </nav>
        </div>
      </header>

      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">เริ่มเรียนรู้ Arduino และ IoT กับเรา</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">เรียนรู้จากประสบการณ์จริง พร้อมลงมือทำโปรเจกต์จริงในทุกคอร์ส เพื่อเตรียมพร้อมเข้าสู่โลกแห่งเทคโนโลยี</p>
          <Link to="/courses" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl shadow-md transition">ดูคอร์สทั้งหมด</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">ทำไมต้องเรียนกับ Must Dev Tech?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">สอนโดยผู้มีประสบการณ์</h4>
              <p className="text-gray-600">ผู้สอนมีประสบการณ์ตรงในวงการ Embedded และเคยพัฒนาโครงการจริง</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">โปรเจกต์จริงในทุกคอร์ส</h4>
              <p className="text-gray-600">เรียนรู้ด้วยการลงมือทำ โปรเจกต์จริงที่จะใช้ต่อยอดได้</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">สนับสนุนหลังเรียน</h4>
              <p className="text-gray-600">มี community และช่องทางให้สอบถามคำถามภายหลัง</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; 2025 Must Dev Tech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
