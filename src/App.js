// src/App.js
import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Modal from './components/Modal';
import Toast from './components/Toast';
import InputField from './components/InputField';
import SelectDropdown from './components/SelectDropdown';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Breadcrumb from './components/Breadcrumb';
import LoadingSpinner from './components/LoadingSpinner';
import Avatar from './components/Avatar';
import Tooltip from './components/Tooltip';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import Alert from './components/Alert';
import ProgressBar from './components/ProgressBar';
import Icon from './components/Icon';
import Form from './components/Form';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = (value) => {
    console.log("Form submitted with value:", value);
    setShowToast(true);
  };

  return (
    <div className="container mt-4">
      <h1>Reusable Components Library</h1>

      {/* Example Components Usage */}
      <Button label="Open Modal" onClick={() => setModalOpen(true)} />
      <Card title="Card Title" content="This is a simple card." footer={<Button label="Card Action" onClick={() => alert('Card Action Clicked!')} />} />
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="My Modal">
        <p>This is the modal content!</p>
        <Button label="Close" onClick={() => setModalOpen(false)} />
      </Modal>

      <Toast message="This is a toast message!" onClose={() => setShowToast(false)} />
      <InputField label="Username" value="" onChange={() => {}} />
      <SelectDropdown options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]} onChange={() => {}} label="Select Option" />
      <Checkbox label="Accept Terms" checked={false} onChange={() => {}} />
      <Table data={[{ Name: 'John', Age: 30 }, { Name: 'Doe', Age: 25 }]} headers={['Name', 'Age']} />
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      <Breadcrumb items={['Home', 'Library', 'Data']} />
      <LoadingSpinner />
      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
      <Tooltip message="Hover over me!" />
      <Accordion items={[{ title: 'Item 1', content: 'Content 1' }, { title: 'Item 2', content: 'Content 2' }]} />
      <Carousel items={[{ image: 'https://via.placeholder.com/400', alt: 'Image 1', caption: 'First Slide' }, { image: 'https://via.placeholder.com/400', alt: 'Image 2', caption: 'Second Slide' }]} />
      <Alert message="This is an alert message!" variant="success" />
      <ProgressBar value={70} max={100} />
      <Icon name="alarm" size={24} />
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
