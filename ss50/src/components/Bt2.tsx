import React from 'react';
import { useParams } from 'react-router-dom';

const Student: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Student Detail</h1>
      <p>Tên sinh viên: {name}</p>
    </div>
  );
};

export default Student;
