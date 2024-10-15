import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { saveAs } from 'file-saver';
import { Parser } from '@json2csv/plainjs';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';

const ExportData: React.FC = () => {
  const { workouts, goals } = useContext(AppContext);

  const exportCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(workouts);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'workouts.csv');
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Workout Data', 14, 16);
    (doc as any).autoTable({
      head: [['Date', 'Type', 'Duration (min)', 'Calories Burned']],
      body: workouts.map(w => [w.date, w.type, w.duration.toString(), w.caloriesBurned.toString()]),
    });
    doc.save('workouts.pdf');
  };

  return (
    <div className="mt-6 flex space-x-4">
      <motion.button
        onClick={exportCSV}
        className="bg-secondary text-white px-4 py-2 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Export CSV
      </motion.button>
      <motion.button
        onClick={exportPDF}
        className="bg-danger text-white px-4 py-2 rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Export PDF
      </motion.button>
    </div>
  );
};

export default ExportData;
