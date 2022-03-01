export default function ClickableTitle(props) {
  return (
    <a 
      href={props.href}
      target={props.new ? "_blank" : "_self"}
      rel="noreferrer"
      className={props.className}
      style={{fontSize: '1em'}}>
        <h1>
          {props.text}
        </h1>
    </a>
  )
}