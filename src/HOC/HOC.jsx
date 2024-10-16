import React, { useState } from "react";

const HOC = (WrappedComponent, num) => {
  function HOC(props) {
    const [count, setCount] = useState(0);

    function incrementHandler() {
      setCount(count + num);
    }
    return (
      <div>
        <WrappedComponent
          count={count}
          incrementHandler={incrementHandler}
          {...props}
        ></WrappedComponent>
      </div>
    );
  }
  return HOC;
};

export default HOC;
