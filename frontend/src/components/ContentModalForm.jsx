import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { SERVER_URL } from "../config/config";

function ContentModalForm({ show, handleClose, fetchContent, editData }) {
  const [formData, setFormData] = useState({
    title: "",
    module_id: 0,
    description: "",
    created_by: 1,
  });
  const [modules, setmodules] = useState([]);

  useEffect(() => {
    getModules();
    if (editData) {
      // console.log(editData);
      setFormData(editData);
    } else {
      setFormData({ title: "", module_id: 0, description: "", created_by: 1 });
    }
  }, [editData]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getModules = async () => {
    try {
      const response = await axios.get(SERVER_URL + "/api/content/modules");
      setmodules(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      if (editData) {
        // Update item
        console.log(formData);
        await axios.put(SERVER_URL + `/api/content/${editData.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({
          title: "",
          module_id: 0,
          description: "",
          created_by: 1,
        });
      } else {
        // Add new item
        await axios.post(SERVER_URL + "/api/content", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({
          title: "",
          module_id: 0,
          description: "",
          created_by: 1,
        });
      }
      fetchContent(3); // Refresh the item list after adding/editing
      handleClose(); // Close the modal
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Edit Content" : "Tambah Content"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Content</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChangeInput(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Module</Form.Label>
            <Form.Select
              name="module_id"
              value={formData.module_id}
              onChange={(e) => handleChangeInput(e)}
              required
            >
              <option value="">-- Pilih Module --</option>
              {modules.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) => handleChangeInput(e)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {editData ? "Update" : "Save"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContentModalForm;
