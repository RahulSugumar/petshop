import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Product Detail: {id}</h1>
      <p>Product information coming soon...</p>
    </div>
  );
}
