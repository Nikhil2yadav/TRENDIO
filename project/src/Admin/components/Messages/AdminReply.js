import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const AdminReply = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('http://trendio.free.nf/api/FetchMessages.php');
    setMessages(response.data);
  };

  const handleReply = async (contactId) => {
    const response = await axios.post('http://trendio.free.nf/api/ReplyToMessage.php', {
      contactId: contactId,
      reply: reply,
    },{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
);

    if (response.data.success) {
      alert('Reply Sent Successfully');
      setReply('');
      fetchMessages(); // Fetch updated messages
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className='content-wrapper'>
    <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0 text-dark">Reply To Message</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                          <Link to="/admin/Dashboard" className="">
                            <FontAwesomeIcon
                              icon={faTachometerAlt}
                              className="nav-icon"
                            />
                            Home
                          </Link>
                        </li>
                        <li className="breadcrumb-item active">Reply To Message</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
     <div className="container mt-5">
      <h2>Admin Panel: Reply to Seller Messages</h2>
      <div className="mt-4">
  {messages.length === 0 ? (
    <div className="alert alert-info">No requests from sellers found.</div>
  ) : (
    messages.map((msg, index) => (
      <div key={index} className="mb-4">
        <p><strong>Seller ID:</strong> {msg.SellerId}</p>
        <p><strong>Seller Name:</strong> {msg.Name}</p>
        <p><strong>Message:</strong> {msg.Message}</p>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Write reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleReply(msg.ContactID)}>Send Reply</button>
        <hr />
      </div>
    ))
  )}
</div>

      {/* <div className="mt-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            <p><strong>Seller ID:</strong> {msg.SellerId}</p>
            <p><strong>Seller Name:</strong>{msg.Name}</p>
            <p><strong>Message:</strong> {msg.Message}</p>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Write reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => handleReply(msg.ContactID)}>Send Reply</button>
            <hr />
          </div>
        ))}
      </div> */}
    </div>
    </div>
   
  );
};

export default AdminReply;
