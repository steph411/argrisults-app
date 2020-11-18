import React,{useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl';



// const mapboxAccessToken = process.env.MAP_ACCESS_TOKEN
const mapboxAccessToken = "pk.eyJ1IjoiZXRhYmFsaW9uZWwiLCJhIjoiY2tobmkxcmp5MDIxcjJ1cGVtcnoxbTRnayJ9.F8FUtpO8FsYJFYhWxfAr1Q"

interface Props {
  className?: string; 
  updateLonLat: any;
  closeModal: any;
}

let MapModal: React.FC<Props> = ({ className, updateLonLat, closeModal }) => {
  

  const [state, setState] = useState(
    {
      lat: "7.369722",
      lon: "12.354722",
      zoom: 0.9
    })
  const mapContainer = useRef(null)

  const handleCloseModal = (e) => {
    if (e.target.id == "containerMap") {
      closeModal()
    } 
  }


  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken
    console.log({ mapboxAccessToken, mapboxaccess: mapboxgl.accessToken})
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [state.lon, state.lat],
      zoom: state.zoom
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    map.on('move', () => {
      setState({
        lon: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    map.on("click", (e) => {
      console.log(e.lngLat);
      const { lng, lat } = e.lngLat;
      updateLonLat(lat, lng);
    })
  },
  [])
  
  
  return (
    <div className={className} onClick={handleCloseModal} id="containerMap">
      <div id="map" ref={mapContainer}>

      </div>
    </div>
  )
}


MapModal = styled(MapModal)`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  /* opacity: .9; */

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  #map{
    width: 65%;
    height: 60%;
    background: white;
    border-radius: 10px;
    opacity: 1;
    z-index: 1;

  }

`

export default  MapModal