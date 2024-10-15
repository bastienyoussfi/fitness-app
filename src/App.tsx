import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import LogWorkoutPage from './pages/LogWorkout';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastNotifications from './components/ToastNotifications';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Dashboard />
              </motion.div>
            }
          />
          <Route
            path="/log-workout"
            element={
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <LogWorkoutPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <ToastNotifications />
    </div>
  );
};

export default App;