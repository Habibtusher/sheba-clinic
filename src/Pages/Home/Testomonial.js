import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testomonial = () => {
    const reviews =[
        {
            _id:1,
            name:"test",
            location:"California",
            img:people1,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
        },
        {
            _id:2,
            name:"test 1 ",
            location:"California",
            img:people2,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
        },
        {
            _id:3,
            name:"test 2",
            location:"California",
            img:people3,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between' >
                <div> 
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h4 className='text-4xl '>What Our Patients Says</h4>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='place-items-center grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {reviews.map((review) => <Review data={review} key={review._id}/>) }
            </div>
        </section>
    );
};

export default Testomonial;