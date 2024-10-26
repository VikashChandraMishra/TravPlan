import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white relative min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center">
      <h1 className="text-5xl font-bold mb-4">"Get Lost… in Style!"</h1>
      <p className="text-lg mb-6">
        Your personal AI travel buddy, crafting the perfect getaway. Say goodbye
        to planning stress and hello to epic adventures!
      </p>
      <button className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300" onClick={() => navigate("/trip-planner")}>
        Start Planning
      </button>
    </section>
  );
};

export default HeroSection;
