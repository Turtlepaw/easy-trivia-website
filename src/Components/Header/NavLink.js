export default function NavLink(props) {
  return (
    <li>
      <a 
        href={props.url} 
        target={props.new ? "_blank" : "_self"}
        rel="noreferrer">
        <button>
          {props.text}
        </button>
      </a>
    </li>
  );
}