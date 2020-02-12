import React, { useEffect } from 'react';
import api from '../../services/api';
// import { Container } from './styles';

export default function Main() {
  useEffect(() => {
    const response = api.get('/collaborator');
  }, []);
  return <div>Main</div>;
}
