import UserCard from "@/components/module/users/UserCard";
import { AddUserModal } from "@/redux/features/user/AddUserModal";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
    const users = useAppSelector(selectUser);
    console.log(users);

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="flex justify-end">
                <AddUserModal />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {users.map((user) => <UserCard user={user} key={user.id} />)}
            </div>
        </div>
    );
};

export default Users;