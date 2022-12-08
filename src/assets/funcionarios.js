import felipeFoto from './Felipe.jpg';
import thadeuFoto from './Thadeu.jpg';
import thaisFoto from './Thais.jpg';
import BrunoFoto from './Bruno.jpg';

const funcionarios = [
  {
    nome: 'Thais Breves',
    cargo: { nome: 'Advogado', oab: 'AM1234657' },
    foto: thaisFoto
  },
  {
    nome: 'Thadeu Breves',
    cargo: { nome: 'Advogado', oab: 'AM1234657' },
    foto: thadeuFoto
  },
  {
    nome: 'Bruno Souza',
    cargo: { nome: 'Advogado', oab: 'AM1234657' },
    foto: BrunoFoto
  },
  {
    nome: 'Felipe Pinto',
    cargo: { nome: 'Secretário', oab: '' },
    foto: felipeFoto
  }
];

export default funcionarios;
