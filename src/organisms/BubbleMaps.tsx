import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet";
import brazilMap from "@/assets/brazil-states.json";
import { autismData } from "@/assets/autismData";

// auxiliar: encontrar valor pelo nome do estado
const findValue = (stateName: string) => {
  const item = autismData.find(s => s.name === stateName);
  return item ? item.value : 0;
};

// escala do raio das bolhas
const scale = (value: number) => value * 8;

const BubbleMap = () => {
  return (
    <MapContainer
      center={[-15.8, -47.9]} // centro aproximado do Brasil
      zoom={4}
      style={{ height: "600px", width: "100%" }}
    >
      {/* camada base (tile layer grátis) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* desenhar os estados */}
      <GeoJSON
        data={brazilMap as any}
        style={() => ({
          color: "#999",
          weight: 1,
          fillColor: "#e3e3e3",
          fillOpacity: 0.6
        })}
      />

      {/* bolhas por estado */}
      {(brazilMap as any).features.map((feature: any, index: number) => {
        const name = feature.properties.name;
        const value = findValue(name);

        if (!value) return null;

        // calcular centro aproximado de cada estado
        const [lng, lat] = feature.properties.center ||
          feature.geometry.coordinates[0][0][0]; // fallback

        return (
          <CircleMarker
            key={index}
            center={[lat, lng]}
            radius={scale(value)}
            color="#007BFF"
            fillColor="#007BFF"
            fillOpacity={0.6}
            weight={1}
          >
            <Tooltip direction="top" offset={[0, -4]} opacity={1}>
              <div>
                <strong>{name}</strong><br />
                Valor: {value}
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default BrazilMap;
