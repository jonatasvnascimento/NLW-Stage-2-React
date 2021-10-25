import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS. Além disso, criaremos nosso projeto utilizando o Vite
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/jonatasvnascimento.png"
                alt="Jonatas Viana"
              />
            </div>
            <span>Jonatas Viana</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS. Além disso, criaremos nosso projeto utilizando o Vite
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/jonatasvnascimento.png"
                alt="Jonatas Viana"
              />
            </div>
            <span>Jonatas Viana</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS. Além disso, criaremos nosso projeto utilizando o Vite
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/jonatasvnascimento.png"
                alt="Jonatas Viana"
              />
            </div>
            <span>Jonatas Viana</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
