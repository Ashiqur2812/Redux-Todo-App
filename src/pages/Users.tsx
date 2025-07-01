import UserCard from "@/components/module/users/UserCard";
import { AddUserModal } from "@/redux/features/user/AddUserModal";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
    const users = useAppSelector(selectUser);
    console.log(users);

    return (
        <div className="max-w-7xl mx-auto my-3">
            <div className="py-2">
                <AddUserModal />
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
                {
                    users.map((user) => <UserCard user={user} key={user.id} />)
                }
            </div>
        </div>
    );
};

export default Users;