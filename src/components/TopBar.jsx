// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
import React from "react";
import{GiAnglerFish} from 'react-icons/gi';
import {FcCalendar, FcPhone} from 'react-icons/fc';

const TopBar = () => {
     return(
         <div className="flex justify-between items-center px-4 py-2">
               <div className="flex items-center">
                    <GiAnglerFish size={30} className="text-[var(--color-logo)] mr-2"/>
                    <h1 className="text-xl font-bold text-gray-700">ปลาหางนกยูงสมุทปราการ</h1>
                </div>
                <div className="flex">
                    <div className="hidden md:flex items-center px-6">
                         <FcCalendar size={20} className="mr-2"/>
                         <p className="text-sm text-gray-700">เวลาทำการ 9AM-5AM</p>
                    </div>
                    <div className="hidden md:flex items-center px-6">
                         <FcPhone size={20} className="mr-2"/> 
                         <p className="text-sm text-gray-700">เบอร์โทรศัพท์ 08-888-8888</p>
                    </div>
                    <button>สมัครสมาชิก</button>
                </div>
         </div>
     )
}
export default TopBar