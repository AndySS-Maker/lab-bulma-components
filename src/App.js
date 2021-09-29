import React from 'react';

import Navbar from './navbar/Navbar';
import '../src/navbar/Navbar.css';
import FormField from './formfield/FormField';
import '../src/formfield/FormField.css'
import CoolButton from './coolbutton/CoolButton';

const App = () => {
  return <div>
    < Navbar />
    < FormField label='Name' type='text' placeholder='Andy'/>
    < FormField label='Email' type='email' placeholder='andy@todomundo.com'/>

    < CoolButton isSmall  isDanger title='Button 1' />
    < CoolButton title='Button 2' />
  </div>
};

export default App;
