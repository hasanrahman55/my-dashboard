// components/LoadingSpinner.js
import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center">
      <ClipLoader loading={true} size={50} color="#3498db" />
    </div>
  );
}
