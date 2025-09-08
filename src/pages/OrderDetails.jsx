// src/pages/OrderDetails.jsx
import SummaryCard from "@/components/summary-card/SummaryCard";
import { useParams } from "react-router-dom";
const travelerData = [
  {
    travelerName: ["Traveler Name", "Tom"],
    email: ["Email", "tom@gmail.com"],
    phoneNumber: ["Phone Number", "+9172135412554"],
    payment: ["Paid Amount", "AED 10,000.00"],
  },
];
export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      {travelerData.map((data, index) => (
        <SummaryCard
          title={"Payment Summary"}
          key={index}
          summary={[data]}
          align="right"
          highlightedProperties={["payment"]}
        />
      ))}
    </div>
  );
}
