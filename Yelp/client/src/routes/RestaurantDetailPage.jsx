import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRating from '../components/StarRating';


const RestaurantDetailPage = () => {
  const {id} = useParams ()
 // const {selectedRestaurant, setSelectedRestaurant} = useContext (RestaurantsContext);
  const [selectedRestaurant, setSelectedRestaurant] = useState ()
 console.log(selectedRestaurant);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await RestaurantFinder.get(`/${id}`);
          console.log(response);
          setSelectedRestaurant(response.data.data);
        } catch(err) {
          console.log(err);
      }
    };
    fetchData();
// eslint-disable-next-line
  },[]);
      return (
<div>
        {selectedRestaurant && (
          <>
          <h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>   {/* can not read name */}
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating}/> {/* can not read average rating */}
              <span className="text-warning ml-1">
                {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"} {/* can not read count */}
          </span>
      </div>
        <div className="mt-3">
          <Reviews reviews={selectedRestaurant.reviews} />
        </div>
        <AddReview/>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;