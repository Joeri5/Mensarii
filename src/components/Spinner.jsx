import { useState } from "react";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
  let [loading] = useState(true);
  let [color] = useState("#1EE2B5");

  return (
    <div className="sweet-loading">
      <BarLoader
        color={color}
        loading={loading}
        css={override}
        width={100}
        height={10}
      />
    </div>
  );
}

export default Spinner;
