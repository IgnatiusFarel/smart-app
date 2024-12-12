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
  nomorDanTanggalPengembalian: z.string().optional(),
  nomorDanTanggalFormPengeluaran: z
    .string()
    .min(1, "Pilih Nomor dan Tanggal Pengeluaran"),
  kelompokBarangMaterial: z.string().min(1, "Pilih Kelompok Barang"),
  namaDanKodeProyek: z.string().min(1, "Pilih Nama dan Kode Proyek"),
  namaDanKodeBarangMaterial: z
    .string()
    .min(1, "Nama dan Kode Barang/Material wajib diisi"),
  uom: z.string().min(1, "UOM wajib diisi"),
  jumlahDikeluarkan: z.string().min(1, "Jumlah Dikeluarkan wajib diisi"),
  jumlahDikembalikan: z.string().min(1, "Jumlah Dikembalikan wajib diisi"),
});

type FormValues = z.infer<typeof formSchema>;

export const TambahTransaksiModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [fungsi, setFungsi] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomorDanTanggalPengembalian: "",
      nomorDanTanggalFormPengeluaran: "",
      kelompokBarangMaterial: "",
      namaDanKodeProyek: "",
      namaDanKodeBarangMaterial: "",
      uom: "",
      jumlahDikeluarkan: "",
      jumlahDikembalikan: "",
    },
  });

  const handleFungsiChange = (value: string) => {
    setFungsi(value);
    form.setValue("kelompokBarangMaterial", "");
    form.setValue("namaDanKodeProyek", "");
  };

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
        className="max-w-xl md:max-w-4xl p-3 md:p-6 mx-auto rounded-lg border border-gray-300"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 1rem)" }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Section: Form Transaksi */}
            <DialogHeader>
              <DialogTitle>Form Transaksi</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {/* Kiri */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="nomorDanTanggalPengembalian"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor dan Tanggal Pengembalian</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nomor Pengembalian"
                          {...field}
                        />
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
                      <FormLabel>Kelompok Barang/Material</FormLabel>
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
              </div>

              {/* Kanan */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="nomorDanTanggalFormPengeluaran"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor dan Tanggal Form Pengeluaran</FormLabel>
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
                      <FormLabel>Nama dan Kode Proyek</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nama dan Kode Proyek"
                          disabled={!fungsi}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section: Table of Contents */}
            <DialogHeader className="mt-8">
              <DialogTitle>Table of Contents</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {/* Kiri */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="namaDanKodeBarangMaterial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama dan Kode Barang/Material</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="XX.XX.XX.XXXX.XX.XX.XX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jumlahDikeluarkan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Dikeluarkan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Dikeluarkan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Kanan */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="uom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit of Measurement (UOM)</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan UOM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jumlahDikembalikan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Dikembalikan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Dikembalikan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button type="submit">Simpan & Submit Approval</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
