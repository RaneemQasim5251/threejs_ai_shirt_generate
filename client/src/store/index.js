import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  language: 'EN',
  isOpen: false,
  selectedShirt: 'tshirt', // Add this state for shirt selection
});

export default state;
