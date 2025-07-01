import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    user: IUser;
}

const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch();
    console.log(user)

    return (
        <div>
            <div className='flex gap-12 items-center justify-between border border-emerald-500 py-8 px-5'>
                <h1>{user.name}</h1>
                <Button className="p-0 text-rose-500 cursor-pointer" onClick={() => dispatch(removeUser(user.id))} variant='link' >
                    <Trash2 />
                </Button>
            </div>
        </div>
    );
};

export default UserCard;
