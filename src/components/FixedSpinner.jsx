import { Spinner } from "react-bootstrap";

function FixedSpinner({
  active = false,
  animation = "border",
  color = "default",
}) {
  return (
    <>
      {active ? (
        <Spinner
          animation={animation}
          role="status"
          style={{
            position: "fixed",
            color: color,
            bottom: "1rem",
            right: "1rem",
            zIndex: 100,
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}
    </>
  );
}

export default FixedSpinner;
