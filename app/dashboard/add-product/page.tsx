"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { Input } from "@/components/ui/input"; // ShadCN UI Input
import { Label } from "@/components/ui/label"; // ShadCN UI Label
import { z } from "zod"; // Zod for validation
import { useRouter } from "next/navigation"; // Using next/navigation for routing

// Define your product schema with Zod
const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  price: z.number().min(1, "Price must be a positive number"),
});

type Product = {
  title: string;
  category: string;
  price: number;
};

// Define error types
type ErrorType = {
  [key: string]: string | undefined;
  title?: string;
  category?: string;
  price?: string;
};

const AddProductPage = () => {
  const [product, setProduct] = useState<Product>({
    title: "",
    category: "",
    price: 0,
  });
  const [error, setError] = useState<ErrorType>({}); // Initializing error as an empty object
  const router = useRouter(); // To navigate after saving

  const handleSaveProduct = () => {
    try {
      productSchema.parse(product);
      // alert("Product saved successfully!");
      router.replace("/dashboard/product"); // Replace with your preferred route
      setProduct({ title: "", category: "", price: 0 }); // Reset the form
      setError({}); // Reset any previous errors
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Capture and show the Zod validation errors
        const errorMessages: ErrorType = {};
        err.errors.forEach((e) => {
          errorMessages[e.path[0]] = e.message; // Map the error messages to the fields
        });
        setError(errorMessages); // Update the error state with the error messages
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Add New Product
      </h2>
      <div className="space-y-6">
        {/* Title Input */}
        <div>
          <Label htmlFor="title" className="text-gray-800 dark:text-gray-100">
            Product Title
          </Label>
          <Input
            id="title"
            placeholder="Enter product title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
          {error.title && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {error.title}
            </p>
          )}
        </div>

        {/* Category Dropdown */}
        <div>
          <Label
            htmlFor="category"
            className="text-gray-800 dark:text-gray-100"
          >
            Category
          </Label>
          <select
            id="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          >
            <option value="">Select a category</option>
            <option value="menClothing">Men clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="womenClothing">Women clothing</option>
          </select>
          {error.category && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {error.category}
            </p>
          )}
        </div>

        {/* Price Input */}
        <div>
          <Label htmlFor="price" className="text-gray-800 dark:text-gray-100">
            Price
          </Label>
          <Input
            id="price"
            placeholder="Enter product price"
            type="number"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
          {error.price && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {error.price}
            </p>
          )}
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSaveProduct}
          className="w-full mt-4 p-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600"
        >
          Save Product
        </Button>
      </div>
    </div>
  );
};

export default AddProductPage;
