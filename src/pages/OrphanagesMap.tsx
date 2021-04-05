import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {MapContainer , TileLayer} from 'react-leaflet';
import mapMarkerImg from '../assets/images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <MapContainer center={[-19.9197208,-43.93873]} zoom={15} style={{width: '100%', height: '100%'}}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFFFFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
