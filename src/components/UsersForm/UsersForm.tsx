import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IUsers } from "../UsersApp/UsersApp";

export interface IUser {
  fullName: string;
  age: number;
  img_url: string;
  bio?: string;
}
interface IProps {
  users: IUsers[];
  setUsers: Dispatch<SetStateAction<IUsers[]>>;
}

const UsersForm: FC<IProps> = ({ users, setUsers }) => {
  const [userDetail, setUserDetail] = useState<IUser>({
    fullName: "",
    age: 0,
    img_url: "",
    bio: "",
  });
  const changeHandler = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetail({
      ...userDetail,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(userDetail);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    const { age, fullName, img_url } = userDetail;
    e.preventDefault();
    if (!fullName || !img_url || age === 0) {
      alert("لطفا اطلاعات را به درستی وارد کنید");
    } else {
      setUsers([...users, { ...userDetail, id: Date.now() }]);
      setUserDetail({ fullName: "", age: 0, img_url: "", bio: "" });
    }
  };

  return (
    <div className="mt-5 col-12 col-md-10 mx-auto border py-3 px-4">
      <form onSubmit={(e) => submitHandler(e)} autoComplete="off">
        <div className="mb-3">
          <input
            value={userDetail.fullName}
            onChange={(e) => changeHandler(e)}
            placeholder="نام و نام خانوادگی"
            type="text"
            className="form-control"
            name="fullName"
            id="fullName"
          />
        </div>
        <div className="mb-3">
          <input
            value={userDetail.age}
            onChange={(e) => changeHandler(e)}
            placeholder="سن"
            type="number"
            min={0}
            max={99}
            className="form-control"
            name="age"
            id="age"
          />
        </div>
        <div className="mb-3">
          <input
            value={userDetail.img_url}
            onChange={(e) => changeHandler(e)}
            placeholder="آدرس اینترنتی عکس پروفایل"
            type="text"
            className="form-control"
            name="img_url"
            id="img_url"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={userDetail.bio}
            onChange={(e) => changeHandler(e)}
            name="bio"
            id="bio"
            placeholder="درمورد علایق و ویژگی های خود بگید(اختیاری)"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">
          افزودن
        </button>
      </form>
    </div>
  );
};
export default UsersForm;
