import React, { Component } from 'react'
import CreateUser           from './CreateUser'
import classNames           from 'classnames'
import $                    from 'jquery'

class ListUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: props.users,
    }
  }

  handleDelete(id_user) {
    $.ajax({
      type: "DELETE",
      data: { authenticity_token: $('[name="csrf-token"]')[0].content, id: id_user },
      url: this.props.url,
      success: this.updateUsers(id_user)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target
    const data = {
      user: {
        first_name: target[0].value,
        last_name: target[1].value,
        email: target[2].value,
        international_id: target[3].value
      }
    }
    const dataTransform = JSON.stringify(data)

    $.ajax({
      type: 'POST',
      url: '/user',
      data: dataTransform,
      contentType: 'application/json',
      dataType: 'json'
    }).done(this.requestUsers())
  }

  requestUsers() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/'
    })
  }

  updateUsers(id_user_deleted) {
    const users = this.state.users;
    let new_users = users.filter((user, index, arr) => {
      return user.id != id_user_deleted
    })
    this.setState({users: new_users})
  }

  renderUsers() {
    const users = this.state.users
    return users.map((value, index) => {
      return (
        <tr>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>{value.international_id}</td>
          <td>
            <button className='button-delete' onClick={ this.handleDelete.bind(this, value.id) }>Eliminar</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='content-boxs'>
        {
          <CreateUser 
            handleSubmit={ this.handleSubmit.bind(this) }
          />
        }
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Cedula</th>
              <th>Acciones</th>
            </tr>
            { this.renderUsers() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListUsers
