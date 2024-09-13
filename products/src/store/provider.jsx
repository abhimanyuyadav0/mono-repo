'use client'
import { Provider } from 'react-redux';
import store from './store';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReduxProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return <Provider store={store}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>;
};

export default ReduxProvider;
