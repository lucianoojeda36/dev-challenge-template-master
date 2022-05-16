import React from 'react';
import './paginated.scss'
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";



const Paginated = () => {
  const number = [1,2,3,4]
  return (
    <>
      <footer className='container_paginated'>
       <button className='button_paginated'><BsCaretLeft/></button><button className='button_paginated'>1</button><button className='button_paginated'>2</button><button className='button_paginated'>3</button><button className='button_paginated'>4</button><button className='button_paginated'><BsCaretRight/></button>
      </footer>
    </>
  );
};

export default Paginated
