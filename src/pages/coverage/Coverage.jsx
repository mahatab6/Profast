import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// 🔧 Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 🧭 Fly-to helper component for dynamic map position
const MapFlyTo = ({ position, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, { duration: 1.5 });
    }
  }, [position, zoom, map]);

  return null;
};

const Coverage = () => {
  const [branches, setBranches] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedPosition, setSearchedPosition] = useState([23.685, 90.3563]); // Default: Bangladesh center
  const [mapZoom, setMapZoom] = useState(7);

  // 🧠 Load warehouse data from public/warehouses.json
  useEffect(() => {
    fetch('/warehouses.json')
      .then((res) => res.json())
      .then((data) => setBranches(data))
      .catch((err) => console.error('Failed to load warehouse data:', err));
  }, []);

  // 🔍 Smart Search with partial match
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    const found = branches.find(branch =>
      branch.district.toLowerCase().includes(query) ||
      branch.city.toLowerCase().includes(query) ||
      branch.covered_area.some(area => area.toLowerCase().includes(query))
    );

    if (found) {
      setSearchedPosition([found.latitude, found.longitude]);
      setMapZoom(11); // Zoom in
    } else {
      alert("Sorry, we couldn't find this location!");
      setMapZoom(7);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-primary mb-4">
        We are available in 64 districts for Bangladesh
      </h1>

      <div className="flex justify-center mb-4 gap-2">
        <input 
          type="text"
          placeholder="Search your district (e.g., Dhaka, Mirpur)"
          className="input input-bordered w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <h2 className="text-xl text-center text-secondary mb-4">
        We deliver almost all over Bangladesh
      </h2>

      <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={searchedPosition}
          zoom={mapZoom}
          scrollWheelZoom={true}
          zoomControl={false}
          className="h-full w-full z-0"
        >
          {/* 🧭 Map fly to searched position */}
          <MapFlyTo position={searchedPosition} zoom={mapZoom} />

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🧷 All branch markers */}
          {branches.map((branch, idx) => (
            <Marker key={idx} position={[branch.latitude, branch.longitude]}>
              <Popup>
                <h3 className="font-bold text-lg">{branch.district}</h3>
                <p><strong>City:</strong> {branch.city}</p>
                <p><strong>Covered:</strong> {branch.covered_area.join(', ')}</p>
                {branch.flowchart && (
                  <img
                    src={branch.flowchart}
                    alt={`${branch.district} Flowchart`}
                    className="mt-2 rounded-lg max-h-32"
                  />
                )}
              </Popup>
            </Marker>
          ))}

          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
