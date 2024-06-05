import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Employee: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [studentName, setStudentName] = useState<string | null>(null);

  useEffect(() => {
    const name = searchParams.get('studentName');
    if (name) {
      setStudentName(name);
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({ studentName: searchInput });
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <p>
        <a href={`http://localhost:5173/employee?studentName=${searchInput}`}>
        </a>
      </p>
      {studentName && (
        <p>Tên sinh viên: {studentName}</p>
      )}
    </div>
  );
};

export default Employee;
