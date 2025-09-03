import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';
import { userAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import ButtonPreloader from '../../../component/ButtonPreloader';
import { h2 } from 'framer-motion/client';
import { FiUploadCloud } from 'react-icons/fi';


interface tagInterface {
"id": number,
"tagName": string
}
interface categoryInterface {
"id": number,
"categoryName": string
}
interface sizeInterface {
"id": number,
"sizeName": string
}

 type SubProduct = {
  productImage : File | null;
  productPrice : number;
  discountPrice : number;
  productColor : string;
  productSize : string;
  availableStockUnlimited : string;
  availableQty : number | null;
};

type tagType = {
    tagName  : string; 
}

function AddProduct() {
    const {baseUrl, token} = userAuth();
    const[tag, setTag] = useState<tagInterface[]>([]);
    const[tagged, setTagged] = useState<tagType[]>([]);
    const[category, setCategory] = useState<categoryInterface[]>([]);
    const[size, setSize] = useState<tagInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const[categoryId, setCategoryId] = useState<number>(0);
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [productColor, setProductColor] = useState<string>('');
     const [productSize, setProductSize] = useState<string>('');
    const [productImage, setProductImage] = useState<File | null>(null);
    const [availableStockUnlimited, setAvailableStockUnlimited] = useState<boolean>(false);
    const [availableQty, setAvailableQty] = useState<number>(0);
    // ==================================================
    const [colorImage, setColorImage] = useState<string>('');
    const [subProductSize, setSubProductSize] = useState<string>('');
    const [sizePrice, setSizePrice] = useState<number>(0);
    const [stock, setStock] = useState<string>('');
    const [color, setColor] = useState<string>('');
    // ==============================================


  const [isActive, setIsActive] = useState(false);

    const [subProducts, setSubProducts] = useState<SubProduct[]>([
    {   productImage : null,
        productPrice : 0,
        discountPrice : 0,
        productColor : '',
        productSize : '',
        availableStockUnlimited : '',
        availableQty : 0
    }
    ]);

   


  const handleToggle = () => {
    setIsActive(!isActive);
  };

   const availableFunction = (data: string) =>{
         setStock(data);
        if(data === "unlimited"){
          setAvailableStockUnlimited(true);
        }else{
            setAvailableStockUnlimited(false);
        }
     }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProductImage(file);
  };



 const handleProduct =  async() => {
    setLoading(true);
    if (!productImage) {
        toast.error("No product image");
        setLoading(false);
        return;
    }
        const formdata = new FormData();
        formdata.append("productName",  productName);
        formdata.append("productDescription",  productDescription);
        formdata.append("productImage", productImage);
        formdata.append("productPrice", price.toString());
        formdata.append("discountPrice", discount.toString());
        formdata.append("productColor", productColor);
        formdata.append("productSize", productSize);
        formdata.append("categoryId", "1");
        formdata.append("availableStockUnlimited", availableStockUnlimited ? "1" : "0");
        if(availableQty){
            formdata.append("availableQty", availableQty.toString());
        }
        if (subProducts.length > 0) {
            subProducts.forEach((product, index) => {
            formdata.append(`products[${index}][productPrice]`, product.productPrice.toString());
            formdata.append(`products[${index}][discountPrice]`, product.discountPrice.toString());
            formdata.append(`products[${index}][productColor]`, product.productColor);
            formdata.append(`products[${index}][productSize]`, product.productSize);
            formdata.append(`products[${index}][availableStockUnlimited]`, product.availableStockUnlimited ? '1' : '0');

            if (product.availableQty) {
                formdata.append(`products[${index}][availableQty]`, product.availableQty.toString());
            }

            if (product.productImage) {
                formdata.append(`products[${index}][productImage]`, product.productImage);
            }
            });
        }

        if(tagged.length > 0){
            tagged.forEach((tag, index) => {
              formdata.append(`tag[${index}][tagName]`, tag.tagName);
             });
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };
        try {
            const response = await fetch(`${baseUrl}/product`, requestOptions); 
            if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
            }
            const result = await response.json();    
                setLoading(false); 
                toast.success("Data Upload Successfully");       
        } catch (error) {
            setLoading(false); 
        }
      
  }

   useEffect(() => {
          handleTags()
          handleCategory()
          handleSize()
        }, []);

  const handleTags = async () => {

            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/product-tag`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();  
                   setTag(result);
                   setLoading(false);
              } catch (error) {
                  
              }
    
  }

  const handleCategory = async () => {
            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/product-category`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json(); 
                   setCategory(result);
                   setLoading(false);
              } catch (error) {
                  
              }
    


  }

  const handleSize = async () => {

            setLoading(true);
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", token);
              const requestOptions: RequestInit = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
              };
              try {
                  const response = await fetch(`${baseUrl}/product-category`, requestOptions);
                  if (!response.ok) {
                  const errorResponse = await response.json();
                  throw new Error(errorResponse.message);
                  }
                  const result = await response.json();  
                   setSize(result);
                   setLoading(false);
              } catch (error) {
                  
              }
    


  }

const handleAddSubProduct = () => {
    setSubProducts([...subProducts, { 
        productImage : null,
        productPrice : 0,
        discountPrice : 0,
        productColor : '',
        productSize : '',
        availableStockUnlimited : '',
        availableQty : 0

    }]);
  };

const handleTagged = (tagName: string) => {
  setTagged([...tagged, { tagName }]);
};

const handleSelectedCategory = (data : number) => {
    setCategoryId(data);
    console.log(data);
    
}

const handleSubProductChange = <K extends keyof SubProduct>(
    index: number,
    field: K,
    value: SubProduct[K]
  ) => {
    const updated = [...subProducts];
    updated[index][field] = value;
    setSubProducts(updated);
  };

const handleSubFileChange =  (index: number, file: File | null) => {
    console.log(index);
    
  const updated = [...subProducts];
  updated[index].productImage = file;
  setSubProducts(updated);
};


  return (
    <div>
      <h2 className='add-product-title'>Add Product</h2>

      <div className="product-form-con">

        {/* Product Info */}
        <div className="product-form-top flex justification-between">
          <div className="admin-prd-form">
            <div className="admin-prod-title">Information</div>

            <div className="admin-input">
              <label>Product Name</label>
              <input name="productName" type="text" value={productName} onChange={(e) => setProductName(e.target.value) } placeholder="Enter Product Name" />
            </div>

            <div className="admin-input">
              <label>Product Description</label>
              <textarea name="description" value={productDescription} onChange={(e) => setProductDescription(e.target.value) } placeholder="Product Description" />
            </div>

            <div className="admin-input">
              <label>Product Color</label>
              <input value={productColor} onChange={(e) => setProductColor(e.target.value) } placeholder="Product Color" />
            </div>

            <div className="admin-input">
              <label>Product Size</label>
              <input value={productSize} onChange={(e) => setProductSize(e.target.value) } placeholder="Product Size" />
            </div>

          </div>

          {/* Categories */}
          <div className="prod-category">
            <div className="admin-prod-title">Categories</div>
                
                {
                    loading ? (
                    <ButtonPreloader/>
                    ) : (

                       category.map((value, index)=>(
                        <div className="prod-cat-item flex-center gap-10" >
                        <input 
                            type="checkbox"
                            checked={categoryId === value.id} 
                            onChange={()=>handleSelectedCategory(value.id)}
                        />
                        <p>{value.categoryName}</p>
                        </div>
                    )) 

                    )
                    
                }
            <div className="create-new">Create New</div>
          </div>
        </div>

        {/* Image & Tags */}
        <div className="product-form-top flex justification-between">

          <div className="admin-prd-form">
            <div className="admin-prod-title">Product Image</div>
            <div className="uploadWrapper">
              <label htmlFor="file-input">Add Files</label>
              <input id="file-input" type="file" onChange={handleFileChange} />
              <p>or drag and drop files</p>
            </div>
          </div>

          <div className="prod-category">
            <div className="admin-prod-title">Tags</div>
            <div className="admin-input">
              <label>Add Tags</label>
              <input
                type="text"
                placeholder="Enter Tag Name"
                
              />
            </div>
            <div className="addTags flex-center gap-10">
              {
              tag.map((tag, index) => (
                <div key={index} className="addTag flex-center gap-10" onClick={() => handleTagged(tag.tagName)}>
                  <p>{tag.tagName}</p>
                  <RxCross2  />
                </div>
              ))
              }
            </div>
            <div className="create-new">Create New</div>
          </div>
        </div>
        <div className="previewImage">
                {productImage && (
                <img
                src={URL.createObjectURL(productImage)}
                alt="Preview"
                style={{ width: '150px', height: 'auto', marginTop: '10px' }}
                />
                )}
        </div>

        {/* Pricing */}
        <div className="product-form-top flex justification-between">
          <div className="admin-prd-form">
            <div className="admin-prod-title">Price</div>
            <div className="admin-flex-input flex-center gap-10">
              <div className="admin-input">
                <label>Product Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} placeholder="Enter Price" />
              </div>
              <div className="admin-input">
                <label>Discount Price</label>
                <input  type="number" value={discount} onChange={(e) => setDiscount(parseInt(e.target.value))} placeholder="Enter Discount" />
              </div>
            </div>

            <div className="admin-flex-input flex-center gap-10">
              <div className="admin-input">
                <label>Available Stock</label>
                <select value={stock} onChange={(e) => availableFunction(e.target.value) }>
                  <option value="">Available stock</option>
                  <option value="unlimited">Unlimited</option>
                  <option value="custom">Custom</option>
                </select>
              </div>



              <div className="admin-input">
                <label>Available Quantity</label>
               <input  type="number" value={availableQty} onChange={(e) => setAvailableQty(parseInt(e.target.value))}  />
              </div>
            </div>

          </div>
        </div>

        {/* Variants */}
        <div className="product-form-top flex justification-between">
          <div className="admin-prd-form">

            <div className="admin-prod-title">Different Option</div>

                <div className="switch-con-flex flex-center gap-10">
                  <div className="radio-group">
                        <label className="toggle-switch">
                            <input type="checkbox" checked={isActive} onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>
                    </div>  <p>This product has multiple options</p>
                </div>
                {
                  isActive && (

                        subProducts.map((subProduct, index) => (
                        
                        <div key={index} className="sub-product">
                            <h2>product {index + 1}</h2>  
                                <div className="admin-flex-input flex-center gap-10">

                                <div className="admin-input">
                                <label>Color</label>
                                <input
                                type="text"
                                value={subProduct.productColor}
                                onChange={(e) => handleSubProductChange(index, 'productColor', e.target.value)}
                                placeholder="Enter Color"
                                />
                                </div>

                            <div className="admin-input color-image">
                                <p>Color Image</p>
                            <label htmlFor={`file-color-input-${index}`} > <FiUploadCloud /> Upload Color Image</label>
                            <input id={`file-color-input-${index}`} type="file" onChange={(e) => handleSubFileChange(index, e.target.files?.[0] || null)} 
                            />
                            </div>
                                </div>

                            <div className="ColorPreview">
                                {subProduct.productImage && (
                                <img
                                src={URL.createObjectURL(subProduct.productImage)}
                                alt="Preview"
                                style={{ width: '100px', height: '100px', marginTop: '10px' }}
                                />
                                )}
                            </div>

                                <div className="admin-flex-input flex-center gap-10">

                                    <div className="admin-input">
                                    <label>Size</label>
                                    <select
                                    value={subProduct.productSize}
                                    onChange={(e) => handleSubProductChange(index, 'productSize', e.target.value)}
                                    >
                                    <option value="">Size</option>
                                    <option value="x">X</option>
                                    <option value="md">MD</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                    </select>
                                    </div>

                                    <div className="admin-input">
                                    <label>Price</label>
                                    <input
                                    type="number"
                                    value={subProduct.productPrice}
                                    onChange={(e) => handleSubProductChange(index, 'productPrice', parseFloat(e.target.value))}
                                    placeholder="Price"
                                    />
                                    </div>
                                </div>

                                <div className="admin-flex-input flex-center gap-10">

                                    <div className="admin-input">
                                    <label>Discount Price</label>
                                    <input
                                    type="number"
                                    value={subProduct.discountPrice}
                                    onChange={(e) => handleSubProductChange(index, 'discountPrice', parseFloat(e.target.value))}
                                    placeholder="Price"
                                    />
                                    </div>

                                    <div className="admin-input">
                                    <label>Available stock</label>
                                    <select 
                                    value= {subProduct.availableStockUnlimited}
                                    onChange={(e) => handleSubProductChange(index, 'availableStockUnlimited', e.target.value)}
                                    >
                                           <option value="">Available stock</option>
                                            <option value="1">Unlimited</option>
                                            <option value="0">Custom</option>
                                    </select>
                                    
                                    </div>

                                </div>
                        </div>
                        ))
                  )  
                }
           <div className="div" onClick={handleAddSubProduct}> add more </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="btn-wrapper">
           {
            loading ? (
                <div className="admin-input">
                    <div className='inActive'><ButtonPreloader/></div>
                </div>
            ) : (
          <div className="admin-input">
            <div className="btn" onClick={handleProduct}>Submit</div>
          </div> 
            )}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
