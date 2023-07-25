import React, { useEffect, useState } from 'react'
import activitiesDataServices from '../../Services/ActivitiesServices';
import { CardComponent } from '../components';
import { Row } from 'react-bootstrap';
import { useActivities } from '../../hooks';
import { PageLoader } from '../components/PageLoader';

export const Activities = () => {
  const {activities,} = useActivities()

  if(activities.isLoading){
    return <PageLoader/>
  }
    
  return (
    <Row xs={1} md={4} className="g-4">
      {activities.data.map((activity) => (
        !activity.archived && (
            <CardComponent
            key={activity._id} 
            activity={activity} 
            description={activity.description}/>
        )
      ))}
    </Row>
  )
}
