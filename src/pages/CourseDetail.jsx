import { Link, useParams } from 'react-router-dom';
import courseData from '../data/courses.json';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="p-6 text-center">ไม่พบข้อมูลคอร์ส</div>;
  }

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">MustDev Tech</h1>
          <nav className="space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-green-600">หน้าแรก</Link>
            {/* <a href="#" className="text-gray-700 hover:text-green-600">เข้าสู่ระบบ</a>
            <a href="#" className="text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700">สมัครสมาชิก</a> */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="bg-gray-50 py-10">
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
            {course.price && <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">สมัครเรียนคอร์สนี้ ติดต่อแอดมินเพจ</button>}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[72px] bg-white shadow z-40 border-b">
        <div className="container mx-auto px-6 py-3 flex gap-6 text-sm font-medium overflow-x-auto">
          <a href="#about" className="hover:text-green-600 text-gray-700">รายละเอียดคอร์ส</a>
          <a href="#learn" className="hover:text-green-600 text-gray-700">หน้าหาคอร์ส</a>
          <a href="#instructor" className="hover:text-green-600 text-gray-700">ผู้สอน</a>
          <a href="#reviews" className="hover:text-green-600 text-gray-700">รีวิว</a>
          <a href="#payment" className="hover:text-green-600 text-gray-700">วิธีการชำระเงิน</a>
        </div>
      </div>

      <section id="description" className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: คำอธิบายทั้งหมด */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6">รายละเอียดคอร์ส</h3>

            {/* สิ่งที่ได้รับ */}
            {course.learnPoints?.length > 0 && (
              <div className="border p-6 rounded-lg bg-gray-50 shadow-sm mb-6">
                <h5 className="text-xl font-semibold mb-3">สิ่งที่ได้รับจากการเรียน</h5>
                <ul className="space-y-2 text-gray-700">
                  {course.learnPoints.map((point, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <i className="fa-solid fa-check text-green-700 mt-1"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* คำอธิบายหลัก */}
            {course.descriptionFull?.length > 0 && (
              <div className="space-y-4 text-gray-800 leading-relaxed">
                {course.descriptionFull.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: จำนวนวิดีโอ / ตลอดชีพ */}
          <div className="w-full lg:w-[300px] flex-shrink-0 space-y-6">
            <div className="flex items-center gap-4">
              <i className="fa-regular fa-circle-play text-green-700 text-2xl"></i>
              <div>
                <h4 className="text-lg font-semibold">{course.videoCount} วิดีโอ</h4>
                <p className="text-gray-600 text-sm">{course.videoDuration}</p>
              </div>
            </div>
            {course.lifetimeAccess && (
              <div className="flex items-center gap-4">
                <i className="fa-regular fa-infinity text-green-700 text-2xl"></i>
                <h4 className="text-lg font-semibold">เรียนได้ทุกที่ทุกเวลา ตลอดชีพ</h4>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="curriculum" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">เนื้อหาของคอร์ส</h3>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: เนื้อหาคอร์ส */}
          <div className="flex-1 space-y-4">
            {course.curriculum?.map((section, sIndex) => (
              <div key={sIndex} className="mb-4 border rounded overflow-hidden shadow-sm">
                <details className="group" open>
                  <summary className="bg-gray-100 px-4 py-3 cursor-pointer flex justify-between items-center">
                    <span className="text-lg font-medium">
                      {section.sectionTitle}
                      {section.sectionDuration && (
                        <span className="text-sm text-gray-500 ml-2">
                          ( เวลา {section.sectionDuration} )
                        </span>
                      )}
                    </span>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <div className="divide-y">
                    {section.lectures.map((lec, i) => (
                      <div key={i} className="flex justify-between items-center px-4 py-2 text-sm">
                        <div className="flex items-center gap-2">
                          <i className="fa-light fa-circle-play text-gray-400 text-base"></i>
                          <span>{lec.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          {lec.preview && (
                            <button className="text-xs border border-green-600 px-3 py-1 rounded text-green-600 hover:bg-green-50">
                              ดูตัวอย่างฟรี
                            </button>
                          )}
                          <span className="text-gray-500 text-xs">{lec.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>


          {course.instructorInfo && (
            <div>
              <h4 className="text-lg font-semibold mb-3">ผู้สอน</h4>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={course.instructorInfo.avatar}
                    alt={course.instructorInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-red-600 leading-tight">{course.instructorInfo.name}</h5>
                  <a
                    href={course.instructorInfo.link}
                    className="text-sm text-gray-500 hover:text-red-600 underline"
                  >
                    ไปที่หน้าผู้สอน
                  </a>
                </div>
              </div>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                {course.instructorInfo.bio.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-4">รีวิว</h3>
        {course.rating ? (
          <div className="space-y-8">
            {/* คะแนนเฉลี่ย */}
            <div>
              <h4 className="text-xl font-semibold mb-2">คะแนนเฉลี่ย</h4>
              <div className="flex items-center gap-2 text-yellow-500">
                <i className="fa-solid fa-star text-xl"></i>
                <span className="text-3xl font-bold text-gray-800">{course.rating.average.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({course.rating.count} รีวิว)</span>
              </div>

              {/* แถบ rating bar */}
              {[5, 4, 3, 2, 1].map(star => {
                const count = course.rating.stars[star] || 0;
                const percent = (count / course.rating.count) * 100;
                return (
                  <div key={star} className="flex items-center gap-2 mt-2">
                    <span className="w-4 text-sm">{star}</span>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-3 bg-yellow-400" style={{ width: `${percent}%` }}></div>
                    </div>
                    <span className="w-6 text-sm text-gray-600">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* รีวิวทั้งหมด */}
            <div>
              <h4 className="text-xl font-semibold mb-4">รีวิวทั้งหมด ({course.rating.count})</h4>
              {course.reviews.map((review, idx) => (
                <div key={idx} className="flex gap-4 mb-6 items-start">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-semibold">{review.name}</h5>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star text-sm ${i < review.rating ? '' : 'text-gray-300'}`}></i>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic">เร็ว ๆ นี้</p>
        )}
      </section>


      {/* Payment Section */}
      <section id="payment" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-4">วิธีการชำระเงิน</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>โอนผ่านบัญชีธนาคาร</li>
          <li>ชำระผ่าน QR Code</li>
          <li>ชำระผ่านบัตรเครดิต/เดบิต</li>
        </ul>
      </section>

      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. แบรนด์ / คำอธิบาย */}
          <div>
            <img src="/images/logo_mustdevtech_circle.png" alt="MustDev Tech" className="h-10 mb-4" />
            <p>แพลตฟอร์มการเรียนออนไลน์ สำหรับคนที่ต้องการก้าวหน้า</p>
            <p>สอนโดยผู้มีประสบการณ์จริง</p>

            <div className="mt-4">
              <p className="font-semibold mb-2">ดาวน์โหลดแอป:</p>
              <div className="flex gap-3">
                <a href="https://play.google.com" target="_blank" rel="noreferrer">
                  <img src="/images/logo_mustdevtech_circle.png" alt="Google Play" className="h-10" />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                  <img src="/images/logo_mustdevtech_circle.png" alt="App Store" className="h-10" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. คอร์สเรียน */}
          <div>
            <h3 className="text-lg font-semibold mb-4">คอร์สเรียน</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-green-600">คอร์สทั้งหมด</a></li>
              <li><a href="#" className="hover:text-green-600">Arduino สำหรับผู้เริ่มต้น</a></li>
              <li><a href="#" className="hover:text-green-600">IoT ด้วย ESP8266</a></li>
              <li><a href="#" className="hover:text-green-600">เรียนรู้จากโปรเจกต์จริง</a></li>
            </ul>
          </div>

          {/* 3. เกี่ยวกับเรา */}
          <div>
            <h3 className="text-lg font-semibold mb-4">เกี่ยวกับ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-600">เกี่ยวกับเรา</a></li>
              <li><a href="/teach" className="hover:text-green-600">สอนกับเรา</a></li>
              <li><a href="/career" className="hover:text-green-600">ร่วมงานกับเรา</a></li>
              <li><a href="/contact" className="hover:text-green-600">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* 4. ติดต่อ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-envelope text-gray-500"></i>
                <a href="mailto:info@mustdevtech.com">info@mustdevtech.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-phone text-gray-500"></i>
                <a href="tel:0123456789">012-345-6789</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-facebook text-blue-600"></i>
                <a href="https://facebook.com/mustdevtech" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-line text-green-500"></i>
                <a href="https://line.me/R/ti/p/@mustdevtech" target="_blank" rel="noreferrer">@mustdevtech</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} MustDev Tech. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
