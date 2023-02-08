import React, { Component } from 'react'
import student from './images/prop2.jpg';
export default class ImageSection extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={student}/>
      </div>
    )
  }
}
