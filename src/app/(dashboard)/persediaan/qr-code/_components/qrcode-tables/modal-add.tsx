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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  nomorDanTanggalTransaksi: z.string().optional(),
  fungsi: z.string().min(1, "Pilih fungsi"),
  kelompokBarangMaterial: z.string().min(1, "Pilih Kelompok Barang"),
  namaDanKodeProyek: z.string().min(1, "Pilih Nama dan Kode Proyek"),
  namaDanKodeBarangMaterial: z
    .string()
    .min(1, "Nama dan Kode Barang/Material wajib diisi"),
  uom: z.string().min(1, "UOM wajib diisi"),
  jumlahTersedia: z.string().min(1, "Jumlah Total Harga wajib diisi"),
  jumlahDiminta: z.string().min(1, "Jumlah Total Harga wajib diisi"),
  keterangan: z.string().min(1, "Keterangan wajib diisi"),
});

type FormValues = z.infer<typeof formSchema>;

export const TambahDataModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [fungsi, setFungsi] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomorDanTanggalTransaksi: "",
      fungsi: "",
      kelompokBarangMaterial: "",
      namaDanKodeProyek: "",
      namaDanKodeBarangMaterial: "",
      uom: "",
      jumlahTersedia: "",
      jumlahDiminta: "",
      keterangan: "",
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
        className="max-w-lg p-3 md:p-6 mx-auto rounded-lg border border-gray-300"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 1rem)" }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Tambah QR</DialogTitle>
            </DialogHeader>

            <FormField
              control={form.control}
              name="nomorDanTanggalTransaksi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor dan Kode Barang/Material</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan Nomor Transaksi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kelompokBarangMaterial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama dan Kode Proyek</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan Nomor Transaksi"
                      disabled={!fungsi}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="namaDanKodeProyek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit of Measurement</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan Nomor Transaksi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="namaDanKodeProyek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Perolehan</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan Nomor Transaksi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="namaDanKodeProyek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Penyedia</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan Nomor Transaksi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-6 flex justify-center">
              <Button type="submit">Tambah Data</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
