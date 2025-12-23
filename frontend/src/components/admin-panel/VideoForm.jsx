import React from 'react';
import SideBar from './SideBar'; // 
import { useState } from 'react';
import {videoAPI} from "../../services/api"

const VideoForm = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    console.log("handle submit function is running");
    e.preventDefault();
    setMessage("");

    if (!youtubeUrl.trim()) {
      setMessage("YouTube URL is required");
      return;
    }

    try {
      setLoading(true);

      const response=await videoAPI.getAdd({
        youtube_url: youtubeUrl,
      });
      console.log("response",response);
      if(response.data.message){
        setMessage("Video added successfully ✅");
        setYoutubeUrl("");
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Failed to add video"
      );
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        {/* Page Header */}
        <div className="mb-6 ">
          <span className="text-sm text-gray-500 uppercase">upload content</span>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-bold">Add New Healing Video</h1>
          
          </div>
          <p className="text-gray-600 mt-1">Upload and manage healing video content.</p>
        </div>

        
        <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste YouTube video URL"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="w-full border p-3 rounded mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Adding..." : "Add Video"}
        </button>
       </form>
       {message && (
        <p className="mt-3 text-sm text-center text-gray-700">
          {message}
        </p>
      )}
      </main>
      
    </div>
  );
};

export default VideoForm;