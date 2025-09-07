// src/pages/OrderDetails.jsx
import SummaryCard from "@/components/summary-card/SummaryCard";
import { useParams } from "react-router-dom";
const travelerData = [
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
  },
];
export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <p className="text-lg">
        Viewing details for order: <span className="font-mono">{id}</span>
      </p>
      {travelerData.map((data, index) => (
        <SummaryCard
          title={index == 0 ? "Traveler Details" : "Co-Traveler Details"}
          key={index}
          summary={[data]}
          align="left"
          highlightedProperties={["travelerName"]}
        />
      ))}
      {/* Example placeholder data */}
      <div className="mt-4 space-y-2">
        <p>
          <strong>Status:</strong> Processing
        </p>
        <p>
          <strong>Date:</strong> Sept 6, 2025
        </p>
        <p>
          <strong>Total:</strong> $120.00
        </p>
      </div>
    </div>
  );
}
