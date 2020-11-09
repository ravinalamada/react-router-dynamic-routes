import React from 'react';
import serviceData from './serviceData';
import {useParams, useHistory} from 'react-router-dom'

function ServiceDetail(props) {
  const {serviceId} = useParams()
  const history = useHistory()
  console.log(serviceId);

  const services = serviceData.find(data => data._id === serviceId)
  console.log(services);

  function handleClick() {
    console.log('submitting....');
    setTimeout(() => {
      history.push("/services")
    }, 2000)
    history.replace('')
  }
	return (
    <>
      <h1>Service Detail Page</h1>;
        <div key={services.id}>
          <h3>{services.name} -${services.price}</h3>
          <p>{services.description}</p>
        </div>
    </>
  )
}

export default ServiceDetail;
