import React from 'react';
import { bool } from 'prop-types';
import minhaFoto from '../../assets/myPictures/Felipe.jpg';

function WhoIAm({ isSoloPage }) {
  const idade = new Date().getFullYear() - 2000;
  const margin = isSoloPage === true ? 'mb-20' : '';
  return (
    <div
      id="quem-sou"
      className={`flex flex-col gap-6 justify-center mt-40 ${margin} items-center p-4 bg-opacity-20 bg-white rounded-lg mr-10 ml-10`}
    >
      <h2 className="text-3xl text-center mt-4 font-bold">QUEM SOU</h2>
      <hr className="w-72 h-2" />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mb-4 p-4">
          <p className="text-justify">
            {`Meu nome é Felipe Pinto, tenho ${idade} anos. Assim que me formei
              no ensino médio eu não sabia muito bem o que gostaria de fazer.
              Mas me foi ofericido a oportunidade de trabalhar como Design
              Gráfico na Atualcard Manaus e , apesar de que na época eu não sabia
              nada sobre a área, em menos de dois meses eu já conseguia atender
              clientes e criar artes normalmente. Depois de um ano eu comecei a
              me sentir frustrado e não me via trabalhando na área futuramente e
              decidi procurar uma outra área.`}
            <br />
            Assim que sai da AtualCard Fui chamado para trabalhar em uma empresa
            de Geolocalização e Mapeamento de Cidades, onde eu era responsável
            pela análise e conferência de dados coletados em campos, e em pouco
            tempo eu já estava ajudando meus pares e tomando cada vez mais
            responsabilidades. E nessa empresa foi onde eu tive um primeiro
            contato direto com programação. Por ser curioso acabei observando
            que a empresa usava Python e SQL e aquilo me acendeu uma chama de
            interesse por aprender programação que eu acabei não alimentando
            tanto na época. Depois de um tempo sai da empresa para tentar
            empreender. Acabou que não deu certo e eu segui em frente.
            <br />
            Depois de um tempo sem emprego, acabei voltando para área de
            designer e fui chamado para trabalhar em uma Gráfica de
            pré-impressão, onde era responsável por manusear as máquinas e
            atender os clientes. Depois de um tempo voltou a minha frustração
            com a área e então eu decidi fazer uma transição de carreira para
            trabalhar com programação.
            <br />
            Primeiramente tentei entrar numa escola chamada Driven, me inscrevi
            no processo seletivo e não passei. Mas como eu estava decidido a
            cursar algo que me fizesse entrar na área procurei uma outra escola
            no mesmo modelo e encontrei a Trybe na qual me inscrevi e apesar de
            ter um processo seletivo mais longo consegui passar de primeira.
            <br />
            Ao estudar programação vi que é a área que eu quero trabalhar no
            resto da minha vida, pois através dela posso mudar e melhorar a vida
            de muitas pessoas. Além de que na área há um senso de comunidade
            muito grande, onde as pessoas se ajudam e colaboram para criar
            coisas novas. Minha primeira experiência com isso foi na Trybe, onde
            participei de uma iniciativa chamada VolunTrybers onde alunos se
            disponibilizavam para ajudar outros alunos que estivessem com
            dúvidas. Através disso, pude melhorar minhas habilidades
            comportamentais e evoluir como pessoa.
          </p>
        </div>
        <img
          src={minhaFoto}
          alt="minha foto"
          className="rounded-[20%] p-6 md:h-[28vw] min-h-[350px]"
        />
      </div>
    </div>
  );
}

WhoIAm.propTypes = {
  isSoloPage: bool
}.isRequired;

export default WhoIAm;
