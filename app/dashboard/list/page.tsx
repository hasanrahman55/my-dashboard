import { columns, Product } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      product: "Product 1",
      price: 100,
      quantity: 2,
      sales: 50,
    },
    {
      id: "2",
      product: "Product 2",
      price: 200,
      quantity: 3,
      sales: 75,
    },
    {
      id: "3",
      product: "Product 3",
      price: 300,
      quantity: 1,
      sales: 25,
    },
    {
      id: "4",
      product: "Product 4",
      price: 400,
      quantity: 4,
      sales: 100,
    },
    {
      id: "5",
      product: "Product 5",
      price: 500,
      quantity: 5,
      sales: 125,
    },
    {
      id: "1",
      product: "Product 1",
      price: 100,
      quantity: 2,
      sales: 50,
    },
    {
      id: "2",
      product: "Product 2",
      price: 200,
      quantity: 3,
      sales: 75,
    },
    {
      id: "3",
      product: "Product 3",
      price: 300,
      quantity: 1,
      sales: 25,
    },
    {
      id: "4",
      product: "Product 4",
      price: 400,
      quantity: 4,
      sales: 100,
    },
    {
      id: "5",
      product: "Product 5",
      price: 500,
      quantity: 5,
      sales: 125,
    },
    {
      id: "1",
      product: "Product 1",
      price: 100,
      quantity: 2,
      sales: 50,
    },
    {
      id: "2",
      product: "Product 2",
      price: 200,
      quantity: 3,
      sales: 75,
    },
    {
      id: "3",
      product: "Product 3",
      price: 300,
      quantity: 1,
      sales: 25,
    },
    {
      id: "4",
      product: "Product 4",
      price: 400,
      quantity: 4,
      sales: 100,
    },
    {
      id: "5",
      product: "Product 5",
      price: 500,
      quantity: 5,
      sales: 125,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
