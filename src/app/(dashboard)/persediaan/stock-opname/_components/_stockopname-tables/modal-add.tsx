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
  scanQRCode: z.string().optional(),
  qrCodeRespond: z.string().optional(),
    namaDanKodeBarangMaterial: z
    .string()
    .min(1, "Nama dan Kode Barang/Material wajib diisi"),
    
   namaDanKodeProyek: z.string().min(1, "Pilih Nama dan Kode Proyek"),
  uom: z.string().min(1, "UOM wajib diisi"),
  stockonHand: z.string().min(1, "Stock on Hand wajib diisi"),
  jumlahFisik: z.string().min(1, "Jumlah Fisik wajib diisi"),
  keterangan: z.string().min(1, "Keterangan wajib diisi"),
  kondisi: z.string().min(1, "Kondisi wajib diisi"),
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
     scanQRCode: "",
     qrCodeRespond: "",      
     namaDanKodeBarangMaterial: "",
      namaDanKodeProyek: "",
      uom: "",
      stockonHand: "",
      jumlahFisik: "",
      keterangan: "",
      kondisi: ""
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
        className="max-w-xl md:max-w-4xl p-3 md:p-6 mx-auto rounded-lg border border-gray-300"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 1rem)" }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Section: Form Transaksi */}
            <DialogHeader>
              <DialogTitle>Verifikasi & Junlah Keluar</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {/* Kiri */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="scanQRCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scan QR Code</FormLabel>
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
                  name="namaDanKodeBarangMaterial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama dan Kode Barang/Material</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Valid"                        
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            
                <FormField
                  control={form.control}
                  name="uom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit of Measurement (UOM)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Valid"                        
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jumlahFisik"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Fisik</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Valid"                        
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="kondisi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kondisi</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Valid"                        
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
                  name="qrCodeRespond"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>QR Code Respond</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Valid"                        
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

                <FormField
                  control={form.control}
                  name="stockonHand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock On Hand</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Nama dan Kode Proyek"                    
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
            </div>

          
            <div className="mt-6 flex justify-center gap-4">
              <Button type="submit">Cancel</Button>
              <Button type="submit">Simpan & Submit Approval</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
