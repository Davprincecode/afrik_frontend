import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { userAuth } from '../../context/AuthContext';
import ButtonPreloader from '../../../component/ButtonPreloader';

function AddCourse() {
 
  const [title, setTitle] = useState<string>('');
 const [description, setDescription] = useState<string>('');
const [coursePrice, setCoursePrice] = useState<number>(0);
const [courseDiscountPrice, setCourseDiscountPrice] = useState<number>(0);
const [startDate, setStartDate] = useState<string>('');
const [endDate, setEndDate] = useState<string>('');

const [earlyCoursePrice, setEarlyCoursePrice] = useState<number>(0);
// const [earlyCourseDiscountPrice, setEarlyCourseDiscountPrice] = useState<number>(0);
const [earlyStartDate, setEarlyStartDate] = useState<string>('');
const [earlyEndDate, setEarlyEndDate] = useState<string>('');
const [loading, setLoading] =  useState<boolean>(false);
const {baseUrl, token} = userAuth();

const [courseType, setCourseType] = useState<string>('');
const [productImage, setProductImage] = useState<File | null>(null);

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
           formdata.append("courseTitle", title);
            formdata.append("courseDescription", description);
            formdata.append("courseImage", productImage);
            formdata.append("coursePrice", coursePrice.toString());
            formdata.append("discountPrice", courseDiscountPrice.toString());
            formdata.append("startDate", startDate);
            formdata.append("endDate", endDate);
            formdata.append("earlyBirdPrice", earlyCoursePrice.toString());
            formdata.append("earlyBirdStartDate", earlyStartDate);
            formdata.append("earlyBirdEndDate", earlyEndDate);
            formdata.append("courseType", courseType);


          const myHeaders = new Headers();
          myHeaders.append("Authorization", token);
          const requestOptions: RequestInit = {
              method: "POST",
              headers: myHeaders,
              body: formdata,
              redirect: "follow"
          };
          try {
              const response = await fetch(`${baseUrl}/course`, requestOptions); 
             
              if (!response.ok) {
              const errorResponse = await response.json();
              throw new Error(errorResponse.message);
              }
              const result = await response.json();    
              setLoading(false); 
              setTitle('');
              setDescription('');
              setProductImage(null);
              setCoursePrice(0);
              setCourseDiscountPrice(0);
              setStartDate('');
              setEndDate('');
              setEarlyCoursePrice(0);
              setEarlyStartDate('');
              setEarlyEndDate('');
              setCourseType('');
              toast.success(result.message);       
          } catch (error) {
              setLoading(false); 
          }
        
    }

  return (
    <div>
      <h2 className='add-product-title'>Add Course</h2>

      <div className="product-form-con">

     
        <div className="product-form-top flex justification-between">
          <div className="admin-prd-form">
            <div className="admin-prod-title">Information</div>

            <div className="admin-input">
              <label>Title</label>
              <input name="productName" type="text" placeholder="Enter Product Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

                  <div className="admin-input">
                  <label>Description</label>
                  <input
                    name="description"
                    type="text"
                    placeholder="Enter course description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  </div>

                    {/* <div className="admin-prd-form"> */}
                    <div className="admin-prod-title">image</div>
                    <div className="uploadWrapper">
                    <label htmlFor="file-input">Add Files</label>
                    <input id="file-input" type="file" onChange={handleFileChange} />
                    <p>or drag and drop files</p>
                    </div>
                    {/* </div> */}

                      <div className="previewImage">
                      {productImage && (
                      <img
                      src={URL.createObjectURL(productImage)}
                      alt="Preview"
                      style={{ width: '150px', height: 'auto', marginTop: '10px' }}
                      />
                      )}
                      </div>


                   <div className="admin-prd-form">
                     <div className="admin-prod-title">Price</div>

                    <div className="admin-flex-input flex-center gap-10">
                          <div className="admin-input">
                          <label>Course Price</label>
                          <input
                            name="coursePrice"
                            type="number"
                            placeholder="Enter course price"
                            value={coursePrice}
                            onChange={(e) => setCoursePrice(parseInt(e.target.value))}
                          />
                          </div>

                          <div className="admin-input">
                          <label>Discount Price</label>
                          <input
                            name="courseDiscountPrice"
                            type="number"
                            placeholder="Enter discount price"
                            value={courseDiscountPrice}
                            onChange={(e) => setCourseDiscountPrice(parseInt(e.target.value))}
                          />
                          </div>
                    </div>
                      <div className="admin-flex-input flex-center gap-10">
                                <div className="admin-input">
                                <label>Start Date</label>
                                <input
                                name="startDate"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                />
                                </div>

                                <div className="admin-input">
                                <label>End Date</label>
                                <input
                                name="endDate"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                />
                                </div>
                      </div>
                   </div>


                   <div className="admin-prd-form">
                     <div className="admin-prod-title">Early Bird <span>(optional)</span></div>

                    <div className="admin-flex-input flex-center gap-10">
                          <div className="admin-input">
                          <label>Course Price</label>
                          <input
                            name="coursePrice"
                            type="text"
                            placeholder="Enter course price"
                            value={earlyCoursePrice}
                            onChange={(e) => setEarlyCoursePrice(parseInt(e.target.value))}
                          />
                          </div>

                         
                    </div>
                      <div className="admin-flex-input flex-center gap-10">
                                <div className="admin-input">
                                <label>Start Date</label>
                                <input
                                name="startDate"
                                type="date"
                                value={earlyStartDate}
                                onChange={(e) => setEarlyStartDate(e.target.value)}
                                />
                                </div>

                                <div className="admin-input">
                                <label>End Date</label>
                                <input
                                name="endDate"
                                type="date"
                                value={earlyEndDate}
                                onChange={(e) => setEarlyEndDate(e.target.value)}
                                />
                                </div>
                      </div>
                   </div>
                 

                
               

<div className="admin-input ">
  <div className="admin-prod-title">Type</div>

  <div className="course-type-options flex-center  gap-10">

    <label>

      <input
        type="checkbox"
        name="courseType"
        value="physical"
        checked={courseType === 'physical'}
        onChange={(e) => setCourseType(e.target.value)}
      />

    Physical

    </label>

    <label>
      <input
        type="checkbox"
        name="courseType"
        value="online"
        checked={courseType === 'online'}
        onChange={(e) => setCourseType(e.target.value)}
      />
      Online
    </label>

    <label>
      <input
        type="checkbox"
        name="courseType"
        value="hybrid"
        checked={courseType === 'hybrid'}
        onChange={(e) => setCourseType(e.target.value)}
      />
      Hybrid
    </label>

    <label>
      <input
        type="checkbox"
        name="courseType"
        value="book"
        checked={courseType === 'book'}
        onChange={(e) => setCourseType(e.target.value)}
      />
      <p>Book/Doc/PDF</p>
    </label>

    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="checkbox"
        name="courseType"
        value="video"
        checked={courseType === 'video'}
        onChange={(e) => setCourseType(e.target.value)}
      />
     <span>Pre-Recorded Video</span>
    </label>
  </div>
</div>

        {
            loading ? (
                <div className="admin-input">
                    <div className='inActive'><ButtonPreloader/></div>
                </div>
            ) : (
              title !== '' && description !== '' && productImage !== null && coursePrice > 0 && courseDiscountPrice> 0 && startDate !== '' && endDate !== '' && courseType !== ''  ? (
                            <div className="admin-input">
                              <div className="btn" onClick={handleProduct}>Submit</div>
                            </div> 
              ) : (
                      <div className="admin-input inActive">
                        <div className="btn inActive">Submit</div>
                      </div> 
              )
          
        )}

            </div>
        </div>

        </div>



    </div>
  )
}

export default AddCourse