// src/components/ProfilesList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/getUser');
      setProfiles(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">All Profiles</h2>
      {loading ? (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        </div>
      ) : profiles.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No profiles found</p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {profiles.map((profile) => (
            <div
              key={profile._id}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
            >
              {profile.profileImage && (
                <img
                  src={profile.profileImage}
                  alt={profile.fullname}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-indigo-200"
                />
              )}
              <div>
                <h3 className="text-lg font-medium text-gray-800">{profile.fullname}</h3>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilesList;