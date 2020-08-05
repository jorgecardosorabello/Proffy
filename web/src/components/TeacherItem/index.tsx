import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/50869604?s=460&u=a20451306862765c59a3b7593ad147654a1e0265&v=4" alt="Jorge Cardoso Rabello"/>
      <div>
        <strong>Jorge Cardoso Rabello</strong>
        <span>AutoCad</span>
      </div>
    </header>

    <p>
    Entusiasta das melhores tecnologias de química avançada.
    <br /><br />
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp Icon"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;