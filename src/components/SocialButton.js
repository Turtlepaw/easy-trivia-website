import '../scss/socialButton.scss';

export default function SocialButton(props) {
  function openPage() {
    window.open(props.link, '_blank');
  }

  return(
    <button 
      onClick={openPage}
      style={{backgroundColor: props.backgroundColor}}>
      <p>{props.text}</p>
    </button>
  );
}