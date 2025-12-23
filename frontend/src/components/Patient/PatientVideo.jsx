
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PatientSideBar from './PatientSideBar';
import { videoAPI } from '../../services/api';

const PatientVideo = () => {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await videoAPI.getAll();
        setVideos(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p className="p-10">Loading videos...</p>;
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <PatientSideBar />

      <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <header className="flex items-center gap-4 mb-8">
          <button
            className="p-2 bg-white rounded-full shadow-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={24} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Doctor Recommended Videos
            </h1>
            <p className="text-gray-500">
              Watch these videos to support your mental well-being
            </p>
          </div>
        </header>

        {/* VIDEO LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow p-4"
            >
              <h2 className="text-lg font-semibold mb-3">
                {video.title}
              </h2>

              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtube_video_id}`}
                  title={video.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientVideo;
