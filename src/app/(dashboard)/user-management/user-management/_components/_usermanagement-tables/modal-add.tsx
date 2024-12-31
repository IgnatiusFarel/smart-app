"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(1, "Username wajib diisi"),
  jabatan: z.string().min(1, "Jabatan wajib diisi"),
  detailUser: z.string().optional(),
  role: z.string().min(1, "Role wajib dipilih"),
  lokasiPenempatan: z.string().min(1, "Lokasi Penempatan wajib diisi"),
  keterangan: z.string().min(1, "Keterangan wajib diisi"),
  email: z.string().min(1, "Email wajib diisi"),
  password: z.string().min(1, "Password wajib diisi"),
});

type FormValues = z.infer<typeof formSchema>;

export const AddUserModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      jabatan: "",
      detailUser: "",
      role: "",
      lokasiPenempatan: "",
      email: "",
      password: "",
    },
  });

  const handleClose = () => {
    form.reset();

    onClose();
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent
        className="max-w-sm p-3 md:p-6 mx-auto rounded-lg border border-gray-300"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 1rem)" }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center">
                Add User
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username*</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jabatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jabatan</FormLabel>
                    <FormControl>
                      <Input placeholder="Jabatan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="detailUser"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detail User</FormLabel>
                    <FormControl>
                      <Input placeholder="Detail User" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Role Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="adminPersediaan">
                          Admin Persediaan
                        </SelectItem>
                        <SelectItem value="adminGudang">
                          Admin Gudang
                        </SelectItem>
                        <SelectItem value="administratorPengelola">
                          Administrator Pengelola
                        </SelectItem>
                        <SelectItem value="kepalaGudang">
                          Kepala Gudang
                        </SelectItem>
                        <SelectItem value="penanggungJawab">
                          Penanggung Jawab
                        </SelectItem>
                        <SelectItem value="koordinatorPersediaan">
                          Koordinator Persediaan
                        </SelectItem>
                        <SelectItem value="kepalaDepartemenPersediaan">
                          Kepala Departemen Persediaan
                        </SelectItem>
                        <SelectItem value="superadmin">Superadmin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lokasiPenempatan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lokasi Penempatan*</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="djakarta">Djakarta</SelectItem>
                        <SelectItem value="djogyakarta">Dyogyakarta</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center mt-8">
              <Button type="submit" variant="default">
                Add User
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
