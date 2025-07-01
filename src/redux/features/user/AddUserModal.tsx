import { useAppDispatch } from "@/redux/hooks";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { addUser } from "./userSlice";
import type { IUser } from "@/types";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function AddUserModal() {
    const [open, setOpen] = useState(false);

    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addUser(data as IUser));
        setOpen(false);
        form.reset()
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                        <DialogDescription className="sr-only">
                            Fill up this form to add the user
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ''} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            <DialogFooter className="mt-5">
                                <DialogClose asChild>
                                    <Button className="cursor-pointer" variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button className="cursor-pointer" type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    );
}
