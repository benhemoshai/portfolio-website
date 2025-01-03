export default function EducationItem({ degree, school, period, gpa, courses, extras}) {
    return (
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{degree}</h4>
            <p className="text-blue-600 font-medium">{school}</p>
          </div>
          <div className="text-right mt-1 sm:mt-0">
            <span className="text-sm text-gray-500">{period}</span>
            {gpa && <p className="text-sm text-gray-600">GPA: {gpa}</p>}
          </div>
        </div>
        {courses && courses.length > 0 && (
        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Core Courses</p>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
        {extras && extras.length > 0 && (
            <div className="mt-3">
            <p className="text-sm font-medium text-gray-700 mb-2">Extracurricular Activities</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
                {extras.map((extra, index) => (
                <li key={index}>{extra}</li>
                ))}
            </ul>
            </div>
        )}
    </div>
  );
}