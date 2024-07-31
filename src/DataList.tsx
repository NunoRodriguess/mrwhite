// DataList.tsx
import React from 'react';
import { dataArray, DataItem } from './data/data';

const DataList: React.FC = () => {
  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {dataArray.map((item: DataItem) => (
          <li key={item.name}>
            <h2>{item.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
