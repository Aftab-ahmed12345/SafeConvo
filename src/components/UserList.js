
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h4>Users Online</h4>
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item key={index}>{user.name} {user.online ? 'Online' : 'Offline'}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default UserList;
