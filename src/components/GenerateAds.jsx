import { useState } from "react";
import axios from "axios";

const GenerateAds = () => {
  const [prompt, setPrompt] = useState("");
  const [ads, setAds] = useState("");

  const handleGenerateAds = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate-ads", {
        prompt,
      });
      setAds(response.data.ad);
    } catch (error) {
      console.error("Error generating ads", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-black mb-6">Generate Ads</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-limegreen"
      ></textarea>
      <button
        onClick={handleGenerateAds}
        className="bg-limegreen text-white px-4 py-2 rounded-full font-bold hover:bg-green-600 transition-colors"
      >
        Generate Ads
      </button>
      {ads && (
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-black mb-2">
            Generated Ad
          </h3>
          <p>{ads}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateAds;
