import React from 'react';
import { useState } from 'react';
import {
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import MuncCat from './MuncCat';

export default function CatCards() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  let cats = ['munc', 'mcoo', 'ragd', 'sphy', 'siam']
  // function shuffleCats(cats){
  //   let newCats = cats.slice();
  //   for (let i = newCats.length - 1; i >= 0; i--){
  //     let index = Math.floor(Math.random() * cats.length);
  //     [newCats[i], newCats[index]] = [newCats[index], newCats[i]];
  //   }
  //   return newCats;
  // }
  // let newCats = shuffleCats(cats);
  const catsData = [
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]},
    {breed: cats[Math.floor(Math.random() * 5)]}
  ]

  const filteredData = catsData.filter(cat => {
    if (selectedFilter === 'all') {
      return true; // Show all items
    } else {
      return cat.breed === selectedFilter;
    }
  });
  
  function getCatName(Cat){
    if (Cat === 'munc'){
      return 'MunchKin';
    }
    else if (Cat === 'mcoo'){
      return 'Maine Coon';
    }
    else if (Cat === 'ragd'){
      return 'RagDoll';
    }
    else if (Cat === 'sphy'){
      return 'Sphynx';
    }
    else if (Cat === 'siam'){
      return 'Siamese'
    }
    return 'invalid'
  }
  function getCatDetails(Cat){
    if (Cat === 'munc'){
      return 'The Munchkin is an outgoing cat who enjoys being handled. She has lots of energy and is faster and more agile than she looks. The shortness of their legs does not seem to interfere with their running and leaping abilities.';
    }
    else if (Cat === 'mcoo'){
      return 'They are known for their size and luxurious long coat Maine Coons are considered a gentle giant. The good-natured and affable Maine Coon adapts well to many lifestyles and personalities.';
    }
    else if (Cat === 'ragd'){
      return 'Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance.';
    }
    else if (Cat === 'sphy'){
      return 'The Sphynx is an intelligent, inquisitive, extremely friendly people-oriented breed. Sphynx commonly greet their owners  at the front door, with obvious excitement and happiness.';
    }
    else if (Cat === 'siam'){
      return 'While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated.'
    }
    return 'invalid'
  }
  // function getCard(catBreedIndex){
  //   return(
  //     <MDBCol>
  //       <MDBCard>
  //         <MuncCat breed={Cats[catBreedIndex]}/>
  //         <MDBCardBody>
  //           <MDBCardTitle>Breed: {getCatName(Cats[catBreedIndex])}</MDBCardTitle>
  //           <MDBCardText>Details: {getCatDetails(Cats[catBreedIndex])}</MDBCardText>
  //           <MDBBtn href='#'>Adopt me!</MDBBtn>
  //         </MDBCardBody>
  //       </MDBCard>
  //     </MDBCol>
  //   )
  // }
  return (
    <div>
      <div>
        <label htmlFor="filterDropdown">Filter By:</label>
        <select
          id="filterDropdown"
          onChange={(e) => setSelectedFilter(e.target.value)}
          value={selectedFilter}
        >
          <option value="all">All</option>
          <option value="munc">MunchKin</option>
          <option value="mcoo">Maine Coon</option>
          <option value="ragd">RagDoll</option>
          <option value="sphy">Sphynx</option>
          <option value="siam">Siamese</option>
        </select>
      </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 p-3'>
        {filteredData.map((cat, index) => (
            <MDBCol key={index}>
              <MDBCard>
                <MuncCat breed={cat.breed}/>
                <MDBCardBody>
                  <MDBCardTitle>Breed: {getCatName(cat.breed)}</MDBCardTitle>
                  <MDBCardText>Details: {getCatDetails(cat.breed)}</MDBCardText>
                  <MDBBtn href='#'>Adopt me!</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </div>
    
  );
}