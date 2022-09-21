import React from 'react';

const User = (props) => {
    // console.log(props.user)
    const {
        gender,
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
            uuid,
            username,
            password,
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
        <div className='bg-gray-200 px-20 py-10 w-1/2 mx-auto mt-6'>
            <img src={large} alt={first} className='block mx-auto' />
            <div className='text-center'>
                <h3 className='text-2xl font-bold my-3'>{title}. {first} {last}</h3>
                <p>{date}</p>
                <p>{age} Years</p>
            </div>
            <div className='w-10 h-1 bg-black mx-auto mt-6'></div>
        </div>
    );
};

export default User;