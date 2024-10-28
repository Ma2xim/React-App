import React, { useEffect, useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setReports(data.reports));
  }, []);

  const handleRowClick = (report) => {
    setSelectedReport(report); // Встановлюємо вибраний звіт
  };

  const closeModal = () => {
    setSelectedReport(null); // Закриваємо модальне вікно
  };

  return (
    <div>
      <h2>Звіти</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Статус</th>
            <th>Автор</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id} onClick={() => handleRowClick(report)}>
              <td>{report.date}</td>
              <td>{report.status}</td>
              <td>{report.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Модальне вікно для деталей */}
      {selectedReport && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&larr;</span>
            <h3>Деталі звіту від {selectedReport.date}</h3>
            <p><strong>Статус:</strong> {selectedReport.status}</p>
            <p><strong>Автор:</strong> {selectedReport.author}</p>
            <p><strong>Деталі:</strong> {selectedReport.details}</p>
            <p><strong>Тривалість (години):</strong> {selectedReport.durationHours}</p>
            <p><strong>Пріоритет:</strong> {selectedReport.priority}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
