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
import { FileUp } from "lucide-react";

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
  jumlahDiminta: z.preprocess(
    (value) => (value === "" ? undefined : parseInt(value as string, 10)),
    z.number({ invalid_type_error: "Jumlah Diminta wajib diisi" })
      .positive("Jumlah Diminta harus lebih dari 0")
  ), 
  keterangan: z.string().min(1, "Keterangan wajib diisi"),
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

  const handleFungsiChange = (value: string) => {
    setFungsi(value);
    form.setValue("kelompokBarangMaterial", "");
    form.setValue("namaDanKodeProyek", "");
  };

  const handleClose = () => {
    form.reset();
    setFungsi("");

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
                  name="nomorDanTanggalTransaksi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor dan Tanggal Transaksi</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nomor Transaksi"
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
                  name="fungsi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fungsi</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleFungsiChange(value);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Fungsi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fungsi1">Fungsi 1</SelectItem>
                          <SelectItem value="fungsi2">Fungsi 2</SelectItem>
                        </SelectContent>
                      </Select>
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
                  name="jumlahTersedia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Tersedia</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Tersedia"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="keterangan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keterangan</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Masukkan Keterangan"
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
                  name="jumlahDiminta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Diminta</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Diminta"
                          {...field}
                          onChange={(e) => {
                            const onlyNumbers = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            field.onChange(onlyNumbers);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-2 mt-4">
                  <FormLabel>Upload Dokumen min. 1</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline">
                      {" "}
                      <FileUp /> Upload SPK{" "}
                    </Button>
                    <Button variant="default">
                      {" "}
                      <FileUp /> Upload Sales Order{" "}
                    </Button>
                  </div>
                  <Button variant="default">
                    {" "}
                    <FileUp /> Upload Memo Permintaan{" "}
                  </Button>
                </div>
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
