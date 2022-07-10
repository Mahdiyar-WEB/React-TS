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
        "https://media-exp1.licdn.com/dms/image/D4E35AQFQIv0Kxf3Vqg/profile-framedphoto-shrink_400_400/0/1655932982246?e=1657710000&v=beta&t=qtReuAHe7cY9q6I4HOQG-ob4UPc_QB0MCZu80f-FV6A",
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
