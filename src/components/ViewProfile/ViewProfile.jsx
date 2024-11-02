import { Link } from 'react-router-dom';

const handleViewProfile = (contact) => {
    navigate(`/profile/${contact.id}`, { state: { contact } });
};

<Link to={`/profile/${contact.id}`} state={{ contact }} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition">
    View Profile
</Link>

export default handleViewProfile