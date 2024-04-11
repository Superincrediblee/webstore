const API =
  process.env.NODE_ENV === 'production'
    ? 'https://elliot-nine.vercel.app/api'
    : 'http://localhost:3000/api';
module.exports = {
  API,
};
