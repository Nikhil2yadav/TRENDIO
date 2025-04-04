// import { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

// const AddProductType = () => {
//   const [productType, setProductType] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/insertProductType.php', {
//       TypeName: productType,
//     });

//     if (response.data.success) {
//       alert('Product Type Added Successfully');
//       setProductType('');
//     } else {
//       alert(response.data.error);
//     }
//   };

//   return (
//     <div className='content-wrapper'>
//     <div className="content-header">
//             <div className="container-fluid">
//               <div className="row mb-2">
//                 <div className="col-sm-6">
//                   <h1 className="m-0 text-dark">ProductType</h1>
//                 </div>
//                 <div className="col-sm-6">
//                   <ol className="breadcrumb float-sm-right">
//                     <li className="breadcrumb-item">
//                       <Link to="/admin/Dashboard">
//                         <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                         Home
//                       </Link>
//                     </li>
//                     <li className="breadcrumb-item active">Products</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>
//       <h2>Add Product Type</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Product Type"
//           value={productType}
//           onChange={(e) => setProductType(e.target.value)}
//           required
//         />
//         <button type="submit">Add Product Type</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductType;
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const AddProductType = () => {
  const [productType, setProductType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/insertProductType.php', {
      TypeName: productType,
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
);

    if (response.data.success === "true") {
      alert('Product Type Added Successfully');
      setProductType('');
    } else {
      alert('Failed to Add Product Type');
    }
  };

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Product Type</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="card p-4">
          <h2 className="text-center mb-4">Add Product Type</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Type"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Add Product Type</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductType;
