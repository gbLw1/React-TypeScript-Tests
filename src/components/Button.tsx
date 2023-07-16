interface IButtonProps {
  text: string;
  click: () => void;
  className?: string;
}

export default function Button(props: IButtonProps) {
  return (
    <button
      className={props.className || "btn btn-primary"}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
}
