
const schoolInfo = [
  {
    icon: "📅",
    title: "Founded: 1956",
    description:
      "Outdoor learning and tending to our school garden is a big part of our day emotional growth and self.",
  },
  {
    icon: "📍",
    title: "Location: Portland, ME",
    description:
      "Outdoor learning and tending to our school garden is a big part of our day.",
  },
  {
    icon: "📚",
    title: "Students: 150",
    description:
      "This age group is playing their way to greater independence, socio-emotional growth and self.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher-Student: 1:5",
    description:
      "This age group is playing their way to greater independence, socio-emotional growth and self.",
  },
  {
    icon: "🔔",
    title: "Graduation Rate",
    description:
      "Children in this class are forging social skills through emotional growth and learning.",
  },
  {
    icon: "📗",
    title: "Representation",
    description:
      "Children in this class are forging social skills through emotional growth and learning.",
  },
];

export function SchoolInfo() {
  return (
    <section className="min-h-[550px] w-full flex justify-center items-center bg-[#161643] text-white py-12 px-6 max-sm:px-4">
      <div className="w-[87%] grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 max-sm:w-full">
        {schoolInfo.map((item, index) => (
          <div
            key={index}
            className=" flex items-start bg-[#144AE9] p-6 rounded-2xl shadow-lg hover:bg-[#1449e9da] transition cursor-pointer"
          >
            <div className="text-3xl mr-4">{item.icon}</div>
            <div>
              <h3 className="font-bold text-[22px] mb-1">{item.title}</h3>
              <p className="text-[16px] text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
