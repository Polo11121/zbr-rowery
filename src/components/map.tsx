import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const latitude = 53.699198;
  const longitude = 19.960407;

  const BikeIcon = new Icon({
    iconUrl: "/bike.svg",
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13.5}
      style={{ height: "500px", width: "100%" }}
      minZoom={13.5}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]} icon={BikeIcon}>
        <Popup>
          <span className="block text-center">
            ZBR ROWERY - Serwis rowerowy
          </span>
          <span className="block text-center">
            (Czarnieckiego 15A/II, 14-100 Ostróda)
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
