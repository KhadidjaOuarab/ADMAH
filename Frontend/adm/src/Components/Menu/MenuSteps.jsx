import React from 'react'
import { Steps } from 'primereact/steps';
function MenuSteps() {
    const items = [
        {label: 'Personal'},
        {label: 'Seat'},
        {label: 'Payment'},
        {label: 'Confirmation'}
    ];
  return (
    <div>
      <Steps model={items} />
    </div>
  )
}

export default MenuSteps
