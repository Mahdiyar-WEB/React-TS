import { useState } from "react";
import UsersForm from "../UsersForm/UsersForm";
import UsersList from "../UsersList/UsersList";
import styles from "./UsersApp.module.css";

export interface IUsers {
  id:number;
  fullName: string;
  age: number;
  img_url: string;
  bio?: string;
}

const UsersApp = () => {
  const [users, setUsers] = useState<IUsers[]>([
    {
      id:1,
      fullName: "مهدیار مروی",
      age: 20,
      img_url:
        "https://avatars.githubusercontent.com/u/92209615?s=400&u=3c60f1c618936d5cac10177ac76de4b92d8343bd&v=4",
        bio:"برنامه نویس و طراح وبسایت"
    },
  ]);

  return (
    <div className={`${styles.container} container`}>
      <h4 className="alert alert-info text-center">مدیریت اشخاص</h4>
      <UsersList setUsers={setUsers} users={users}/>
      <UsersForm users={users} setUsers={setUsers} />
    </div>
  );
};

export default UsersApp;
