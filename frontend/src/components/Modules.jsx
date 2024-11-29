import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { SERVER_URL } from "../config/config";

function Modules() {
  const [module, setModule] = useState([]);

  useEffect(() => {
    fetchModule();
  }, []);

  const fetchModule = async () => {
    try {
      const response = await axios.get(SERVER_URL + `/api/content/modules`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setModule(response.data.data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  return (
    <div>
      <h2>Daftar Modules</h2>
      <Row className="my-3">
        <Col>
          <Button variant="primary">
            Tambah Module
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover style={{ maxWidth: "80%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Module</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {module.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
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

export default Modules;
