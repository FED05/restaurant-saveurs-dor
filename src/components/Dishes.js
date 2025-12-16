import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img/img1.jpg"

const Dishes = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Our Dishes</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title="Tasty Dish" price="290.66 "/>
        <DishesCard img={img1} title="Tasty Dish" price="190.06"/>
        <DishesCard img={img1} title="Tasty Dish" price="290.66"/>
        <DishesCard img={img1} title="Tasty Dish" price="290.66"/>
        <DishesCard img={img1} title="Tasty Dish" price="290.66"/>
      </div>
    </div>
  )
}

export default Dishes
