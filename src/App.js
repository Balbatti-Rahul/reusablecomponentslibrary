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
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import DateRangePicker from './components/DateRangePicker';
import FileUpload from './components/FileUpload';
import Slider from './components/Slider';
import Stepper from './components/Stepper';
import Tabs from './components/Tabs';
import NotificationCenter from './components/NotificationCenter';
import SearchBar from './components/SearchBar';
import Rating from './components/Rating';
import Gallery from './components/Gallery';
import ContextMenu from './components/ContextMenu';
import ImageUpload from './components/ImageUpload';
import StickyNav from './components/StickyNav';
import ListGroup from './components/ListGroup';
import Chip from './components/Chip';
import Divider from './components/Divider';
import ScrollToTop from './components/ScrollToTop';
import SocialShareButton from './components/SocialShareButton';
import robot from './images/Robot.jpg'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [time, setTime] = useState('');
  const [dateRange, setDateRange] = useState(['', '']);
  const [files, setFiles] = useState([]);
  const [sliderValue, setSliderValue] = useState(50);
  const [notifications, setNotifications] = useState(['New message', 'New comment']);
  const [username, setUsername] = useState('');

  const handleFileChange = (newFiles) => setFiles(newFiles);
  const handleRatingChange = (newValue) => console.log('Rating:', newValue);
  const handleImageChange = (file) => console.log('Image selected:', file.name);
  const handleChipRemove = () => console.log('Chip removed');
  
  const handleFormSubmit = (value) => {
    console.log("Form submitted with value:", value);
    setShowToast(true);
  };

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ];
  
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Library', link: '/library' },
    { label: 'Data' },
  ];

  return (
    <div className="container mt-4">
      <StickyNav />
      <h1 className="mb-4">Reusable Components</h1>
      <Breadcrumb items={breadcrumbItems} className="mb-4" />

      <div className="row mb-4">
        <div className="col-md-4">
          <Button label="Open Modal" onClick={() => setModalOpen(true)} />
        </div>
        <div className="col-md-4">
          <Card 
            title="Card Title" 
            content="This is a simple card." 
            footer={<Button label="Card Action" onClick={() => alert('Card Action Clicked!')} />} 
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="My Modal">
        <p>This is the modal content!</p>
        <Button label="Close" onClick={() => setModalOpen(false)} />
      </Modal>

      {showToast && <Toast message="This is a toast message!" onClose={() => setShowToast(false)} />}
      
      <div className="mb-4">
        <InputField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-4">
        <SelectDropdown 
          options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]} 
          onChange={() => {}} 
          label="Select Option" 
        />
      </div>
      <div className="mb-4">
        <Checkbox label="Accept Terms" checked={false} onChange={() => {}} />
      </div>
      <div className="mb-4">
        <Table data={[{ Name: 'John', Age: 30 }, { Name: 'Doe', Age: 25 }]} headers={['Name', 'Age']} />
      </div>
      <div className="mb-4">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
     
      <div className="mb-4">
        <LoadingSpinner />
        <Avatar src={robot} alt="User Avatar" /> {/* Use the imported image here */}
        <Tooltip message="Hover over me!" />
      </div>
      
      <div className="mb-4">
        <Accordion items={[{ title: 'Item 1', content: 'Content 1' }, { title: 'Item 2', content: 'Content 2' }]} />
      </div>
      
   
      <div className="mb-4">
        <Carousel 
          items={[
            { image: robot, alt: 'Robot Image 1', caption: 'First Slide' },
            { image: robot, alt: 'Robot Image 2', caption: 'Second Slide' } // Change caption as needed
          ]} 
        />
      </div>

      <div className="mb-4">
        <Alert message="This is an alert message!" variant="success" />
      </div>

      <div className="mb-4">
        <ProgressBar value={70} max={100} />
        <Icon name="alarm" size={24} />
      </div>

      <div className="mb-4">
        <Form onSubmit={handleFormSubmit} />
      </div>

      <div className="mb-4">
        <DatePicker label="Select a date" selectedDate="" onChange={(date) => console.log("Selected Date:", date)} />
      </div>
      <div className="mb-4">
        <TimePicker label="Select Time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div className="mb-4">
        <DateRangePicker label="Select Date Range" onChange={(start, end) => setDateRange([start, end])} />
      </div>
      <div className="mb-4">
        <FileUpload onFileChange={handleFileChange} />
      </div>
      <div className="mb-4">
        <Slider min={0} max={100} value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} />
      </div>
      <div className="mb-4">
        <Stepper steps={['Step 1', 'Step 2', 'Step 3']} />
      </div>
      
      <div className="mb-4">
        <Tabs tabs={tabs} />
      </div>
      <div className="mb-4">
        <NotificationCenter notifications={notifications} onRemove={(index) => setNotifications(notifications.filter((_, i) => i !== index))} />
      </div>
      <div className="mb-4">
        <SearchBar placeholder="Search..." value="" onChange={(e) => console.log(e.target.value)} />
      </div>
      <div className="mb-4">
        <Rating value={3} onChange={handleRatingChange} />
      </div>
      
      <div className="mb-4">
        <Gallery images={['image1.jpg', 'image2.jpg', 'image3.jpg']} />
      </div>
      <div className="mb-4">
        <ContextMenu items={[{ label: 'Edit', onClick: () => console.log('Edit') }]} position={{ x: 100, y: 100 }} visible={true} />
      </div>
      <div className="mb-4">
        <ImageUpload onImageChange={handleImageChange} />
      </div>
      
      <div className="mb-4">
        <ListGroup items={['Item 1', 'Item 2', 'Item 3']} onSelect={(item) => console.log('Selected:', item)} />
      </div>
      <div className="mb-4">
        <Chip label="Example Chip" onRemove={handleChipRemove} />
      </div>
      <Divider className="mb-4" />
      <ScrollToTop />
      <SocialShareButton platform="facebook" url="https://example.com" />
    </div>
  );
};

export default App;
