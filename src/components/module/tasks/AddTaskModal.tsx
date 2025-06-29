import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer">Add task</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add task</DialogTitle>
                        <DialogDescription className="sr-only">
                            Fill up this form to add the task
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ''} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            <FormField 
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} value={field.value || ''} />
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
