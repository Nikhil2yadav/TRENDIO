import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactAdmin = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const sellerId = localStorage.getItem('userId'); 

  const fetchMessages = async () => {
    const response = await axios.get(`http://localhost:8080/college%20project/mini%20project/api/FetchMessages.php?sellerId=${sellerId}`);
    setMessages(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/ContactAdmin.php', {
      sellerId: sellerId,
      message: message,
    },{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
);

    if (response.data.success) {
      alert('Message sent to Admin Successfully');
      setMessage('');
      fetchMessages(); // Fetch updated messages
    } else {
      alert(response.data.message);
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
                  <h1 className="m-0 text-dark">Contact Admin</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/seller/SellerHome" className="">
                        <FontAwesomeIcon
                          icon={faTachometerAlt}
                          className="nav-icon"
                        />
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Contact Admin</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        <div className="container mt-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Contact Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your message to Admin"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </form>

        <hr />

        <h4>Message History</h4>
        <div className="message-history mt-3">
          {messages.map((msg, index) => (
            <div key={index} className="mb-3">
              <p><strong>You:</strong> {msg.Message}</p>
              {msg.Reply && (
                <p className="text-success"><strong>Admin:</strong> {msg.Reply}</p>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ContactAdmin;
