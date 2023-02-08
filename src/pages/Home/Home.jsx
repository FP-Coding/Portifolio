import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects/projects';
import minhaFoto from '../../assets/myPictures/Felipe.jpg';
import { CardProject } from '../../components/CardProject';
import Footer from '../../components/Footer/Footer';
// import PropTypes from 'prop-types';

function Home() {
  return (
    <div id="quem-sou" className="flex flex-col justify-between gap-2">
      <Header />
      <div className="flex flex-col justify-center items-center p-4 bg-opacity-20 bg-white rounded-lg mt-24 mr-10 ml-10">
        <h2 className="text-3xl text-center mt-4">Quem sou</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 p-4">
            <p className="text-justify">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus. Omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.Et
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus. Omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.Et
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus. Omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.Et
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus. Omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.Et
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus. Omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.Et
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus. Omnis voluptas
              assumenda.
            </p>
          </div>
          <img
            src={minhaFoto}
            alt="minha foto"
            className="rounded-[20%] p-6 w-[100%] md:h-[42vw]"
          />
        </div>
        <Link
          to="/quem-sou"
          className="bg-black w-36 text-center justify-center p-2 mb-4 rounded hover:bg-opacity-70 hover:text-yellow-300"
        >
          Saiba Mais
        </Link>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center p-6 bg-opacity-20 bg-white rounded-lg m-12 mr-10 ml-10">
        <h2 className="text-3xl">Projetos</h2>
        <div className="flex gap-16 pl-6 py-8 max-w-[98%] justify-between items-center overflow-x-scroll">
          {projects.map((info) => (
            <CardProject {...info} />
          ))}
        </div>
        <Link
          to="/projetos"
          className="bg-black w-36 text-center justify-center p-2 rounded hover:bg-opacity-70 hover:text-yellow-300 top-10"
        >
          Saiba Mais
        </Link>
      </div>
      <Footer />
    </div>
  );
}

// Home.propTypes = {};

export default Home;
