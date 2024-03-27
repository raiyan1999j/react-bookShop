import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>
    <FontAwesomeIcon icon={faLocationDot} className='text-5xl text-green-500 '/>
</div>;

export default function Contact(){
    const defaultProps = {
        center: {
          lat: 23.793544719326054,
          lng: 90.40501839535305
        },
        zoom: 15
      };
    return(
        <>
            <section className="w-[1170px] mx-auto rounded-xl">
            <div className='h-screen w-full rounded-xl'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.793544719326054}
          lng={90.40501839535305}
          
        />
      </GoogleMapReact>
    </div>
            </section>
        </>
    )
}