// src/components/GroupsView.tsx
import React, { useEffect, useState } from 'react';

interface Group {
  id: number;
  name: string;
}

const GroupsView: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch('/api/groups')
      .then(response => response.json())
      .then(data => setGroups(data))
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <h1>Library Groups</h1>
      <ul>
        {groups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupsView;
