import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
//import * as AiIcons from "react-icons/ai";

export const SidebarDate = [
    {
      title:'Home',
      path:'/',
      icon:<AiIcons.AiFillHome/>,
      cName:'nav-text',
    },

    {
        title:'About us',
        path:'/aboutus',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
      },
      {
        title:'Offers',
        path:'/offers',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-text'
      },

      // {
      //   title:'Products',
      //   path:'/products',
      //   icon:<IoIcons.IoMdHelpCircle/>,
      //   cName:'nav-text'
      // },
      {
        title:'News',
        path:'/news',
        icon:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
      },
      {
        title:'Contact',
        path:'/contact',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
      }
     
]