import React from "react";
import { useTask } from "../utils";
import styles from "./UI/MyHeader.module.css";

/*
interface HeaderProps {
  taskCount: number;
}*/

const Header: React.FC = () => {
   const {tasks} = useTask();


  return (
    <div className={styles.MyHeader_container}>
      <div>
        To-do List <b>{tasks.length}</b>
      </div>
    </div>
  );
};

export default Header;