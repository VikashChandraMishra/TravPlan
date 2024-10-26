import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const Itinerary = ({ itinerary }: { itinerary: string | null }) => {
  return (
    <div>
      {itinerary && (
        <div className="mt-10 bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl shadow-lg w-full max-w-lg border border-indigo-200">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" /> Your Itinerary
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {itinerary}
          </p>
          <div className="flex justify-around text-indigo-700 mt-6">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>Dates</span>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="mr-2" />
              <span>Budget</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
