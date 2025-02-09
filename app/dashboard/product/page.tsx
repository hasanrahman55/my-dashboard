"use client";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const fetchProduct = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default function DemoPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={sortedData} />
    </div>
  );
}
