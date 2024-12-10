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
  namaPenyedia: z.string().min(1, "Nama Penyedia wajib diisi"),
  periodePerolehan: z.string().min(1, "Periode Perolehan wajib diisi"),
  keterangan: z.string().min(1, "Keterangan wajib diisi"),
  nomorDanTanggal: z.string().min(1, "Nomor dan Tanggal wajib diisi"),
  jenisDoc: z.array(z.string().min(1, "Pilih Jenis Doc")).length(5),
  namaDanKodeBarangMaterial: z
    .string()
    .min(1, "Nama dan Kode Barang/Material wajib diisi"),
  jumlahDipesan: z.preprocess(
    (value) => (value === "" ? undefined : parseInt(value as string, 10)),
    z.number({ invalid_type_error: "Jumlah Dipesan wajib diisi" })
      .positive("Jumlah Dipesan harus lebih dari 0")
  ),
  kategoriBarangMaterial: z.string().min(1, "Pilih Kategori Barang / Material"),
  lokasiGudangPenyimpanan: z
    .string()
    .min(1, "Lokasi Gudang Penyimpanan wajib diisi"),
  uom: z.string().min(1, "UOM wajib diisi"),
  hargaSatuan: z.string().min(1, "Harga Satuan wajib diisi"),
  jumlahTotalHarga: z.string().min(1, "Jumlah Total Harga wajib diisi"),
  catatan: z.string().min(1, "Catatan wajib diisi"),
});

type FormValues = z.infer<typeof formSchema>;

export const TambahTransaksiModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [fungsi, setFungsi] = useState("");
  const [jenisDocValues, setJenisDocValues] = useState<string[]>(
    Array(5).fill("")
  );
  const [nomorDanTanggalValues, setNomorDanTanggalValues] = useState<string[]>(
    Array(5).fill("")
  );
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fungsi: "",
      kelompokBarangMaterial: "",
      namaDanKodeProyek: "",
      namaPenyedia: "",
      periodePerolehan: "",
      keterangan: "",
      nomorDanTanggal: "",
      jenisDoc: Array(5).fill(""),
      namaDanKodeBarangMaterial: "",
      jumlahDipesan: 0,
      kategoriBarangMaterial: "",
      lokasiGudangPenyimpanan: "",
      uom: "",
      jumlahTotalHarga: "",
      hargaSatuan: "",
      catatan: "",
    },
  });
  const allOptions = ["DO", "BAST", "PO", "ISO", "BAP"];

  const handleNomorDanTanggalChange = (index: number, value: string) => {
    const updatedValues = [...nomorDanTanggalValues];
    updatedValues[index] = value;
    setNomorDanTanggalValues(updatedValues);
    form.setValue("nomorDanTanggal", updatedValues.join(", ")); // Jika diperlukan untuk API.
  };

  const handleJenisDocChange = (index: number, value: string) => {
    const updatedValues = [...jenisDocValues];
    updatedValues[index] = value;
    setJenisDocValues(updatedValues);
    form.setValue("jenisDoc", updatedValues);
  };

  const getFilteredOptions = (index: number) => {
    const selectedValues = jenisDocValues.filter((_, i) => i !== index); // Semua nilai kecuali yang sedang diedit
    return allOptions.filter((option) => !selectedValues.includes(option)); // Filter opsi
  };

  const handleFungsiChange = (value: string) => {
    setFungsi(value);
    form.setValue("kelompokBarangMaterial", "");
    form.setValue("namaDanKodeProyek", "");
  };

  const handleClose = () => {
    // Reset form values and local state
    form.reset();
    setFungsi(""); // Reset fungsi ke nilai awal
    setJenisDocValues(Array(5).fill("")); // Reset jenisDocValues ke array kosong
    setNomorDanTanggalValues(Array(5).fill("")); // Reset semua field form

    onClose(); // Panggil fungsi penutup modal
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Tambahkan logika submit API di sini
    onClose(); // Tutup modal setelah submit
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
              <DialogTitle className="md:text-2xl">Form Transaksi</DialogTitle>
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

                <FormField
                  control={form.control}
                  name="namaPenyedia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Penyedia</FormLabel>
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
                  name="periodePerolehan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Periode Perolehan</FormLabel>
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
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name={`nomorDanTanggal`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor dan Tanggal </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Masukkan Nomor dan Tanggal"
                              value={nomorDanTanggalValues[index] || ""}
                              onChange={(e) =>
                                handleNomorDanTanggalChange(
                                  index,
                                  e.target.value
                                )
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`jenisDoc`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jenis Dokumen </FormLabel>
                          <Select
                            onValueChange={(value) =>
                              handleJenisDocChange(index, value)
                            }
                            value={jenisDocValues[index]}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Jenis Dokumen" />
                            </SelectTrigger>
                            <SelectContent>
                              {getFilteredOptions(index).map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <FormLabel>Upload Dokumen min. 1</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Upload DO", value: "DO" },
                      { label: "Upload BAST", value: "BAST" },
                      { label: "Upload PO", value: "PO" },
                      { label: "Upload ISO", value: "ISO" },
                      { label: "Upload BAP", value: "BAP" },
                    ].map((doc) => (
                      <Button
                        key={doc.value}
                        variant={
                          jenisDocValues.includes(doc.value)
                            ? "default"
                            : "outline"
                        }
                        type="button"
                        disabled={!jenisDocValues.includes(doc.value)}
                        onClick={() => {
                          // Tambahkan logika upload dokumen di sini
                          console.log(`Uploading ${doc.value}`);
                        }}
                      >
                        <FileUp />
                        {doc.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Table of Contents */}
            <DialogHeader className="mt-8">
              <DialogTitle className="md:text-2xl">
                Table of Contents
              </DialogTitle>
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
                  name="jumlahDipesan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Dipesan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Dipesan"
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

                <FormField
                  control={form.control}
                  name="kategoriBarangMaterial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kategori Barang/Material</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Barang/Material"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lokasiGudangPenyimpanan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lokasi Gudang Penyimpanan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Lokasi Gudang Penyimpanan"
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
                  name="hargaSatuan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Harga Satuan (Ex Tax)</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center">
                          {/* Prefix Icon */}
                          <span className="absolute left-3 text-gray-500">
                            Rp
                          </span>
                          <Input
                            placeholder="Masukkan Harga Satuan (Ex Tax)"
                            {...field}
                            className="pl-10" // Berikan padding kiri agar teks tidak bertumpuk dengan prefix
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jumlahTotalHarga"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Total Harga</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Jumlah Total Harga"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="catatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Catatan</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Masukkan Catatan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
              <Button type="submit">Simpan & Submit Approval</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
