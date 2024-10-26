import { useState } from "react";
import { generateItinerary } from "../../util/AI";
import Itinerary from "./Itinerary";

const TripPlanner = () => {
  const [tripData, setTripData] = useState({ destination: '', startDate: '', endDate: '', budget: '' });
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateItinerary(tripData);
      setItinerary(response as string);
    } catch (error) {
      console.error("Error generating itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Plan Your Adventure!</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Trip Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Destination</label>
          <input
            type="text"
            name="destination"
            value={tripData.destination}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="e.g., Paris, Tokyo"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={tripData.startDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={tripData.endDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Budget</label>
          <input
            type="text"
            name="budget"
            value={tripData.budget}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="e.g., $1000"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {loading ? 'Planning...' : 'Generate Itinerary'}
        </button>
      </form>
      <Itinerary itinerary={itinerary} />
    </div>
  );
};

export default TripPlanner;
