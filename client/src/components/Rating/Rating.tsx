import './Rating.scss';
import React, { useState } from 'react';
import Block from './rateBolck';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface User {
  name: string;
  id: number;
  points: number;
}

const Rating: React.FC = () => {
  const itemsPerPage = 5; // Set the number of items to display per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortedArr: Array<User> = [
    {
      name: 'Alex',
      id: 1234567890,
      points: 10,
    },
    {
      name: 'John',
      id: 234567801,
      points: 455,
    },
    {
      name: 'Karl',
      id: 3456789012,
      points: 435,
    },
    // Add more users as needed
  ];

  const totalPages = Math.ceil(sortedArr.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = sortedArr.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className='rating'>
      <h1 className='text_head'>Рейтинг гравців</h1>
      <div className="users">
        {displayedUsers.map((user, i) => (
          <Block key={user.id} name={user.name} id={user.id} points={user.points} place={startIndex + i + 1} />
        ))}
      </div>
      <Stack spacing={2} className='pagination-container'>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{ backgroundColor: 'none' }}
          className='pagination-buttons'
        />
      </Stack>
    </div>
  );
};

export default Rating;
