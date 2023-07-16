interface ILoadingProps {
  color?: string;
}

export default function LoadingSpinner({ color }: ILoadingProps) {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className={`spinner-border text-${color || "black"}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
