import React from "react"
import { FaGift } from 'react-icons/fa'
import { FcElectronics, FcGoodDecision } from 'react-icons/fc'
import { AiFillCar, AiOutlineHome } from 'react-icons/ai'
import { BsFillMusicPlayerFill } from 'react-icons/bs'
import { BiHealth } from 'react-icons/bi'
import { GiPuppet } from 'react-icons/gi'
import { MdToys } from 'react-icons/md'

const Categories = () => {
  const data = [
    {
      cateImg: <FcGoodDecision />,
      cateName: "Fashion",
    },
    {
      cateImg: <FcElectronics />,
      cateName: "Electronic",
    },
    {
      cateImg: <AiFillCar />,
      cateName: "Cars",
    },
    {
      cateImg: <AiOutlineHome />,
      cateName: "Home & Garden",
    },
    {
      cateImg: <FaGift />,
      cateName: "Gifts",
    },
    {
      cateImg: <BsFillMusicPlayerFill />,
      cateName: "Music",
    },
    {
      cateImg: <BiHealth />,
      cateName: "Health & Beauty",
    },
    {
      cateImg: <GiPuppet />,
      cateName: "Pets",
    },
    {
      cateImg: <MdToys />,
      cateName: "Baby Toys",
    },
    {
      cateImg: <MdToys />,
      cateName: "Groceries",
    },
    {
      cateImg: <MdToys />,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} style={{alignItems: 'center'}}>
              <p>{value.cateImg}</p>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories