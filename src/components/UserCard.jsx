import React from 'react'

export default function UserCard(props) {
  // console.log(props)
  return (
    <div className='user-card'>
      <img src={props.data.picture.large} alt='user-img' />
      <h2>{props.data.name.first} {props.data.name.last}</h2>
      <h3>{props.data.email}</h3>
      <h4>{props.data.phone}</h4>
      <h4>{props.data.gender}</h4>
      <h4>{props.data.location.city},{props.data.location.state},{props.data.location.country}</h4>
      <h5>{props.data.location.postcode}</h5>
    </div>
  )
}
