
interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

function Card({ image, title, description, buttonText }: CardProps) {
  return (



    <div className="bg-[#1A1A1A] mr-20 font-mono rounded-2xl shadow-lg overflow-hidden w-80 hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-md mb-4">{description}</p>
        <button className="px-4 py-2 cursor-target border-1 border-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>

   
  );
}

export default Card;
