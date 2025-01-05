export default function AboutContent() {
    return (
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">About Me</h3>
          <div className="w-20 h-1 bg-blue-600 rounded"></div>
        </div>
        
        <p className="text-gray-600">
        Hey there! I'm Shai, a 28-year-old fresh graduate in Computer Science. When I'm not immersed in technology and AI, I enjoy running, swimming, and diving into a great book. I'm passionate about self-development and always striving to grow, both personally and professionally. 
        </p>
        
        <p className="text-gray-600">
        Plus, I share my journey with my golden retriever, Jessie, who keeps life full of fun and energy! Here is a picture of her.
        </p>
  
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Location:</span>
            <span className="text-gray-600">Tel Aviv, Israel</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">benhemoshai@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Languages:</span>
            <span className="text-gray-600">Hebrew, English</span>
          </div>
        </div>
      </div>
    );
  }