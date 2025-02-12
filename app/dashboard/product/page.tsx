"use client";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchProduct } from "@/lib/api";
import { ClipLoader } from "react-spinners";

export default function DemoPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <ClipLoader loading={true} size={50} color="#3498db" />
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={sortedData} />
    </div>
  );
}
