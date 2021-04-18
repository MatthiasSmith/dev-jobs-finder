import utilStyles from '../styles/utils.module.css';

const addFadeInClass = (event) => {
  if (event.target.srcset) {
    event.target.classList.add(utilStyles.fadeIn);
  }
};

export default addFadeInClass;
