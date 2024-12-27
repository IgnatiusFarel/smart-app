import {
    createSearchParamsCache,
    createSerializer,
    parseAsInteger,
    parseAsString
  } from 'nuqs/server';
  
  export const searchParams = {
    q: parseAsString,    
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(10),
    activity: parseAsString,
    role: parseAsString,
    gudang: parseAsString,
    categories: parseAsString,
    jabatan: parseAsString,
    jenisAsset: parseAsString,
    lokasiPenempatan: parseAsString,
    kategori: parseAsString,
    kelompok: parseAsString,
    kodeProyek: parseAsString,
    klasifikasi: parseAsString,
    namaProyek: parseAsString,
    namaPenyedia: parseAsString,
    namaPengguna: parseAsString,
  };
  
  export const searchParamsCache = createSearchParamsCache(searchParams);
  export const serialize = createSerializer(searchParams);
  