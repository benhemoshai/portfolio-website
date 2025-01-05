export default function AboutImage() {
    return (
      <div className="relative w-full md:w-1/2">
        <img
          src="./Jessie.JPG"
          alt="Profile"
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
      </div>
    );
  }