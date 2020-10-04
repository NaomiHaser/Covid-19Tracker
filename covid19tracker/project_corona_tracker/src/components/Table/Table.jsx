import React, { useState, useEffect } from 'react';
import {Table} from 'antd';
import { fetchDailyData } from '../../api';

import styles from './Table.module.css';

const dataSource = [
  ];

const columns = [
    {
      title: 'Country',
      dataIndex: 'name',
      key: 'country',
    },
    {
      title: 'Confirmed Cases',
      dataIndex: 'confirmed_cases',
      key: 'confirmed_cases',
      sorter: {
        compare: (a, b) => a.confirmed_cases - b.confirmed_cases,
        multiple: 3,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'death',
      key: 'death',
      sorter: {
        compare: (a, b) => a.death - b.death,
        multiple: 3,
      },
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      key: 'recovered',
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 3,
      },
    },
  ];
  
  <Table dataSource={dataSource} columns={columns} />;