import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const slides = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg'
  ];

  const courses = [
  {
    id: 1,
    title: 'คอร์ส Arduino พื้นฐาน',
    instructor: 'สอนตั้งแต่เริ่ม พาทำโปรเจค โดยใช้อุปกรณ์ที่เรียนรู้ Arduino , จอ LCD , Sensor ต่าง ๆ',
    position: 'MustDev Tech',
    image: '/images/course1.jpg',
    price: 590,
    original: 1590,
  },
  {
    id: 2,
    title: 'คอร์ส IoT พื้นฐาน',
    instructor: 'Esp8266 - Blynk,Line,GoogleSheet,Telegram',
    position: 'MustDev Tech',
    image: '/images/course2.jpg',
    price: 790,
    original: 1790,
  },
  {
    id: 3,
    title: 'เร็ว ๆ นี้',
    instructor: '',
    position: 'MustDev Tech',
    image: '/images/comingsoon.jpg',
    price: null,
    original: null,
  },
  {
    id: 4,
    title: 'เร็ว ๆ นี้',
    instructor: '',
    position: 'MustDev Tech',
    image: '/images/comingsoon.jpg',
    price: null,
    original: null,
  },
  {
    id: 5,
    title: 'เร็ว ๆ นี้',
    instructor: '',
    position: 'MustDev Tech',
    image: '/images/comingsoon.jpg',
    price: null,
    original: null,
  },
];


  return (
    <div className="bg-white text-gray-800">
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

      <section className="w-full">
        <Swiper navigation modules={[Navigation]} loop className="h-[300px]">
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="slide" className="w-full h-[300px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">คอร์สใหม่ล่าสุด</h2>
          <Swiper spaceBetween={20} slidesPerView={1.2} breakpoints={{640:{slidesPerView:2.2},1024:{slidesPerView:3.2}}}>
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{course.instructor} • {course.position}</p>
                    <div className="mt-3">
                      {course.price != null ? (
                        <div className="mt-3">
                          <span className="text-red-600 font-bold">{course.price.toLocaleString()} บาท</span>{' '}
                          <span className="line-through text-gray-400">{course.original.toLocaleString()} บาท</span>
                        </div>
                      ) : (
                        <div className="mt-3 text-gray-400 italic">เปิดสอนเร็ว ๆ นี้</div>
                      )}
                    </div>
                    <Link to={`/courses/${course.id}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700">
                      ดูรายละเอียด
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; 2025 Must Dev Tech. All rights reserved.
      </footer>
    </div>
  );
}
