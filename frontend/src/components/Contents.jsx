import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import ContentModalForm from "./ContentModalForm";
import { SERVER_URL } from "../config/config";

function Contents() {
  const [content, setContent] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchContent(1);
  }, []);

  const ITEMS_PER_PAGE = 10; // Limit per page

  const fetchContent = async (page) => {
    try {
      const response = await axios.get(SERVER_URL + `/api/content?page=${page}&limit=${ITEMS_PER_PAGE}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      const { data, total } = response.data;

      setContent(data);
      setTotalPages(Math.ceil(total / ITEMS_PER_PAGE));
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching contents:', error);
    }
  };

  const handlePageChange = (page) => {
    fetchContent(page);
  };

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowEditModal = (content) => {
    setSelectedContent(content);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowDeleteConfirm = (content) => {
    setSelectedContent(content);
    setShowDeleteConfirm(true);
  };
  const handleCloseDeleteConfirm = () => setShowDeleteConfirm(false);

  const handleDelete = async () => {
    try {
      await axios.delete(SERVER_URL + `/api/content/${selectedContent.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchContent();
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h2>Daftar Content</h2>
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={handleShowAddModal}>
            Tambah Content
          </Button>
        </Col>
      </Row>
      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}><i class="fa fa-angle-double-left"></i></button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active fw-bold' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}><i class="fa fa-angle-double-right"></i></button>
          </li>
        </ul>
      </nav>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Content</th>
            <th>Module</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.module}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleShowEditModal(item)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleShowDeleteConfirm(item)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Item Modal */}
      <ContentModalForm
        show={showAddModal}
        handleClose={handleCloseAddModal}
        fetchContent={fetchContent}
      />

      {/* Edit Item Modal */}
      {selectedContent && (
        <ContentModalForm
          show={showEditModal}
          handleClose={handleCloseEditModal}
          fetchContent={fetchContent}
          editData={selectedContent}
        />
      )}

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirm} onHide={handleCloseDeleteConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah anda yakin untuk menghapus content{" "}
          <strong>{selectedContent?.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirm}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contents;
