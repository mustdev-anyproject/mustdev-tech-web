const courses = [
  {
    id: 'arduino-basic',
    title: 'คอร์ส Arduino พื้นฐาน',
    description: 'เริ่มต้นเขียนโปรแกรมและต่อวงจรกับ Arduino เหมาะสำหรับมือใหม่',
  },
  {
    id: 'iot-basic',
    title: 'คอร์ส IoT เบื้องต้น',
    description: 'เรียนรู้การเชื่อมต่อ ESP8266 กับอินเทอร์เน็ต และใช้งาน Blynk, Telegram, Google Sheets',
  },
];

export default function Courses() {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">คอร์สของเรา</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="border p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">ดูรายละเอียด</button>
          </div>
        ))}
      </div>
    </div>
  );
}
