import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserGraduate} from 'react-icons/fa'
import {FaLinux} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
{/* Câu lệnh className={activeNav === '#' ? 'active' : ''} sử dụng toán tử ba ngôi ? : (Toán tử ba ngôi ? : trong JavaScript (cũng được gọi là toán tử điều kiện) 
là một cách viết ngắn gọn để thực hiện điều kiện if/else. 
Cú pháp của toán tử ba ngôi như sau:

condition ? value1 : value2

Trong đó, condition là điều kiện cần kiểm tra. Nếu điều kiện đúng (true), toán tử trả về giá trị value1, nếu sai (false), toán tử trả về giá trị value2.

Ví dụ, cú pháp sau kiểm tra nếu biến x lớn hơn 0 thì gán giá trị cho biến y bằng 1, nếu không thì gán giá trị cho y bằng 0:

const y = x > 0 ? 1 : 0;

Cú pháp này có thể giúp rút ngắn code so với cách viết truyền thống sử dụng câu lệnh if/else.) để kiểm tra giá trị của biến activeNav. Nếu biến activeNav bằng '#',
thì nó sẽ thêm class active vào thẻ a đó, nếu không thì không có class nào được thêm vào thẻ đó. Tức là nếu liên kết đang được chọn (nghĩa là giá trị của biến activeNav bằng '#'),
thì thêm class active vào thẻ a, ngược lại thì không có class nào được thêm vào.Class active được sử dụng để đánh dấu liên kết hiện tại được chọn và có thể tùy chỉnh bằng CSS để thể hiện trạng thái của liên kết đó. */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaLinux/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav