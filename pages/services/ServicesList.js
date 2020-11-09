import React from 'react';
import serviceData from './serviceData';
import {Link, useLocation} from 'react-router-dom';

function ServicesList() {
  const location = useLocation()
	return (
		<div>
			<h1>Services List Page</h1>
      {serviceData.map(data =>  (
        <div key={data.id}>
          <h3><Link to={`/services/${data._id}`}>{data.name}</Link> - ${data.price}</h3>
        </div>
      ))}
		</div>
	);
}

export default ServicesList;
