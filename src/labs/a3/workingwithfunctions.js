import React from "react";

import ArrowFunctions from "./arrow-functions";
import ES5Functions from "./es5-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-paranthesis-and-parameters";

function WorkingWithFunctions() {
  return (
    <div>
      <ES5Functions />
      <ArrowFunctions/>
      <ImpliedReturn/>
      <FunctionParenthesisAndParameters/>
    </div>
  );
}

export default WorkingWithFunctions;
