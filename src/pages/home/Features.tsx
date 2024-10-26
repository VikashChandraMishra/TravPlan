const Features = () => {
  return (
    <section className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">"Features that make you go… ‘Wow!’"</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <FeatureCard 
          title="Stress-Free Planning" 
          description="Let our AI handle the details – you just handle the fun." 
        />
        <FeatureCard 
          title="Customizable Itineraries" 
          description="From cozy cafes to mountain peaks – tailored just for you!" 
        />
        <FeatureCard 
          title="Map Your Dream Journey" 
          description="See your trip unfold on a map with all your stops highlighted!" 
        />
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-64">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;
