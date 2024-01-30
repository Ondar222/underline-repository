import { MapContainer, GeoJSON, TileLayer } from "react-leaflet"
import polygons from '@/data.json'
import 'leaflet/dist/leaflet.css'
import { observer } from "mobx-react-lite"
import warehousesSlice from "@/store/warehouses.slice"

const Map = observer(() => {
  return <MapContainer
    center={[51.8, 94.15]}
    maxBounds={[[54, 99], [49.4, 88]]}

    zoom={7}
    maxZoom={20}
    minZoom={5}
    zoomControl={false}
    scrollWheelZoom={true}
    doubleClickZoom={false}
    attributionControl={false}
    dragging={false}
    className="max-h-[450px]"
    style={{ height: '450px', minWidth: '400px' }}>
    {
      polygons.map((item: any) => {
        return <GeoJSON key={item.id} data={item}
          style={{
            color: "rgb(30 64 175)",
            weight: 1,
            fillColor: "rgb(59 130 246)",
            fillOpacity: 1,
          }}
          eventHandlers={{
            click: () => { 
              warehousesSlice.setRegion(item.properties.description) 
              warehousesSlice.setSelectedRegionLocalities(item.properties.description)
            }
          }}
        />
      })
    }

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      opacity={0}
    />

  </MapContainer>
})

export default Map