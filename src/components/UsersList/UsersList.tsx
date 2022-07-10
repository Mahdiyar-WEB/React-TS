import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IUsers } from "../UsersApp/UsersApp";
import styles from "./userList.module.css";
import { Modal, Button, Form } from "react-bootstrap";
import { AiOutlineUserDelete, AiOutlineEdit } from "react-icons/ai";
import {FiUserX} from 'react-icons/fi'; 

interface IProps {
  users: IUsers[];
  setUsers: Dispatch<SetStateAction<IUsers[]>>;
}

const UsersList: FC<IProps> = ({ users, setUsers }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<IUsers>({
    id:0,
    fullName: "",
    age: 0,
    img_url: "",
    bio: "",
  });

  const handleClose = () => {
    setIsShow(false);
  }
  const showEditModalHandler = (user:IUsers):void=>{
    setUserDetail(user);
    setIsShow(true);
  }
  const changeUserDetailHandler = (e:FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUserDetail({...userDetail,[e.currentTarget.name]:e.currentTarget.value})
  }
  const submitEditUserHandler = ()=>{
    const { age, fullName, img_url, id } = userDetail;
    if (!fullName || age == 0 || !img_url) {
      alert("لطفا اطلاعات را به درستی وارد کنید");
    }else{
      const clonedUsers = [...users];
      const index = clonedUsers.findIndex(user=> user.id === id);
      clonedUsers[index] = userDetail;
      setUsers(clonedUsers);
      setIsShow(false);
    }
  }

  const deleteUserHandler = (id: number): void => {
    const cloneUsers = [...users];
    const filteredUsers = cloneUsers.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="row">
      {users.length === 0 && (
        <div className="text-center">
          <FiUserX size={50}/>
          <p className="pt-2 h5">هیچ کاربری وجود ندارد</p>
        </div>
      )}
      {users.map((user) => {
        return (
          <div key={user.id} className="col-12 col-lg-6 mb-1">
            <div className="position-relative card p-2 d-flex flex-sm-row align-items-center">
              <img
                width={120}
                height={120}
                className="img-fluid rounded rounded-circle img-thumbnail ms-md-auto me-2"
                src={user.img_url}
                alt={user.fullName}
              />
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <span className="card-title h5">{user.fullName}</span>
                  <span className="me-2 badge bg-info h6">{user.age} سال</span>
                </div>
                <p className="text-muted">{user.bio}</p>
              </div>
              <div className={styles.actionContainer}>
                <button
                  title="delete"
                  onClick={() => deleteUserHandler(user.id)}
                  className="btn btn-outline-danger btn-small rounded-0"
                >
                  <AiOutlineUserDelete size={20} />
                </button>
                <button
                  className="btn btn-outline-info btn-small rounded-0"
                  title="edit"
                  onClick={() => showEditModalHandler(user)}
                >
                  <AiOutlineEdit size={20} />
                </button>
              </div>
            </div>
            <Modal show={isShow} onHide={handleClose}>
              <Modal.Header dir="ltr" closeButton>
                <Modal.Title>ویرایش کاربر</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      onChange={(e)=> changeUserDetailHandler(e)}
                      type="text"
                      name="fullName"
                      placeholder="نام و نام خانوادگی"
                      value={userDetail.fullName}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      onChange={(e)=> changeUserDetailHandler(e)}
                      type="number"
                      name="age"
                      placeholder="سن"
                      value={userDetail.age}
                      min={0}
                      max={99}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      onChange={(e)=> changeUserDetailHandler(e)}
                      type="text"
                      name="img_url"
                      value={userDetail.img_url}
                      placeholder="آدرس اینترنتی عکس پروفایل"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      name="bio"
                      onChange={(e)=> changeUserDetailHandler(e)}
                      value={userDetail.bio}
                      placeholder="درمورد علایق و ویژگی های خود بگید(اختیاری)"
                      rows={3}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  لغو
                </Button>
                <Button variant="primary" onClick={submitEditUserHandler}>
                  ویرایش
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
