import React from 'react';
import { useParams } from 'react-router-dom';

const Team: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <div>
      <h2>Team Details</h2>
      <p>Team ID: {teamId}</p>
    </div>
  );
};

export default Team;
