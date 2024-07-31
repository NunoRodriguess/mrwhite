// DataList.tsx
import React from 'react';
import { dataArray, DataItem } from './data/data';

const DataList: React.FC = () => {
  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {dataArray.map((item: DataItem) => (
          <li key={item.word}>
            <h2>{item.undercover}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
