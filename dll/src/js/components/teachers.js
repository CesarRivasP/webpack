import React, { Component } from 'react'
import Teacher from './teacher.js'
import '../../css/teachers.scss';

class Teachers extends Component {  //componente hecho por clases
  render() {
    return (
      <ul className="Teachers">
        {this.props.data.teachers.map((teacherData) => {
          return <Teacher {...teacherData}/> //asi el componente se encarga de recibirlos como propiedades
        })
        }
      </ul>
    )
  }
}
export default Teachers
//es buena practica que al hacer un map, hay que retornar algo
