export const colors = [
  '#e34c26', // HTML5 orange
  '#264de4', // CSS3 blue
  '#f7df1e', // JavaScript yellow
  '#42b883', // Vue.js green
  '#ff2d20', // Laravel red
  '#777bb4', // PHP purple
  '#7952b3', // Bootstrap purple
  '#38b2ac', // Tailwind CSS teal
  '#000000', // JSON black
  '#4479a1', // MySQL blue
  '#47a248', // MongoDB green
  '#3178c6', // TypeScript blue
  '#f05032', // Git orange
  '#0769ad', // jQuery blue
  '#e10098', // GraphQL pink
  '#ff6f61', // Coral
  '#6b5b95', // Royal purple
  '#88b04b', // Moss green
  '#ffa500', // Orange
  '#92a8d1', // Soft blue
];

export const generateRandomValue = (arrayData) => {
  return arrayData[Math.floor(Math.random() * arrayData.length)];
};
