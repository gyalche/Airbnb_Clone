import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const ReactMap = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  //Transform the search results object into the {latitude and lognigtude} object
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //the latitude and longitude of the center of locations coordinates;
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dawa-sherpa/cla7yac0j000414mktkcj302y"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}>
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.longitude}
            latitude={result.latitude}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-lable="push-pin"
              role="img">
              📌
            </p>
          </Marker>
          {/*The popup that should show if we click on a marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}>
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default ReactMap;
