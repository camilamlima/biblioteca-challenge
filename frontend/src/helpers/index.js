
export * from './history';
export * from './authProvider';

export let config = {
    apiUrl: process.env.REACT_APP_APIBACKEND || 'http://localhost:3000',
};