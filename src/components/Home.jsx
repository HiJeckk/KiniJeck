import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faShoppingCart, faCog, faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import kapakImage from '../assets/Kapak.png';
import kuasImage from '../assets/Kuas.png';
import pakuImage from '../assets/Paku.png';
import hammerImage from '../assets/Hammer.png';
import emberImage from '../assets/ember.png';
import pompaImage from '../assets/Pompa.png';
import LinggisImage from '../assets/Linggis.png';
import KuasCatImage from '../assets/KuasCat.png';
import MeteranImage from '../assets/Meteran.png';
import SekopImage from '../assets/Sekop.png';

const HomePage = () => {
  const [liked, setLiked] = useState([false, false, false, false, false]);

  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mt-5 text-lg text-gray-800 ml-15">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black text-2xl ml-8 mr-2" />
          <span className="ml-6">Jalan. Peterongan Tengah Raya</span>
        </div>

        <div className="flex items-center ml-auto">
          <FontAwesomeIcon icon={faShoppingCart} className="text-black text-2xl mx-2" />
          <FontAwesomeIcon icon={faCog} className="text-black text-2xl mx-2" />
          <FontAwesomeIcon icon={faInfoCircle} className="text-black text-2xl" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 box-container-wrapper">
        <div className="w-[610px] h-[280px] bg-[#95553031] rounded-lg mx-auto my-5 p-4 shadow-md flex flex-row-reverse items-start relative">
          <img src={kapakImage} alt="New Collection" className="w-[275px] h-auto rounded-lg ml-4" />

          <div className="flex flex-col justify-start items-start w-full mr-4 mb-12">
            <h2 className="font-bold text-lg text-gray-800">New Collection</h2>
            <p className="font-bold text-xl text-gray-800">Recommendations, <br /> from our shop!</p>
          </div>

          <button className="absolute bottom-5 left-4 min-w-[150px] px-2 py-2 bg-[#955530] text-white rounded-lg text-sm font-bold cursor-pointer transition duration-300 hover:bg-[#7a4722]">Shop Now</button>
        </div>

        <div className="welcome-text mt-4 md:mt-0">
          <p className="text-2xl text-gray-800 font-bold" style={{ marginTop: '10px', marginLeft: '-65px' }}>Hallo, User!</p>
          <p style={{ marginTop: '10px', marginLeft: '-65px' }}>Selamat Datang di Website UMKM</p>
          <p style={{ marginTop: '10px', marginLeft: '-65px' }}>“KIOS MINI”</p>

          <div className="category-title text-2xl font-bold text-gray-800 mt-5" style={{ marginLeft: '-65px' }}>Category</div>

          <div className="flex justify-center gap-5 mt-3 -mt-2 category-container">
            <div className="w-[80px] h-[75px] bg-[#955530] rounded-full flex justify-center items-center text-white font-bold text-sm" style={{ marginRight: '30px' }}>
              <img src={kuasImage} alt="Image A" className="w-12 h-12" />
            </div>
            <div className="w-[80px] h-[75px] bg-[#955530] rounded-full flex justify-center items-center text-white font-bold text-sm" style={{ marginRight: '30px' }}>
              <img src={hammerImage} alt="Image B" className="w-12 h-12" />
            </div>
            <div className="w-[80px] h-[75px] bg-[#955530] rounded-full flex justify-center items-center text-white font-bold text-sm" style={{ marginRight: '30px' }}>
              <img src={pakuImage} alt="Image C" className="w-12 h-12" />
            </div>
            <div className="w-[80px] h-[75px] bg-[#955530] rounded-full flex justify-center items-center text-white font-bold text-sm">
              <img src={emberImage} alt="Image D" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 h-[2px] bg-black mx-auto mb-2"></div>
      <div className="w-1/4 h-[2px] bg-black mx-auto mb-5"></div>
      <div className="flex items-center justify-between mb-5 mt-10">
        <div className="product-text text-lg font-bold text-left">Product Kini</div>
        <div className="all-newest-popular text-lg font-bold text-right">All Newest Popular</div>
      </div>

      <div className="boxes-wrapper flex flex-row justify-between gap-3 mt-5">
        {Array(5).fill().map((_, index) => (
          <div className="box-container-like relative bg-[#f4f4f4] rounded-lg p-1 shadow-md w-1/6">
            <FontAwesomeIcon
              icon={faHeart}
              className={`absolute top-1 right-1 text-lg cursor-pointer text-gray-400 like-button ${liked[index] ? 'liked' : ''}`}
              onClick={() => handleLikeClick(index)}
            />
            <img src={kapakImage} alt={`Box ${index + 1}`} className="box-image w-full h-auto rounded-lg mb-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
