import React from 'react';
import { FaUserAlt,FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import moment from 'moment';

const User = (props) => {
    // console.log(props.user)
    const {
        name:{
            title,
            first,
            last
        },
        location: {
            street:{
                number,
                name
            },
            city,
            state,
            country,
            postcode,
            coordinates: {
                latitude,
                longitude
            },
            timezone: {
                offset,
                description
            }
        },
        email,
        login: {
            username,
        },
        dob: {
            date,
            age
        },
        phone,
        picture: {
            large
        }   
    } = props.user;
    return (
        <div className='bg-gray-600 text-gray-100 px-20 py-10 w-8/12 mx-auto my-6 rounded'>
            <img src={large} alt={first} className='block mx-auto rounded-full' />
            <div className='text-center'>
                <h3 className='text-2xl font-bold my-3'>{title}. {first} {last}</h3>
                <p><span className='font-bold'>Date of birth: </span>{moment(`${date}`).format('MMMM Do YYYY')}</p>
                <p>{age} Years</p>
                <div className='w-10 h-1 bg-black mx-auto my-6'></div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='flex items-center my-3'><AiOutlineMail className='mr-2 text-xl'/> {email}</p>
                    <p className='flex items-center my-3'><FaUserAlt className='mr-2 text-xl'/> {username}</p>
                    <p className='flex items-center my-3'><FaPhone className='mr-2 text-xl'/> {phone}</p>
                </div>
                <div>
                    <ul>
                        <li className='my-3'><span className='font-bold mr-4'>Street: </span>{number},{name}</li>
                        <li className='my-3'><span className='font-bold mr-4'>Country: </span>{country}</li>
                        <li className='my-3'><span className='font-bold mr-4'>City: </span>{city}</li>
                        <li className='my-3'><span className='font-bold mr-4'>State: </span>{state}</li>
                        <li className='my-3'><span className='font-bold mr-4'>Postal Code: </span>{postcode}</li>
                        <li className='my-3'><span className='font-bold mr-4'>Latitude: </span>{latitude}</li>
                        <li className='my-3'><span className='font-bold mr-4'>Longitude: </span>{longitude}</li>
                        <li className='my-3'>{offset},{description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;