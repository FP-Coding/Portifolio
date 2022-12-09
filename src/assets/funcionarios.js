import felipeFoto from './Felipe.jpg';
import thadeuFoto from './Thadeu.jpg';
import thaisFoto from './Thais.jpg';
import BrunoFoto from './Bruno.jpg';

const funcionarios = [
  {
    nome: 'Thais Breves',
    cargo: { nome: 'Advogado', oab: 'OAB/AM nº 10.824' },
    foto: thaisFoto
  },
  {
    nome: 'Thadeu Breves',
    cargo: { nome: 'Secretário', oab: '' },
    foto: thadeuFoto
  },
  {
    nome: 'Bruno Souza',
    cargo: { nome: 'Secretário', oab: '' },
    foto: BrunoFoto
  },
  {
    nome: 'Felipe Pinto',
    cargo: { nome: 'Controller', oab: '' },
    foto: felipeFoto
  }
];

export default funcionarios;
