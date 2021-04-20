import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import mapMarkerImg from '../assets/images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage { // definindo os itens (campos) do db que será utilizado
  id: number,
  latitude: number,
  longitude: number,
  name: string,
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]); // informando para o useState() que a lista utilizada é a declarada em interface, deve ser com vetor

  useEffect(() => {
    api.get('orphanages').then(response => { // buscando as informações da tabela orphanages com o axios
      setOrphanages(response.data);
    });
  }, []);

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

      <MapContainer center={[-19.9265595,-43.9379095]} zoom={15} style={{width: '100%', height: '100%'}}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

        {orphanages.map(orphanage => { // o map percorre o vetor e retorna algo, ao invés do forEach que só percorre, mas não retorna
          return (
            <Marker key={orphanage.id} icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFFFFF"/>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFFFFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
