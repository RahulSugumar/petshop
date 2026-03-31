import { useParams } from 'react-router-dom';

export default function PetDetail() {
  const { id } = useParams();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Pet Detail: {id}</h1>
      <p>Pet information coming soon...</p>
    </div>
  );
}
