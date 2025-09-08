// export default function useHostedEventStatusData(bookingId) {
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!bookingId) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         // Simulate API call
//         const res = await fetch(`/api/booking/${bookingId}`);
//         if (!res.ok) throw new Error("Failed to fetch booking data");
//         const data = await res.json();
//         setOrderData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [bookingId]);

//   return { orderData, loading, error };
// }
