import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState([]);
  const [oldImage,setOldImage]=useState([null,null,null,null]);
  const [images, setImages] = useState([null, null, null, null]); // Store up to 4 images
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const { ProductId } = useParams();
  const SellerId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const [productTypes, setProductTypes] = useState([]);
  const [productSize,setProductSize]=useState([]);
  const fetchProductSize = async () => {
    try {
      const response = await axios.get("http://trendio.free.nf/api/getProductSize.php");
      const data = response.data; // Ensure API returns an array
  
      // Process sizes: Split comma-separated values into individual sizes
      const formattedSizes = data.map((item) =>
        item.ProductSize.includes(",") ? item.ProductSize.split(",").map(s => s.trim()) : [item.ProductSize]
      ).flat();
  
      setProductSize(formattedSizes);
    } catch (error) {
      console.error("Error fetching sizes:", error);
    }
  };
  
  const fetchProductTypes = async () => {
    const response = await axios.get('http://trendio.free.nf/api/getProductType.php');
    setProductTypes(response.data);
    // console.log(response.data)
  };

  useEffect(() => {
    fetchProductTypes();
  }, []);
  useEffect(()=>{
    fetchProductSize();
  },[])
  // Handle single image selection per input field
  const handleImageChange = (index, file) => {
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  // Handle checkbox selection for sizes
  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSize((prevSizes) =>
      prevSizes.includes(value) ? prevSizes.filter((s) => s !== value) : [...prevSizes, value]
    );
  };
  useEffect(() => {
    if (ProductId) {
      fetchProductData(ProductId);
    }
  }, [ProductId]);

  const fetchProductData = async (id) => {
    try {
      const response = await axios.get(
        `http://trendio.free.nf/api/GetsingleProductforupdateapi.php?ProductId=${id}`
      );
      const product = response.data;
      console.log(response.data)
      console.log(product.Size)
      if (product && !product.error) {
        setName(product.ProductName);
        setPrice(product.ProductPrice);
        setDescription(product.ProductDescription);
        setType(product.producttype);
        setGender(product.Gender);
        setOldImage([product.Image1, product.image2, product.image3, product.image4]);
        if (product.Size) {
          setSize(typeof product.Size === 'string' ? product.Size.split(',').map(s => s.trim()) : product.Size);
        }
      } else {
        setError('Failed to load product data');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Failed to load product data');
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Product name is required';
    // if (!price || isNaN(price)) errors.price = 'Valid price is required';
    if (!price || isNaN(price) || price <= 0) errors.price = 'Price must be a positive number';
    if (!description) errors.description = 'Description is required';
    if (!type) errors.type = 'Product type is required';
    if (!gender) errors.gender = 'Please select gender';
    if (size.length === 0) errors.size = 'Please select at least one size';
    if (images.every((img) => img === null)) errors.images = 'Please upload at least one image';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addProduct = async () => {
    if (!validateForm()) return;
  
    const formData = new FormData();
    formData.append('SellerId', SellerId);
    formData.append('ProductName', name);
    formData.append('ProductPrice', price);
    formData.append('producttype', type);
    formData.append('Size', size.join(','));
    formData.append('Gender', gender);
    formData.append('ProductDescription', description);
  
    let imagesUploaded = false;
    images.forEach((image, index) => {
      if (image) {
        formData.append(`ProductImage[]`, image);
        console.log(image.name)
        imagesUploaded = true;
      }
    });
  
    if (!imagesUploaded) {
      setError('No product images uploaded. Please select at least one image.');
      return;
    }
  
    // Log formData contents
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      const response = await axios.post(
        'http://trendio.free.nf/api/ProductApi.php',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
  
      if (response.data.Product === 'true') {
        navigate('/seller/Manageproduct');
      } 
      else if(response.data.Product ==='false'){
        setError(response.data.error);
      }
      else {
        setError('There is something wrong');
      }
    } catch (error) {
      console.error('API Response:', error);
      setError('An error occurred. Please try again.');
    }
  };
  const updateProduct = async () => {
    // console.log("Hello")
        validateForm();
    const formData = new FormData();
    formData.append('ProductId', ProductId);
    formData.append('SellerId', SellerId);
    formData.append('ProductName', name);
    formData.append('ProductPrice', price);
    formData.append('producttype', type);
    formData.append('Size', size.join(','));
    formData.append('Gender', gender);
    formData.append('ProductDescription', description);
    
    images.forEach((image, index) => {
      if (image) {
        formData.append(`ProductImage[]`, image);
      }
    });
    try {
      const response = await axios.post(
        'http://trendio.free.nf/api/UpdatePrdouctapi.php',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
  
      console.log("Update Response:", response.data);
  
      if (response.data.Product === 'true') {
        navigate('/seller/Manageproduct');
      } else {
        setError('Update failed.');
      }
    } catch (error) {
      console.error('Update Error:', error);
      setError('An error occurred.');
    }
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (ProductId) {
  //     updateProduct();
  //   } else {
  //     addProduct();
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, ProductId:", ProductId);
    if (ProductId) {
      updateProduct();
      console.log("Calling updateProduct()");

    } else {
      console.log("Calling addProduct()");
      addProduct();
    }
  };
  
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{ProductId ? 'Edit' : 'Add'} Product</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">{ProductId ? 'Edit' : 'Add'} Product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h4 className="card-header">{ProductId ? 'Edit' : 'Add'} Product</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="form-group">
              <label>Product Type</label>
              <select
                className={`form-control ${fieldErrors.type ? 'is-invalid' : ''}`}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Select Product Type</option>
                {productTypes.map((type) => (
                  <option key={type.ProductTypeId } value={type.TypeName }>
                {type.TypeName}
                </option>
                ))}
              </select>
              {fieldErrors.type && <div className="invalid-feedback">{fieldErrors.type}</div>}
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input
                className={`form-control ${fieldErrors.name ? 'is-invalid' : ''}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
              />
              {fieldErrors.name && <div className="invalid-feedback">{fieldErrors.name}</div>}
            </div>

            
              <div className="form-group">
                <label>Product Images</label>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="mb-2">
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(index, e.target.files[0])}
                    />
                    
                    {images[index] && (
                      <img
                        src={URL.createObjectURL(images[index])}
                        alt={`Preview ${index + 1}`}
                        className="mt-2"
                        style={{ width: '100px', height: '100px' }}
                      />
                    )}
                    
                    {oldImage[index] && !images[index] && (
                      <div>
                        <img
                          src={`http://trendio.free.nf/api/Images/${oldImage[index]}`}
                          alt={`Old Product ${index + 1}`}
                          style={{ width: '100px', height: '100px' }}
                        />
                        <p>Current Image</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="form-group">
  <label>Product Price</label>
  <input
    className={`form-control ${fieldErrors.price ? 'is-invalid' : ''}`}
    type="number"
    value={price}
    onChange={(e) => {
      const value = e.target.value;
      if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 100000)) {
        setPrice(value);
      }
    }}
    placeholder="Enter product price"
    min="0"
    max="100000" // Upper limit of 100,000
  />
  {fieldErrors.price && <div className="invalid-feedback">{fieldErrors.price}</div>}
</div>
            {/* <div className="form-group">
              <label>Price</label>
              <input
                className={`form-control ${fieldErrors.price ? 'is-invalid' : ''}`}
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                max="100000"
              />
              {fieldErrors.price && <div className="invalid-feedback">{fieldErrors.price}</div>}
            </div> */}
            <div className="form-group">
               <label>Gender</label>
               <div>
                 <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
                 <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female
               </div>
               {fieldErrors.gender && <div className="text-danger">{fieldErrors.gender}</div>}
             </div>

             <div className="form-group">
             <div className='row'>
             <label>Size: </label>
               {/* {productSzie.map((sizeOption) => (
                 <div key={sizeOption} className="form-check m-2">
                   <input
                     type="checkbox"
                     value={sizeOption}
                     checked={size.includes(sizeOption)}
                     onChange={handleSizeChange}
                     
                     className="form-check-input"
                   />
                   <label className="form-check-label">{sizeOption}</label>
                 </div>
               ))} */}
               {/* {productSize.map((sizeOption)  => (
                console.log('helo',sizeOption),
                <label key={sizeOption}>

                <input
      type="checkbox"
      value={sizeOption}
      checked={size.includes(sizeOption)}
      onChange={handleSizeChange}
    />
    {sizeOption}
  </label>
))} */}
{/* {productSize.map((sizeOption) => (
  <div key={sizeOption.ProductSizeId} className="form-check m-2">
    <input
      type="checkbox"
      value={sizeOption.ProductSize}
      checked={size.includes(sizeOption.ProductSize)}
      onChange={handleSizeChange}
      className="form-check-input"
    />
    <label className="form-check-label">{sizeOption.ProductSize}</label>
  </div>
))} */}
{productSize.map((sizes, index) => (
  <div key={index} className='form-check m-1'>
    <input
      type="checkbox"
      value={sizes}
      checked={size.includes(sizes)}
      onChange={handleSizeChange}
    />
    <label>{sizes}</label>
  </div>
))}


               {fieldErrors.size && <div className="text-danger">{fieldErrors.size}</div>}
             </div>
               
             </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className={`form-control ${fieldErrors.description ? 'is-invalid' : ''}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
              ></textarea>
              {fieldErrors.description && <div className="invalid-feedback">{fieldErrors.description}</div>}
            </div>
            <button type="submit" className="btn btn-primary">
              {ProductId ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
