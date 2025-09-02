import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import PlotImage from '../assets/plotImg.jpg'

const ViewModal = ({ open, setOpen, selectedList }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style} className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-4xl mx-auto overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Typography id="modal-title" variant="h6" component="h2">
            View Property Details
          </Typography>
          <button
            onClick={handleClose}
            className="text-xl font-bold text-gray-600 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image + Description */}
          <div className="flex flex-col gap-4">
            <img
              src={PlotImage || "https://via.placeholder.com/300x200"}
              alt="property"
              className="w-full h-48 object-cover rounded-md border"
            />
            <p className="text-gray-700">{selectedList.description}</p>
          </div>

          {/* Property Info */}
          <div className="flex flex-col gap-3">
            <ul className="space-y-2 text-gray-800">
              <li><strong>Plot:</strong> {selectedList.name?.toUpperCase()}</li>
              <li><strong>Location:</strong> {selectedList.location?.toUpperCase()}</li>
              <li><strong>Price:</strong> ${selectedList.price}</li>
            </ul>

            <p className="text-sm text-gray-600 mt-2">
              {selectedList.extraDetails || 'Additional property info can go here.'}
            </p>

             <Link to="/editProperty">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Edit
            </button>
             </Link>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewModal;

// Modal styling (centered box)
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '90vh',
  overflowY: 'auto',
};
