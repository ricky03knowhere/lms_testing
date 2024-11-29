import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { SERVER_URL } from "../config/config";

function Users() {
  const [module, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(SERVER_URL + `/api/content/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  return (
    <div>
      <h2>Daftar Users</h2>
      <Row className="my-3">
        <Col>
          <Button variant="primary">
            Tambah User
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover style={{ maxWidth: "80%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {module.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <Button variant="warning" size="sm">
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm">
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
