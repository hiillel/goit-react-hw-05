import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.blocksWrapper}>
      <div className={css.loader}>
        <RotatingLines
          visible={true}
          height={96}
          width={96}
          color="grey"
          strokeWidth={5}
          animationDuration={0.75}
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
};

export default Loader;