import React from "react";

import JavaScript from "./java-script";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import TodoItem from "./todo/todo-item";
function Assignment3() {
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoItem/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <JavaScript/>
     
     <TodoList/>
   </div>
 );
}
export default Assignment3;