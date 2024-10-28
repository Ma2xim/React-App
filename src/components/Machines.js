import React, { useEffect, useState } from 'react';
import './Machines.css';

const Machines = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setMachines(data.machines));
  }, []);

  const handleRowClick = (machine) => {
    setSelectedMachine(machine); // Встановлюємо вибраний станок
  };

  const closeModal = () => {
    setSelectedMachine(null); // Закриваємо модальне вікно
  };

  return (
    <div>
      <h2>Станки</h2>
      <table className="machines-table">
        <thead>
          <tr>
            <th>Назва</th>
            <th>Модель</th>
            <th>Локація</th>
          </tr>
        </thead>
        <tbody>
          {machines.map(machine => (
            <tr key={machine.id} onClick={() => handleRowClick(machine)}>
              <td>{machine.name}</td>
              <td>{machine.model}</td>
              <td>{machine.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Модальне вікно для деталей */}
      {selectedMachine && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&larr;</span>
            <h3>Деталі станка: {selectedMachine.name}</h3>
            <p><strong>Модель:</strong> {selectedMachine.model}</p>
            <p><strong>Локація:</strong> {selectedMachine.location}</p>
            <p><strong>Статус:</strong> {selectedMachine.status}</p>
            <p><strong>Останнє обслуговування:</strong> {selectedMachine.lastMaintenance}</p>
            <p><strong>Оператор:</strong> {selectedMachine.operator}</p>
            <p><strong>Відпрацьовані години:</strong> {selectedMachine.hoursWorked}</p>
            <p><strong>Опис:</strong> {selectedMachine.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Machines;
