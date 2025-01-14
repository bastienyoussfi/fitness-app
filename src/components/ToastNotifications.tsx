import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotifications: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar />;
};

export default ToastNotifications;