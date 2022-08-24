// react
import { useState } from "react";
// css
import styles from "./Converter.module.css";

function Converter() {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }

  function upperCase() {
    setText(text.toUpperCase());
  }

  function lowerCase() {
    setText(text.toLowerCase());
  }

  function phraseCase() {
    setText(text[0].toUpperCase() + text.slice(1).toLowerCase());
  }

  function titleCase() {
    setText(
      text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      })
    );
  }

  function alternatingCase() {
    let letters = text.toLowerCase().split("");
    for (let i = 0; i < letters.length; i = i + 2) {
      letters[i] = letters[i].toUpperCase();
    }
    setText(letters.join(""));
  }

  function reverse() {
    let lettersReverse = text.split("").reverse();
    setText(lettersReverse.join(""));
  }

  async function copy() {
    await navigator.clipboard.writeText(text);
  }

  function clear() {
    setText("");
  }

  function darkMode() {
    const $html = document.querySelector("html");
    const $checkbox = document.querySelector("#checkbox");

    $html.classList.toggle(styles.dark_mode);
  }

  return (
    <>
      <h1 className={styles.header}>Text Formatting</h1>
      <label className={styles.checkbox}>
        <input type="checkbox" id="checkbox" onChange={darkMode} />
        Dark Mode
      </label>

      <div className={styles.area}>
        <textarea
          className={styles.textArea}
          autoFocus
          name="text"
          id="text"
          cols="100"
          rows="10"
          value={text}
          onChange={onChange}
        ></textarea>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={upperCase}>
          MAIÚSCULAS
        </button>
        <button className={styles.button} onClick={lowerCase}>
          minúsculas
        </button>
        <button className={styles.button} onClick={phraseCase}>
          Frase
        </button>
        <button className={styles.button} onClick={titleCase}>
          Título
        </button>
        <button className={styles.button} onClick={alternatingCase}>
          AlTeRnAdAs
        </button>
        <button className={styles.button} onClick={reverse}>
          Reverter
        </button>
        <button className={styles.button} onClick={copy}>
          Copiar
        </button>
        <button className={styles.button} onClick={clear}>
          Limpar
        </button>
      </div>
    </>
  );
}

export default Converter;
