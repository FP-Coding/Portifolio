import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import funcionarios from '../../assets/funcionarios';
import CardFuncionario from '../../components/CardFuncionario/CardFuncionario';
// import PropTypes from 'prop-types';

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-2 justify-center items-center  p-4 bg-opacity-20 bg-white rounded-lg m-10">
        <h2 className="text-3xl">Quem somos</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus.
        </p>
        <p>
          Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <Link
          to="/quem-somos"
          className="bg-blue-900 w-36 text-center justify-center p-2 rounded hover:bg-opacity-70"
        >
          Saiba Mais
        </Link>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center  p-4 bg-opacity-20 bg-white rounded-lg m-10">
        <h2 className="text-3xl">Corpo Jurídico</h2>
        <div className="flex flex-wrap gap-16 justify-evenly items-center text-center">
          {funcionarios.map((info) => (
            <CardFuncionario {...info} />
          ))}
        </div>
        <Link
          to="/corpo-juridico"
          className="bg-blue-900 w-36 text-center justify-center p-2 rounded hover:bg-opacity-70"
        >
          Saiba Mais
        </Link>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center  p-4 bg-opacity-20 bg-white rounded-lg m-10">
        <h2 className="text-3xl">Contato</h2>

        <Link
          to="/contato"
          className="bg-blue-900 w-36 text-center justify-center p-2 rounded hover:bg-opacity-70"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
}

// Home.propTypes = {};

export default Home;
