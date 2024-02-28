// React Router v6
import { useNavigate, useParams } from 'react-router-dom'
// React Query
import { useQuery } from '@tanstack/react-query'
// Local files
import { fetchSong } from '../services/songsApi'

const Song = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    isPending,
    isError,
    data: hitSong,
    error,
  } = useQuery({
    queryKey: ['songs', id],
    queryFn: () => fetchSong(id),
  })

  if (isPending) return <span>Loading Customer Details...</span>
  if (isError) return <span>`Error: ${error.message}`</span>

  return (
    <>
      <button onClick={() => navigate('/')} className="btn-general">
        Back to Customer Details List
      </button>
      <figure style={{ backgroundColor: '#FFCCCB', padding: '0.5rem' }}>
        <h2>Customer Name: {hitSong?.cname}</h2>
		<p>
          <strong>Customer ID :</strong> {hitSong?.id}
        </p>
        <p>
          <strong>Area:</strong> {hitSong?.area}
        </p>
		<p>
          <strong>Mobile number:</strong> {hitSong?.mobile}
        </p>
		<p>
          <strong>Customer Type:</strong> {hitSong?.ctype}
        </p>
		<p>
          <strong>Medicines PurchaseDate:</strong> {hitSong?.datepurchase}
        </p>
		<p>
          <strong>Remaining Days Remainder:</strong> {hitSong?.dremainder}
        </p>
		<p>
          <strong>Medicines Purchased:</strong> {hitSong?.medicinespurchased}
        </p>
		<p>
          <strong>Grand Total:</strong> {hitSong?.grandtotal}
        </p>
      </figure>
    </>
  )
}

export default Song
